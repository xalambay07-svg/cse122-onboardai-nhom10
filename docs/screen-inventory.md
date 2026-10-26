# BẢNG KIỂM KÊ MÀN HÌNH (SCREEN INVENTORY) – BTL-20: ONBOARDAI

> **Học phần:** Phát triển Ứng dụng Web Cơ bản – CSE122  
> **Đề tài:** BTL-20 – **OnboardAI – Hành trình hội nhập nhân sự mới**  
> **Chuẩn biểu mẫu:** Phụ lục B & Mục 3.3, 3.5, 4.1, 4.2 – Tài liệu hướng dẫn BTL CSE122

---

## 1. Bảng Kiểm kê Màn hình Tổng thể (Theo Mẫu Phụ lục B)

| # | Vai trò | Mục tiêu người dùng | Nhiệm vụ người dùng | Màn hình | Tệp | CRUD | Trạng thái | AI | Phụ trách | Công việc | Nhánh | OBS |
|:---:|:---|:---|:---|:---|:---|:---:|:---|:---|:---:|:---:|:---|:---|
| 1 | **Dùng chung / Khách** | Tìm hiểu giải pháp OnboardAI | Xem tính năng, quy trình 4 giai đoạn và truy cập hệ thống | Trang chủ giới thiệu nền tảng | [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html) | R | Bình thường · Đang tải | Giới thiệu 3 mô-đun AI | **SV1** | `T08` | `feat/sv1-ui-newhire` | `OBS-01` |
| 2 | **Dùng chung (4 Vai trò)** | Xác thực & truy cập đúng phân hệ | Đăng nhập bằng tài khoản theo vai trò, kiểm tra hợp lệ biểu mẫu | Cổng đăng nhập đa vai trò | [`login.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/login.html) | C/R | Bình thường · Lỗi xác thực · Tài khoản bị khóa | – | **SV2** | `T08`, `T20` | `feat/sv2-data-mentor` | `OBS-02` |
| 3 | **Nhân viên mới (New Hire)** | Theo dõi tổng quan hội nhập & kết nối Mentor | Xem tiến độ `%`, chọn trong 8 Người đồng hành do AI gợi ý, chat trực tiếp với Mentor | Bảng điều khiển hội nhập nhân sự mới | [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html) | C/R/U | Chưa có Mentor (Rỗng) · Đã chọn Mentor · Đang chat · Hoàn thành | **AI-2:** Ghép cặp 8 Mentor (`Match Score %`) | **SV1** | `T09`, `T14`, `T21` | `huy/feature/newhire-checklist` | `OBS-01` |
| 4 | **Nhân viên mới (New Hire)** | Hoàn thành nhiệm vụ thử việc theo 4 giai đoạn | Lọc việc theo giai đoạn, nộp link minh chứng hoàn thành, làm Quiz kiểm tra | Hành trình hội nhập & Checklist công việc | [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html) | C/R/U | Chưa làm · Đang làm · Đã nộp minh chứng · Hoàn thành · Rỗng | Hướng dẫn thực hiện từng task & AI Quiz | **SV1** | `T09`, `T13` | `huy/feature/newhire-checklist` | `OBS-01` |
| 5 | **Nhân viên mới (New Hire)** | Tra cứu quy chế, lương thưởng, bảo hiểm, IT | Đặt câu hỏi ngôn ngữ tự nhiên, xem trích dẫn nguồn hoặc gửi phiếu hỏi HR | Trợ lý AI hỏi đáp chính sách nhân sự | [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html) | C/R | Đang phân tích (Loading) · Có kết quả · Không chắc chắn (Fallback HR) | **AI-1:** Tìm kiếm ngữ nghĩa & Giải thích chính sách | **SV1** | `T15` | `feat/sv1-ui-newhire` | `OBS-01` |
| 6 | **Người hướng dẫn (Mentor)** | Kèm cặp & theo dõi các nhân sự mới được giao | Tìm kiếm, lọc Mentee theo tiến độ, giao việc mới, chấm điểm đánh giá định kỳ | Quản lý danh sách Mentee & Đánh giá | [`mentor-mentee-list.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/mentor-mentee-list.html) | C/R/U | Đúng tiến độ · Cần chú ý · Nguy cơ trễ hạn · Rỗng | **AI-2:** Cá nhân hóa lộ trình Checklist theo vị trí | **SV2** | `T10`, `T16`, `T17` | `feat/sv2-data-mentor` | `OBS-02` |
| 7 | **Dùng chung (4 Vai trò)** | Quản lý thông tin cá nhân & bảo mật | Xem hồ sơ, cập nhật thông tin liên hệ (SĐT, Zalo), đổi mật khẩu | Hồ sơ cá nhân & Cài đặt tài khoản | [`profile.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/profile.html) | R/U | Bình thường · Đang lưu · Thành công · Lỗi kiểm tra hợp lệ | – | **SV2** | `T10` | `feat/sv2-data-mentor` | `OBS-02` |
| 8 | **Chuyên viên Nhân sự (HR)** | Giám sát hội nhập toàn công ty & can thiệp sớm | Xem biểu đồ `Chart.js`, phát hiện nhân sự trễ hạn qua AI-3, gửi can thiệp nhắc nhở | Trung tâm điều hành HR & Cảnh báo rủi ro | [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html) | C/R/U | Bình thường · Rỗng · Cảnh báo rủi ro cao · Đã can thiệp | **AI-3:** Dự báo & Cảnh báo sớm rủi ro (`Risk Radar`) | **SV3** | `T11`, `T18` | `feat/sv3-hr-admin` | `OBS-03` |
| 9 | **Quản trị viên (Admin)** | Quản trị vòng đời tài khoản, RBAC & Kiểm toán | Thêm/sửa/khóa/xóa mềm tài khoản, xem Audit Logs, thị sát đa người dùng (`View-As`) | Quản trị tài khoản, Phân quyền & Nhật ký hệ thống | [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html) | C/R/U/D | Hoạt động (`Active`) · Chờ kích hoạt (`Pending`) · Đã khóa (`Locked`) · Rỗng | Kiểm tra tự động sức khỏe cấu hình hệ thống | **SV3** | `T11`, `T19`, `T22` | `fix/sv3-data-sync-hr-admin` | `OBS-03` |
| 10 | **Nhóm phát triển / Giảng viên** | Theo dõi quá trình làm việc nhóm 4 tuần | Xem tiến độ 25 thẻ công việc qua 4 tuần, lọc theo SV1/SV2/SV3, xuất mã Trello | Bảng tiến độ Trello Kanban trực quan | [`trello-kanban.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/trello-kanban.html) | R | Tuần 1 · Tuần 2 · Tuần 3 · Tuần 4 (Hoàn thành) | – | **SV3** | `T05`, `T24` | `main` | `OBS-03` |

---

## 2. Phân tích Cấu trúc Giao diện Trọng tâm (Theo Mục 4.2)

### 2.1. Màn hình `newhire-onboarding-dashboard.html` (Bảng điều khiển nhân sự mới)
- **Mục tiêu trang:** Cung cấp bức tranh toàn cảnh về tiến độ thử việc cá nhân, kết nối với Người đồng hành (Mentor) và truy cập nhanh các việc cần làm trong ngày.
- **Bố cục:** Sidebar điều hướng trái $\cdot$ Topbar thông tin tài khoản & thanh Chế độ thị sát $\cdot$ Hero Banner tiến độ tổng thể $\cdot$ Lưới 4 thẻ KPI $\cdot$ Khu vực Người đồng hành (Mentor Card + AI Matching Modal + Live Chat Drawer) $\cdot$ Danh sách công việc hôm nay.
- **Thành phần:** Thanh tiến độ động (`Progress Bar`), Thẻ hồ sơ Mentor (kèm ảnh chân dung Việt Nam, SĐT, Zalo), Hộp thoại Khám phá 8 Mentor, Ngăn kéo Chat trực tiếp.
- **Dữ liệu:** Hồ sơ `newHire`, danh sách 8 `MENTOR_CATALOG`, lịch sử tin nhắn `onboardai_mentor_chat_*`, danh sách `tasks`.
- **Trạng thái:** Chưa chọn Mentor (*Empty Mentor State* kèm gợi ý AI) $\cdot$ Đã có Mentor $\cdot$ Đang trò chuyện $\cdot$ Hoàn thành.
- **Hành động:** Chọn/Đổi Người đồng hành $\cdot$ Gửi tin nhắn chat $\cdot$ Chuyển nhanh sang trang Checklist hoặc AI-1.

### 2.2. Màn hình `newhire-checklist.html` (Hành trình hội nhập & Checklist)
- **Mục tiêu trang:** Quản lý chi tiết các nhiệm vụ hội nhập theo từng giai đoạn và nộp bằng chứng hoàn thành công việc.
- **Bố cục:** Sidebar $\cdot$ Header thống kê tiến độ $\cdot$ Thanh chuyển giai đoạn (*Ngày đầu, Tuần 1, Tháng 1, Tháng 2*) $\cdot$ Bộ lọc trạng thái & Tìm kiếm $\cdot$ Danh sách thẻ công việc mở rộng (Accordion) $\cdot$ Modal nộp minh chứng.
- **Dữ liệu:** Danh sách `tasks`, trạng thái `status`, đường dẫn minh chứng `proofUrl`, ghi chú `proofNote`.
- **Trạng thái:** Chưa hoàn thành $\cdot$ Đã hoàn thành $\cdot$ Trạng thái rỗng (*Empty State* kèm nút Đặt lại bộ lọc).
- **Kiểm tra hợp lệ:** Bắt buộc nhập đường dẫn minh chứng hợp lệ (`https://...`) và mô tả kết quả trước khi xác nhận hoàn thành nhiệm vụ.

### 2.3. Màn hình `hr-dashboard.html` & `admin-user-management.html` (Điều hành HR & Quản trị hệ thống)
- **Mục tiêu trang:** Giám sát tiến độ hội nhập toàn công ty bằng biểu đồ, phát hiện sớm rủi ro trễ hạn (AI-3) và quản lý phân quyền người dùng (RBAC + View-As).
- **Bố cục:** Sidebar tích hợp bộ chọn **Chế độ thị sát đa người dùng (`NH01`..`NH06`, `MT01`..`MT08`)** $\cdot$ 4 thẻ KPI $\cdot$ Khối biểu đồ cột & biểu đồ tròn `Chart.js` $\cdot$ Bảng cảnh báo sớm AI-3 / Bảng tài khoản người dùng $\cdot$ Ngăn kéo thêm/sửa dữ liệu & Nhật ký kiểm toán (`Audit Logs`).
- **Kiểm tra hợp lệ:** Kiểm tra tên người dùng, định dạng email, chống trùng lặp email, chống khóa hoặc xóa tài khoản Admin hoạt động cuối cùng.
