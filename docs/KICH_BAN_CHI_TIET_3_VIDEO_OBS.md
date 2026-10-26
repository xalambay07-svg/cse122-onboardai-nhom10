# KỊCH BẢN CHI TIẾT QUAY 03 VIDEO OBS (CÓ LỜI THOẠI + THAO TÁC CHUỘT + DÒNG CODE LIVE CODING)

> **Dự án:** BTL-20 – **OnboardAI**: Nền tảng Hội nhập Nhân sự Thông minh (Nhóm 10)  
> **Mục tiêu:** Đáp ứng trọn vẹn **Mục 6 $\rightarrow$ Mục 14** trong Phiếu Đánh giá BTL học phần CSE122.

---

## 🛠️ BƯỚC CHUẨN BỊ TRƯỚC KHI BẤM "START RECORDING" TRÊN OBS (CHỈ MẤT 2 PHÚT)

1. **Cấu hình cảnh quay (Sources) trong OBS Studio:**
   - **`Display Capture` (Quay màn hình):** Quay toàn bộ màn hình máy tính (độ phân giải `1920x1080`).
   - **`Video Capture Device` (Webcam):** Đặt khung hình camera ở **góc dưới bên phải** màn hình (kích thước khoảng 1/5 màn hình), thấy rõ mặt sinh viên đang trình bày.
   - **`Audio Input Capture` (Micro):** Kiểm tra thanh âm lượng nhảy màu xanh khi nói.
2. **Mở sẵn 2 cửa sổ để chuyển đổi nhanh bằng `Alt + Tab`:**
   - **Cửa sổ 1 (Trình duyệt Edge/Chrome):** Mở sẵn `http://localhost:8080/login.html`
   - **Cửa sổ 2 (VS Code):** Mở sẵn thư mục dự án `onboardai-btl20`.

---

## 🎬 VIDEO OBS SỐ 01: PHÂN HỆ NHÂN VIÊN MỚI (NEW HIRE), ĐỀ XUẤT & CHAT VỚI 8 MENTOR + TRỢ LÝ AI-1

- **Người trình bày:** **Nguyễn Gia Huy – MSV: `2551170897` (Trưởng nhóm – SV1)**
- **Thời lượng dự kiến:** 3 phút 30 giây – 4 phút
- **Các tệp mở sẵn trong VS Code:** `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`
- **Tài khoản đăng nhập demo:** `an.nguyen@onboardai.vn` / Mật khẩu: `123456`

### Phần 1.1: Chào hỏi & Demo Tương tác Thực tế trên Trình duyệt (0:00 – 1:45)

| Thời gian | Thao tác trên màn hình | Lời thoại gợi ý (Anh đọc theo tự nhiên) |
| :--- | :--- | :--- |
| **0:00 – 0:20** | Mở trang `http://localhost:8080/login.html`, nhập `an.nguyen@onboardai.vn` và mật khẩu `123456`, bấm **Đăng nhập**. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897, trưởng nhóm 10. Hôm nay em xin trình bày Video OBS số 1 của đề tài BTL-20 OnboardAI: Phân hệ dành cho Nhân viên mới (New Hire) và Trợ lý AI-1. Đầu tiên em đăng nhập bằng tài khoản nhân viên mới Nguyễn Văn An."* |
| **0:20 – 0:55** | Tại `newhire-onboarding-dashboard.html`: Kéo xuống phần **Người đồng hành (Mentor)** $\rightarrow$ Bấm nút **Khám phá / Đổi người đồng hành** để mở danh sách **8 Mentor** $\rightarrow$ Bấm chọn 1 Mentor $\rightarrow$ Bấm nút **Chat ngay** và gửi thử 1 tin nhắn (hoặc bấm câu hỏi gợi ý nhanh). | *"Trên trang Dashboard Nhân viên mới, mỗi tài khoản khi khởi tạo sẽ được AI phân tích vị trí công việc để đề xuất 8 Người đồng hành với điểm tương thích phần trăm, kèm ảnh chân dung, số điện thoại và Zalo. Người dùng có thể tự lựa chọn người đồng hành phù hợp và mở khung Chat trực tiếp ngay trên hệ thống để trao đổi và nhận phản hồi tức thì."* |
| **0:55 – 1:25** | Bấm menu bên trái sang trang **Checklist hội nhập** (`newhire-checklist.html`).<br>1. Gõ chữ `xyz123` vào ô tìm kiếm để hiện **Empty State** $\rightarrow$ bấm nút **Đặt lại bộ lọc**.<br>2. Tích hoàn thành 1 nhiệm vụ hoặc bấm **Nộp minh chứng** $\rightarrow$ điền link mẫu và bấm Lưu. | *"Tiếp theo ở màn hình Checklist hội nhập, hệ thống hỗ trợ lọc theo giai đoạn Tuần 1, Tháng 1, Tháng 2 và tìm kiếm theo từ khóa. Khi tìm từ khóa không tồn tại, giao diện hiển thị trạng thái rỗng Empty State kèm nút Đặt lại bộ lọc đúng yêu cầu Mục 9. Khi em đánh dấu hoàn thành nhiệm vụ hoặc nộp link minh chứng, phần trăm tiến độ tổng thể được tính toán lại tự động và lưu vào LocalStorage."* |
| **1:25 – 1:45** | Bấm menu bên trái sang **Trợ lý AI Chính sách** (`newhire-ai-help.html`) $\rightarrow$ Bấm vào 1 câu hỏi gợi ý (VD: chính sách lương/bảo hiểm) để thấy hiệu ứng **AI đang suy nghĩ (Loading State)** và câu trả lời trích dẫn nguồn. | *"Ở màn hình Trợ lý AI-1 Hỏi đáp chính sách, khi nhân viên mới đặt câu hỏi, hệ thống hiển thị trạng thái Loading đang phân tích và trả về câu trả lời chi tiết kèm trích dẫn điều khoản trong sổ tay nhân sự."* |

### Phần 1.2: Giải thích Mã nguồn trong VS Code (1:45 – 2:45)

| Thời gian | Thao tác trong VS Code | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **1:45 – 2:15** | Nhấn `Alt + Tab` sang **VS Code**, mở file [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html):<br>• Kéo tới **dòng 1215** (`function buildPersonalizedMentorCatalog()`) và **dòng 1482** (`function generateSmartMentorReply()`). | *"Về mặt mã nguồn, trong file `newhire-onboarding-dashboard.html` tại dòng 1215, hàm `buildPersonalizedMentorCatalog()` xây dựng danh sách 8 Người đồng hành kèm điểm phù hợp AI. Ở dòng 1482, hàm `generateSmartMentorReply()` và `saveMentorChatHistory()` xử lý tin nhắn chat trực tiếp và lưu toàn bộ lịch sử hội thoại vào LocalStorage."* |
| **2:15 – 2:45** | Chuyển sang tab file [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html):<br>• Kéo tới **dòng 948** (`function renderTasksList()`) và **dòng 1163** (`function updatePhaseStats()`). | *"Trong file `newhire-checklist.html` tại dòng 948, hàm `renderTasksList()` thực hiện lọc danh sách nhiệm vụ theo giai đoạn, từ khóa và hiển thị Empty State khi mảng rỗng. Hàm `updatePhaseStats()` ở dòng 1163 tính toán lại tỷ lệ phần trăm hoàn thành theo thời gian thực."* |

### Phần 1.3: Sửa Code Trực tiếp – Live Coding trên Video (2:45 – 3:30)

- **Thao tác:**
  1. Trong file [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html#L168), nhấn `Ctrl + G` gõ **`168`** (dòng tiêu đề Header trên cùng `<span>Bảng điều khiển Hội nhập Cá nhân</span>`).
  2. Sửa trực tiếp dòng chữ thành:
     `<span>Bảng điều khiển Hội nhập Cá nhân – OnboardAI Live Demo</span>`
  3. Nhấn **`Ctrl + S`** để lưu file.
  4. Chuyển sang trình duyệt (`http://localhost:8080/newhire-onboarding-dashboard.html`), nhấn **`F5`** tải lại trang $\rightarrow$ chỉ chuột vào tiêu đề vừa đổi ngay lập tức trên giao diện!
  5. *(Tùy chọn)* Sửa lại như cũ và nhấn `Ctrl + S`.
- **Lời thoại kết thúc Video 1:** *"Bây giờ em xin thực hiện sửa trực tiếp tiêu đề tại dòng 168 của file `newhire-onboarding-dashboard.html` và lưu lại. Khi tải lại trình duyệt, tiêu đề mới đã được cập nhật ngay lập tức. Em xin kết thúc Video OBS số 1 tại đây ạ."*

---

## 🎬 VIDEO OBS SỐ 02: CORE DATA ENGINE (`js/api.js`), FORM VALIDATION, PHÂN HỆ MENTOR & AI-2

- **Người trình bày:** **Đào Viết Huy Hoàng – MSV: `2551170888` (SV2)** *(hoặc anh **Nguyễn Gia Huy – `2551170897`** trình bày thay mặt nhóm)*
- **Thời lượng dự kiến:** 3 phút 30 giây – 4 phút
- **Các tệp mở sẵn trong VS Code:** `js/api.js`, `assets/data/mock-data.json`, `login.html`, `mentor-mentee-list.html`, `mentor-task-assignment.html`
- **Tài khoản đăng nhập demo:** `mentor@onboardai.vn` / Mật khẩu: `123456`

### Phần 2.1: Demo Form Validation, Phân hệ Mentor & AI-2 trên Trình duyệt (0:00 – 1:45)

| Thời gian | Thao tác trên màn hình | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **0:00 – 0:30** | Mở trang `http://localhost:8080/login.html`:<br>1. Bấm **Đăng nhập** khi đang để trống email/mật khẩu để hiện thông báo lỗi đỏ (**Form Validation – Mục 7 & 10**).<br>2. Nhập `mentor@onboardai.vn` và mật khẩu `123456` $\rightarrow$ Bấm **Đăng nhập**. | *"Em chào thầy/cô ạ. Trong Video OBS số 2 của nhóm 10 (phần công việc của thành viên Đào Viết Huy Hoàng – MSV 2551170888), em xin trình bày kiến trúc dữ liệu Core Data `js/api.js`, kiểm tra hợp lệ biểu mẫu (Form Validation), Phân hệ Người hướng dẫn (Mentor) và tính năng AI-2. Tại trang Đăng nhập, khi để trống hoặc nhập sai định dạng email, hệ thống kiểm tra Form Validation và báo lỗi trực quan. Tiếp theo em đăng nhập vào tài khoản Người hướng dẫn."* |
| **0:30 – 1:15** | Tại `mentor-mentee-list.html`:<br>1. Thử tìm kiếm tên nhân viên mới và lọc theo trạng thái.<br>2. Bấm vào xem chi tiết tiến độ hoặc sang trang **Phiếu đánh giá 1-on-1** (`mentor-checkin-note.html`) tạo thử 1 ghi chú đánh giá. | *"Trên màn hình quản lý của Mentor, hệ thống hiển thị các chỉ số KPI và danh sách các Mentee đang phụ trách. Mentor có thể tìm kiếm theo tên, lọc theo trạng thái tiến độ, kiểm tra các nhiệm vụ Mentee đã hoàn thành và ghi nhận phiếu đánh giá 1-on-1 định kỳ."* |
| **1:15 – 1:45** | Chuyển sang trang **Giao việc & AI-2 Gợi ý** (`mentor-task-assignment.html`) $\rightarrow$ Chọn vị trí công việc và bấm nút **AI Gợi ý lộ trình Checklist** $\rightarrow$ Danh sách công việc chuyên môn được sinh tự động. | *"Đặc biệt tại màn hình Giao việc, tính năng AI-2 Checklist Personalizer cho phép Mentor chọn vị trí chuyên môn của nhân viên mới để AI tự động đề xuất bộ nhiệm vụ hội nhập sát với vị trí đó và lưu trực tiếp vào cơ sở dữ liệu."* |

### Phần 2.2: Giải thích Mã nguồn trong VS Code (1:45 – 2:45)

| Thời gian | Thao tác trong VS Code | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **1:45 – 2:15** | Mở file [`js/api.js`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/js/api.js) (từ **dòng 6 đến dòng 65**) và [`assets/data/mock-data.json`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/assets/data/mock-data.json). | *"Về mặt kiến trúc dữ liệu (Mục 8), toàn bộ dữ liệu gốc được lưu tại `assets/data/mock-data.json` và được nạp qua module `js/api.js`. Tại dòng 12 của `js/api.js`, hàm `init()` kiểm tra và khởi tạo cơ sở dữ liệu trong `localStorage`, đồng thời cung cấp các phương thức CRUD dùng chung cho cả 4 phân hệ."* |
| **2:15 – 2:45** | Mở file [`mentor-mentee-list.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/mentor-mentee-list.html) kéo tới **dòng 345** (`function switchActiveMentorView`) và **dòng 373** (`function renderMentorMentees`). | *"Trong file `mentor-mentee-list.html` tại dòng 373, hàm `renderMentorMentees()` kết nối với dữ liệu nhân sự mới để tính toán tiến độ trung bình, phân loại trạng thái rủi ro và hiển thị danh sách Mentee theo đúng người hướng dẫn đang đăng nhập."* |

### Phần 2.3: Sửa Code Trực tiếp – Live Coding trên Video (2:45 – 3:30)

- **Thao tác:**
  1. Mở file [`mentor-mentee-list.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/mentor-mentee-list.html#L133) trong VS Code, nhấn `Ctrl + G` gõ **`133`** (dòng `<span>Quản lý & Hướng dẫn Mentee</span>`).
  2. Sửa trực tiếp thành:
     `<span>Quản lý & Hướng dẫn Mentee – Học kỳ CSE122</span>`
  3. Nhấn **`Ctrl + S`** lưu lại $\rightarrow$ chuyển sang trình duyệt nhấn **`F5`** để thấy tiêu đề trên trang Mentor thay đổi ngay lập tức!
- **Lời thoại kết thúc Video 2:** *"Em vừa chỉnh sửa trực tiếp tiêu đề tại dòng 133 trong `mentor-mentee-list.html` và lưu lại. Trình duyệt đã cập nhật ngay nội dung mới. Em xin kết thúc Video OBS số 2 tại đây ạ."*

---

## 🎬 VIDEO OBS SỐ 03: PHÂN HỆ NHÂN SỰ (HR DASHBOARD), QUẢN TRỊ VIÊN (ADMIN), CHẾ ĐỘ THỊ SÁT ĐA NGƯỜI DÙNG & AI-3

- **Người trình bày:** **Nguyễn Gia Huy – MSV: `2551170897` (Trưởng nhóm – SV1)**
- **Thời lượng dự kiến:** 3 phút 30 giây – 4 phút
- **Các tệp mở sẵn trong VS Code:** `hr-dashboard.html`, `admin-user-management.html`
- **Tài khoản đăng nhập demo:** `hr@onboardai.vn` / `123456` và `admin@onboardai.vn` / `123456`

### Phần 3.1: Demo HR Dashboard (`Chart.js` + AI-3) & Admin (`View-As`) trên Trình duyệt (0:00 – 1:50)

| Thời gian | Thao tác trên màn hình | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **0:00 – 0:45** | Đăng nhập tài khoản `hr@onboardai.vn` / `123456` tại `login.html` $\rightarrow$ vào `hr-dashboard.html`:<br>1. Chỉ vào 4 thẻ KPI và 2 biểu đồ **`Chart.js`**.<br>2. Kéo xuống bảng **Cảnh báo sớm rủi ro hội nhập (AI-3 Risk Radar)** $\rightarrow$ bấm nút **Can thiệp / Nhắc nhở** trên 1 nhân sự có nguy cơ trễ hạn. | *"Em chào thầy/cô ạ. Trong Video OBS số 3, em xin trình bày Phân hệ Nhân sự HR, Quản trị hệ thống Admin và tính năng AI-3. Trên màn hình HR Dashboard, hệ thống trực quan hóa tiến độ hội nhập toàn công ty bằng thư viện biểu đồ Chart.js, kết hợp mô-đun AI-3 tự động phát hiện các nhân sự có nguy cơ trễ hạn để chuyên viên HR gửi nhắc nhở can thiệp kịp thời."* |
| **0:45 – 1:20** | Chuyển sang trang Quản trị viên `http://localhost:8080/admin-user-management.html`:<br>1. Bấm nút **`+ Thêm tài khoản`** $\rightarrow$ bấm Lưu ngay khi chưa nhập để demo **Form Validation (Mục 7)**.<br>2. Thử khóa/mở khóa 1 tài khoản và chuyển sang tab **Nhật ký kiểm toán (Audit Logs)**. | *"Tại phân hệ Quản trị viên (`admin-user-management.html`), Admin có thể tìm kiếm, lọc tài khoản theo vai trò, thêm người dùng mới có kiểm tra hợp lệ dữ liệu, khóa/mở khóa tài khoản và theo dõi toàn bộ lịch sử thao tác trong Nhật ký kiểm toán Audit Logs."* |
| **1:20 – 1:50** | Nhìn xuống góc dưới thanh Sidebar bên trái mục **Chế độ thị sát (View-As)**:<br>1. Bấm mở chọn **Nhân sự mới** $\rightarrow$ chọn chuyển đổi giữa `Nguyễn Văn An (NH01)` sang `Lê Hoàng Nam (NH02)` trên thanh màu tím trên cùng.<br>2. Bấm chọn xem góc nhìn **Người hướng dẫn** $\rightarrow$ đổi giữa `Trần Thị Bích (MT01)` và `Nguyễn Văn Minh (MT02)`. | *"Ngoài ra, nhóm đã phát triển tính năng Chế độ thị sát đa người dùng (View-As), cho phép Admin và HR lựa chọn xem trực tiếp góc nhìn của bất kỳ Nhân viên mới nào trong 6 nhân sự hoặc bất kỳ Người hướng dẫn nào trong 8 Mentor ngay trên thanh điều khiển phía trên cùng."* |

### Phần 3.2: Giải thích Mã nguồn trong VS Code (1:50 – 2:45)

| Thời gian | Thao tác trong VS Code | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **1:50 – 2:20** | Mở file [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html) kéo tới **dòng 814** (`function renderTable()`) và **dòng 912** (`function initCharts()`). | *"Trong file `hr-dashboard.html`, hàm `renderTable()` ở dòng 814 phân tích dữ liệu tiến độ để đánh giá mức độ rủi ro AI-3 cho từng nhân sự, còn hàm `initCharts()` ở dòng 912 khởi tạo biểu đồ cột và biểu đồ tròn bằng thư viện Chart.js."* |
| **2:20 – 2:45** | Mở file [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html) kéo tới **dòng 1526** (`function renderUserTable()`), **dòng 1872** (`function impersonateSpecificPerson()`) và **dòng 2128** (`function saveUserForm()`). | *"Trong file `admin-user-management.html`, hàm `renderUserTable()` tại dòng 1526 hiển thị danh sách tài khoản, hàm `impersonateSpecificPerson()` ở dòng 1872 xử lý chuyển đổi đa tài khoản trong Chế độ thị sát, và hàm `saveUserForm()` ở dòng 2128 kiểm tra hợp lệ dữ liệu và ghi vết vào Audit Logs."* |

### Phần 3.3: Sửa Code Trực tiếp – Live Coding trên Video (2:45 – 3:30)

- **Thao tác:**
  1. Trong file [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html), nhấn `Ctrl + G` gõ **`208`** (dòng `<h1 class="text-base font-bold text-slate-900">Quản trị Tài khoản & Phân quyền</h1>`).
  2. Sửa trực tiếp thành:
     `Quản trị Tài khoản & Phân quyền – Hệ thống OnboardAI`
  3. Nhấn **`Ctrl + S`** lưu file $\rightarrow$ quay sang trình duyệt (`http://localhost:8080/admin-user-management.html`) nhấn **`F5`** tải lại trang để thấy tiêu đề mới hiển thị ngay!
- **Lời thoại kết thúc Video 3:** *"Bây giờ em sửa trực tiếp tiêu đề tại dòng 208 của file `admin-user-management.html`, lưu lại và tải lại trình duyệt. Tiêu đề đã được cập nhật ngay lập tức. Em xin cảm ơn thầy/cô đã theo dõi phần trình bày của nhóm 10 ạ!"*
