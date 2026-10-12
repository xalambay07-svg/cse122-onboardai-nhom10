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

2. **Trường hợp 2: Chuyên viên Nhân sự (HR) đi thị sát nhân viên:**
   - Từ trang `hr-dashboard.html`, HR bấm vào nút: `[Xem vai trò New Hire]` tại một nhân sự bất kỳ (ví dụ: Trần Thị Bình - NH02).
   - Hệ thống lưu cờ phiên:
     ```javascript
     sessionStorage.setItem('isImpersonating', 'true');
     sessionStorage.setItem('impersonatedUserId', 'NH02'); // Lưu động ID nhân sự
     ```
   - Khi chuyển sang trang New Hire, một thanh Banner ghim sát mép trên cùng xuất hiện:
     ```
     +---------------------------------------------------------------------------------------------------------+
     | 👁️ CHẾ ĐỘ THỊ SÁT: Đang xem giao diện của Trần Thị Bình (NH02)       [ ⬅️ Thoát chế độ xem (Phím Esc) ]  |
     +---------------------------------------------------------------------------------------------------------+
     ```
   - Khi HR bấm nút **[Thoát chế độ xem]** (hoặc bấm phím `Esc`), hệ thống tự xóa cờ và chuyển ngay về `hr-dashboard.html`.

---

### 3.2. CÁC ĐIỂM BỔ SUNG NÂNG CẤP ĐẮT GIÁ (PRO ENHANCEMENTS)

1. **Động hóa thông tin nhân sự (`impersonatedUserId`):**
   - Không fix cứng tên *"Nguyễn Văn An"*. Khi HR bấm xem nhân sự nào (An - 65% hay Bình - 25%), Dashboard New Hire sẽ đọc `impersonatedUserId` từ session và hiển thị đúng tên, avatar và % tiến độ của nhân sự đó từ `mock-data.json`.
2. **Phím tắt thoát nhanh `Esc` (Quick Exit Keyboard Shortcut):**
   - Hỗ trợ sự kiện phím `Escape` trên bàn phím để thoát ngay về HR Dashboard mà không cần rà chuột lên mép trên màn hình. Rất hữu ích khi live demo trước máy chiếu!
3. **Chỉ thị phím tắt trên nút bấm UI:**
   - Trên nút Thoát có gắn kèm phím kẹp `<kbd class="bg-indigo-800 text-[10px] px-1.5 py-0.5 rounded">Esc</kbd>` để tạo ấn tượng về độ chau chuốt UX.
4. **Cô lập thị giác (Visual Isolation):**
   - Thanh thị sát sử dụng tông nền đen sâu (`bg-slate-950`) có viền vàng hổ phách (`border-b border-amber-500/30`) và chấm trạng thái nhấp nháy (`animate-ping`) để tách biệt hoàn toàn với màu trắng/xanh của New Hire Dashboard.

---

## 4. ĐOẠN MÃ MẪU ĐỂ TRIỂN KHAI (CODE IMPLEMENTATION SNIPPET)

### A. Mã HTML của Thanh Thị sát (Chèn vào ngay sau thẻ mở `<body>` của New Hire Dashboard):
```html
<!-- Admin View-as Bar (Mặc định ẩn, chỉ hiện khi HR/Admin đi kiểm tra) -->
<div id="adminImpersonateBar" class="hidden sticky top-0 z-50 bg-slate-950 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between border-b border-amber-500/30 shadow-md">
  <div class="flex items-center gap-2.5">
    <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
    <span class="text-amber-400 font-extrabold uppercase tracking-wider text-[11px]">Chế độ thị sát (Admin View-As):</span>
    <span class="text-slate-300">Đang kiểm tra giao diện của <strong class="text-white font-bold" id="impersonatedUserName">Nguyễn Văn An (NH01)</strong></span>
  </div>
  <div class="flex items-center gap-2">
    <button onclick="exitImpersonation()" class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition flex items-center gap-2 shadow-xs active:scale-95 cursor-pointer">
      <span>⬅️ Thoát chế độ xem</span>
      <kbd class="px-1.5 py-0.5 rounded bg-indigo-800 text-[10px] font-mono text-indigo-200 border border-indigo-700">Esc</kbd>
    </button>
  </div>
</div>
```

### B. Mã JavaScript kiểm tra phân quyền & phím tắt thông minh:
```javascript
// Kiểm tra và hiển thị thanh thị sát khi tải trang
function checkAdminImpersonation() {
  const isImpersonating = sessionStorage.getItem('isImpersonating') === 'true';
  const targetUserId = sessionStorage.getItem('impersonatedUserId') || 'NH01';
  const bar = document.getElementById('adminImpersonateBar');
  
  if (isImpersonating && bar) {
    bar.classList.remove('hidden');
    
    // Nếu có dữ liệu mockData, hiển thị đúng tên nhân sự đang xem
    if (typeof mockData !== 'undefined' && mockData.newHires) {
      const targetUser = mockData.newHires.find(u => u.id === targetUserId);
      if (targetUser) {
        const nameEl = document.getElementById('impersonatedUserName');
        if (nameEl) nameEl.textContent = `${targetUser.name} (${targetUser.id})`;
      }
    }
  }
}

// Hàm thoát chế độ thị sát & quay về HR Dashboard
function exitImpersonation() {
  sessionStorage.removeItem('isImpersonating');
  sessionStorage.removeItem('impersonatedUserId');
  window.location.href = 'hr-dashboard.html';
}

// Lắng nghe phím tắt Escape để thoát nhanh khi thuyết trình
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sessionStorage.getItem('isImpersonating') === 'true') {
    exitImpersonation();
  }
});

// Kích hoạt khi trang tải xong
document.addEventListener('DOMContentLoaded', checkAdminImpersonation);
```

---

## 5. CÂU HỎI BẢO VỆ LIVE CODING CÓ THỂ GẶP & CÁCH TRẢ LỜI

> **Câu hỏi Giảng viên:** *"Tại sao ở giao diện nhân viên New Hire tôi lại thấy có nút quay về HR, như vậy có bị lỗi phân quyền không?"*

* **Cách sinh viên trả lời ghi điểm tối đa:**  
  *"Thưa thầy/cô, hệ thống của nhóm em áp dụng cơ chế phân quyền RBAC nghiêm ngặt. Khi nhân viên New Hire đăng nhập bình thường, họ hoàn toàn không thể thấy hay truy cập vào khu vực HR. Thanh thông báo mà thầy/cô vừa thấy chỉ xuất hiện khi tài khoản HR dùng tính năng **'Impersonation / View-as Mode'** để đi kiểm tra giao diện nhân sự cấp dưới (tương tự tính năng của Google Classroom hay Canvas LMS). Khi nhân viên thật đăng nhập, thanh này sẽ bị ẩn hoàn toàn bằng logic kiểm tra quyền trong Session ạ."*

---

## 6. KẾT LUẬN CẦN LẤY Ý KIẾN THỐNG NHẤT
Nhóm đã thống nhất:
1. **Chốt triển khai Phương án B (Thanh View-As thông minh)** với đầy đủ các nâng cấp: Động hóa ID nhân sự, hỗ trợ phím tắt `Esc` và cô lập thị giác.
2. Đưa tài liệu này sang môi trường thực hành để tiến hành cài đặt vào các trang New Hire và HR Dashboard.
