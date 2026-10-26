# PHÂN CÔNG CÔNG VIỆC, LÁT CẮT DỌC & TRÁCH NHIỆM CHÉO (TEAM ASSIGNMENT)

> **Dự án:** BTL-20 – **OnboardAI – Hành trình hội nhập nhân sự mới**  
> **Nhóm thực hiện:** Nhóm 10 (2 Thành viên: **SV1 – Huy (Trưởng nhóm)** & **SV2 – Hoàng**; do SV3 đã nghỉ học nên toàn bộ phần việc của SV3 được gộp vào SV1)  
> **Chuẩn biểu mẫu:** Mục 1.2, 3.11, 6.1 & Phụ lục C – Tài liệu hướng dẫn BTL CSE122

---

## 1. Phân công theo Lát cắt dọc & Trách nhiệm chéo (Mục 3.11 & 6.1)

Mỗi thành viên trong nhóm đều thực hiện **các lát cắt dọc hoàn chỉnh** (*Phân tích $\rightarrow$ Thiết kế $\rightarrow$ HTML $\rightarrow$ CSS $\rightarrow$ JavaScript $\rightarrow$ Dữ liệu $\rightarrow$ Responsive $\rightarrow$ Nhánh Git $\rightarrow$ Pull Request $\rightarrow$ Video OBS*), đồng thời đảm nhận **trách nhiệm chéo** cho toàn hệ thống:

| Thành viên | Vai trò nghiệp vụ phụ trách | Các màn hình / Tệp kỹ thuật phụ trách | Tính năng AI phụ trách | Trách nhiệm chéo toàn dự án (Mục 6.1) | Nhánh Git | Video OBS |
|:---:|:---|:---|:---|:---|:---|:---:|
| **SV1**<br>*(Huy – Trưởng nhóm)* | • **Khách vãng lai + Nhân viên mới (New Hire)**<br>• **Chuyên viên Nhân sự (HR) + Quản trị viên (Admin)** | • `index.html`<br>• `newhire-onboarding-dashboard.html`<br>• `newhire-checklist.html`<br>• `newhire-ai-help.html`<br>• `hr-dashboard.html`<br>• `admin-user-management.html`<br>• `trello-kanban.html`<br>• `css/style.css`, `README.md`, `docs/*` | • **AI-1:** Trợ lý Hỏi đáp Chính sách & Tìm kiếm ngữ nghĩa<br>• **AI-2 (Client):** Đề xuất 8 Người đồng hành & Khung Chat trực tiếp<br>• **AI-3:** Dự báo & Cảnh báo sớm rủi ro hội nhập (`HR Risk Radar`) + Biểu đồ `Chart.js` | • **Hệ thống Thiết kế (Design System) & Điều hướng**<br>• **Tích hợp Hệ thống, RBAC, Chế độ Thị sát đa người dùng (`View-As`) & Quản trị Git/Trello** | `huy/feature/newhire-checklist`<br>`fix/sv3-data-sync-hr-admin` | `OBS-01`<br>`OBS-03` |
| **SV2**<br>*(Hoàng)* | • **Người hướng dẫn (Mentor)**<br>• **Tài khoản dùng chung (Auth & Profile)** | • `js/api.js`<br>• `assets/data/mock-data.json`<br>• `login.html`<br>• `mentor-mentee-list.html`<br>• `profile.html` | • **AI-2 (Engine):** Cá nhân hóa lộ trình Checklist theo vị trí công việc & Ghép cặp Mentor | • **Kiến trúc Dữ liệu (`window.OnboardAPI`), Đồng bộ `localStorage` đa tab & Kiểm tra hợp lệ biểu mẫu (Form Validation)** | `feat/sv2-data-mentor` | `OBS-02` |

---

## 2. Danh sách Thẻ Công việc Chi tiết (Theo Mẫu Phụ lục C)

### 2.1. Các thẻ công việc của SV1 – Huy (Trưởng nhóm: Khách + Nhân viên mới + HR + Admin + Design System + DevOps)

```text
TASK-01 (T06/T08) – Trang chủ giới thiệu & Hệ thống thiết kế CSS
Người làm : SV1 (Huy – Trưởng nhóm)
Màn hình  : index.html, css/style.css
Nhánh     : huy/feature/newhire-checklist
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 2
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/2
OBS       : OBS-01
```

```text
TASK-02 (T09/T14/T21) – Dashboard nhân sự mới, AI đề xuất 8 Mentor & Chat trực tiếp
Người làm : SV1 (Huy – Trưởng nhóm)
Màn hình  : newhire-onboarding-dashboard.html
Nhánh     : huy/feature/newhire-checklist
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 3 - Tuần 4
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/2
OBS       : OBS-01
```

```text
TASK-03 (T13) – Hành trình Checklist 4 giai đoạn & Nộp minh chứng hoàn thành
Người làm : SV1 (Huy – Trưởng nhóm)
Màn hình  : newhire-checklist.html
Nhánh     : huy/feature/newhire-checklist
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 3
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/2
OBS       : OBS-01
```

```text
TASK-04 (T15) – Trợ lý AI-1 Hỏi đáp chính sách & Tìm kiếm ngữ nghĩa
Người làm : SV1 (Huy – Trưởng nhóm)
Màn hình  : newhire-ai-help.html
Nhánh     : huy/feature/newhire-checklist
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 3
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/2
OBS       : OBS-01
```

```text
TASK-07 (T11/T18) – Trung tâm điều hành HR, Biểu đồ Chart.js & AI-3 Cảnh báo sớm rủi ro
Người làm : SV1 (Huy – Trưởng nhóm)
Màn hình  : hr-dashboard.html
Nhánh     : fix/sv3-data-sync-hr-admin
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 3
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/3
OBS       : OBS-03
```

```text
TASK-08 (T19/T22/T24) – Quản trị tài khoản Admin, Audit Logs & Chế độ thị sát đa người dùng (View-As)
Người làm : SV1 (Huy – Trưởng nhóm)
Màn hình  : admin-user-management.html, trello-kanban.html
Nhánh     : fix/sv3-data-sync-hr-admin
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 4
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/3
OBS       : OBS-03
```

---

### 2.2. Các thẻ công việc của SV2 – Hoàng (Core Data + Đăng nhập + Phân hệ Mentor + AI-2)

```text
TASK-05 (T07/T20) – Kiến trúc Mock Data JSON, OnboardAPI & Cổng đăng nhập 4 vai trò
Người làm : SV2 – Đào Viết Huy Hoàng (2551170888)
Màn hình  : js/api.js, assets/data/mock-data.json, login.html
Nhánh     : feat/sv2-data-mentor
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 2 - Tuần 3
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/1
OBS       : OBS-02
```

```text
TASK-06 (T10/T16/T17) – Quản lý danh sách Mentee, Đánh giá định kỳ & AI-2 Cá nhân hóa lộ trình
Người làm : SV2 – Đào Viết Huy Hoàng (2551170888)
Màn hình  : mentor-mentee-list.html, profile.html
Nhánh     : feat/sv2-data-mentor
Trạng thái: HOÀN THÀNH
Hạn       : Tuần 3
Figma     : design/figma-link.txt
PR        : https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pull/1
OBS       : OBS-02
```
