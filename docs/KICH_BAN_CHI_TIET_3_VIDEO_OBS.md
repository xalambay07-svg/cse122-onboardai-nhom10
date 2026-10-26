# KỊCH BẢN SIÊU CHI TIẾT QUAY 03 VIDEO OBS CÁ NHÂN – SV1: NGUYỄN GIA HUY (MSV: 2551170897)

> **Dự án:** BTL-20 – **OnboardAI**: Nền tảng Hội nhập Nhân sự Thông minh (Nhóm 10)  
> **Sinh viên thực hiện:** **Nguyễn Gia Huy – MSV: `2551170897` (Trưởng nhóm – SV1)**  
> **Đặc điểm kịch bản:**  
> - **100% độc lập với SV2:** Chỉ quay đúng **6 màn hình do anh Huy phụ trách** (`index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`, `hr-dashboard.html`, `admin-user-management.html`).  
> - **Chia nhỏ từng bước 15–20 giây:** Ghi rõ **Bấm nút tên gì**, **Gõ chữ gì**, **Nhấn phím tắt nào (`Ctrl + G`, `Ctrl + S`, `F5`)** và **Đọc nguyên văn câu thoại nào**.

---

## 🛠️ BƯỚC CHUẨN BỊ CHUNG TRƯỚC KHI BẤM "START RECORDING" (CHỈ MẤT 1 PHÚT)

1. **Trong phần mềm OBS Studio (khung `Sources`):**
   - **`Display Capture`:** Quay toàn màn hình (`1920x1080`).
   - **`Video Capture Device` (Webcam):** Đặt khung camera ở **góc dưới bên phải** màn hình (rõ mặt người trình bày).
   - **`Audio Input Capture` (Micro):** Kiểm tra thanh âm lượng nhảy màu xanh khi nói thử.
   - **Định dạng file:** Vào `Settings` $\rightarrow$ `Output` $\rightarrow$ `Recording Format` chọn **`.mp4`**.
2. **Mở sẵn 2 cửa sổ để nhấn `Alt + Tab` chuyển qua lại tức thì:**
   - **Cửa sổ 1 (Trình duyệt Edge/Chrome):** Mở sẵn `http://localhost:8080/index.html`
   - **Cửa sổ 2 (VS Code):** Mở sẵn thư mục dự án `onboardai-btl20` và bật sẵn 6 tab file của anh theo đúng thứ tự:
     1. [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html)
     2. [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html)
     3. [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html)
     4. [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html)
     5. [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html)
     6. [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html)

---

# 🎬 VIDEO OBS SỐ 01: TRANG CHỦ (`index.html`) & DASHBOARD NHÂN SỰ MỚI (`newhire-onboarding-dashboard.html`)

- **Thời lượng:** ~3 phút 30 giây
- **Chuẩn bị trước khi bấm quay Video 1:**
  - Trên **Trình duyệt:** Đang đứng ở đầu trang `http://localhost:8080/index.html`
  - Trong **VS Code:** Đang mở sẵn 2 tab [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html) và [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html).

### Phần 1.1: Demo Giao diện & Tương tác trên Trình duyệt (0:00 – 1:45)

| Bước & Thời gian | Thao tác chuột / bàn phím cụ thể | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 1**<br>*(0:00 – 0:20)* | • Bấm **Start Recording** trên OBS.<br>• Di chuột quanh phần tiêu đề **Hero bên trái** (`Hành trình hội nhập nhân sự mới thông minh & liền mạch`) và khung **Live UI Dashboard bên phải** trên trang `index.html`. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897, trưởng nhóm 10. Trong Video OBS số 1 của cá nhân em, em xin trình bày 2 màn hình do em thiết kế và lập trình là Trang chủ `index.html` và Bảng điều khiển Nhân sự mới `newhire-onboarding-dashboard.html`."* |
| **Bước 2**<br>*(0:20 – 0:40)* | • Lăn chuột từ từ xuống khu vực **Mỗi vai trò một không gian làm việc riêng (4 thẻ vai trò)**.<br>• Lăn tiếp xuống khu vực **Bộ 3 tính năng AI** và **4 Cột mốc Huy hiệu**.<br>• Lăn lên lại phần **4 thẻ vai trò**, bấm vào dòng chữ xanh **`Mở Dashboard Nhân sự mới ->`** ở thẻ đầu tiên. | *"Trên trang chủ `index.html`, em xây dựng phần Hero trực quan kèm khung mô phỏng Live UI, giới thiệu kiến trúc phân quyền 4 vai trò RBAC, bộ 3 tính năng AI và 4 cột mốc huy hiệu 60 ngày thử việc. Bây giờ em bấm mở trực tiếp vào Bảng điều khiển của nhân sự mới."* |
| **Bước 3**<br>*(0:40 – 1:05)* | • Tại trang `newhire-onboarding-dashboard.html`:<br>• Di chuột chỉ vào **Vòng tròn tiến độ 65%** và dãy **4 Huy hiệu cột mốc** (*Tân binh, Tự lập, Hòa nhập, Chính thức*).<br>• Kéo nhẹ xuống chỉ vào danh sách **Việc cần làm hôm nay** ở cột bên trái (tích thử hoặc chỉ vào nhiệm vụ). | *"Tại màn hình Dashboard Nhân sự mới mã NH01, hệ thống hiển thị lời chào cá nhân hóa theo nhân sự đang đăng nhập, tỷ lệ phần trăm tiến độ tổng thể, bộ sưu tập 4 huy hiệu cột mốc và danh sách các đầu việc ưu tiên cần hoàn thành trong ngày."* |
| **Bước 4**<br>*(1:05 – 1:25)* | • Nhìn sang **cột bên phải** mục **NGƯỜI ĐỒNG HÀNH (MENTOR)**:<br>• Bấm vào nút **`Xem 8 Mentor`** (ở góc trên phải của thẻ Mentor) hoặc nút **`Xem giới thiệu 8 Mentor & Tự lựa chọn`**.<br>• Khi cửa sổ Modal 8 Mentor hiện ra: lướt chuột qua các thẻ Mentor có ảnh chân dung, điểm tương thích `%`, số điện thoại, Zalo $\rightarrow$ bấm nút **`Chọn làm Người đồng hành`** ở 1 Mentor bất kỳ. | *"Ở cột bên phải là tính năng Người đồng hành do em phát triển: hệ thống dựa vào vị trí công việc và phòng ban của nhân sự mới để chấm điểm tương thích AI và gợi ý 8 Mentor kèm ảnh chân dung, số điện thoại và Zalo. Nhân sự mới có thể xem hồ sơ chi tiết và tự chọn người đồng hành phù hợp nhất."* |
| **Bước 5**<br>*(1:25 – 1:45)* | • Sau khi chọn Mentor, bấm vào nút màu xanh **`Nhắn tin trực tiếp`** (hoặc bấm vào hộp **`Tin nhắn gần nhất từ Mentor`**).<br>• Khi cửa sổ Chat với Mentor mở ra: bấm vào 1 nút câu hỏi gợi ý nhanh bên dưới (hoặc gõ `"Em chào chị, nhờ chị hướng dẫn em cấu hình Git ạ"`) rồi bấm **Gửi**.<br>• Chờ 1 giây để tin nhắn trả lời của Mentor hiện ra, sau đó đóng cửa sổ Chat. | *"Sau khi chọn Mentor, nhân sự mới có thể bấm Nhắn tin trực tiếp ngay trên Dashboard. Khi em gửi tin nhắn hoặc chọn câu hỏi nhanh, hệ thống tự động sinh câu trả lời theo đúng chuyên môn của Mentor đó và lưu toàn bộ lịch sử trò chuyện vào LocalStorage."* |

### Phần 1.2: Giải thích Mã nguồn trong VS Code (1:45 – 2:40)

| Bước & Thời gian | Thao tác phím tắt trong VS Code | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 6**<br>*(1:45 – 2:05)* | • Nhấn **`Alt + Tab`** chuyển sang **VS Code**.<br>• Chọn tab [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html).<br>• Nhấn **`Ctrl + G`**, gõ **`110`** rồi nhấn `Enter` $\rightarrow$ Bôi đen nhẹ từ dòng `117` đến `155` (phần Hero & Khung cửa sổ Live UI). | *"Tiếp theo em xin giải thích mã nguồn trong VS Code. Trong file `index.html` từ dòng 110, em sử dụng hệ thống lưới 12 cột của Tailwind CSS để dựng bố cục Hero 2 cột cân đối, kết hợp các lớp CSS animation cho thẻ nổi và linh vật Onbi."* |
| **Bước 7**<br>*(2:05 – 2:25)* | • Bấm sang tab [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html).<br>• Nhấn **`Ctrl + G`**, gõ **`1215`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function buildPersonalizedMentorCatalog()`. | *"Trong file `newhire-onboarding-dashboard.html` tại dòng 1215, em viết hàm `buildPersonalizedMentorCatalog()` để đối chiếu phòng ban và vị trí của nhân sự mới với danh sách 8 Mentor, từ đó tính điểm phần trăm tương thích AI và sắp xếp thứ tự ưu tiên."* |
| **Bước 8**<br>*(2:25 – 2:40)* | • Vẫn trong file `newhire-onboarding-dashboard.html`, nhấn **`Ctrl + G`**, gõ **`1482`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function generateSmartMentorReply()`. | *"Và tại dòng 1482, hàm `generateSmartMentorReply()` cùng hàm `saveMentorChatHistory()` xử lý việc phân tích từ khóa câu hỏi của nhân viên mới để phản hồi tự động và lưu trữ hội thoại vào LocalStorage."* |

### Phần 1.3: Sửa Code Trực tiếp – Live Coding trên Video 1 (2:40 – 3:20)

| Bước & Thời gian | Thao tác sửa code trực tiếp | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 9**<br>*(2:40 – 3:20)* | 1. Vẫn trong [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html#L168), nhấn **`Ctrl + G`**, gõ **`168`** rồi nhấn `Enter`.<br>2. Tại dòng 168 đang là:<br>`<span>Bảng điều khiển Hội nhập Cá nhân</span>`<br>Anh gõ thêm vào cuối thành:<br>`<span>Bảng điều khiển Hội nhập Cá nhân – Nguyễn Gia Huy (2551170897)</span>`<br>3. Nhấn **`Ctrl + S`** để lưu file.<br>4. Nhấn **`Alt + Tab`** quay lại trình duyệt (đang ở trang `newhire-onboarding-dashboard.html`), nhấn phím **`F5`** tải lại trang.<br>5. Di chuột chỉ vào dòng tiêu đề trên cùng góc trái vừa đổi thành **`Bảng điều khiển Hội nhập Cá nhân – Nguyễn Gia Huy (2551170897)`**!<br>6. Bấm **Stop Recording** trên OBS. | *"Bây giờ em xin thực hiện chỉnh sửa mã nguồn trực tiếp tại dòng 168 của file `newhire-onboarding-dashboard.html`, thêm họ tên Nguyễn Gia Huy và mã sinh viên 2551170897 vào tiêu đề trang, sau đó nhấn Ctrl + S để lưu lại. Khi chuyển sang trình duyệt và nhấn F5 tải lại trang, tiêu đề mới đã được cập nhật ngay lập tức trên giao diện. Em xin kết thúc Video OBS số 1 tại đây ạ."* |

---

# 🎬 VIDEO OBS SỐ 02: CHECKLIST HỘI NHẬP 4 CHẶNG (`newhire-checklist.html`) & TRỢ LÝ ẢO ONBI (`newhire-ai-help.html` – AI-1)

- **Thời lượng:** ~3 phút 30 giây
- **Chuẩn bị trước khi bấm quay Video 2:**
  - Trên **Trình duyệt:** Đang mở sẵn trang `http://localhost:8080/newhire-checklist.html`
  - Trong **VS Code:** Đang mở sẵn 2 tab [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html) và [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html).

### Phần 2.1: Demo Giao diện & Tương tác trên Trình duyệt (0:00 – 1:45)

| Bước & Thời gian | Thao tác chuột / bàn phím cụ thể | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 1**<br>*(0:00 – 0:25)* | • Bấm **Start Recording** trên OBS.<br>• Tại trang `http://localhost:8080/newhire-checklist.html`:<br>• Bấm lần lượt vào 4 thẻ giai đoạn trên cùng: **`Chặng 1 • Ngày 1`**, **`Chặng 2 • Tuần 1`**, **`Chặng 3 • Tháng 1`**, **`Chặng 4 • Tháng 2`**, rồi bấm quay lại **`Chặng 2 • Tuần 1`**. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897. Trong Video OBS số 2 của cá nhân em, em xin trình bày màn hình Checklist Hội nhập 4 chặng `newhire-checklist.html` và màn hình Trợ lý ảo Onbi Hỏi đáp quy chế `newhire-ai-help.html`. Trên trang Checklist, em thiết kế lộ trình 60 ngày chia làm 4 chặng rõ ràng từ Ngày 1 đến Tháng 2."* |
| **Bước 2**<br>*(0:25 – 0:45)* | • Bấm vào ô tìm kiếm **`Tìm kiếm nhanh tên nhiệm vụ, từ khóa kỹ thuật...`**.<br>• Gõ chữ **`xyz123`** để màn hình hiện thông báo **`Không tìm thấy nhiệm vụ phù hợp`** kèm hình linh vật Onbi đang suy nghĩ (**Empty State**).<br>• Bấm vào nút **`Xóa bộ lọc`** ngay bên dưới để danh sách nhiệm vụ hiện lại bình thường. | *"Hệ thống hỗ trợ tìm kiếm theo từ khóa kết hợp lọc theo danh mục và trạng thái. Khi em nhập một từ khóa không tồn tại như `xyz123`, giao diện hiển thị trạng thái rỗng Empty State cùng linh vật Onbi và nút Xóa bộ lọc để khôi phục danh sách ngay lập tức."* |
| **Bước 3**<br>*(0:45 – 1:05)* | • Tích chọn vào ô vuông của 1 nhiệm vụ chưa làm (hoặc bấm nút **`Nộp minh chứng`** trên thẻ nhiệm vụ $\rightarrow$ nhập link mẫu `https://github.com/demo` rồi bấm **Lưu**).<br>• Chỉ chuột lên thanh phần trăm **`Tiến độ chặng hiện tại`** ở góc phải phía trên vừa tự động tăng lên. | *"Khi nhân sự mới đánh dấu hoàn thành nhiệm vụ hoặc đính kèm đường link nộp minh chứng, hệ thống sẽ tự động tính toán lại tỷ lệ phần trăm tiến độ của chặng hiện tại, mở khóa huy hiệu khi đạt 100% và lưu đồng bộ vào LocalStorage."* |
| **Bước 4**<br>*(1:05 – 1:45)* | • Nhìn sang thanh **Sidebar bên trái**, bấm vào mục **`Trợ lý Onbi (AI-1)`** để chuyển sang trang `http://localhost:8080/newhire-ai-help.html`.<br>• Bấm vào 1 nút câu hỏi gợi ý sẵn (ví dụ: **`Chế độ nghỉ phép năm`** hoặc **`Việc cần làm hôm nay của tôi`**): chỉ chuột vào hiệu ứng **Loading 3 chấm Onbi đang suy nghĩ**, sau đó chỉ vào nhãn **`Độ khớp cao`** và dòng **`Nguồn trích dẫn`** bên dưới câu trả lời.<br>• Tiếp theo, gõ vào ô chat câu: **`Xin cấp thêm màn hình rời 4K`** rồi nhấn `Enter` $\rightarrow$ chỉ vào khung **Chuyển tiếp câu hỏi cho HR** vừa xuất hiện. | *"Tiếp theo em chuyển sang màn hình Trợ lý ảo Onbi mã NH03, tích hợp mô-đun AI-1. Khi nhân sự mới bấm chọn hoặc nhập câu hỏi về quy chế công ty hay công việc trong ngày, Onbi hiển thị trạng thái Loading đang phân tích, sau đó gõ câu trả lời chi tiết kèm nhãn độ khớp và trích dẫn nguồn sổ tay minh bạch. Đặc biệt, khi em hỏi một vấn đề ngoài quy chế chuẩn như xin cấp màn hình rời 4K, AI-1 sẽ tự động nhận diện vùng câu hỏi chưa có tài liệu và hiển thị nút gửi yêu cầu chuyển tiếp trực tiếp cho bộ phận HR."* |

### Phần 2.2: Giải thích Mã nguồn trong VS Code (1:45 – 2:40)

| Bước & Thời gian | Thao tác phím tắt trong VS Code | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 5**<br>*(1:45 – 2:10)* | • Nhấn **`Alt + Tab`** chuyển sang **VS Code**.<br>• Chọn tab [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html).<br>• Nhấn **`Ctrl + G`**, gõ **`948`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function renderTasksList()`.<br>• Nhấn **`Ctrl + G`**, gõ **`1163`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function updatePhaseStats()`. | *"Về mặt mã nguồn, trong file `newhire-checklist.html` tại dòng 948, em xây dựng hàm `renderTasksList()` để lọc mảng nhiệm vụ theo chặng, danh mục, trạng thái và từ khóa tìm kiếm, đồng thời bật khối Empty State khi kết quả rỗng. Ở dòng 1163, hàm `updatePhaseStats()` tính toán lại tỷ lệ hoàn thành và kích hoạt thẻ ăn mừng mở khóa huy hiệu."* |
| **Bước 6**<br>*(2:10 – 2:40)* | • Bấm sang tab [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html).<br>• Nhấn **`Ctrl + G`**, gõ **`788`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function processAIResponse(query)`.<br>• Nhấn **`Ctrl + G`**, gõ **`852`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function typewriteHtml()`. | *"Trong file `newhire-ai-help.html` tại dòng 788, hàm `processAIResponse()` đóng vai trò là bộ máy quyết định của AI-1: chấm điểm từ khóa kết hợp tìm kiếm mờ Fuse.js và phân loại câu trả lời thành 3 vùng ngữ cảnh. Ở dòng 852, hàm `typewriteHtml()` sử dụng `TreeWalker` để tạo hiệu ứng gõ chữ từng ký tự mà không làm gãy cấu trúc thẻ HTML."* |

### Phần 2.3: Sửa Code Trực tiếp – Live Coding trên Video 2 (2:40 – 3:20)

| Bước & Thời gian | Thao tác sửa code trực tiếp | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 7**<br>*(2:40 – 3:20)* | 1. Vẫn trong [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html#L143), nhấn **`Ctrl + G`**, gõ **`143`** rồi nhấn `Enter`.<br>2. Tại dòng 143 đang là:<br>`<span class="truncate">Onbi &ndash; Trợ lý hội nhập</span>`<br>Anh sửa thành:<br>`<span class="truncate">Onbi &ndash; Trợ lý AI-1 của Nguyễn Gia Huy</span>`<br>3. Nhấn **`Ctrl + S`** để lưu file.<br>4. Nhấn **`Alt + Tab`** quay lại trình duyệt (đang ở trang `newhire-ai-help.html`), nhấn **`F5`** tải lại trang.<br>5. Chỉ chuột vào tiêu đề góc trên bên trái vừa đổi thành **`Onbi – Trợ lý AI-1 của Nguyễn Gia Huy`**!<br>6. Bấm **Stop Recording** trên OBS. | *"Bây giờ em thực hiện sửa trực tiếp mã nguồn tại dòng 143 của file `newhire-ai-help.html` thành `Onbi – Trợ lý AI-1 của Nguyễn Gia Huy` và nhấn Ctrl + S để lưu lại. Khi tải lại trình duyệt bằng phím F5, tiêu đề trên thanh Header đã được cập nhật ngay lập tức. Em xin kết thúc Video OBS số 2 tại đây ạ."* |

---

# 🎬 VIDEO OBS SỐ 03: BẢNG ĐIỀU KHIỂN HR (`hr-dashboard.html` – `Chart.js` & AI-3) & QUẢN TRỊ VIÊN ADMIN (`admin-user-management.html` – RBAC, AUDIT LOGS & VIEW-AS)

- **Thời lượng:** ~3 phút 45 giây
- **Chuẩn bị trước khi bấm quay Video 3:**
  - Trên **Trình duyệt:** Đang mở sẵn trang `http://localhost:8080/hr-dashboard.html`
  - Trong **VS Code:** Đang mở sẵn 2 tab [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html) và [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html).

### Phần 3.1: Demo Giao diện & Tương tác trên Trình duyệt (0:00 – 1:55)

| Bước & Thời gian | Thao tác chuột / bàn phím cụ thể | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 1**<br>*(0:00 – 0:30)* | • Bấm **Start Recording** trên OBS.<br>• Tại trang `http://localhost:8080/hr-dashboard.html`:<br>• Di chuột qua **4 thẻ KPI** trên cùng (*Đang Onboarding, Tiến độ TB Công ty, Có nguy cơ trễ hạn, Điểm nghẽn quy trình*).<br>• Chỉ chuột vào khối màu tím đậm **AI-3: Progress Risk Warning & Intervention Radar** và bấm nút **`AI Can thiệp nhanh 1-Click`** $\rightarrow$ Khi ngăn kéo (Drawer) bên phải trượt ra, bấm nút **`Gửi thông báo can thiệp ngay`** để hiện thông báo gửi thành công! | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897. Trong Video OBS số 3 của cá nhân em, em xin trình bày Phân hệ Nhân sự HR `hr-dashboard.html` và Phân hệ Quản trị hệ thống Admin `admin-user-management.html`. Trên màn hình HR Dashboard mã HR01, tầng đầu tiên hiển thị 4 chỉ số KPI toàn công ty. Ngay bên dưới là mô-đun AI-3 Risk Radar tự động quét và phát hiện các nhân sự có nguy cơ trễ hạn hoặc bị kẹt quyền IT. Chuyên viên HR chỉ cần bấm nút AI Can thiệp nhanh 1-Click để gửi thông điệp nhắc việc đã được AI soạn sẵn."* |
| **Bước 2**<br>*(0:30 – 0:50)* | • Cuộn xuống chỉ chuột vào **Biểu đồ cột** (*Tiến độ Onboarding theo Phòng ban*) và **Biểu đồ tròn** (*Cơ cấu trạng thái*) vẽ bằng **`Chart.js`**.<br>• Cuộn xuống bảng **Danh sách theo dõi chi tiết Nhân sự mới**, bấm thử các nút lọc nhanh hoặc gõ tìm kiếm tên nhân sự. | *"Ở tầng thứ ba, em tích hợp thư viện Chart.js để trực quan hóa tiến độ hội nhập theo từng phòng ban và tỷ lệ trạng thái bằng biểu đồ cột và biểu đồ tròn. Bên dưới là bảng theo dõi chi tiết hỗ trợ tìm kiếm, lọc theo phòng ban và nhắc việc từng cá nhân."* |
| **Bước 3**<br>*(0:50 – 1:25)* | • Bấm vào menu bên trái (hoặc chuyển sang địa chỉ `http://localhost:8080/admin-user-management.html`) để mở trang **Quản trị Tài khoản & Phân quyền (Mã AD02)**.<br>• Bấm nút màu xanh **`+ Thêm tài khoản`** ở góc phải $\rightarrow$ Khi bảng nhập liệu mở ra, **chưa điền gì cả mà bấm ngay nút `Lưu tài khoản`** ở dưới cùng để hiện các dòng chữ báo lỗi màu đỏ (**Form Validation**).<br>• Bấm đóng bảng nhập liệu, sau đó bấm lần lượt qua 2 tab kế bên: **`Ma trận phân quyền RBAC`** và **`Nhật ký hoạt động`** (Audit Logs). | *"Tiếp theo em chuyển sang phân hệ Quản trị viên `admin-user-management.html` mã AD02. Khi em bấm Thêm tài khoản và bấm Lưu ngay khi đang để trống, hệ thống kích hoạt cơ chế Form Validation kiểm tra hợp lệ dữ liệu và báo lỗi trực quan dưới từng trường thông tin. Ngoài danh sách tài khoản, Admin còn có tab Ma trận phân quyền RBAC 4 tầng và tab Nhật ký hoạt động Audit Logs ghi vết mọi thao tác tạo, sửa, khóa tài khoản."* |
| **Bước 4**<br>*(1:25 – 1:55)* | • Nhìn xuống góc dưới cùng của thanh **Sidebar bên trái**, mục **CHẾ ĐỘ THỊ SÁT (VIEW-AS)**:<br>• Bấm vào dòng **`Góc nhìn Nhân sự mới (New Hire)`** $\rightarrow$ Hệ thống chuyển sang Dashboard kèm **thanh điều khiển màu tím trên cùng**.<br>• Trên thanh màu tím trên cùng, bấm vào hộp chọn nhân sự đang là `Nguyễn Văn An (NH01)` và đổi sang **`Lê Hoàng Nam (NH02)`** hoặc **`Trần Thị Bình (NH03)`** $\rightarrow$ Giao diện bên dưới tự động đổi theo đúng hồ sơ của người đó.<br>• Bấm nút **`Thoát Thị sát`** ở góc phải thanh màu tím để quay trở lại trang Admin. | *"Đặc biệt, em đã xây dựng tính năng Chế độ thị sát đa người dùng View-As ở góc dưới Sidebar. Khi Admin bấm chọn Góc nhìn Nhân sự mới, một thanh điều khiển màu tím sẽ xuất hiện ở trên cùng, cho phép Admin chuyển đổi tức thì giữa từng nhân sự mới như Nguyễn Văn An, Lê Hoàng Nam hay Trần Thị Bình để kiểm tra thực tế giao diện và tiến độ của đúng cá nhân đó, sau đó bấm Thoát Thị sát để quay về trang Quản trị."* |

### Phần 3.2: Giải thích Mã nguồn trong VS Code (1:55 – 2:45)

| Bước & Thời gian | Thao tác phím tắt trong VS Code | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 5**<br>*(1:55 – 2:20)* | • Nhấn **`Alt + Tab`** chuyển sang **VS Code**.<br>• Chọn tab [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html).<br>• Nhấn **`Ctrl + G`**, gõ **`814`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function renderTable()`.<br>• Nhấn **`Ctrl + G`**, gõ **`912`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function initCharts()`. | *"Về mặt mã nguồn, trong file `hr-dashboard.html` tại dòng 814, hàm `renderTable()` phân tích dữ liệu tiến độ và các nhiệm vụ quá hạn để gắn nhãn cảnh báo AI-3 cho từng nhân sự. Tại dòng 912, hàm `initCharts()` khởi tạo biểu đồ cột và biểu đồ Doughnut bằng thư viện Chart.js."* |
| **Bước 6**<br>*(2:20 – 2:45)* | • Bấm sang tab [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html).<br>• Nhấn **`Ctrl + G`**, gõ **`1526`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function renderUserTable()`.<br>• Nhấn **`Ctrl + G`**, gõ **`1872`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function impersonateSpecificPerson()`.<br>• Nhấn **`Ctrl + G`**, gõ **`2128`** rồi nhấn `Enter` $\rightarrow$ Chỉ chuột vào hàm `function saveUserForm()`. | *"Trong file `admin-user-management.html`, hàm `renderUserTable()` ở dòng 1526 kết xuất danh sách tài khoản theo bộ lọc RBAC; hàm `impersonateSpecificPerson()` ở dòng 1872 xử lý chuyển đổi đa người dùng trong Chế độ thị sát; và hàm `saveUserForm()` ở dòng 2128 thực hiện kiểm tra hợp lệ Form Validation trước khi lưu vào LocalStorage và ghi nhận vào Audit Logs."* |

### Phần 3.3: Sửa Code Trực tiếp – Live Coding trên Video 3 (2:45 – 3:30)

| Bước & Thời gian | Thao tác sửa code trực tiếp | Lời thoại đọc nguyên văn |
| :--- | :--- | :--- |
| **Bước 7**<br>*(2:45 – 3:30)* | 1. Vẫn trong [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html#L208), nhấn **`Ctrl + G`**, gõ **`208`** rồi nhấn `Enter`.<br>2. Tại dòng 208 đang là:<br>`<h1 class="text-base font-bold text-slate-900">Quản trị Tài khoản & Phân quyền</h1>`<br>Anh sửa thành:<br>`<h1 class="text-base font-bold text-slate-900">Quản trị Tài khoản & Phân quyền – Nguyễn Gia Huy</h1>`<br>3. Nhấn **`Ctrl + S`** để lưu file.<br>4. Nhấn **`Alt + Tab`** quay lại trình duyệt (đang ở trang `admin-user-management.html`), nhấn **`F5`** tải lại trang.<br>5. Chỉ chuột vào tiêu đề góc trên bên trái vừa đổi thành **`Quản trị Tài khoản & Phân quyền – Nguyễn Gia Huy`**!<br>6. Bấm **Stop Recording** trên OBS. | *"Cuối cùng, em thực hiện sửa trực tiếp tiêu đề tại dòng 208 của file `admin-user-management.html`, thêm tên Nguyễn Gia Huy và nhấn Ctrl + S lưu lại. Khi tải lại trình duyệt bằng phím F5, tiêu đề trang Quản trị đã cập nhật ngay lập tức. Em xin cảm ơn thầy/cô đã lắng nghe chuỗi 3 video báo cáo của em ạ!"* |
