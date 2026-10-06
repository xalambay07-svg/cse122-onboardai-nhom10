# CSE122 – BÀI TẬP LỚN FRONTEND (BTL-20)
# OnboardAI – Hành trình hội nhập nhân sự mới

> **Học phần:** PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN – CSE122  
> **Lớp:** [Tên Lớp của bạn, ví dụ: 64KTPM...]  
> **Nhóm thực hiện:** Nhóm [Số nhóm, ví dụ: Nhóm 05] (2 thành viên: SV2 & SV3)  
> **Loại sản phẩm:** Web Frontend Prototype (HTML5 Semantic, CSS3 Responsive, JavaScript DOM, LocalStorage Mock API & Mô phỏng Trải nghiệm AI)  
> **Bảng Kanban Trello:** [Link Trello của nhóm](https://trello.com/b/...)

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

## 📹 DANH SÁCH MINH CHỨNG VIDEO OBS (BẮT BUỘC THEO GUIDE 10)

> Mỗi giao diện độc lập được minh chứng bằng 1 video OBS có mặt sinh viên, thao tác trực tiếp trên mã nguồn và chạy thử trên trình duyệt.

| Mã Video | Màn hình / Tệp | Người quay | Nội dung demo | Link Video (Drive / YouTube) |
|:---:|:---|:---:|:---|:---:|
| `SV3-01` | `index.html` | SV3 | Landing Page, giới thiệu đề tài, điều hướng | [Xem Video](https://...) |
| `SV2-01` | `login.html` & `api.js` | SV2 | Đăng nhập chọn vai trò, khởi tạo LocalStorage DB | [Xem Video](https://...) |
| `SV3-02` | `newhire-onboarding-dashboard.html` | SV3 | Dashboard nhân sự mới, thanh tiến độ động % | [Xem Video](https://...) |
| `SV3-03` | `newhire-checklist.html` | SV3 | Tích chọn hoàn thành task, lưu state, empty state | [Xem Video](https://...) |
| `SV3-04` | `newhire-ai-help.html` | SV3 | **AI-1:** Hỏi đáp chính sách có trích nguồn & fallback | [Xem Video](https://...) |
| `SV2-02` | `mentor-mentee-list.html` | SV2 | Tìm kiếm mentee realtime, lọc dropdown trạng thái | [Xem Video](https://...) |
| `SV2-03` | `mentor-checkin-note.html` | SV2 | Tạo phiếu 1-on-1, validate form, lưu lịch sử | [Xem Video](https://...) |
| `SV2-04` | `mentor-task-assignment.html` | SV2 | **AI-2:** Gợi ý checklist theo vị trí, sửa/xóa trước khi lưu | [Xem Video](https://...) |
| `SV2-05` | `profile.html` | SV2 | Cập nhật hồ sơ cá nhân, đổi mật khẩu | [Xem Video](https://...) |
| `SV3-05` | `hr-dashboard.html` | SV3 | **AI-3:** Biểu đồ Chart.js & Cảnh báo nhân sự trễ hạn | [Xem Video](https://...) |
| `SV3-06` | `admin-user-management.html` | SV3 | Quản trị tài khoản, khóa/mở khóa user, trang 404 | [Xem Video](https://...) |

---

## 🌿 QUY CHUẨN GIT FLOW & COMMIT
* Nhánh `main`: Chỉ chứa bản phát hành sạch và ổn định.
* Nhánh `dev`: Nhánh tích hợp làm việc chung hằng ngày của cả nhóm.
* Nhánh tính năng: `feature/<tên-chức-năng>` (VD: `feature/mentor-mentee-list`, `feature/ai-policy-qa`).
* Cú pháp Commit chuẩn: `feat: ...`, `fix: ...`, `style: ...`, `docs: ...`, `refactor: ...`.
