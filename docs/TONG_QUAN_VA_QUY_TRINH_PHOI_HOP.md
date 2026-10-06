# TỔNG QUAN DỰ ÁN & LỘ TRÌNH 4 TUẦN CHO NHÓM 2 THÀNH VIÊN
## ĐỀ TÀI: BTL-20 – ONBOARDAI – HÀNH TRÌNH HỘI NHẬP NHÂN SỰ MỚI
**Học phần:** Phát triển ứng dụng Web cơ bản – CSE122 (Bài tập lớn cuối kỳ)  
**Quy mô nhóm:** 2 sinh viên (**SV2** & **SV3 - Nhóm trưởng chủ chốt**)  
**Thời gian thực hiện:** 4 tuần (Gần 1 tháng)  
**Mục tiêu:** Xây dựng đồ án chất lượng cao, đầy đủ lát cắt dọc, UI/UX chỉn chu, 3 tính năng AI mô phỏng thực chất, lịch sử Git minh bạch và 11 video OBS đạt điểm tối đa.

---

## 1. MA TRẬN PHÂN CÔNG 12 MÀN HÌNH CHUẨN

| Mã MH | Tên màn hình | File HTML | Phân hệ | Người phụ trách | Tính năng AI | Mã Video OBS |
|:---:|:---|:---|:---:|:---:|:---:|:---:|
| **COM01** | Landing Page giới thiệu | `index.html` | Visitor | **SV3** | FAQ Bot mini | `SV3-01` |
| **COM02** | Đăng nhập & Chọn Role nhanh | `login.html` | Chung | **SV2** | - | `SV2-01` |
| **NH01** | Onboarding Dashboard | `newhire-onboarding-dashboard.html` | New Hire | **SV3** | - | `SV3-02` |
| **NH02** | Hành trình & Checklist | `newhire-checklist.html` | New Hire | **SV3** | - | `SV3-03` |
| **NH03** | Trợ lý Hỏi đáp Chính sách | `newhire-ai-help.html` | New Hire | **SV3** | **AI-1: Policy Q&A** | `SV3-04` |
| **MT01** | Danh sách Mentee | `mentor-mentee-list.html` | Mentor | **SV2** | - | `SV2-02` |
| **MT02** | Phiếu Check-in 1-on-1 | `mentor-checkin-note.html` | Mentor | **SV2** | - | `SV2-03` |
| **MT03** | Giao việc & Duyệt bài | `mentor-task-assignment.html` | Mentor | **SV2** | **AI-2: Checklist Suggest** | `SV2-04` |
| **COM03** | Hồ sơ cá nhân | `profile.html` | Chung | **SV2** | - | `SV2-05` |
| **HR01** | HR Dashboard Thống kê | `hr-dashboard.html` | HR | **SV3** | **AI-3: Risk Warning** | `SV3-05` |
| **HR03** | Thư viện Tài liệu Nội bộ | `hr-document-library.html` | HR | **SV3** | - | (Tích hợp) |
| **AD02** | Quản trị Tài khoản Users | `admin-user-management.html` | Admin | **SV3** | - | `SV3-06` |
| **COM04** | Trang thông báo lỗi 404 | `404.html` | Chung | **SV3** | - | (Tích hợp) |

---

## 2. LỘ TRÌNH TỔNG THỂ 4 TUẦN (DAY-TO-DAY MILESTONES)

### 🗓️ TUẦN 1: Nghiên cứu, Phân tích nghiệp vụ & Thiết kế Figma hoàn chỉnh
* **Mục tiêu:** Hoàn thiện bảng Screen Inventory, User Flows và thiết kế Figma (Desktop + Mobile) $\rightarrow$ **Trình Giảng viên duyệt**.
* **SV2:** 
  * Phân tích luồng nghiệp vụ của Mentor (tiếp nhận mentee, quy trình đánh giá 1-on-1, giao việc).
  * Vẽ bản phác thảo (Wireframe & Mockup) các màn hình Mentor và Login trên Figma.
  * Phác thảo cấu trúc JSON khởi tạo ban đầu cho 6 thực thể.
* **SV3:** 
  * Thiết lập Repo GitHub (`main`, `dev`) và bảng Trello Kanban.
  * Phân tích luồng New Hire và HR/Admin.
  * Thiết lập Design System trên Figma (Bảng màu, typography, button, card, modal).
  * Vẽ Mockup Figma cho các màn hình New Hire, HR Dashboard, Admin.
* 📌 **Mốc nghiệm thu Tuần 1 (Chủ nhật Tuần 1):** Báo cáo tiến độ Tuần 1 với Giảng viên, chốt link Figma và Bảng kiểm kê màn hình.

---

### 🗓️ TUẦN 2: Xây dựng Kiến trúc Kỹ thuật, CSS Tokens & Khung HTML/CSS 12 Màn hình
* **Mục tiêu:** 100% các màn hình hiển thị chuẩn giao diện tĩnh, responsive mượt mà từ Mobile đến Desktop.
* **SV2:** 
  * Viết hoàn chỉnh `assets/data/mock-data.json` với dữ liệu thực tế phong phú.
  * Viết module `js/api.js` (Engine LocalStorage CRUD) cung cấp các hàm dùng chung.
  * Dựng HTML Semantic & CSS Responsive cho `login.html`, `mentor-mentee-list.html`, `mentor-checkin-note.html`.
* **SV3:** 
  * Hoàn thiện `css/style.css` (CSS Variables, reset CSS, các component chung: Card, Button, Badge, Modal, Layout Sidebar/Header).
  * Dựng HTML & CSS cho `index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `hr-dashboard.html`, `admin-user-management.html`.
* 📌 **Mốc nghiệm thu Tuần 2 (Chủ nhật Tuần 2):** Toàn bộ 12 file HTML mở trên trình duyệt Chrome đều đẹp, không vỡ layout, co giãn mobile mượt. Merge nhánh vào `dev`.

---

### 🗓️ TUẦN 3: Lập trình DOM, CRUD LocalStorage & Hiện thực 3 Tính năng AI
* **Mục tiêu:** Hệ thống có dữ liệu sống động, chuyển đổi trạng thái thực chất, 3 tính năng AI hoạt động mượt mà.
* **SV2:**
  * Lập trình chức năng Đăng nhập lưu `currentUser` vào LocalStorage và chuyển trang theo role.
  * Tìm kiếm mentee realtime, lọc theo trạng thái.
  * Validate form Check-in 1-on-1, lưu lịch sử đánh giá vào LocalStorage.
  * **Hiện thực AI-2 (Checklist Personalizer):** Bấm chọn vị trí $\rightarrow$ AI sinh 5 task mẫu $\rightarrow$ Cho phép Mentor sửa/xóa $\rightarrow$ Lưu vào LocalStorage của Mentee.
* **SV3:**
  * Kết nối dữ liệu cho New Hire: Tích chọn task $\rightarrow$ Nhảy thanh % tiến độ realtime $\rightarrow$ Đổi màu trạng thái.
  * Tích hợp thư viện Chart.js cho HR Dashboard (2 biểu đồ động).
  * CRUD Thư viện tài liệu (Thêm tài liệu, Xóa tài liệu có confirm dialog).
  * **Hiện thực AI-1 (Policy Q&A):** Chatbot hỏi đáp chính sách có hiệu ứng gõ/loading, hiển thị thẻ trích nguồn sách/văn bản.
  * **Hiện thực AI-3 (Progress Risk Warning):** Thuật toán tự động quét nhân sự trễ hạn, giải thích lý do nghẽn và có nút gửi cảnh báo.
* 📌 **Mốc nghiệm thu Tuần 3 (Chủ nhật Tuần 3):** Hoàn thành 100% tính năng logic, kiểm tra Console sạch 0 lỗi đỏ.

---

### 🗓️ TUẦN 4: Kiểm thử Tích hợp, Quay Video OBS, Hoàn thiện Báo cáo & Diễn tập
* **Mục tiêu:** Đạt toàn diện Definition of Done (DoD), sẵn sàng bảo vệ đạt điểm tối đa.
* **Đầu tuần 4 (Thứ 2 - Thứ 3):**
  * Kiểm thử chéo 3 điểm chạm liên thông giữa SV2 và SV3 (Dữ liệu Mentor giao xuất hiện bên New Hire; Tài liệu HR tạo thì AI-1 của New Hire tìm thấy).
  * Tối ưu hóa UI/UX: Thêm thông báo Toast khi thao tác thành công, xử lý Empty State khi danh sách rỗng, kiểm tra độ tương phản màu sắc.
* **Giữa tuần 4 (Thứ 4 - Thứ 5):**
  * **Quay Video OBS (Bắt buộc):**
    * SV2 quay 5 video (`SV2-01` $\rightarrow$ `SV2-05`).
    * SV3 quay 6 video (`SV3-01` $\rightarrow$ `SV3-06`).
    * Mỗi video 2-3 phút, bật webcam có mặt góc màn hình, mic rõ, giải thích code và live edit trực tiếp 1 dòng code.
    * Tải video lên Google Drive (mở quyền công khai) hoặc YouTube Unlisted, dán link vào `README.md`.
* **Cuối tuần 4 (Thứ 6 - Chủ nhật):**
  * Hoàn thiện Báo cáo BTL file PDF (SV3 tổng hợp, SV2 viết phần dữ liệu & nghiệp vụ Mentor).
  * Hoàn thiện file `docs/ai-usage-report.md`.
  * Diễn tập thử thách Live Coding 5-10 phút khi giảng viên hỏi.
  * Nộp bài chính thức lên hệ thống LMS.

---

## 3. CHECKLIST ĐÁNH GIÁ TRƯỚC KHI NỘP BÀI (DEFINITION OF DONE)
- [ ] **Figma:** Có file Figma đầy đủ cả Desktop và Mobile, đã được duyệt.
- [ ] **Giao diện:** 12 màn hình chuẩn Responsive, không lỗi hiển thị trên Chrome.
- [ ] **Mã nguồn:** Không có lỗi console (0 Error), cấu trúc thư mục sạch sẽ, commit chuẩn format (`feat:`, `fix:`).
- [ ] **Dữ liệu & CRUD:** Sử dụng `LocalStorage` bền vững (F5 không mất dữ liệu).
- [ ] **3 Tính năng AI:** Chạy đủ chu trình 7 bước (Nhập $\rightarrow$ Loading $\rightarrow$ Kết quả $\rightarrow$ Giải thích $\rightarrow$ Kiểm soát).
- [ ] **Video OBS:** Đủ 11 video có webcam khuôn mặt sinh viên.
- [ ] **Bộ hồ sơ nộp bài:** Link GitHub (Public), Link Trello, File PDF Báo cáo, File AI Usage Report.
