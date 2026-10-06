# BẢN GIAO VIỆC CHI TIẾT: SINH VIÊN 2 (SV2)
## VAI TRÒ: DATA ARCHITECTURE & MENTOR LEAD (PHÂN HỆ CỐ VẤN & XÁC THỰC)
**Dự án:** OnboardAI – Hành trình hội nhập nhân sự mới (BTL-20 – CSE122)  
**Quy mô nhóm:** 2 thành viên (SV2 và SV3)  
**Thời lượng thực hiện:** 7 ngày (Sprint cấp tốc)  
**Mục tiêu cá nhân:** Hoàn thành trọn vẹn lát cắt dọc (Vertical Slice): Kiến trúc Mock Data & LocalStorage API dùng chung, Cổng Đăng nhập (Auth & Session), 3 màn hình Mentor, Hồ sơ cá nhân, tính năng AI-2 (Checklist Personalizer) và 5 video OBS.

---

## 1. THÔNG TIN PHÂN CÔNG TỔNG QUAN
* **Phân hệ chính:** **Cố vấn / Quản lý trực tiếp (Mentor)** + Cổng Đăng nhập & Hồ sơ.
* **Danh sách màn hình phụ trách (5 màn):**
  1. `login.html` (Đăng nhập & Bộ chọn vai trò nhanh) - Mã: `COM02`
  2. `mentor-mentee-list.html` (Danh sách nhân sự mới cần kèm cặp) - Mã: `MT01`
  3. `mentor-checkin-note.html` (Phiếu ghi nhận đánh giá 1-on-1 định kỳ) - Mã: `MT02`
  4. `mentor-task-assignment.html` (Giao việc & Duyệt bài kèm AI) - Mã: `MT03`
  5. `profile.html` (Hồ sơ cá nhân & Đổi mật khẩu) - Mã: `COM03`
* **Trách nhiệm kỹ thuật chéo:**
  * Thiết kế cấu trúc CSDL Mock Data JSON (`assets/data/mock-data.json`) 6 thực thể (`newHires`, `tasks`, `documents`, `checkins`, `departments`, `users`).
  * Viết module xử lý dữ liệu chung `js/api.js` (Mô phỏng RESTful API qua `LocalStorage`).
  * Quản lý trạng thái phiên đăng nhập (Session Mock) lưu `currentUser` cho SV3 dùng.
* **Tính năng AI phụ trách:** **AI-2: Checklist Personalizer** (Gợi ý và sinh task tự động theo vị trí tuyển dụng).

---

## 2. TIMELINE & DEADLINE 7 NGÀY CHO SV2

| Thời gian | Công việc cần hoàn thành | Hạn chót (Deadline) | Sản phẩm bàn giao (Deliverables) |
|---|---|---|---|
| **Ngày 1 (Thứ Hai)** | Tạo `mock-data.json` đủ 6 thực thể. Viết xong `js/api.js` hỗ trợ CRUD LocalStorage. | 22:00 Ngày 1 | File `mock-data.json` và `api.js` đẩy lên `dev` |
| **Ngày 2 (Thứ Ba)** | Code HTML & CSS cho `login.html` và `mentor-mentee-list.html`. | 21:00 Ngày 2 | Form đăng nhập lưu session, danh sách mentee responsive |
| **Ngày 3 (Thứ Tư)** | Code HTML & CSS `mentor-checkin-note.html`. Viết JS submit form đánh giá 1-on-1. | 22:00 Ngày 3 | Form validate không để trống, lưu vào LocalStorage |
| **Ngày 4 (Thứ Năm)** | Code `mentor-task-assignment.html` & Hiện thực **AI-2: Checklist Personalizer**. | 22:00 Ngày 4 | Bấm nút AI sinh ra 5 task, cho phép sửa/xóa trước khi lưu |
| **Ngày 5 (Thứ Sáu)** | Code `profile.html`. Review chéo PR của SV3 trên nhánh `dev`. | 18:00 Ngày 5 | Nhánh `dev` sạch lỗi, gửi nội dung phần mình cho SV3 |
| **Ngày 6 (Thứ Bảy)** | **Quay 5 Video OBS có mặt khuôn mặt** cho 5 màn hình chính (`SV2-01` đến `SV2-05`). | 17:00 Ngày 6 | 5 file video MP4 upload lên Google Drive/YouTube |
| **Ngày 7 (Chủ Nhật)** | Diễn tập Live Coding 5-10 phút cùng SV3, hoàn thiện nộp bài. | 15:00 Ngày 7 | Sẵn sàng bảo vệ BTL |

---

## 3. HƯỚNG DẪN CÁCH LÀM TỪNG NHIỆM VỤ

### 📝 Nhiệm vụ 1: Thiết kế Mock Data JSON & Module Engine API (`js/api.js`)
* **Nhánh Git:** `feature/mock-data-api`
* **Cách làm chi tiết:**
  1. Tạo file `assets/data/mock-data.json` với dữ liệu khởi tạo phong phú (tối thiểu 5 nhân sự mới, 3 mentor, 15+ tasks, 6 tài liệu).
  2. Viết file `js/api.js` cung cấp object `API` toàn cục (`API.getAll()`, `API.getById()`, `API.create()`, `API.update()`, `API.delete()`). Khi khởi động ứng dụng, nếu `LocalStorage` chưa có dữ liệu thì nạp từ `mock-data.json`.

---

### 📝 Nhiệm vụ 2: Trang Đăng nhập & Chọn vai trò (`login.html`)
* **Nhánh Git:** `feature/auth-login`
* **Cách làm chi tiết:**
  * Gồm: Form Email + Mật khẩu + Nút Đăng nhập.
  * **Bộ chọn nhanh vai trò (Role Quick Selector):** Gồm 4 nút bấm: *[New Hire]*, *[Mentor]*, *[HR]*, *[Admin]*. Khi bấm vào vai trò nào, JS tự động điền email mẫu và khi đăng nhập sẽ lưu vào `localStorage.setItem('currentUser', JSON.stringify({ role: '...', name: '...', id: '...' }))` rồi chuyển thẳng tới màn hình tương ứng.

---

### 📝 Nhiệm vụ 3: Danh sách Mentee (`mentor-mentee-list.html`)
* **Nhánh Git:** `feature/mentor-mentee-list`
* **Cách làm chi tiết:**
  * Bảng danh sách nhân sự mới mình phụ trách (Avatar, Tên, Vị trí, Tiến độ %, Tình trạng: *Đúng hạn / Nguy cơ trễ hạn*, Nút: *Đánh giá / Giao việc*).
  * Ô tìm kiếm theo tên mentee realtime bằng sự kiện `input`.
  * Bộ lọc dropdown theo Trạng thái tiến độ.

---

### 📝 Nhiệm vụ 4: Phiếu Check-in 1-on-1 (`mentor-checkin-note.html`)
* **Nhánh Git:** `feature/mentor-checkin`
* **Cách làm chi tiết:**
  * Form đánh giá gồm: Ngày gặp, Giai đoạn (Ngày đầu / 7 ngày / 30 ngày / Thử việc), Đánh giá hòa nhập (1-5 sao), Ghi chú nhận xét (tối thiểu 10 ký tự).
  * Validation: Báo lỗi inline nếu để trống.
  * Lưu vào `checkins` trong `LocalStorage` và hiển thị ngay vào bảng lịch sử ở bên dưới.

---

### 📝 Nhiệm vụ 5: Giao việc & Hiện thực AI-2: Checklist Personalizer (`mentor-task-assignment.html`)
* **Nhánh Git:** `feature/ai-checklist-personalizer`
* **Chu trình 7 bước:**
  1. *Nhập:* Chọn Vị trí (VD: *Frontend Developer*, *Content Marketing*).
  2. *Bấm:* ✨ **"AI Gợi ý Checklist Chuyên môn"**.
  3. *Loading:* Hiển thị icon xoay và text *"AI đang phân tích khung năng lực..."* trong 800ms.
  4. *Kết quả:* Render ra 5 thẻ task mẫu phù hợp với vị trí đã chọn.
  5. *Giải thích:* Thẻ chú thích: *"💡 Danh sách được đề xuất dựa trên khung năng lực vị trí Frontend phòng Kỹ thuật."*
  6. *Kiểm soát:* Cho phép Mentor ✏️ Sửa tên task, 🗑️ Xóa task không thích, ➕ Thêm task thủ công.
  7. *Lưu:* Bấm *"Áp dụng cho Mentee"* $\rightarrow$ Lưu thẳng vào `tasks` của Mentee trong `LocalStorage`.

---

### 📝 Nhiệm vụ 6: Hồ sơ cá nhân (`profile.html`)
* **Nhánh Git:** `feature/profile`
* **Cách làm chi tiết:**
  * Xem/sửa thông tin cá nhân và Form đổi mật khẩu (có validate mật khẩu mới $\ge 6$ ký tự và xác nhận mật khẩu khớp nhau).

---

## 4. KỊCH BẢN QUAY 5 VIDEO OBS CHO SV2 (BẮT BUỘC)

* **Video 1 (`SV2-01-login-and-data-engine.mp4`):**
  * Giới thiệu vai trò Data Lead. Trình chiếu file `mock-data.json` và `js/api.js`.
  * Demo trang `login.html`: Bấm chọn nhanh vai trò Mentor, đăng nhập thành công và mở LocalStorage xem object `currentUser`.
* **Video 2 (`SV2-02-mentor-mentee-list.mp4`):**
  * Demo `mentor-mentee-list.html`: Test ô tìm kiếm mentee realtime, lọc dropdown trạng thái "Nguy cơ trễ hạn".
* **Video 3 (`SV2-03-mentor-checkin-note.mp4`):**
  * Mở form check-in note, cố tình để trống để xem validation lỗi màu đỏ, sau đó điền đầy đủ và submit thành công.
* **Video 4 (`SV2-04-ai-checklist-personalizer.mp4`):**
  * Demo tính năng **AI-2**: Chọn vị trí "Frontend Dev" $\rightarrow$ AI sinh 5 task $\rightarrow$ Xóa 1 task, sửa 1 task $\rightarrow$ Bấm Áp dụng $\rightarrow$ Kiểm tra LocalStorage thấy task mới được gán.
* **Video 5 (`SV2-05-profile-and-settings.mp4`):**
  * Demo trang `profile.html`: Cập nhật số điện thoại, đổi mật khẩu và kiểm tra validation.

---

## 5. KỊCH BẢN ỨNG PHÓ LIVE CODING 5 PHÚT
* **Tình huống 1: "Thêm 1 trường 'Địa điểm họp (Google Meet / Trực tiếp)' vào phiếu Check-in."**
  * *Cách làm:* Thêm thẻ `<select id="checkinLocation">` trong HTML, lấy giá trị trong JS đẩy vào object lưu trữ.
* **Tình huống 2: "Thêm bộ lọc theo Phòng ban vào danh sách Mentee."**
  * *Cách làm:* Thêm thẻ `<select id="filterDept">`, bắt sự kiện `change` và thêm điều kiện `item.department === selectedDept` trong hàm filter.
