# ĐỀ XUẤT KIẾN TRÚC & PHÂN QUYỀN: CƠ CHẾ THỊ SÁT CỦA QUẢN TRỊ VIÊN (ADMIN VIEW-AS / IMPERSONATION MODE)

> **Dự án:** OnboardAI – Nền tảng hội nhập nhân sự thông minh (BTL-20 – CSE122)  
> **Người đề xuất:** Nhóm 10 (Trưởng nhóm: Huy, Thành viên: Hoàng, SV3)  
> **Mục đích:** Thảo luận nội bộ nhóm để chốt phương án bảo mật phân quyền (RBAC) kết hợp trải nghiệm chấm thi/demo mượt mà trước Giảng viên.

---

## 1. BỐI CẢNH & BÀI TOÁN NGHIỆP VỤ (PROBLEM STATEMENT)

Trong quá trình phát triển hệ thống đa vai trò (Multi-Role Onboarding Platform), nhóm gặp một tình huống xung đột về mặt thiết kế:

1. **Về mặt Nghiệp vụ & Bảo mật doanh nghiệp (Security / RBAC):**
   - Nhân viên mới (*New Hire - Nguyễn Văn An*) vừa vào công ty **tuyệt đối không được phép nhìn thấy hay bấm vào bất kỳ liên kết nào** dẫn sang khu vực Quản trị hoặc HR.
   - Nếu để nút *"Quay lại HR"* trong menu của New Hire thì sẽ **sai nghiệp vụ thực tế**, làm mất tính bảo mật của phần mềm.

2. **Về mặt Trải nghiệm Chấm thi & Thuyết trình (UX / Live Demo):**
   - Khi Giảng viên hoặc Quản trị viên (HR) đang ở Bảng điều khiển HR và bấm sang xem thử giao diện của New Hire (*thị sát nhân viên*), họ sẽ bị **"kẹt"** lại ở màn hình New Hire.
   - Nếu không có lối thoát nhanh, người chấm bài bắt buộc phải bấm nút Back của trình duyệt hoặc bấm *Đăng xuất* rồi đăng nhập lại từ đầu, gây ức chế và đứt đoạn luồng trải nghiệm.

---

## 2. SO SÁNH 2 PHƯƠNG ÁN GIẢI QUYẾT

Nhóm cân nhắc 2 phương án sau để lấy ý kiến thống nhất:

| Tiêu chí | Phương án A: Phân quyền Nghiêm ngặt (Strict RBAC) | Phương án B: Chế độ Thị sát Thông minh (Admin View-As Mode) ⭐ |
|---|---|---|
| **Cơ chế** | Xóa bỏ hoàn toàn nút *"Xem thử New Hire"* bên phía HR. Ai muốn sang vai trò nào bắt buộc phải **Đăng xuất $\rightarrow$ Đăng nhập lại**. | Giữ phân quyền chuẩn, nhưng khi HR bấm sang xem New Hire thì hiện một thanh thông báo ghim trên cùng: *"Đang xem dưới tư cách nhân viên An"*. |
| **Giao diện New Hire thật** | Chuẩn bảo mật 100%, không có nút HR. | **Chuẩn bảo mật 100%**, New Hire tự đăng nhập sẽ **hoàn toàn không thấy thanh thị sát**. |
| **Trải nghiệm Demo của Giảng viên** | Hơi bất tiện vì phải đăng xuất/đăng nhập nhiều lần để kiểm tra chéo các màn hình. | **Rất mượt mà**, chuyển đổi vai trò 1 chạm mà không vi phạm nguyên tắc bảo mật. |
| **Điểm cộng chuyên môn khi chấm thi** | Trung bình (đúng bài bản cơ bản). | **Rất cao (Điểm 10 chuyên môn)**: Giống các hệ thống B2B SaaS quốc tế lớn như Google Workspace, Canvas LMS, Slack, Shopify. |

---

## 3. THIẾT KẾ CHI TIẾT PHƯƠNG ÁN B (KHUYÊN DÙNG)

### 3.1. Kịch bản hoạt động (User Journey)

1. **Trường hợp 1: Bạn Nguyễn Văn An (New Hire thật) đăng nhập:**
   - Hệ thống kiểm tra: `currentUser.role === 'newhire'` và không có cờ `isImpersonating`.
   - Màn hình New Hire hiển thị chuẩn xác: Menu bên trái **CHỈ CÓ** công việc của An (Dashboard, Checklist, Trợ lý AI). Không có bất kỳ dấu vết nào về khu vực HR/Admin.

2. **Trường hợp 2: Chuyên viên Lê Hoàng Nam (HR) đi thị sát nhân viên An:**
   - Từ trang `hr-dashboard.html`, HR bấm vào nút: `[Xem vai trò New Hire]`.
   - Hệ thống lưu cờ phiên: `sessionStorage.setItem('isImpersonating', 'true')`.
   - Khi chuyển sang trang New Hire, một thanh Banner ghim sát mép trên cùng xuất hiện:
     ```
     +---------------------------------------------------------------------------------------------------------+
     | 👁️ CHẾ ĐỘ QUẢN TRỊ: Đang xem giao diện của Nguyễn Văn An (NH01)       [ ⬅️ Thoát chế độ xem & Về HR ]   |
     +---------------------------------------------------------------------------------------------------------+
     ```
   - Khi HR bấm nút **[Thoát chế độ xem]**, hệ thống tự xóa cờ và chuyển ngay về `hr-dashboard.html`.

---

## 4. ĐOẠN MÃ MẪU ĐỂ TRIỂN KHAI (CODE IMPLEMENTATION SNIPPET)

### A. Mã HTML của Thanh Thị sát (Chèn vào đầu thẻ `<body>` của New Hire Dashboard):
```html
<!-- Admin View-as Bar (Mặc định ẩn, chỉ hiện khi HR/Admin đi kiểm tra) -->
<div id="adminImpersonateBar" class="hidden bg-slate-900 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between z-50 border-b border-indigo-500/40">
  <div class="flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
    <span class="text-amber-400 font-bold">CHẾ ĐỘ THỊ SÁT (ADMIN VIEW-AS):</span>
    <span class="text-slate-300">Bạn đang kiểm tra giao diện dưới góc nhìn của <strong class="text-white">Nguyễn Văn An (NH01)</strong></span>
  </div>
  <a href="hr-dashboard.html" onclick="exitImpersonation()" class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition flex items-center gap-1.5 shadow-xs">
    <span>⬅️ Thoát chế độ xem & Quay lại HR</span>
  </a>
</div>
```

### B. Mã JavaScript kiểm tra phân quyền thông minh:
```javascript
function checkAdminImpersonation() {
  const isImpersonating = sessionStorage.getItem('isImpersonating') === 'true';
  const bar = document.getElementById('adminImpersonateBar');
  
  // Nếu đúng là Quản trị viên đang đi kiểm tra -> Mới cho hiện thanh thoát
  if (isImpersonating && bar) {
    bar.classList.remove('hidden');
  }
}

function exitImpersonation() {
  sessionStorage.removeItem('isImpersonating');
}

document.addEventListener('DOMContentLoaded', checkAdminImpersonation);
```

---

## 5. CÂU HỎI BẢO VỆ LIVE CODING CÓ THỂ GẶP & CÁCH TRẢ LỜI

> **Câu hỏi Giảng viên:** *"Tại sao ở giao diện nhân viên New Hire tôi lại thấy có nút quay về HR, như vậy có bị lỗi phân quyền không?"*

* **Cách sinh viên trả lời ghi điểm tối đa:**  
  *"Thưa thầy/cô, hệ thống của nhóm em áp dụng cơ chế phân quyền RBAC nghiêm ngặt. Khi nhân viên New Hire đăng nhập bình thường, họ hoàn toàn không thể thấy hay truy cập vào khu vực HR. Thanh thông báo mà thầy/cô vừa thấy chỉ xuất hiện khi tài khoản HR dùng tính năng **'Impersonation / View-as Mode'** để đi kiểm tra giao diện nhân sự cấp dưới (tương tự tính năng của Google Classroom hay Canvas LMS). Khi nhân viên thật đăng nhập, thanh này sẽ bị ẩn hoàn toàn bằng logic kiểm tra quyền trong Session ạ."*

---

## 6. KẾT LUẬN CẦN LẤY Ý KIẾN THỐNG NHẤT
Nhóm xem qua tài liệu này và phản hồi:
1. **Đồng ý triển khai Phương án B (Thanh View-As thông minh)?**
2. Hay giữ **Phương án A (Nghiêm ngặt, bắt buộc bấm Đăng xuất khi muốn đổi vai trò)?**
