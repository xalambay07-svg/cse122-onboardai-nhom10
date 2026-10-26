# DANH SÁCH MINH CHỨNG 03 VIDEO OBS & LIÊN KẾT COMMIT (OBS EVIDENCE)

> **Học phần:** Phát triển Ứng dụng Web Cơ bản – CSE122  
> **Đề tài:** BTL-20 – **OnboardAI – Hành trình hội nhập nhân sự mới**  
> **Sinh viên thực hiện (SV1 – Trưởng nhóm):** **Nguyễn Gia Huy – MSV: `2551170897`**  
> **Thành viên phối hợp (SV2):** **Đào Viết Huy Hoàng – MSV: `2551170888`**  
> **Chuẩn biểu mẫu:** Phần 8 & Phụ lục D – Tài liệu hướng dẫn BTL CSE122

---

## 1. Bảng Tổng hợp 03 Video OBS Chính của SV1 – Nguyễn Gia Huy (`2551170897`)

| Mã Video | Thành viên thực hiện | Các Màn hình & Tính năng Demo + Live Coding trong Video | Thẻ Trello | Nhánh Git | Commit tiêu biểu | Link Video trực tiếp trên GitHub |
|:---:|:---:|:---|:---:|:---|:---:|:---|
| **`OBS-01`** | **SV1 – Nguyễn Gia Huy**<br>*(MSV: `2551170897`)* | • `index.html` (Landing Page Hero & 4 không gian RBAC)<br>• `newhire-onboarding-dashboard.html` (4 Huy hiệu, AI đề xuất 8 Mentor & Chat trực tiếp)<br>• **Live Coding:** Viết nút bấm Tailwind CSS & hàm `showQuickProgressSummary()` thống kê tiến độ từ `LocalStorage` | `T08`, `T09`, `T14`, `T21` | `huy/feature/newhire-checklist`<br>`feat/sv1-ui-newhire` | `33166a3`, `228fe05`, `2e48ef1` | [🎬 Xem `Video_OBS1_NguyenGiaHuy_2551170897.mp4`](https://github.com/xalambay07-svg/cse122-onboardai-nhom10/blob/main/docs/obs-videos/Video_OBS1_NguyenGiaHuy_2551170897.mp4) |
| **`OBS-02`** | **SV1 – Nguyễn Gia Huy**<br>*(MSV: `2551170897`)* | • `newhire-checklist.html` (Checklist 4 chặng, Tìm kiếm/Lọc, Empty State & Nộp minh chứng)<br>• `newhire-ai-help.html` (**AI-1: Policy Q&A**, Loading State, Trích dẫn nguồn & Chuyển tiếp HR)<br>• **Live Coding:** Bổ sung chủ đề `parking-card-policy` (*Đăng ký vé gửi xe hầm B1 & B2*) vào `KNOWLEDGE_BASE` của trợ lý AI-1 | `T09`, `T13`, `T15` | `huy/feature/newhire-checklist`<br>`feat/sv1-ui-newhire` | `e4d688f`, `3238c8c`, `2e48ef1` | [🎬 Xem `Video_OBS2_NguyenGiaHuy_2551170897.mp4`](https://github.com/xalambay07-svg/cse122-onboardai-nhom10/blob/main/docs/obs-videos/Video_OBS2_NguyenGiaHuy_2551170897.mp4) |
| **`OBS-03`** | **SV1 – Nguyễn Gia Huy**<br>*(MSV: `2551170897`)* | • `hr-dashboard.html` (4 KPI, Biểu đồ `Chart.js` & **AI-3: Risk Radar** Can thiệp 1-Click)<br>• `admin-user-management.html` (CRUD User, Ma trận RBAC, Audit Logs & Chế độ thị sát `View-As`)<br>• **Live Coding:** Viết quy tắc kiểm tra Form Validation nâng cao (Họ tên tối thiểu 2 từ, 5 ký tự) trong `saveUserForm()` | `T11`, `T18`, `T19`, `T22`, `T24` | `fix/sv3-data-sync-hr-admin`<br>`feat/sv3-hr-admin` | `3810ab0`, `65f858a`, `2e48ef1` | [🎬 Xem `Video_OBS3_NguyenGiaHuy_2551170897.mp4`](https://github.com/xalambay07-svg/cse122-onboardai-nhom10/blob/main/docs/obs-videos/Video_OBS3_NguyenGiaHuy_2551170897.mp4) |

---

## 2. Chi tiết Liên kết Video ↔ Commit ↔ Trello theo từng Màn hình (Theo Mẫu Phụ lục D)

### Màn hình 1: `index.html` (Trang chủ giới thiệu nền tảng OnboardAI)
```text
Màn hình  : index.html
Người làm : SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm)
Trello    : TASK-01 (T08)
Nhánh     : feat/sv1-ui-newhire
Commit    : 228fe05
Video     : docs/obs-videos/Video_OBS1_NguyenGiaHuy_2551170897.mp4
```

### Màn hình 2: `newhire-onboarding-dashboard.html` (Dashboard Nhân sự mới, Đề xuất 8 Mentor & Chat trực tiếp)
```text
Màn hình  : newhire-onboarding-dashboard.html
Người làm : SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm)
Trello    : TASK-02 (T09, T14, T21)
Nhánh     : huy/feature/newhire-checklist
Commit    : 2e48ef1
Video     : docs/obs-videos/Video_OBS1_NguyenGiaHuy_2551170897.mp4
```

### Màn hình 3: `newhire-checklist.html` (Hành trình hội nhập 4 giai đoạn & Nộp minh chứng hoàn thành)
```text
Màn hình  : newhire-checklist.html
Người làm : SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm)
Trello    : TASK-03 (T09, T13)
Nhánh     : huy/feature/newhire-checklist
Commit    : e4d688f
Video     : docs/obs-videos/Video_OBS2_NguyenGiaHuy_2551170897.mp4
```

### Màn hình 4: `newhire-ai-help.html` (Trợ lý AI-1 Hỏi đáp chính sách & Tìm kiếm ngữ nghĩa)
```text
Màn hình  : newhire-ai-help.html
Người làm : SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm)
Trello    : TASK-04 (T15)
Nhánh     : feat/sv1-ui-newhire
Commit    : 2e48ef1
Video     : docs/obs-videos/Video_OBS2_NguyenGiaHuy_2551170897.mp4
```

### Màn hình 5: `hr-dashboard.html` (Trung tâm điều hành HR, Biểu đồ Chart.js & AI-3 Cảnh báo sớm rủi ro)
```text
Màn hình  : hr-dashboard.html
Người làm : SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm)
Trello    : TASK-07 (T11, T18)
Nhánh     : feat/sv3-hr-admin
Commit    : 3810ab0
Video     : docs/obs-videos/Video_OBS3_NguyenGiaHuy_2551170897.mp4
```

### Màn hình 6: `admin-user-management.html` (Quản trị tài khoản, RBAC, Audit Logs & Chế độ thị sát đa người dùng)
```text
Màn hình  : admin-user-management.html
Người làm : SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm)
Trello    : TASK-08 (T19, T22, T24)
Nhánh     : fix/sv3-data-sync-hr-admin
Commit    : 2e48ef1
Video     : docs/obs-videos/Video_OBS3_NguyenGiaHuy_2551170897.mp4
```

### Màn hình 7–9 (Phân hệ Phối hợp của SV2 – Đào Viết Huy Hoàng `2551170888`): `login.html`, `mentor-mentee-list.html`, `profile.html`
```text
Màn hình  : login.html, mentor-mentee-list.html, profile.html, js/api.js
Người làm : SV2 – Đào Viết Huy Hoàng (2551170888)
Trello    : TASK-05, TASK-06 (T04, T07, T10, T16, T17, T20)
Nhánh     : feat/sv2-data-mentor
Commit    : 11ca75b, 85b2788
```
