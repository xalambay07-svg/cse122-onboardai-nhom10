# BẢN GIAO VIỆC CHI TIẾT: SINH VIÊN 1 (SV1)
## VAI TRÒ: NHÓM TRƯỞNG & UI SYSTEM LEAD (PHÂN HỆ NHÂN SỰ MỚI)
**Dự án:** OnboardAI – Hành trình hội nhập nhân sự mới (BTL-20 – CSE122)  
**Thời lượng thực hiện:** 7 ngày (Sprint cấp tốc)  
**Mục tiêu cá nhân:** Hoàn thành trọn vẹn lát cắt dọc (Vertical Slice): UI System, 5 màn hình New Hire/Landing, tính năng AI-1 (Policy Q&A), Git PR và 4 video OBS.

---

## 1. THÔNG TIN PHÂN CÔNG TỔNG QUAN
* **Phân hệ chính:** **Nhân sự mới (New Hire)** + Giao diện cổng thông tin / Đăng nhập.
* **Danh sách màn hình phụ trách (5 màn):**
  1. `index.html` (Landing Page giới thiệu OnboardAI) - Mã: `COM01`
  2. `login.html` (Đăng nhập & Bộ chọn Role) - Mã: `COM02`
  3. `newhire-onboarding-dashboard.html` (Bảng điều khiển nhân sự mới) - Mã: `NH01`
  4. `newhire-checklist.html` (Hành trình hội nhập & Checklist việc cần làm) - Mã: `NH02`
  5. `newhire-ai-help.html` (Trợ lý hỏi đáp quy chế, chính sách có trích nguồn) - Mã: `NH03`
* **Trách nhiệm chéo toàn dự án:**
  * Xây dựng **CSS Design System** cơ sở (`css/style.css`) cho cả nhóm.
  * Thiết kế khung bố cục App Layout chuẩn (Header, Sidebar cố định Desktop / Drawer trên Mobile).
  * Đảm bảo chuẩn Responsive (Desktop >= 1200px, Tablet 768px - 1024px, Mobile < 768px) và khả năng tiếp cận (a11y: màu tương phản, alt ảnh, semantic HTML).
* **Tính năng AI phụ trách:** **AI-1: Policy Q&A Assistant** (Hỏi đáp chính sách công ty kèm trích nguồn giả lập).

---

## 2. TIMELINE & DEADLINE 7 NGÀY CHO SV1

| Thời gian | Công việc cần hoàn thành | Hạn chót (Deadline) | Sản phẩm bàn giao (Deliverables) |
|---|---|---|---|
| **Ngày 1 (Thứ Hai)** | Tạo `css/style.css` (tokens, buttons, cards, tags). Vẽ wireframe nhanh layout chuẩn. | 22:00 Ngày 1 | File `style.css` đẩy lên nhánh `feature/design-system` |
| **Ngày 2 (Thứ Ba)** | Code HTML & Responsive CSS cho `index.html`, `login.html`, `newhire-onboarding-dashboard.html`. | 21:00 Ngày 2 | Giao diện tĩnh responsive, không lỗi layout |
| **Ngày 3 (Thứ Tư)** | Code HTML & CSS `newhire-checklist.html`. Kết nối JS đọc LocalStorage, thanh progress bar động. | 22:00 Ngày 3 | Tích chọn checkbox -> Cập nhật % tiến độ realtime |
| **Ngày 4 (Thứ Năm)** | Code `newhire-ai-help.html` & Hiện thực **AI-1: Policy Q&A** theo chu trình 7 bước. | 22:00 Ngày 4 | Chatbot hỏi đáp hoạt động mượt, có trích dẫn nguồn |
| **Ngày 5 (Thứ Sáu)** | Review chéo PR của SV2 (`dev`), kiểm tra 0 lỗi Console, viết phần báo cáo của mình. | 18:00 Ngày 5 | Nhánh `dev` sạch lỗi, nội dung báo cáo gửi SV3 |
| **Ngày 6 (Thứ Bảy)** | **Quay 4 Video OBS có mặt khuôn mặt** cho 4 màn hình chính (`SV1-01` đến `SV1-04`). | 17:00 Ngày 6 | 4 file video MP4 upload lên Google Drive/YouTube |
| **Ngày 7 (Chủ Nhật)** | Diễn tập Live Coding 5-10 phút cùng nhóm, kiểm tra checklist nộp bài. | 15:00 Ngày 7 | Sẵn sàng bảo vệ BTL |

---

## 3. HƯỚNG DẪN CÁCH LÀM TỪNG NHIỆM VỤ

### 📝 Nhiệm vụ 1: Thiết kế Design System & Bố cục chung (`css/style.css`)
* **Nhánh Git:** `feature/design-system`
* **Cách làm chi tiết:**
  1. Mở file `css/style.css`, định nghĩa biến CSS ở `:root`:
     ```css
     :root {
       --primary: #2563eb;
       --primary-hover: #1d4ed8;
       --bg-main: #f8fafc;
       --bg-card: #ffffff;
       --text-title: #0f172a;
       --text-body: #475569;
       --border-color: #e2e8f0;
       --success: #16a34a;
       --warning: #f59e0b;
       --danger: #ef4444;
       --radius: 12px;
       --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
     }
     ```
  2. Xây dựng các component tái sử dụng: `.btn` (primary, outline), `.card`, `.badge` (pending, completed, in-progress), `.form-control`.
  3. Xây dựng layout Sidebar + Topbar dùng CSS Grid hoặc Flexbox:
     * Trên Desktop: Sidebar cố định `width: 260px`, `height: 100vh`.
     * Trên Mobile: Dùng `@media (max-width: 768px)` chuyển Sidebar thành `transform: translateX(-100%)`, khi bấm nút Hamburger thêm class `.open` để trượt ra.

---

### 📝 Nhiệm vụ 2: Trang chủ (`index.html`) & Đăng nhập (`login.html`)
* **Nhánh Git:** `feature/landing-and-auth`
* **Cách làm chi tiết:**
  * **`index.html`:**
    * Hero Section: Tiêu đề lớn *"OnboardAI – Hành trình hội nhập nhân sự số"*, nút *"Bắt đầu ngay"* dẫn sang `login.html`.
    * 4 Card giới thiệu 4 vai trò: New Hire, Mentor, HR, Admin.
  * **`login.html`:**
    * Form gồm: Email, Mật khẩu, Nút Đăng nhập.
    * **Mẹo ghi điểm:** Thêm **Bộ chọn nhanh vai trò (Role Quick Selector)**: Gồm 4 nút bấm: *[Đăng nhập vai trò New Hire]*, *[Mentor]*, *[HR]*, *[Admin]*. Khi bấm vào nút New Hire, JS tự điền email `nhanvien@onboardai.vn` và lưu vào `localStorage.setItem('currentUser', JSON.stringify({ role: 'newhire', name: 'Nguyễn Văn A', id: 'NH01' }))` rồi chuyển hướng tới `newhire-onboarding-dashboard.html`.

---

### 📝 Nhiệm vụ 3: Onboarding Dashboard (`newhire-onboarding-dashboard.html`)
* **Nhánh Git:** `feature/newhire-dashboard`
* **Cách làm chi tiết:**
  1. **HTML:** 
     * Khối Hero Banner: *"Chào mừng Nguyễn Văn A! Hôm nay là ngày thứ 3 của bạn tại công ty."*
     * Widget Tiến độ: Thanh tiến độ lớn hiển thị `% Hoàn thành`.
     * Widget 3 cột:
       * Cột 1: *3 việc cần làm hôm nay* (Checklist rút gọn).
       * Cột 2: *Thông tin Người đồng hành (Mentor Card)*: Ảnh đại diện, Tên, Chức vụ, Email, nút *"Nhắn tin / Đặt lịch"*.
       * Cột 3: *Mẹo hội nhập hôm nay* (Lời khuyên văn hóa công ty).
  2. **JavaScript:**
     * Gọi dữ liệu từ `API.getTasksByNewHire('NH01')` (module của SV2).
     * Đếm tổng số task và số task có `status === 'completed'`.
     * Tính toán: `let percent = Math.round((completedCount / totalCount) * 100);`
     * Cập nhật DOM: Gán text `percent + '%'` và đổi thuộc tính `style.width = percent + '%'`.

---

### 📝 Nhiệm vụ 4: Hành trình Checklist (`newhire-checklist.html`)
* **Nhánh Git:** `feature/newhire-checklist`
* **Cách làm chi tiết:**
  1. **HTML:** 
     * Bộ lọc Tab: `[Tất cả]`, `[Tuần 1: Thủ tục & IT]`, `[Tháng 1: Hội nhập chuyên môn]`.
     * Khung danh sách Task: Mỗi task là 1 card có: Checkbox tròn lớn, Tiêu đề, Hạn hoàn thành, Tag phân loại (`Thủ tục`, `Bảo mật`, `Chuyên môn`), Nút *"Xem hướng dẫn"*.
  2. **JavaScript DOM & Sự kiện:**
     * Render danh sách task động từ LocalStorage ra DOM qua hàm `renderChecklist(filter)`.
     * Bắt sự kiện `change` trên checkbox:
       * Khi người dùng tích chọn: Chuyển task sang `status = 'completed'`.
       * Gọi `API.updateTask(taskId, { status: 'completed' })` để lưu lại.
       * Hiển thị Toast thông báo màu xanh: *"Đã hoàn thành: [Tên task]!"*.
       * Tự động gạch ngang chữ và đổi màu badge sang xanh lá.
  3. **Trạng thái rỗng (Empty state):** Nếu danh sách không có task nào, hiển thị khối thông báo rỗng: `<h3>Bạn đã hoàn thành hết công việc! 🎉</h3>`.

---

### 📝 Nhiệm vụ 5: Tính năng AI-1: Policy Q&A Assistant (`newhire-ai-help.html`)
* **Nhánh Git:** `feature/newhire-ai-help`
* **Cách làm chi tiết theo chu trình 7 bước:**
  1. **Giao diện Chat trực quan:** Có khung tin nhắn cuộn được, ô nhập câu hỏi bên dưới và 3 nút gợi ý nhanh (*"Chính sách làm việc từ xa?", "Quy chế thử việc?", "Gửi xe ở đâu?"*).
  2. **Logic JS xử lý:**
     * Khi bấm gửi (hoặc bấm câu hỏi gợi ý):
     * *Bước 1 (Validate):* Kiểm tra chuỗi nhập. Nếu rỗng -> báo lỗi inline.
     * *Bước 2 (Loading):* Thêm tin nhắn của User vào khung chat. Hiển thị bóng chat bot có 3 dấu chấm nhấp nháy: *"OnboardAI đang tra cứu tài liệu..."* trong 800ms (`setTimeout`).
     * *Bước 3 (Render kết quả & Trích nguồn):* Tìm câu trả lời tương ứng trong danh sách dữ liệu giả lập.
       * Trả lời ngắn gọn: *"Thời gian làm việc từ xa tối đa 2 ngày/tuần sau khi kết thúc thử việc..."*
       * **Thẻ trích nguồn (Bắt buộc theo đề bài):**
         ```html
         <div class="citation-box">
           📄 <strong>Nguồn trích dẫn:</strong> Sổ tay nhân viên 2025 – Mục 4.1 (Trang 18)
         </div>
         ```
     * *Bước 4 (Quyền kiểm soát của User):* Dưới mỗi câu trả lời của AI có các nút:
       * 👍 *Hữu ích* (Bấm vào hiện thông báo cảm ơn)
       * 📋 *Sao chép*
       * 🔄 *Hỏi câu khác*
     * *Bước 5 (Trường hợp AI thất bại - Fallback):* Nếu câu hỏi không khớp từ khóa nào, AI trả lời:
       *"Hệ thống chưa tìm thấy thông tin này trong tài liệu hiện có. Bạn có muốn chuyển câu hỏi này cho phòng HR không?"* -> Kèm nút *"Gửi yêu cầu tới HR"*.

---

## 4. KỊCH BẢN QUAY 4 VIDEO OBS CHO SV1 (BẮT BUỘC)

* **Quy chuẩn kỹ thuật:**
  * Bật webcam có khuôn mặt ở góc màn hình.
  * Độ phân giải 1080p, âm thanh micro rõ ràng.
  * Thời lượng mỗi video: **2 – 3 phút**.

* **Kịch bản chi tiết:**
  * **Video 1 (`SV1-01-landing-and-login.mp4`):**
    1. Giới thiệu tên, mã sinh viên, vai trò trong nhóm.
    2. Trình chiếu file `index.html` và `login.html` trên VS Code, giải thích cấu trúc Semantic HTML.
    3. Thao tác trên trình duyệt: Bấm chọn vai trò New Hire để tự động điền form, demo form validation khi xóa email.
    4. Sửa nhanh 1 dòng code CSS trực tiếp (đổi màu nút), reload trang để chứng minh tự viết code.
  * **Video 2 (`SV1-02-newhire-dashboard.mp4`):**
    1. Giới thiệu layout Responsive (mở F12 chuyển sang chế độ Mobile/Tablet để thấy Sidebar thu gọn).
    2. Giải thích code JS tính toán % thanh progress bar.
    3. Cho xem object `currentUser` trong LocalStorage.
  * **Video 3 (`SV1-03-newhire-checklist.mp4`):**
    1. Giải thích hàm `renderChecklist()` trong JS.
    2. Thao tác tích chọn 1 task -> Cho thấy thanh tiến độ tự động tăng từ 45% lên 60% và lưu ngay vào LocalStorage.
    3. Demo chuyển bộ lọc Tab (Tuần 1, Tháng 1) và hiển thị Empty State.
  * **Video 4 (`SV1-04-newhire-ai-help.mp4`):**
    1. Giải thích chu trình 7 bước của tính năng **AI-1**.
    2. Gõ câu hỏi *"Thời gian thử việc?"* -> Xem hiệu ứng loading -> Đọc kết quả kèm trích dẫn nguồn sách.
    3. Gõ câu hỏi bất kỳ không có trong data để chứng minh có xử lý Fallback UI khi AI thất bại.

---

## 5. KỊCH BẢN ỨNG PHÓ KHI GIẢNG VIÊN HỎI THI (LIVE CODING 5 PHÚT)
* **Tình huống 1: "Đổi màu thanh tiến độ khi đạt 100% sang màu xanh lá đậm."**
  * *Cách làm:* Trong hàm render progress, thêm `if (percent === 100) progressBar.style.backgroundColor = '#15803d';`.
* **Tình huống 2: "Thêm một nút 'In Checklist' hoặc 'Xuất PDF'."**
  * *Cách làm:* Thêm thẻ `<button onclick="window.print()" class="btn-outline">In danh sách</button>`.
* **Tình huống 3: "Thêm 1 câu hỏi gợi ý mới vào ô chat AI."**
  * *Cách làm:* Vào file HTML `newhire-ai-help.html`, thêm 1 nút `<button class="quick-ask" onclick="askAI('Quy chế thưởng?')">Quy chế thưởng?</button>`.
