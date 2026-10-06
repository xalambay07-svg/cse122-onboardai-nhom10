# BẢN GIAO VIỆC CHI TIẾT: TRƯỞNG NHÓM (SV3 GÁNH PHẦN SV1)
## VAI TRÒ: NHÓM TRƯỞNG & CORE LEAD (PHÂN HỆ NHÂN SỰ MỚI + HR & ADMIN)
**Dự án:** OnboardAI – Hành trình hội nhập nhân sự mới (BTL-20 – CSE122)  
**Quy mô nhóm:** 2 sinh viên (Bạn & Bạn cùng nhóm)  
**Thời lượng thực hiện:** 4 tuần (Bài tập lớn cuối kỳ)  
**Mục tiêu cá nhân:** Hoàn thành trọn vẹn lát cắt dọc (Vertical Slice): UI Design System, 6 màn hình New Hire/HR/Admin, 2 tính năng AI (AI-1 & AI-3), quản trị Git/Trello và 6 video OBS.

---

## 1. DANH SÁCH 6 MÀN HÌNH BẠN PHỤ TRÁCH

| STT | Mã MH | Tên màn hình | Tệp HTML | Trạng thái hiện tại | Nhiệm vụ tiếp theo |
|:---:|:---:|:---|:---|:---:|:---|
| 1 | **COM01** | Landing Page giới thiệu | `index.html` | ✅ Đã có khung | Hoàn thiện thẩm mỹ |
| 2 | **NH01** | Onboarding Dashboard | `newhire-onboarding-dashboard.html` | ✅ **ĐÃ XONG** (M3 & Tailwind) | Commit & tạo PR |
| 3 | **NH02** | Hành trình & Checklist | `newhire-checklist.html` | ⏳ **CẦN LÀM TIẾP THEO** | Dựng checklist chi tiết |
| 4 | **NH03** | Trợ lý AI Hỏi đáp quy chế | `newhire-ai-help.html` | ⏳ Chờ làm sau NH02 | Hiện thực AI-1 (Policy Q&A) |
| 5 | **HR01** | Bảng điều khiển HR | `hr-dashboard.html` | ⏳ Tuần 3 | Biểu đồ Chart.js & AI-3 |
| 6 | **AD02** | Quản trị tài khoản | `admin-user-management.html` | ⏳ Tuần 3 | CRUD phân quyền Users |

---

## 2. VIỆC CẦN LÀM NGAY TIẾP THEO (BƯỚC ĐI CỤ THỂ)

### 👉 BƯỚC 1: LƯU LẠI THÀNH QUẢ MÀN HÌNH 1 (COMMIT LÊN GITHUB)
Bạn vừa hoàn thành màn hình Dashboard đầu tiên `newhire-onboarding-dashboard.html` theo chuẩn Material Design 3. Giờ cần ghi nhận thay đổi vào Git theo đúng cú pháp của Giảng viên:
```bash
git add .
git commit -m "feat: add responsive newhire onboarding dashboard with m3 design system"
git push -u origin feature/newhire-dashboard
```

---

### 👉 BƯỚC 2: BẮT TAY VÀO MÀN HÌNH TIẾP THEO: `newhire-checklist.html` (MÃ NH02)
Đây là màn hình quan trọng nhất của phân hệ Nhân sự mới:
* **Mục tiêu màn hình:**
  1. Hiển thị toàn bộ lộ trình nhiệm vụ 60 ngày theo từng chặng (Tab: *Tất cả*, *Tuần 1: Thủ tục & IT*, *Tháng 1: Hội nhập chuyên môn*).
  2. Mỗi nhiệm vụ có Checkbox đánh dấu hoàn thành, Tag danh mục màu sắc, Hạn chót và Nút *"Xem chi tiết / Nộp minh chứng"*.
  3. Khi tích chọn: Tự động cập nhật `% tiến độ` và đồng bộ ngay với Dashboard ở màn hình 1.
  4. Có Modal xem chi tiết nhiệm vụ và đính kèm link minh chứng (GitHub PR, link báo cáo).

---

### 👉 BƯỚC 3: MÀN HÌNH `newhire-ai-help.html` (TÍNH NĂNG AI-1)
* Xây dựng khung chat thông minh hỏi đáp nội quy.
* Khi người dùng gõ câu hỏi: AI hiển thị hiệu ứng Loading $\rightarrow$ Trả lời ngắn gọn $\rightarrow$ **Trích dẫn nguồn cụ thể** (Sổ tay nhân viên trang 15) $\rightarrow$ Có nút *Hữu ích / Sao chép*.
* Xử lý trường hợp không tìm thấy (Fallback UI).

---

## 3. LỘ TRÌNH 4 TUẦN CHI TIẾT CHO TRƯỞNG NHÓM

* **Tuần 1 (Hiện tại):** 
  * Hoàn thành 2 màn hình New Hire đầu tiên (`newhire-onboarding-dashboard.html` và `newhire-checklist.html`).
  * Kiểm tra tiến độ bạn cùng nhóm ở màn `login.html`.
* **Tuần 2:**
  * Xây dựng màn hình AI-1: `newhire-ai-help.html`.
  * Dựng khung màn hình HR Dashboard: `hr-dashboard.html`.
* **Tuần 3:**
  * Tích hợp thư viện **Chart.js** vẽ biểu đồ tiến độ nhân sự toàn công ty.
  * Hiện thực tính năng **AI-3: Progress Risk Warning** (Cảnh báo nhân sự trễ hạn).
  * Làm màn hình Quản trị người dùng: `admin-user-management.html`.
* **Tuần 4:**
  * Test tích hợp dữ liệu với bạn cùng nhóm.
  * Quay 6 video OBS thuyết minh và demo sản phẩm.
  * Viết file Báo cáo BTL (PDF) tổng hợp nộp bài.
