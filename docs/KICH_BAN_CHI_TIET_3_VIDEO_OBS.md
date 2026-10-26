# KỊCH BẢN CHI TIẾT QUAY 03 VIDEO OBS CÁ NHÂN CỦA SV1 – NGUYỄN GIA HUY (MSV: 2551170897)

> **Dự án:** BTL-20 – **OnboardAI**: Nền tảng Hội nhập Nhân sự Thông minh (Nhóm 10)  
> **Sinh viên thực hiện:** **Nguyễn Gia Huy – MSV: `2551170897` (Trưởng nhóm – SV1)**  
> **Phạm vi:** 100% các trang và tính năng do **Nguyễn Gia Huy (SV1)** trực tiếp phụ trách (6 màn hình: `index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`, `hr-dashboard.html`, `admin-user-management.html`), **không liên quan đến phần của SV2**.

---

## 🛠️ BƯỚC CHUẨN BỊ TRƯỚC KHI BẤM "START RECORDING" TRÊN OBS (CHỈ MẤT 1 PHÚT)

1. **Cấu hình cảnh quay (`Sources`) trong OBS Studio:**
   - **`Display Capture` (Quay màn hình):** Quay toàn bộ màn hình máy tính (`1920x1080`).
   - **`Video Capture Device` (Webcam):** Đặt khung hình camera ở **góc dưới bên phải** màn hình (kích thước khoảng 1/5 màn hình), thấy rõ mặt anh đang trình bày.
   - **`Audio Input Capture` (Micro):** Kiểm tra thanh âm lượng nhảy màu xanh khi nói.
   - **Định dạng xuất file:** Vào `Settings` $\rightarrow$ `Output` $\rightarrow$ `Recording Format` chọn **`.mp4`**.
2. **Mở sẵn 2 cửa sổ để chuyển đổi nhanh bằng `Alt + Tab`:**
   - **Cửa sổ 1 (Trình duyệt Edge/Chrome):** Mở sẵn `http://localhost:8080/index.html`
   - **Cửa sổ 2 (VS Code):** Mở sẵn 6 file của anh:
     - `index.html`, `newhire-onboarding-dashboard.html` *(dùng cho Video 1)*
     - `newhire-checklist.html`, `newhire-ai-help.html` *(dùng cho Video 2)*
     - `hr-dashboard.html`, `admin-user-management.html` *(dùng cho Video 3)*

---

## 🎬 VIDEO OBS SỐ 01: TRANG CHỦ (`index.html`) & DASHBOARD NHÂN SỰ MỚI (`newhire-onboarding-dashboard.html`) – HỆ THỐNG 4 HUY HIỆU, ĐỀ XUẤT 8 MENTOR & CHAT TRỰC TIẾP

- **Người trình bày:** **Nguyễn Gia Huy – MSV: `2551170897`**
- **Thời lượng dự kiến:** 3 phút – 3 phút 30 giây
- **Các file mở sẵn trong VS Code:** [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html), [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html)
- **URL mở sẵn trên trình duyệt:** `http://localhost:8080/index.html` (đã đăng nhập sẵn tài khoản Nhân sự mới `an.nguyen@onboardai.vn` / `123456` hoặc bấm thẳng từ trang chủ vào Dashboard).

### Phần 1.1: Demo Giao diện & Tương tác trên Trình duyệt (0:00 – 1:40)

| Thời gian | Thao tác chuột trên màn hình | Lời thoại gợi ý (Anh đọc tự nhiên theo ý này) |
| :--- | :--- | :--- |
| **0:00 – 0:35** | Mở `http://localhost:8080/index.html`:<br>1. Chỉ chuột vào phần Hero bên trái và khung mô phỏng Live UI bên phải.<br>2. Cuộn xuống lướt qua **4 không gian làm việc RBAC**, **Bộ 3 tính năng AI** và **4 Cột mốc Huy hiệu**.<br>3. Bấm vào nút **Mở Dashboard Nhân sự mới** (`newhire-onboarding-dashboard.html`). | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897, trưởng nhóm 10. Trong Video OBS số 1 của cá nhân em, em xin trình bày Trang giới thiệu `index.html` và Bảng điều khiển Nhân sự mới `newhire-onboarding-dashboard.html`. Trên trang chủ, em thiết kế bố cục Hero hiện đại kèm khung mô phỏng Live UI, giới thiệu kiến trúc 4 vai trò RBAC, 3 mô-đun AI và 4 cột mốc huy hiệu. Tiếp theo em mở vào Bảng điều khiển của nhân sự mới Nguyễn Văn An."* |
| **0:35 – 1:10** | Tại `newhire-onboarding-dashboard.html`:<br>1. Chỉ chuột vào thanh tiến độ tổng thể, **4 Huy hiệu cột mốc** (Tân binh, Tự lập, Hòa nhập, Chính thức) và danh sách **Việc cần làm hôm nay**.<br>2. Kéo xuống khu vực **Người đồng hành (Mentor)** $\rightarrow$ bấm nút **Khám phá / Đổi người đồng hành** để mở danh sách **8 Mentor**. | *"Tại màn hình Dashboard Nhân sự mới (mã NH01), hệ thống hiển thị tiến độ hội nhập theo thời gian thực, 4 huy hiệu cột mốc và các đầu việc ưu tiên trong ngày. Đặc biệt ở mục Người đồng hành, em xây dựng thuật toán phân tích vị trí công việc để đề xuất 8 Mentor với tỷ lệ tương thích phần trăm, kèm ảnh chân dung, số điện thoại và liên kết Zalo."* |
| **1:10 – 1:40** | 1. Bấm chọn 1 Mentor trong danh sách 8 người.<br>2. Bấm nút **Chat ngay** để mở khung Chat trực tiếp $\rightarrow$ Bấm vào 1 câu hỏi gợi ý nhanh (hoặc gõ `"Em chào anh/chị ạ"`) và bấm **Gửi** $\rightarrow$ Mentor phản hồi tự động ngay trên khung chat. | *"Nhân sự mới có thể tự chọn người đồng hành phù hợp và mở khung Chat trực tiếp ngay trên hệ thống. Khi gửi tin nhắn, hệ thống tự động phản hồi theo ngữ cảnh chuyên môn của Mentor đó và lưu toàn bộ lịch sử hội thoại vào LocalStorage."* |

### Phần 1.2: Giải thích Mã nguồn trong VS Code (1:40 – 2:35)

| Thời gian | Thao tác trong VS Code | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **1:40 – 2:05** | Nhấn `Alt + Tab` sang VS Code, mở tab [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html):<br>• Nhấn `Ctrl + G` gõ **`110`** (Cột trái Hero & Khung cửa sổ mô phỏng Dashboard). | *"Về mặt mã nguồn, trong file `index.html` từ dòng 110, em xây dựng bố cục lưới 12 cột chuẩn Responsive với Tailwind CSS, kết hợp hiệu ứng chuyển động mượt cho linh vật Onbi và các thẻ nổi."* |
| **2:05 – 2:35** | Chuyển sang tab [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html):<br>• Nhấn `Ctrl + G` gõ **`1215`** (`function buildPersonalizedMentorCatalog()`)<br>• Nhấn `Ctrl + G` gõ **`1482`** (`function generateSmartMentorReply()`) | *"Trong file `newhire-onboarding-dashboard.html`, tại dòng 1215, hàm `buildPersonalizedMentorCatalog()` tính toán điểm tương thích để sắp xếp danh sách 8 Người đồng hành. Ở dòng 1482, hàm `generateSmartMentorReply()` và `saveMentorChatHistory()` xử lý tin nhắn phản hồi và lưu lịch sử chat vào LocalStorage."* |

### Phần 1.3: Sửa Code Trực tiếp – Live Coding trên Video 1 (2:35 – 3:15)

1. Trong VS Code, tại file [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html#L168), nhấn **`Ctrl + G`** gõ **`168`** (dòng `<span>Bảng điều khiển Hội nhập Cá nhân</span>`).
2. Sửa trực tiếp dòng chữ thành:
   ```html
   <span>Bảng điều khiển Hội nhập Cá nhân – Nguyễn Gia Huy (2551170897)</span>
   ```
3. Nhấn **`Ctrl + S`** lưu file $\rightarrow$ `Alt + Tab` sang trình duyệt (`http://localhost:8080/newhire-onboarding-dashboard.html`) nhấn **`F5`** tải lại trang $\rightarrow$ chỉ chuột vào tiêu đề trên cùng vừa cập nhật ngay lập tức!
4. **Lời thoại kết thúc Video 1:** *"Bây giờ em thực hiện sửa trực tiếp tiêu đề tại dòng 168 của file `newhire-onboarding-dashboard.html` kèm tên và mã sinh viên của em, sau đó lưu lại. Khi tải lại trình duyệt, tiêu đề mới đã hiển thị ngay lập tức. Em xin kết thúc Video OBS số 1 tại đây ạ."* *(Bấm Stop Recording)*.

---

## 🎬 VIDEO OBS SỐ 02: CHECKLIST HỘI NHẬP 4 CHẶNG (`newhire-checklist.html`) & TRỢ LÝ ẢO ONBI HỎI ĐÁP QUY CHẾ (`newhire-ai-help.html` – AI-1)

- **Người trình bày:** **Nguyễn Gia Huy – MSV: `2551170897`**
- **Thời lượng dự kiến:** 3 phút – 3 phút 30 giây
- **Các file mở sẵn trong VS Code:** [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html), [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html)
- **URL mở sẵn trên trình duyệt:** `http://localhost:8080/newhire-checklist.html`

### Phần 2.1: Demo Checklist 4 Chặng & Trợ lý AI-1 trên Trình duyệt (0:00 – 1:40)

| Thời gian | Thao tác chuột trên màn hình | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **0:00 – 0:50** | Mở `http://localhost:8080/newhire-checklist.html`:<br>1. Bấm chuyển đổi qua lại giữa 4 tab giai đoạn (**Ngày 1, Tuần 1, Tháng 1, Tháng 2**).<br>2. Gõ `xyz123` vào ô tìm kiếm để hiện màn hình **Empty State** $\rightarrow$ bấm nút **Đặt lại bộ lọc**.<br>3. Tích chọn hoàn thành 1 công việc hoặc bấm **Nộp minh chứng** $\rightarrow$ bấm **Lưu** để thấy thanh tiến độ phần trăm nhảy lên. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy – mã sinh viên 2551170897. Trong Video OBS số 2 của cá nhân em, em xin trình bày màn hình Checklist Hội nhập 4 chặng (`newhire-checklist.html`) và Trợ lý ảo Onbi Hỏi đáp quy chế (`newhire-ai-help.html`). Tại màn hình Checklist, nhân sự mới có thể lọc nhiệm vụ theo 4 chặng hoặc tìm kiếm theo từ khóa. Khi từ khóa không khớp, hệ thống hiển thị trạng thái rỗng Empty State kèm nút Đặt lại bộ lọc. Khi em đánh dấu hoàn thành hoặc nộp minh chứng, tiến độ phần trăm được tính lại tự động và đồng bộ ngay vào LocalStorage."* |
| **0:50 – 1:40** | Bấm menu bên trái chuyển sang **Trợ lý AI Chính sách** (`http://localhost:8080/newhire-ai-help.html`):<br>1. Bấm vào 1 câu hỏi gợi ý (VD: **Chế độ nghỉ phép / Bảo hiểm** hoặc **Việc cần làm hôm nay của tôi**): chỉ vào trạng thái **Onbi đang suy nghĩ (Loading State)** và hiệu ứng gõ chữ kèm **Trích dẫn nguồn sổ tay**.<br>2. Gõ 1 câu hỏi ngoài tài liệu (VD: `"Xin cấp thêm màn hình rời 4K"`) để hiện tính năng **Chuyển tiếp câu hỏi cho HR (Escalation)**. | *"Tiếp theo ở màn hình Trợ lý ảo Onbi (mô-đun AI-1), khi nhân sự mới đặt câu hỏi về quy chế hoặc tiến độ cá nhân, Onbi hiển thị trạng thái Loading đang phân tích, sau đó trả lời chi tiết kèm nhãn độ khớp và trích dẫn điều khoản sổ tay minh bạch. Nếu gặp câu hỏi đặc thù chưa có trong tài liệu, Onbi tự động phân vùng và hỗ trợ gửi phiếu chuyển tiếp trực tiếp tới bộ phận HR."* |

### Phần 2.2: Giải thích Mã nguồn trong VS Code (1:40 – 2:35)

| Thời gian | Thao tác trong VS Code | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **1:40 – 2:05** | Nhấn `Alt + Tab` sang VS Code, mở tab [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html):<br>• Nhấn `Ctrl + G` gõ **`948`** (`function renderTasksList()`)<br>• Nhấn `Ctrl + G` gõ **`1163`** (`function updatePhaseStats()`) | *"Về phần mã nguồn trong file `newhire-checklist.html`, tại dòng 948, hàm `renderTasksList()` thực hiện lọc danh sách nhiệm vụ theo chặng, trạng thái và từ khóa tìm kiếm, đồng thời hiển thị Empty State khi không có kết quả. Hàm `updatePhaseStats()` ở dòng 1163 tính toán lại tỷ lệ phần trăm hoàn thành và mở khóa huy hiệu tương ứng."* |
| **2:05 – 2:35** | Chuyển sang tab [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html):<br>• Nhấn `Ctrl + G` gõ **`788`** (`function processAIResponse(query)`)<br>• Nhấn `Ctrl + G` gõ **`852`** (`function typewriteHtml()`) | *"Trong file `newhire-ai-help.html`, tại dòng 788, hàm `processAIResponse()` là bộ máy quyết định của AI-1: chấm điểm từ khóa, kết hợp tìm kiếm mờ Fuse.js và phân vùng câu trả lời thành 3 vùng. Hàm `typewriteHtml()` ở dòng 852 tạo hiệu ứng gõ chữ mượt mà mà không làm vỡ thẻ HTML."* |

### Phần 2.3: Sửa Code Trực tiếp – Live Coding trên Video 2 (2:35 – 3:15)

1. Trong VS Code, tại file [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html#L143), nhấn **`Ctrl + G`** gõ **`143`** (dòng `<span class="truncate">Onbi &ndash; Trợ lý hội nhập</span>`).
2. Sửa trực tiếp dòng chữ thành:
   ```html
   <span class="truncate">Onbi &ndash; Trợ lý hội nhập thông minh (AI-1)</span>
   ```
3. Nhấn **`Ctrl + S`** lưu file $\rightarrow$ `Alt + Tab` sang trình duyệt (`http://localhost:8080/newhire-ai-help.html`) nhấn **`F5`** tải lại trang $\rightarrow$ chỉ chuột vào tiêu đề Header vừa đổi ngay lập tức!
4. **Lời thoại kết thúc Video 2:** *"Bây giờ em sửa trực tiếp tiêu đề tại dòng 143 của file `newhire-ai-help.html` và lưu lại. Khi tải lại trình duyệt, tiêu đề mới đã được cập nhật ngay lập tức. Em xin kết thúc Video OBS số 2 tại đây ạ."* *(Bấm Stop Recording)*.

---

## 🎬 VIDEO OBS SỐ 03: BẢNG ĐIỀU KHIỂN HR (`hr-dashboard.html` – `Chart.js` & AI-3) & QUẢN TRỊ VIÊN ADMIN (`admin-user-management.html` – RBAC, AUDIT LOGS & VIEW-AS)

- **Người trình bày:** **Nguyễn Gia Huy – MSV: `2551170897`**
- **Thời lượng dự kiến:** 3 phút 30 giây – 4 phút
- **Các file mở sẵn trong VS Code:** [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html), [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html)
- **URL mở sẵn trên trình duyệt:** `http://localhost:8080/hr-dashboard.html`

### Phần 3.1: Demo HR Dashboard (`Chart.js` + AI-3) & Admin (`View-As`) trên Trình duyệt (0:00 – 1:50)

| Thời gian | Thao tác chuột trên màn hình | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **0:00 – 0:45** | Mở `http://localhost:8080/hr-dashboard.html`:<br>1. Chỉ chuột vào 4 thẻ KPI và 2 biểu đồ **`Chart.js`** (Biểu đồ cột theo phòng ban & Biểu đồ tròn trạng thái).<br>2. Kéo xuống bảng **Cảnh báo sớm rủi ro hội nhập (AI-3 Risk Radar)** $\rightarrow$ bấm nút **Can thiệp / Nhắc nhở** trên 1 nhân sự có nguy cơ trễ hạn $\rightarrow$ gửi nhắc nhở 1-Click. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy – mã sinh viên 2551170897. Trong Video OBS số 3 của cá nhân em, em xin trình bày Phân hệ Nhân sự HR (`hr-dashboard.html`) và Phân hệ Quản trị hệ thống Admin (`admin-user-management.html`). Trên màn hình HR Dashboard, em tích hợp thư viện Chart.js để trực quan hóa tiến độ theo phòng ban, kết hợp mô-đun AI-3 Risk Radar tự động phát hiện nhân sự bị kẹt quyền IT hoặc có nguy cơ trễ hạn để HR gửi nhắc nhở can thiệp chỉ với 1 cú nhấp chuột."* |
| **0:45 – 1:20** | Chuyển sang trang Quản trị viên `http://localhost:8080/admin-user-management.html`:<br>1. Bấm nút **`+ Thêm tài khoản`** $\rightarrow$ bấm **Lưu** ngay khi đang để trống để demo **Form Validation** báo lỗi đỏ.<br>2. Đóng modal, thử bấm khóa/mở khóa 1 tài khoản và chuyển qua xem tab **Ma trận phân quyền RBAC** và **Nhật ký kiểm toán (Audit Logs)**. | *"Tại màn hình Quản trị viên (mã AD02), em xây dựng đầy đủ chức năng tìm kiếm, lọc theo 4 vai trò RBAC, thêm và chỉnh sửa tài khoản có kiểm tra hợp lệ Form Validation chặt chẽ, khóa hoặc mở khóa tài khoản và tự động ghi vết toàn bộ thao tác vào Nhật ký kiểm toán Audit Logs."* |
| **1:20 – 1:50** | Nhìn xuống góc dưới thanh Sidebar bên trái mục **Chế độ thị sát (View-As)**:<br>1. Bấm chọn **Nhân sự mới** $\rightarrow$ trên thanh điều khiển màu tím trên cùng, bấm hộp chọn đổi từ `Nguyễn Văn An (NH01)` sang `Lê Hoàng Nam (NH02)` để thấy dữ liệu đổi theo từng người.<br>2. Bấm nút **Thoát Thị sát** để quay về trang Admin. | *"Đặc biệt, em đã phát triển tính năng Chế độ thị sát đa người dùng (View-As), cho phép Admin và HR lựa chọn xem trực tiếp góc nhìn của bất kỳ Nhân viên mới nào trong 6 nhân sự hoặc bất kỳ Người hướng dẫn nào trong 8 Mentor ngay trên thanh điều khiển phía trên cùng."* |

### Phần 3.2: Giải thích Mã nguồn trong VS Code (1:50 – 2:45)

| Thời gian | Thao tác trong VS Code | Lời thoại gợi ý |
| :--- | :--- | :--- |
| **1:50 – 2:20** | Nhấn `Alt + Tab` sang VS Code, mở tab [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html):<br>• Nhấn `Ctrl + G` gõ **`814`** (`function renderTable()`)<br>• Nhấn `Ctrl + G` gõ **`912`** (`function initCharts()`) | *"Về phần mã nguồn trong file `hr-dashboard.html`, hàm `renderTable()` ở dòng 814 quét dữ liệu tiến độ và nhiệm vụ quá hạn để chấm điểm rủi ro AI-3 cho từng nhân sự, còn hàm `initCharts()` ở dòng 912 khởi tạo và cập nhật 2 biểu đồ thống kê bằng thư viện Chart.js."* |
| **2:20 – 2:45** | Chuyển sang tab [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html):<br>• Nhấn `Ctrl + G` gõ **`1526`** (`function renderUserTable()`)<br>• Nhấn `Ctrl + G` gõ **`1872`** (`function impersonateSpecificPerson()`)<br>• Nhấn `Ctrl + G` gõ **`2128`** (`function saveUserForm()`) | *"Trong file `admin-user-management.html`, hàm `renderUserTable()` tại dòng 1526 hiển thị danh sách tài khoản, hàm `impersonateSpecificPerson()` ở dòng 1872 xử lý chuyển đổi đa người dùng trong Chế độ thị sát, và hàm `saveUserForm()` ở dòng 2128 kiểm tra hợp lệ dữ liệu Form Validation trước khi lưu vào LocalStorage và ghi nhận Audit Logs."* |

### Phần 3.3: Sửa Code Trực tiếp – Live Coding trên Video 3 (2:45 – 3:30)

1. Trong VS Code, tại file [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html#L208), nhấn **`Ctrl + G`** gõ **`208`** (dòng `<h1 class="text-base font-bold text-slate-900">Quản trị Tài khoản & Phân quyền</h1>`).
2. Sửa trực tiếp dòng chữ thành:
   ```html
   <h1 class="text-base font-bold text-slate-900">Quản trị Tài khoản & Phân quyền – Hệ thống OnboardAI</h1>
   ```
3. Nhấn **`Ctrl + S`** lưu file $\rightarrow$ `Alt + Tab` sang trình duyệt (`http://localhost:8080/admin-user-management.html`) nhấn **`F5`** tải lại trang $\rightarrow$ chỉ chuột vào tiêu đề mới hiển thị ngay!
4. **Lời thoại kết thúc Video 3:** *"Bây giờ em sửa trực tiếp tiêu đề tại dòng 208 của file `admin-user-management.html`, lưu lại và tải lại trình duyệt. Tiêu đề đã được cập nhật ngay lập tức. Em xin cảm ơn thầy/cô đã theo dõi chuỗi 3 video trình bày của em ạ!"* *(Bấm Stop Recording)*.
