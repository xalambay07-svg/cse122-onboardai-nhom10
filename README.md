# CSE122 – BÀI TẬP LỚN FRONTEND (BTL-20)
# OnboardAI – Hành trình hội nhập nhân sự mới

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Lớp:** [Tên Lớp của bạn, ví dụ: 64KTPM...]  
> **Nhóm thực hiện:** Nhóm [Số nhóm, ví dụ: Nhóm 05] (2 thành viên: SV2 & SV3)  
> **Loại sản phẩm:** Web Frontend Prototype (HTML5 Semantic, CSS3 Responsive, JavaScript DOM, LocalStorage Mock API & Mô phỏng Trải nghiệm AI)  
> **Bảng Kanban Trello:** [[CSE122 - BTL20] OnboardAI - Nhóm 10](https://trello.com/b/J0c8nZ2l) (Xem thêm [Tài liệu Quy trình Trello 4 Tuần](docs/QUY_TRINH_TRELLO_KANBAN.md))

---

## 👥 THÀNH VIÊN VÀ PHÂN CÔNG TRÁCH NHIỆM

| STT | Họ và tên | Mã sinh viên | Vai trò dự án | Phân hệ phụ trách chính | Tính năng AI phụ trách | Minh chứng OBS |
|:---:|:---|:---:|:---|:---|:---:|:---:|
| 1 | [Tên SV3] | [Mã SV3] | **Nhóm trưởng & Core Lead** | New Hire, HR & Admin (`index.html`, `newhire-*`, `hr-*`, `admin-*`) | **AI-1** (Policy Q&A)<br>**AI-3** (Risk Warning) | 6 Video (`SV3-01` $\rightarrow$ `SV3-06`) |
| 2 | [Tên SV2] | [Mã SV2] | **Data & Mentor Lead** | Mentor, Login & Profile (`login.html`, `mentor-*`, `profile.html`) | **AI-2** (Checklist Personalizer) | 5 Video (`SV2-01` $\rightarrow$ `SV2-05`) |

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
cse122-onboardai/
├── README.md                           # Giới thiệu dự án, phân công & link video OBS
├── .gitignore                          # Cấu hình bỏ qua file tạm
├── index.html                          # COM01: Landing Page giới thiệu giải pháp OnboardAI
├── login.html                          # COM02: Trang đăng nhập & Chọn vai trò nhanh (Role Selector)
├── profile.html                        # COM03: Hồ sơ cá nhân & Đổi mật khẩu
├── 404.html                            # COM04: Trang thông báo lỗi 404
├── newhire-onboarding-dashboard.html   # NH01: Bảng điều khiển nhân sự mới
├── newhire-checklist.html              # NH02: Hành trình hội nhập & Checklist việc cần làm
├── newhire-ai-help.html                # NH03: Trợ lý AI Hỏi đáp quy chế (AI-1: Policy Q&A)
├── mentor-mentee-list.html             # MT01: Danh sách Mentee cần kèm cặp
├── mentor-checkin-note.html            # MT02: Phiếu ghi nhận đánh giá 1-on-1 định kỳ
├── mentor-task-assignment.html         # MT03: Giao việc & AI Gợi ý checklist (AI-2: Checklist Personalizer)
├── hr-dashboard.html                   # HR01: HR Dashboard Thống kê (Chart.js & AI-3: Risk Warning)
├── hr-document-library.html            # HR03: Thư viện tài liệu nội bộ & Sổ tay nhân viên
├── admin-user-management.html          # AD02: Quản trị tài khoản & Phân quyền
├── docs/                               # Hồ sơ thiết kế & Kế hoạch chi tiết
│   ├── TONG_QUAN_VA_QUY_TRINH_PHOI_HOP.md
│   ├── KE_HOACH_SV2_DATA_MENTOR.md
│   ├── KE_HOACH_SV3_DEVOPS_HR_ADMIN.md
│   └── ai-usage-report.md              # Báo cáo minh bạch sử dụng AI (Mục 20 BTL)
├── assets/
│   ├── data/
│   │   └── mock-data.json              # CSDL Mock Data 6 thực thể (newHires, tasks, docs...)
│   └── images/                         # Ảnh minh họa, logo, avatar
├── css/
│   ├── style.css                       # CSS Design System (Tokens, Reset, Components)
│   └── responsive.css                  # Tinh chỉnh Responsive cho Mobile/Tablet
└── js/
    ├── api.js                          # Module Engine LocalStorage (Mô phỏng RESTful API)
    └── main.js                         # Xử lý tương tác giao diện chung (Sidebar, Toast, Modal)
```

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT & CHẠY DỰ ÁN

Dự án là ứng dụng Web Frontend thuần (Vanilla HTML/CSS/JS) kết hợp `LocalStorage` để mô phỏng cơ sở dữ liệu và API, không yêu cầu cài đặt backend hay máy chủ phức tạp.

### Cách chạy:
1. **Cách 1: Dùng VS Code Live Server (Khuyến nghị)**
   * Mở thư mục dự án bằng Visual Studio Code.
   * Cài đặt extension **Live Server** (Ritwick Dey).
   * Chuột phải vào file `index.html` chọn **Open with Live Server** (hoặc bấm `Go Live` ở góc dưới bên phải).
   * Ứng dụng chạy tại địa chỉ: `http://127.0.0.1:5500/index.html`.

2. **Cách 2: Mở trực tiếp bằng trình duyệt**
   * Nhấp đúp chuột vào file `index.html` để mở trực tiếp trên trình duyệt Google Chrome/Microsoft Edge.

---

## 📹 DANH SÁCH 03 VIDEO MINH CHỨNG OBS (BẮT BUỘC THEO TIÊU CHÍ ĐÁNH GIÁ MỤC 14)

> Dự án được minh chứng bằng **03 Video OBS** có mặt sinh viên (Webcam), giải thích cấu trúc mã nguồn, thao tác sửa code trực tiếp (Live Coding) trên VS Code và kiểm tra kết quả ngay trên trình duyệt.

| Mã Video | Phân hệ & Tệp trọng tâm | Thành viên | Nội dung giải thích code & Sửa trực tiếp (Live Coding) | Link Video (Drive / YouTube) |
|:---:|:---|:---:|:---|:---:|
| **`OBS-01`** | **Phân hệ Nhân viên mới & AI-1**<br>(`index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`) | **SV1** | Giải thích thuật toán AI gợi ý 8 Người đồng hành & Chat trực tiếp, tích chọn hoàn thành Checklist lưu `localStorage`, hỏi đáp trợ lý **AI-1** và sửa trực tiếp giao diện/logic trên code. | [Xem Video OBS 01](https://...) |
| **`OBS-02`** | **Core Data Engine, Phân hệ Mentor & AI-2**<br>(`js/api.js`, `assets/data/mock-data.json`, `login.html`, `mentor-mentee-list.html`, `profile.html`) | **SV2** | Giải thích kiến trúc `window.OnboardAPI` & `localStorage`, tìm kiếm/lọc Mentee, kiểm tra hợp lệ biểu mẫu (Form Validation), tính năng **AI-2 (Checklist Personalizer)** và sửa trực tiếp code. | [Xem Video OBS 02](https://...) |
| **`OBS-03`** | **Phân hệ HR, Quản trị viên (Admin) & AI-3**<br>(`hr-dashboard.html`, `admin-user-management.html`, Chế độ thị sát `View-As`) | **SV3** | Giải thích biểu đồ `Chart.js`, thuật toán cảnh báo sớm **AI-3 (HR Risk Radar)**, quản lý CRUD tài khoản, Chế độ thị sát đa người dùng (`NH01`..`NH06`, `MT01`..`MT08`) và sửa trực tiếp code. | [Xem Video OBS 03](https://...) |

---

## 🌿 QUY CHUẨN GIT FLOW & COMMIT
* Nhánh `main`: Chỉ chứa bản phát hành sạch và ổn định.
* Nhánh `dev`: Nhánh tích hợp làm việc chung hằng ngày của cả nhóm.
* Nhánh tính năng: `feature/<tên-chức-năng>` (VD: `feature/mentor-mentee-list`, `feature/ai-policy-qa`).
* Cú pháp Commit chuẩn: `feat: ...`, `fix: ...`, `style: ...`, `docs: ...`, `refactor: ...`.
