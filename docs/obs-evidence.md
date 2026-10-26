# DANH SÁCH MINH CHỨNG VIDEO OBS & LIÊN KẾT COMMIT (OBS EVIDENCE)

> **Học phần:** Phát triển Ứng dụng Web Cơ bản – CSE122  
> **Đề tài:** BTL-20 – **OnboardAI – Hành trình hội nhập nhân sự mới**  
> **Chuẩn biểu mẫu:** Phần 8 & Phụ lục D – Tài liệu hướng dẫn BTL CSE122

---

## 1. Bảng Tổng hợp 03 Video OBS Chính của 3 Thành viên

| Mã Video | Thành viên | Các Màn hình & Tính năng Demo trong Video | Thẻ Trello | Nhánh Git | Commit tiêu biểu | Link Video (Drive / YouTube) |
|:---:|:---:|:---|:---:|:---|:---:|:---|
| **`OBS-01`** | **SV1**<br>*(Huy)* | • `index.html`<br>• `newhire-onboarding-dashboard.html` (Chọn 8 Mentor + Chat)<br>• `newhire-checklist.html` (Checklist + Nộp minh chứng)<br>• `newhire-ai-help.html` (**AI-1: Policy Q&A**) | `T08`, `T09`, `T13`, `T14`, `T15`, `T21` | `huy/feature/newhire-checklist`<br>`feat/sv1-ui-newhire` | `e4d688f`, `3238c8c`, `a97bc9f`, `33166a3` | `[Cập nhật link Drive/YouTube tại đây]` |
| **`OBS-02`** | **SV2**<br>*(Hoàng)* | • `js/api.js` & `assets/data/mock-data.json`<br>• `login.html` (Xác thực 4 vai trò & Form Validation)<br>• `mentor-mentee-list.html` (Quản lý Mentee & **AI-2**)<br>• `profile.html` (Hồ sơ cá nhân) | `T04`, `T07`, `T10`, `T16`, `T17`, `T20` | `feat/sv2-data-mentor` | `85b2788`, `11ca75b`, `ec90c99` | `[Cập nhật link Drive/YouTube tại đây]` |
| **`OBS-03`** | **SV3**<br>*(Trưởng nhóm)* | • `hr-dashboard.html` (Biểu đồ `Chart.js` & **AI-3: Risk Radar**)<br>• `admin-user-management.html` (CRUD User, RBAC, Audit Logs)<br>• Chế độ thị sát đa người dùng (`View-As`: `NH01`..`NH06`, `MT01`..`MT08`) | `T11`, `T18`, `T19`, `T22`, `T24` | `fix/sv3-data-sync-hr-admin`<br>`feat/sv3-hr-admin` | `3810ab0`, `65f858a`, `1cf5efd`, `b7f55f3` | `[Cập nhật link Drive/YouTube tại đây]` |

---

## 2. Chi tiết Liên kết Video ↔ Commit ↔ Trello theo từng Màn hình (Theo Mẫu Phụ lục D)

### Màn hình 1: `index.html` (Trang chủ giới thiệu nền tảng OnboardAI)
```text
Màn hình  : index.html
Người làm : SV1 (Huy)
Trello    : TASK-01 (T08)
Nhánh     : feat/sv1-ui-newhire
Commit    : 33166a3
Video     : OBS-01 (SV1-newhire-flow.mp4)
```

### Màn hình 2: `login.html` (Cổng đăng nhập đa vai trò & Kiểm tra hợp lệ biểu mẫu)
```text
Màn hình  : login.html
Người làm : SV2 (Hoàng)
Trello    : TASK-05 (T08, T20)
Nhánh     : feat/sv2-data-mentor
Commit    : 11ca75b
Video     : OBS-02 (SV2-core-data-mentor.mp4)
```

### Màn hình 3: `newhire-onboarding-dashboard.html` (Dashboard Nhân sự mới, Đề xuất 8 Mentor & Chat trực tiếp)
```text
Màn hình  : newhire-onboarding-dashboard.html
Người làm : SV1 (Huy)
Trello    : TASK-02 (T09, T14, T21)
Nhánh     : huy/feature/newhire-checklist
Commit    : 33166a3
Video     : OBS-01 (SV1-newhire-flow.mp4)
```

### Màn hình 4: `newhire-checklist.html` (Hành trình hội nhập 4 giai đoạn & Nộp minh chứng hoàn thành)
```text
Màn hình  : newhire-checklist.html
Người làm : SV1 (Huy)
Trello    : TASK-03 (T09, T13)
Nhánh     : huy/feature/newhire-checklist
Commit    : e4d688f
Video     : OBS-01 (SV1-newhire-flow.mp4)
```

### Màn hình 5: `newhire-ai-help.html` (Trợ lý AI-1 Hỏi đáp chính sách & Tìm kiếm ngữ nghĩa)
```text
Màn hình  : newhire-ai-help.html
Người làm : SV1 (Huy)
Trello    : TASK-04 (T15)
Nhánh     : feat/sv1-ui-newhire
Commit    : 33166a3
Video     : OBS-01 (SV1-newhire-flow.mp4)
```

### Màn hình 6: `mentor-mentee-list.html` (Quản lý danh sách Mentee, Đánh giá & AI-2 Cá nhân hóa lộ trình)
```text
Màn hình  : mentor-mentee-list.html
Người làm : SV2 (Hoàng)
Trello    : TASK-06 (T10, T16, T17)
Nhánh     : feat/sv2-data-mentor
Commit    : 3810ab0
Video     : OBS-02 (SV2-core-data-mentor.mp4)
```

### Màn hình 7: `profile.html` (Hồ sơ cá nhân & Đổi mật khẩu dùng chung)
```text
Màn hình  : profile.html
Người làm : SV2 (Hoàng)
Trello    : TASK-06 (T10)
Nhánh     : feat/sv2-data-mentor
Commit    : 85b2788
Video     : OBS-02 (SV2-core-data-mentor.mp4)
```

### Màn hình 8: `hr-dashboard.html` (Trung tâm điều hành HR, Biểu đồ Chart.js & AI-3 Cảnh báo sớm rủi ro)
```text
Màn hình  : hr-dashboard.html
Người làm : SV3 (Trưởng nhóm)
Trello    : TASK-07 (T11, T18)
Nhánh     : feat/sv3-hr-admin
Commit    : 3810ab0
Video     : OBS-03 (SV3-hr-admin-viewas.mp4)
```

### Màn hình 9: `admin-user-management.html` (Quản trị tài khoản, RBAC, Audit Logs & Chế độ thị sát đa người dùng)
```text
Màn hình  : admin-user-management.html
Người làm : SV3 (Trưởng nhóm)
Trello    : TASK-08 (T19, T22, T24)
Nhánh     : fix/sv3-data-sync-hr-admin
Commit    : 3810ab0
Video     : OBS-03 (SV3-hr-admin-viewas.mp4)
```
