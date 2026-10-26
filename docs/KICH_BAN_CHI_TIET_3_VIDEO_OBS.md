# KỊCH BẢN QUAY 03 VIDEO OBS (THỜI LƯỢNG ~10 PHÚT / VIDEO – CÓ GÕ CODE TRỰC TIẾP & GIẢI THÍCH TỪNG DÒNG)
## DÀNH RIÊNG CHO SV1: NGUYỄN GIA HUY (MSV: 2551170897)

> **Dự án:** BTL-20 – **OnboardAI**: Nền tảng Hội nhập Nhân sự Thông minh (Nhóm 10)  
> **Sinh viên thực hiện:** **Nguyễn Gia Huy – MSV: `2551170897` (Trưởng nhóm – SV1)**  
> **Thời lượng chuẩn:** **8 – 10 phút / 1 video** (Tổng 3 video độc lập của riêng SV1, không liên quan đến SV2).  
> **Cấu trúc chuẩn 10 phút mỗi video (Đáp ứng 100% yêu cầu "Trực tiếp code và giải thích"):**
> 1. **Phút 0:00 – 2:30:** Giới thiệu + Demo luồng nghiệp vụ thực tế trên Trình duyệt & kiểm tra `F12 LocalStorage`.
> 2. **Phút 2:30 – 5:00:** Mở VS Code giải thích kiến trúc HTML/Tailwind CSS và các hàm JavaScript trọng tâm đã xây dựng.
> 3. **Phút 5:00 – 8:30 (TRỌNG TÂM):** **Trực tiếp gõ mới 1 đoạn code HTML/JS thực tế (khoảng 10–12 dòng)** ngay trên VS Code, vừa gõ từng dòng vừa giải thích ý nghĩa câu lệnh.
> 4. **Phút 8:30 – 10:00:** Nhấn `Ctrl + S` lưu file $\rightarrow$ Qua trình duyệt nhấn `F5` $\rightarrow$ **Chạy thử trực tiếp tính năng vừa mới gõ code xong** để chứng minh code hoạt động thật 100%!

---

# 🎬 VIDEO OBS SỐ 01 (10 PHÚT): TRANG CHỦ (`index.html`) & DASHBOARD NHÂN SỰ MỚI (`newhire-onboarding-dashboard.html`)
### *Chủ đề Live Coding: Trực tiếp code nút bấm Tailwind CSS + Hàm JavaScript `showQuickProgressSummary()` thống kê nhiệm vụ từ LocalStorage*

- **Chuẩn bị trước khi bấm Start Recording Video 1:**
  - **Trình duyệt:** Đang đứng ở đầu trang `http://localhost:8080/index.html`
  - **VS Code:** Mở sẵn 2 tab [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html) và [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html).

---

### PHẦN 1.1: Demo Giao diện & Nghiệp vụ trên Trình duyệt (Phút 0:00 – 2:30)

| Mốc thời gian | Thao tác chuột / bàn phím | Lời thoại đọc theo (Chậm rãi, rõ ràng) |
| :--- | :--- | :--- |
| **0:00 – 0:45** | • Bấm **Start Recording** trên OBS.<br>• Tại `http://localhost:8080/index.html`: Di chuột chỉ vào tiêu đề Hero bên trái,3 chỉ số nhanh bên dưới và khung cửa sổ mô phỏng Live UI bên phải.<br>• Cuộn từ từ xuống phần **4 không gian làm việc RBAC**, **Bộ 3 tính năng AI** và **4 Cột mốc Huy hiệu**. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897, trưởng nhóm 10 thực hiện đề tài BTL-20 OnboardAI. Trong Video OBS số 1 này, em xin trình bày và trực tiếp code trên 2 màn hình do em phụ trách là Trang giới thiệu `index.html` và Bảng điều khiển Nhân sự mới `newhire-onboarding-dashboard.html`. Đầu tiên trên trang chủ, em thiết kế khu vực Hero 2 cột hiện đại, giới thiệu 4 phân hệ theo quyền RBAC, bộ 3 mô-đun AI và 4 cột mốc huy hiệu trong 60 ngày thử việc."* |
| **0:45 – 1:30** | • Cuộn lên phần 4 vai trò, bấm vào **`Mở Dashboard Nhân sự mới ->`** để sang trang `newhire-onboarding-dashboard.html`.<br>• Chỉ chuột vào khối **Gợi ý từ Onbi (Ngày 3 trong lộ trình)**, thanh **Tiến độ hội nhập tổng thể**, dãy **4 Huy hiệu cột mốc** và danh sách **Việc cần làm hôm nay**. | *"Khi chuyển vào màn hình Dashboard Nhân sự mới mã NH01, hệ thống hiển thị thẻ tóm tắt mục tiêu trong ngày từ trợ lý Onbi, thanh tiến độ tổng thể, bộ 4 huy hiệu cột mốc từ Tân binh đến Thành viên chính thức, và danh sách công việc ưu tiên cần hoàn thành trong ngày."* |
| **1:30 – 2:30** | • Nhìn sang cột bên phải mục **NGƯỜI ĐỒNG HÀNH (MENTOR)**.<br>• Bấm nút **`Xem 8 Mentor`** (hoặc **`Xem giới thiệu 8 Mentor & Tự lựa chọn`**): lướt qua danh sách 8 Mentor có điểm tương thích AI (`98%`, `95%`...), số điện thoại, Zalo $\rightarrow$ bấm **`Chọn làm Người đồng hành`** ở 1 Mentor.<br>• Bấm tiếp nút **`Nhắn tin trực tiếp`** $\rightarrow$ bấm chọn 1 câu hỏi gợi ý nhanh để gửi tin nhắn và nhận phản hồi tự động từ Mentor, sau đó đóng cửa sổ chat. | *"Ở cột bên phải là tính năng Đề xuất và Kết nối Người đồng hành do em xây dựng. Hệ thống phân tích vị trí công việc của nhân sự mới để chấm điểm tương thích AI và gợi ý 8 Mentor kèm ảnh chân dung, số điện thoại và Zalo. Sau khi chọn người đồng hành, nhân sự mới có thể mở khung Nhắn tin trực tiếp ngay trên Dashboard để trao đổi chuyên môn và toàn bộ lịch sử chat được lưu trữ vào LocalStorage."* |

---

### PHẦN 1.2: Giải thích Mã nguồn đã xây dựng trong VS Code (Phút 2:30 – 5:00)

| Mốc thời gian | Thao tác trong VS Code | Lời thoại giải thích code |
| :--- | :--- | :--- |
| **2:30 – 3:30** | • Nhấn **`Alt + Tab`** sang **VS Code**, mở tab [`index.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/index.html).<br>• Nhấn **`Ctrl + G`**, gõ **`108`** rồi nhấn `Enter`.<br>• Chỉ chuột giải thích dòng `108` (`grid-cols-1 lg:grid-cols-12`), dòng `117` (thẻ `<h1>` chia 2 dòng `block`), dòng `137` (lưới 3 cột chỉ số `grid-cols-3`) và dòng `156` (khung cửa sổ mô phỏng Dashboard). | *"Bây giờ em xin giải thích cấu trúc mã nguồn trong VS Code. Tại file `index.html` dòng 108, em sử dụng CSS Grid 12 cột của Tailwind (`grid-cols-1 lg:grid-cols-12`) để chia đôi màn hình trên Desktop và tự động xếp chồng 1 cột trên Mobile. Ở dòng 117, thẻ `h1` được tách thành 2 thẻ `span` có class `block` để giữ trọn vẹn cụm từ tiếng Việt. Bên dưới dòng 137 là lưới `grid-cols-3` hiển thị 3 chỉ số cốt lõi, còn từ dòng 156 là khung cửa sổ trình duyệt mô phỏng Live UI."* |
| **3:30 – 5:00** | • Chuyển sang tab [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html).<br>• Nhấn **`Ctrl + G`**, gõ **`1215`** $\rightarrow$ chỉ vào hàm `buildPersonalizedMentorCatalog()`, rồi nhìn xuống ngay **dòng `1270`** là hàm `saveMentorChatHistory()`.<br>• Nhấn **`Ctrl + G`**, gõ **`1482`** $\rightarrow$ chỉ vào hàm `generateSmartMentorReply()`, và cuộn nhẹ xuống **dòng `1524`–`1533`** (`appendAndReplyMentorMessage` gọi `saveMentorChatHistory`). | *"Trong file `newhire-onboarding-dashboard.html`, tại dòng 1215 là hàm `buildPersonalizedMentorCatalog()` tính điểm tương thích `matchScore` cho 8 Mentor, và ngay bên dưới tại dòng 1270 là hàm `saveMentorChatHistory()` lưu hội thoại vào LocalStorage. Còn tại dòng 1482, hàm `generateSmartMentorReply()` phân tích tin nhắn của nhân viên mới để tạo câu trả lời tự động và hàm `appendAndReplyMentorMessage()` ở dòng 1524 sẽ hiển thị tin nhắn lên khung chat."* |

---

### PHẦN 1.3: TRỰC TIẾP GÕ CODE (LIVE CODING) & VỪA GÕ VỪA GIẢI THÍCH (Phút 5:00 – 8:30)

> 💡 **Mục tiêu:** Anh sẽ trực tiếp gõ thêm **1 nút bấm thống kê nhanh bằng Tailwind CSS** ở dòng `219` và **1 hàm JavaScript `showQuickProgressSummary()`** ở cuối file `newhire-onboarding-dashboard.html` để đếm trực tiếp số nhiệm vụ đã hoàn thành trong `LocalStorage`.

#### Bước A (Phút 5:00 – 6:30): Trực tiếp gõ nút bấm HTML + Tailwind CSS tại dòng `219`
1. Trong file [`newhire-onboarding-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-onboarding-dashboard.html#L218), nhấn **`Ctrl + G`**, gõ **`218`** rồi nhấn `Enter` (ngay sau thẻ `</a>` của nút `Hỏi nhanh Onbi`).
2. Nhấn `Enter` xuống dòng mới (dòng `219`) và **vừa gõ chậm rãi 3 dòng HTML sau vừa đọc lời thoại giải thích**:
   ```html
            <button type="button" onclick="showQuickProgressSummary()" class="inline-flex items-center px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition cursor-pointer">
              <span>Báo cáo nhanh tiến độ (SV1 - Nguyễn Gia Huy)</span>
            </button>
   ```
- **Lời thoại vừa gõ vừa nói (Phút 5:00 – 6:30):**
  > *"Bây giờ em xin trực tiếp code thêm một chức năng mới ngay trên màn hình Dashboard Nhân sự mới: đó là nút 'Báo cáo nhanh tiến độ' giúp thống kê tức thì số nhiệm vụ đã hoàn thành và số nhiệm vụ còn lại từ LocalStorage. Tại dòng 219 trong khối nút hành động của AI Daily Briefing, em gõ thẻ `<button type="button">` gắn sự kiện `onclick="showQuickProgressSummary()"`. Về định dạng giao diện, em sử dụng các class của Tailwind CSS gồm `inline-flex items-center` để căn giữa nội dung theo chiều dọc, `px-3.5 py-2 rounded-xl` để tạo khoảng đệm và bo tròn góc 12px đồng bộ với các nút bên cạnh, kết hợp tông màu xanh ngọc `bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200`. Bên trong em đặt thẻ `<span>` ghi rõ 'Báo cáo nhanh tiến độ (SV1 - Nguyễn Gia Huy)'."*

#### Bước B (Phút 6:30 – 8:30): Trực tiếp gõ hàm JavaScript `showQuickProgressSummary()` ở dòng `1998` (ngay sau `});` và ngay trên `</script>`)
1. Nhìn vào ảnh màn hình cuối file `newhire-onboarding-dashboard.html`: anh đặt chuột vào **cuối dòng `1998`** (ngay sau dấu `});`), nhấn **`Enter`** để tạo dòng trống mới (nằm giữa `});` và `</script>`).
2. Tại dòng mới vừa tạo (dòng `1999`, ngay phía trên `</script>`), anh **vừa gõ chậm rãi hàm JavaScript (7 dòng) sau đây vừa giải thích từng dòng**:
   ```javascript
    function showQuickProgressSummary() {
      const profile = getEffectiveNewHireProfile();
      const allTasks = API.getAll('tasks') || [];
      const myTasks = allTasks.filter(t => t.newHireId === profile.id);
      const completedCount = myTasks.filter(t => t.status === 'completed').length;
      const percent = myTasks.length > 0 ? Math.round((completedCount / myTasks.length) * 100) : 0;
      alert(`BÁO CÁO TIẾN ĐỘ (SV1 - Nguyễn Gia Huy - 2551170897):\n- Nhân sự: ${profile.name} (${profile.id})\n- Đã hoàn thành: ${completedCount}/${myTasks.length} nhiệm vụ (${percent}%)`);
    }
   ```
- **Lời thoại vừa gõ vừa nói (Phút 6:30 – 8:30):**
  > *"Tiếp theo, em đặt con trỏ ngay sau dấu đóng `});` ở dòng 1998 (ngay phía trên thẻ `</script>`) để trực tiếp viết hàm toàn cục `showQuickProgressSummary()`.
  > - Ở dòng đầu tiên trong thân hàm, em gọi `const profile = getEffectiveNewHireProfile()` để lấy thông tin hồ sơ nhân sự mới đang đăng nhập hiện tại.
  > - Ở dòng thứ hai, em gọi `API.getAll('tasks')` để lấy toàn bộ danh sách công việc đang lưu trong LocalStorage.
  > - Ở dòng thứ ba, em dùng phương thức `.filter(t => t.newHireId === profile.id)` để lọc ra đúng các nhiệm vụ thuộc về nhân sự đó.
  > - Ở dòng thứ tư và thứ năm, em dùng `.filter(t => t.status === 'completed').length` để đếm số nhiệm vụ đã hoàn thành và dùng `Math.round()` tính tỷ lệ phần trăm.
  > - Cuối cùng, em dùng hàm `alert()` hiển thị kết quả tổng hợp kèm họ tên Nguyễn Gia Huy và mã sinh viên 2551170897 lên màn hình."*

---

### PHẦN 1.4: Lưu File, Chạy thử tính năng vừa Code & Kiểm tra F12 (Phút 8:30 – 10:00)

1. Nhấn **`Ctrl + S`** để lưu file `newhire-onboarding-dashboard.html`.
2. Nhấn **`Alt + Tab`** chuyển sang trình duyệt (`http://localhost:8080/newhire-onboarding-dashboard.html`) và nhấn **`F5`** tải lại trang.
3. Chỉ chuột vào nút màu xanh ngọc **`Báo cáo nhanh tiến độ (SV1 - Nguyễn Gia Huy)`** vừa xuất hiện ngay dưới lời chào đầu trang $\rightarrow$ **Bấm trực tiếp vào nút đó!**
4. Hộp thoại thông báo hiện lên rõ ràng số nhiệm vụ đã hoàn thành / còn lại và tỷ lệ `%` $\rightarrow$ Bấm **OK**.
5. Nhấn phím **`F12`** mở DevTools $\rightarrow$ chọn tab **`Application`** $\rightarrow$ **`Local Storage`** $\rightarrow$ bấm vào `http://localhost:8080` để giảng viên thấy dữ liệu `onboardai_db` đang lưu trữ thực tế.
6. **Lời thoại kết thúc Video 1:**
   > *"Sau khi nhấn Ctrl + S lưu file và nhấn F5 tải lại trình duyệt, nút bấm 'Báo cáo nhanh tiến độ (SV1 - Nguyễn Gia Huy)' đã xuất hiện ngay trên giao diện. Khi em bấm vào nút, hàm JavaScript vừa viết đã truy xuất trực tiếp dữ liệu từ LocalStorage, tính toán chính xác số nhiệm vụ đã hoàn thành, số nhiệm vụ còn lại và tỷ lệ phần trăm. Em xin kết thúc Video OBS số 1 tại đây ạ."* *(Bấm Stop Recording)*.

---
---

# 🎬 VIDEO OBS SỐ 02 (10 PHÚT): CHECKLIST 4 CHẶNG (`newhire-checklist.html`) & TRỢ LÝ ẢO ONBI (`newhire-ai-help.html` – AI-1)
### *Chủ đề Live Coding: Trực tiếp code bổ sung tri thức mới vào `KNOWLEDGE_BASE` của AI-1 & Hàm lọc nhanh nhiệm vụ ưu tiên trong Checklist*

- **Chuẩn bị trước khi bấm Start Recording Video 2:**
  - **Trình duyệt:** Đang mở sẵn trang `http://localhost:8080/newhire-checklist.html`
  - **VS Code:** Mở sẵn 2 tab [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html) và [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html).

---

### PHẦN 2.1: Demo Giao diện & Nghiệp vụ trên Trình duyệt (Phút 0:00 – 2:30)

| Mốc thời gian | Thao tác chuột / bàn phím | Lời thoại đọc theo |
| :--- | :--- | :--- |
| **0:00 – 1:15** | • Bấm **Start Recording** trên OBS.<br>• Tại `http://localhost:8080/newhire-checklist.html`:<br>1. Bấm chuyển đổi qua 4 tab giai đoạn (**Ngày 1, Tuần 1, Tháng 1, Tháng 2**).<br>2. Gõ `xyz123` vào ô tìm kiếm để hiện màn hình **Empty State** (*Không tìm thấy nhiệm vụ phù hợp* kèm linh vật Onbi) $\rightarrow$ bấm nút **`Xóa bộ lọc`**.<br>3. Đổi thử bộ lọc danh mục (`IT & Công cụ`, `Kỹ thuật`) và tích hoàn thành 1 nhiệm vụ hoặc bấm **`Nộp minh chứng`** $\rightarrow$ nhập link mẫu rồi bấm **Lưu**. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897. Trong Video OBS số 2 này, em xin trình bày và trực tiếp code trên 2 màn hình tiếp theo do em phụ trách là Checklist Hội nhập 4 chặng `newhire-checklist.html` và Trợ lý ảo Onbi Hỏi đáp quy chế `newhire-ai-help.html`. Tại màn hình Checklist mã NH02, lộ trình 60 ngày được chia thành 4 chặng. Hệ thống hỗ trợ tìm kiếm từ khóa theo thời gian thực và lọc theo danh mục, trạng thái. Khi nhập từ khóa không tồn tại như `xyz123`, giao diện hiển thị trạng thái rỗng Empty State kèm nút Xóa bộ lọc. Khi nhân sự đánh dấu hoàn thành hoặc nộp link minh chứng, thanh tiến độ phần trăm sẽ tự động cập nhật và lưu vào LocalStorage."* |
| **1:15 – 2:30** | • Bấm menu bên trái chuyển sang **`Trợ lý Onbi (AI-1)`** (`http://localhost:8080/newhire-ai-help.html`).<br>• Bấm vào 1 câu hỏi gợi ý sẵn (VD: **`Chế độ nghỉ phép năm`**): chỉ chuột vào hiệu ứng **Loading 3 chấm Onbi đang suy nghĩ**, nhãn **`Độ khớp cao`**, hiệu ứng gõ chữ và dòng **`Nguồn trích dẫn`** bên dưới.<br>• Gõ thử câu hỏi ngoài tài liệu: **`Xin cấp thêm màn hình rời 4K`** và nhấn `Enter` $\rightarrow$ chỉ chuột vào khối **Chuyển tiếp câu hỏi cho HR** vừa hiện ra. | *"Tiếp theo tại màn hình Trợ lý ảo Onbi mã NH03 (tích hợp mô-đun AI-1), khi nhân sự mới đặt câu hỏi, Onbi hiển thị trạng thái Loading đang phân tích, sau đó trả lời bằng hiệu ứng gõ chữ kèm nhãn độ khớp và trích dẫn điều khoản sổ tay minh bạch. Nếu gặp câu hỏi đặc thù ngoài quy chế như xin cấp màn hình rời 4K, AI-1 sẽ tự động phân vùng và hiển thị phiếu chuyển tiếp câu hỏi tới bộ phận HR."* |

---

### PHẦN 2.2: Giải thích Mã nguồn đã xây dựng trong VS Code (Phút 2:30 – 5:00)

| Mốc thời gian | Thao tác trong VS Code | Lời thoại giải thích code |
| :--- | :--- | :--- |
| **2:30 – 3:45** | • Nhấn **`Alt + Tab`** sang **VS Code**, mở tab [`newhire-checklist.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-checklist.html).<br>• Nhấn **`Ctrl + G`**, gõ **`948`** $\rightarrow$ chỉ vào hàm `renderTasksList()`.<br>• Nhấn **`Ctrl + G`**, gõ **`1163`** $\rightarrow$ chỉ vào hàm `updatePhaseStats()`. | *"Về mặt mã nguồn, trong file `newhire-checklist.html` tại dòng 948, em viết hàm `renderTasksList()` để kết hợp đồng thời 3 điều kiện lọc: lọc theo chặng hiện tại `currentPhase`, lọc theo danh mục `categoryFilter` và so khớp từ khóa tìm kiếm `taskSearchInput`. Nếu mảng sau khi lọc có độ dài bằng 0, hàm sẽ bật khối `emptyTasksState`. Còn tại dòng 1163, hàm `updatePhaseStats()` tính lại tỷ lệ hoàn thành của từng chặng và kích hoạt hiệu ứng mở khóa huy hiệu khi đạt 100%."* |
| **3:45 – 5:00** | • Chuyển sang tab [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html).<br>• Nhấn **`Ctrl + G`**, gõ **`255`** $\rightarrow$ chỉ vào hàm `normalize(text)` (bỏ dấu tiếng Việt).<br>• Nhấn **`Ctrl + G`**, gõ **`788`** $\rightarrow$ chỉ vào hàm `processAIResponse(query)` và dòng `852` (`typewriteHtml`). | *"Trong file `newhire-ai-help.html`, ở dòng 255 em viết hàm `normalize()` dùng chuẩn Unicode NFD để chuẩn hóa chuỗi tiếng Việt, giúp người dùng gõ có dấu hay không dấu đều tìm được kết quả. Tại dòng 788 là hàm `processAIResponse()` chấm điểm từng chủ đề trong `KNOWLEDGE_BASE` kết hợp tìm kiếm mờ `Fuse.js`, và ở dòng 852 là hàm `typewriteHtml()` duyệt cây DOM bằng `TreeWalker` để gõ từng ký tự mà không làm vỡ thẻ HTML."* |

---

### PHẦN 2.3: TRỰC TIẾP GÕ CODE (LIVE CODING) & VỪA GÕ VỪA GIẢI THÍCH (Phút 5:00 – 8:30)

> 💡 **Mục tiêu:** Anh sẽ trực tiếp gõ thêm **1 chủ đề chính sách mới (`Đăng ký vé gửi xe hầm B1 & B2`)** vào mảng `KNOWLEDGE_BASE` trong file `newhire-ai-help.html`, sau đó qua trình duyệt hỏi trực tiếp Onbi câu vừa code để Onbi trả lời ngay trên video!

1. Trong file [`newhire-ai-help.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/newhire-ai-help.html#L322), nhấn **`Ctrl + G`**, gõ **`322`** rồi nhấn `Enter` (ngay bên dưới dòng `const KNOWLEDGE_BASE = [`).
2. Nhấn `Enter` tạo dòng trống mới và **vừa gõ chậm rãi cấu trúc Object JavaScript (10 dòng) dưới đây vừa đọc lời thoại giải thích từng dòng**:
   ```javascript
      {
        id: 'parking-card-policy',
        type: 'policy',
        title: 'Đăng ký vé gửi xe hầm B1 & B2',
        keywords: ['gửi xe', 'vé xe', 'hầm gửi xe', 'gui xe', 've xe', 'bãi xe'],
        synonyms: ['đỗ xe', 'xe máy', 'ô tô', 'phí gửi xe', 'the gui xe'],
        answer: 'Nhân viên đăng ký thẻ gửi xe tại <strong>Quầy Lễ tân Tầng 1</strong> (cung cấp biển số xe và mã nhân viên). Công ty tài trợ <strong>100% phí gửi xe tháng</strong> tại hầm B1 và B2 của tòa nhà.',
        source: 'Sổ tay Hành chính OnboardAI – Mục 2.5 (Code trực tiếp bởi Nguyễn Gia Huy - 2551170897)',
        followUps: ['working-hours', 'lunch-allowance']
      },
   ```
- **Lời thoại vừa gõ vừa giải thích từng dòng (Phút 5:00 – 8:30):**
  > *"Bây giờ em sẽ trực tiếp code bổ sung một chủ đề tri thức mới vào mảng `KNOWLEDGE_BASE` tại dòng 322 của file `newhire-ai-help.html` để dạy cho trợ lý AI-1 Onbi trả lời câu hỏi về 'Thủ tục đăng ký vé gửi xe hầm B1 & B2':
  > - Dòng thứ nhất, em mở ngoặc nhọn khai báo một Object mới và đặt thuộc tính định danh `id: 'parking-card-policy'`.
  > - Dòng thứ hai, em khai báo `type: 'policy'` để phân loại đây là câu hỏi thuộc nhóm Quy chế doanh nghiệp.
  > - Dòng thứ ba, em đặt `title: 'Đăng ký vé gửi xe hầm B1 & B2'` — tiêu đề này cũng sẽ tự động hiển thị trong gợi ý Typeahead khi người dùng đang gõ phím.
  > - Dòng thứ tư, em khai báo mảng `keywords` gồm cả từ có dấu và không dấu: `['gửi xe', 'vé xe', 'hầm gửi xe', 'gui xe', 've xe', 'bãi xe']`. Khi câu hỏi của người dùng chứa một trong các từ khóa chính này, thuật toán `scoreEntry()` sẽ cộng 3 điểm độ khớp.
  > - Dòng thứ năm, em khai báo mảng từ đồng nghĩa `synonyms: ['đỗ xe', 'xe máy', 'ô tô', 'phí gửi xe', 'the gui xe']` để cộng thêm 2 điểm phụ trợ.
  > - Dòng thứ sáu, thuộc tính `answer` chứa câu trả lời chi tiết định dạng HTML: hướng dẫn nhân viên đăng ký tại Quầy Lễ tân Tầng 1 và được công ty tài trợ 100% phí gửi xe tháng.
  > - Dòng thứ bảy, thuộc tính `source` ghi rõ nguồn trích dẫn: `'Sổ tay Hành chính OnboardAI – Mục 2.5 (Code trực tiếp bởi Nguyễn Gia Huy - 2551170897)'`.
  > - Và dòng cuối cùng, mảng `followUps: ['working-hours', 'lunch-allowance']` để sau khi trả lời xong, Onbi tự động gợi ý tiếp 2 chủ đề liên quan là Giờ làm việc và Phụ cấp ăn trưa."*

---

### PHẦN 2.4: Lưu File & Hỏi Trực tiếp Onbi Câu Vừa Code trên Trình duyệt (Phút 8:30 – 10:00)

1. Nhấn **`Ctrl + S`** để lưu file `newhire-ai-help.html`.
2. Nhấn **`Alt + Tab`** chuyển sang trình duyệt (`http://localhost:8080/newhire-ai-help.html`) và nhấn **`F5`** tải lại trang.
3. Bấm vào ô nhập tin nhắn ở dưới cùng:
   - Gõ chậm chữ **`gửi xe`** $\rightarrow$ Chỉ chuột vào thanh **Gợi ý nhanh (Typeahead)** vừa tự động bật lên nút **`Đăng ký vé gửi xe hầm B1 & B2`**!
   - Gõ tiếp thành câu hoàn chỉnh: **`Cho mình hỏi thủ tục đăng ký vé gửi xe ở đâu?`** rồi nhấn **`Enter`**.
4. **Kết quả trên màn hình:** Onbi hiển thị trạng thái đang suy nghĩ, sau đó gõ ra nguyên văn câu trả lời về **Quầy Lễ tân Tầng 1 & hỗ trợ 100% phí tại hầm B1, B2**, kèm đúng dòng trích dẫn **`Sổ tay Hành chính OnboardAI – Mục 2.5 (Code trực tiếp bởi Nguyễn Gia Huy - 2551170897)`** và 2 nút gợi ý tiếp theo!
5. **Lời thoại kết thúc Video 2:**
   > *"Sau khi lưu file và tải lại trình duyệt, ngay khi em vừa gõ từ khóa 'gửi xe', thanh gợi ý Typeahead đã nhận diện ngay chủ đề mới. Và khi em gửi câu hỏi 'Cho mình hỏi thủ tục đăng ký vé gửi xe ở đâu?', trợ lý Onbi đã chấm điểm độ khớp cao, trả lời chính xác nội dung em vừa code kèm dòng trích dẫn nguồn mang tên Nguyễn Gia Huy – 2551170897. Em xin kết thúc Video OBS số 2 tại đây ạ."* *(Bấm Stop Recording)*.

---
---

# 🎬 VIDEO OBS SỐ 03 (10 PHÚT): BẢNG ĐIỀU KHIỂN HR (`hr-dashboard.html`) & QUẢN TRỊ HỆ THỐNG ADMIN (`admin-user-management.html`)
### *Chủ đề Live Coding: Trực tiếp code quy tắc kiểm tra Form Validation nâng cao & Ghi vết Nhật ký kiểm toán (Audit Logs) trong trang Admin*

- **Chuẩn bị trước khi bấm Start Recording Video 3:**
  - **Trình duyệt:** Đang mở sẵn trang `http://localhost:8080/hr-dashboard.html`
  - **VS Code:** Mở sẵn 2 tab [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html) và [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html).

---

### PHẦN 3.1: Demo Giao diện & Nghiệp vụ trên Trình duyệt (Phút 0:00 – 2:30)

| Mốc thời gian | Thao tác chuột / bàn phím | Lời thoại đọc theo |
| :--- | :--- | :--- |
| **0:00 – 1:15** | • Bấm **Start Recording** trên OBS.<br>• Tại `http://localhost:8080/hr-dashboard.html`:<br>1. Chỉ chuột qua 4 thẻ KPI trên cùng và khối **AI-3: Progress Risk Warning & Intervention Radar**.<br>2. Bấm nút **`AI Can thiệp nhanh 1-Click`** $\rightarrow$ khi ngăn kéo bên phải mở ra, bấm **`Gửi thông báo can thiệp ngay`**.<br>3. Cuộn xuống chỉ vào **2 biểu đồ `Chart.js`** (Biểu đồ cột & Biểu đồ tròn) và bảng danh sách nhân sự bên dưới. | *"Em chào thầy/cô ạ. Em là Nguyễn Gia Huy, mã sinh viên 2551170897. Trong Video OBS số 3 này, em xin trình bày và trực tiếp code trên 2 phân hệ quản lý cấp cao do em phụ trách là Bảng điều khiển Nhân sự HR `hr-dashboard.html` và Quản trị hệ thống Admin `admin-user-management.html`. Trên màn hình HR Dashboard mã HR01, hệ thống cung cấp 4 chỉ số KPI tổng quan, mô-đun AI-3 Risk Radar tự động phát hiện sớm các điểm nghẽn để HR gửi nhắc nhở can thiệp 1-Click, cùng 2 biểu đồ thống kê trực quan vẽ bằng thư viện Chart.js."* |
| **1:15 – 2:30** | • Chuyển sang trang Quản trị viên `http://localhost:8080/admin-user-management.html`.<br>• Bấm qua lại giữa 3 tab: **`Danh sách tài khoản`**, **`Ma trận phân quyền RBAC`** và **`Nhật ký hoạt động`**.<br>• Nhìn xuống góc dưới thanh Sidebar bên trái mục **CHẾ ĐỘ THỊ SÁT (VIEW-AS)**: bấm vào **`Góc nhìn Nhân sự mới (New Hire)`** $\rightarrow$ trên thanh màu tím trên cùng, bấm đổi từ `Nguyễn Văn An (NH01)` sang **`Lê Hoàng Nam (NH02)`** $\rightarrow$ sau đó bấm **`Thoát Thị sát`** để quay về trang Admin. | *"Tại màn hình Quản trị viên mã AD02, Admin quản lý toàn bộ vòng đời tài khoản, đối chiếu Ma trận phân quyền RBAC 4 tầng và tra cứu Nhật ký hoạt động Audit Logs. Đặc biệt, em đã xây dựng tính năng Chế độ thị sát đa người dùng View-As, cho phép Admin chuyển đổi trực tiếp giữa góc nhìn của từng nhân sự mới hoặc từng Mentor trên thanh điều khiển màu tím mà không cần đăng xuất."* |

---

### PHẦN 3.2: Giải thích Mã nguồn đã xây dựng trong VS Code (Phút 2:30 – 5:00)

| Mốc thời gian | Thao tác trong VS Code | Lời thoại giải thích code |
| :--- | :--- | :--- |
| **2:30 – 3:45** | • Nhấn **`Alt + Tab`** sang **VS Code**, mở tab [`hr-dashboard.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/hr-dashboard.html).<br>• Nhấn **`Ctrl + G`**, gõ **`814`** $\rightarrow$ chỉ vào hàm `renderTable()`.<br>• Nhấn **`Ctrl + G`**, gõ **`912`** $\rightarrow$ chỉ vào hàm `initCharts()`. | *"Về mặt mã nguồn, trong file `hr-dashboard.html` tại dòng 814, hàm `renderTable()` duyệt qua danh sách nhân sự mới, kiểm tra tiến độ phần trăm và các nhiệm vụ bị chặn để gắn nhãn cảnh báo rủi ro AI-3. Còn tại dòng 912, hàm `initCharts()` khởi tạo đối tượng `new Chart()` của thư viện Chart.js cho biểu đồ cột theo phòng ban và biểu đồ tròn cơ cấu trạng thái."* |
| **3:45 – 5:00** | • Chuyển sang tab [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html).<br>• Nhấn **`Ctrl + G`**, gõ **`1526`** $\rightarrow$ chỉ vào hàm `renderUserTable()`.<br>• Nhấn **`Ctrl + G`**, gõ **`1872`** $\rightarrow$ chỉ vào hàm `impersonateSpecificPerson()`.<br>• Nhấn **`Ctrl + G`**, gõ **`2128`** $\rightarrow$ chỉ vào hàm `saveUserForm(event)`. | *"Trong file `admin-user-management.html`, hàm `renderUserTable()` ở dòng 1526 kết xuất bảng tài khoản kèm phân trang và bộ lọc; hàm `impersonateSpecificPerson()` ở dòng 1872 lưu trạng thái `impersonatingRole` vào LocalStorage để điều khiển thanh View-As đa người dùng; và hàm `saveUserForm()` ở dòng 2128 xử lý kiểm tra hợp lệ dữ liệu khi thêm hoặc sửa tài khoản."* |

---

### PHẦN 3.3: TRỰC TIẾP GÕ CODE (LIVE CODING) & VỪA GÕ VỪA GIẢI THÍCH (Phút 5:00 – 8:30)

> 💡 **Mục tiêu:** Anh sẽ trực tiếp gõ thêm **quy tắc kiểm tra Form Validation nâng cao cho trường Họ và tên (bắt buộc nhập đầy đủ cả Họ và Tên từ 2 từ trở lên, tối thiểu 5 ký tự) và kiểm tra chức danh công việc** ngay trong hàm `saveUserForm(event)` tại dòng `2148` của file `admin-user-management.html`!

1. Trong file [`admin-user-management.html`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/admin-user-management.html#L2148), nhấn **`Ctrl + G`**, gõ **`2148`** rồi nhấn `Enter` (ngay sau khối `if (!name) { showFieldError('errName', 'formName'); hasError = true; }`).
2. Nhấn `Enter` tạo dòng trống mới tại dòng `2149` và **vừa gõ chậm rãi đoạn code JavaScript (8 dòng) dưới đây vừa đọc lời thoại giải thích từng dòng**:
   ```javascript
      else if (name.split(/\s+/).length < 2 || name.length < 5) {
        const errEl = document.getElementById('errName');
        if (errEl) {
          errEl.textContent = 'Họ tên phải gồm ít nhất 2 từ (tối thiểu 5 ký tự) - Kiểm tra bởi Nguyễn Gia Huy (2551170897)';
        }
        showFieldError('errName', 'formName');
        hasError = true;
      }
   ```
- **Lời thoại vừa gõ vừa giải thích từng dòng (Phút 5:00 – 8:30):**
  > *"Bây giờ em sẽ trực tiếp code bổ sung một quy tắc kiểm tra Form Validation nâng cao vào hàm `saveUserForm()` tại dòng 2149 của file `admin-user-management.html`. Hiện tại hệ thống mới kiểm tra trường Họ tên không được để trống (`if (!name)`). Trong thực tế doanh nghiệp, để tránh việc nhập tên viết tắt chỉ có 1 từ như 'An' hay 'Nam', em sẽ viết thêm nhánh `else if`:
  > - Ở dòng đầu tiên, em dùng biểu thức `name.split(/\s+/).length < 2 || name.length < 5` để tách chuỗi họ tên theo khoảng trắng và kiểm tra nếu người dùng nhập ít hơn 2 từ hoặc tổng độ dài dưới 5 ký tự thì sẽ bắt lỗi.
  > - Ở dòng thứ hai và thứ ba, em truy xuất phần tử hiển thị lỗi `const errEl = document.getElementById('errName')` và gán nội dung thông báo lỗi tường minh bằng tiếng Việt: `'Họ tên phải gồm ít nhất 2 từ (tối thiểu 5 ký tự) - Kiểm tra bởi Nguyễn Gia Huy (2551170897)'`.
  > - Tiếp theo, em gọi hàm `showFieldError('errName', 'formName')` để tô viền đỏ cảnh báo lên ô input, đồng thời gán `hasError = true` để hàm `triggerFormShake()` rung biểu mẫu và ngăn không cho lưu dữ liệu sai quy chuẩn vào LocalStorage."*

---

### PHẦN 3.4: Lưu File & Chạy thử Form Validation Vừa Code trên Trình duyệt (Phút 8:30 – 10:00)

1. Nhấn **`Ctrl + S`** để lưu file `admin-user-management.html`.
2. Nhấn **`Alt + Tab`** chuyển sang trình duyệt (`http://localhost:8080/admin-user-management.html`) và nhấn **`F5`** tải lại trang.
3. Bấm nút màu xanh **`+ Thêm tài khoản`** ở góc trên bên phải:
   - **Thử nghiệm 1 (Nhập sai để kích hoạt code vừa gõ):** Gõ vào ô **Họ và tên** chỉ 1 từ **`Huy`**, nhập email `huy.test@onboardai.vn` rồi bấm nút **`Lưu tài khoản`**.
   - **Kết quả trên màn hình:** Biểu mẫu rung nhẹ và hiện ngay dòng chữ báo lỗi màu đỏ dưới ô Họ tên: **`Họ tên phải gồm ít nhất 2 từ (tối thiểu 5 ký tự) - Kiểm tra bởi Nguyễn Gia Huy (2551170897)`**!
   - **Thử nghiệm 2 (Nhập đúng chuẩn để tạo tài khoản & ghi Audit Log):** Sửa lại ô **Họ và tên** thành **`Nguyễn Gia Huy`**, chọn Phòng ban **`Kỹ thuật Công nghệ`** rồi bấm **`Lưu tài khoản`** $\rightarrow$ Tài khoản được tạo thành công!
   - Bấm sang tab **`Nhật ký hoạt động`** để chỉ vào dòng log vừa tự động ghi nhận thao tác tạo tài khoản mới.
4. **Lời thoại kết thúc Video 3:**
   > *"Sau khi nhấn Ctrl + S lưu file và tải lại trình duyệt, em mở biểu mẫu Thêm tài khoản và thử nhập họ tên chỉ có 1 từ là 'Huy'. Khi bấm Lưu, đoạn code Validation em vừa viết đã kích hoạt ngay lập tức, chặn thao tác lưu và hiển thị đúng thông báo lỗi mang tên Nguyễn Gia Huy – 2551170897. Khi em sửa lại đầy đủ họ tên gồm 2 từ trở lên là 'Nguyễn Gia Huy' và bấm Lưu, tài khoản mới được khởi tạo thành công vào LocalStorage và tự động ghi vết vào tab Nhật ký hoạt động Audit Logs. Em xin cảm ơn thầy/cô đã theo dõi chuỗi 3 video trình bày và live coding của cá nhân em ạ!"* *(Bấm Stop Recording)*.
