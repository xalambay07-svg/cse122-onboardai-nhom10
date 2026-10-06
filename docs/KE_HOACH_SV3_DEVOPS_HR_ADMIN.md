# BẢN GIAO VIỆC CHI TIẾT: SINH VIÊN 3 (SV3)
## VAI TRÒ: DEVOPS, QA & HR/ADMIN LEAD (PHÂN HỆ NHÂN SỰ & QUẢN TRỊ)
**Dự án:** OnboardAI – Hành trình hội nhập nhân sự mới (BTL-20 – CSE122)  
**Thời lượng thực hiện:** 7 ngày (Sprint cấp tốc)  
**Mục tiêu cá nhân:** Hoàn thành trọn vẹn lát cắt dọc (Vertical Slice): Quản trị Git/Trello, Dashboard Thống kê (Chart.js), 4 màn hình HR/Admin, tính năng AI-3 (Risk Warning), Git PR, 4 video OBS và Báo cáo PDF tổng hợp.

---

## 1. THÔNG TIN PHÂN CÔNG TỔNG QUAN
* **Phân hệ chính:** **Nhân sự (HR)** & **Quản trị viên (Admin)** + Trang lỗi 404.
* **Danh sách màn hình phụ trách (4 màn chính + 1 màn phụ):**
  1. `hr-dashboard.html` (Bảng điều khiển & Thống kê toàn công ty) - Mã: `HR01`
  2. `hr-journey-management.html` (Thiết kế & Quản lý lộ trình mẫu) - Mã: `HR02`
  3. `hr-document-library.html` (Thư viện tài liệu nội bộ & Sổ tay) - Mã: `HR03`
  4. `admin-user-management.html` (Quản lý tài khoản & Phân quyền) - Mã: `AD02`
  5. `404.html` (Trang thông báo lỗi trang không tồn tại) - Mã: `COM04`
* **Trách nhiệm chéo toàn dự án:**
  * Thiết lập và quản trị kho GitHub: Tạo nhánh `main`, `dev`, template PR, duyệt Pull Request.
  * Thiết lập và cập nhật Bảng công việc Trello / Notion Kanban theo chuẩn tiến độ.
  * Tích hợp thư viện biểu đồ **Chart.js** trực quan hóa dữ liệu thống kê.
  * Chịu trách nhiệm tổng hợp file Báo cáo BTL (PDF), file `docs/ai-usage-report.md` và kiểm thử chất lượng (QA).
* **Tính năng AI phụ trách:** **AI-3: Progress Risk Warning** (Thuật toán quét tự động phát hiện nhân sự có nguy cơ chậm tiến độ, giải thích nguyên nhân và đề xuất hành động can thiệp).

---

## 2. TIMELINE & DEADLINE 7 NGÀY CHO SV3

| Thời gian | Công việc cần hoàn thành | Hạn chót (Deadline) | Sản phẩm bàn giao (Deliverables) |
|---|---|---|---|
| **Ngày 1 (Thứ Hai)** | Tạo Repo GitHub (`main`, `dev`), tạo Trello board đủ 13 tasks, nộp Bảng kiểm kê màn hình. | 22:00 Ngày 1 | Link GitHub & Link Trello cho cả nhóm |
| **Ngày 2 (Thứ Ba)** | Code HTML & Responsive CSS cho `hr-dashboard.html` và `404.html`. Tích hợp Chart.js. | 21:00 Ngày 2 | Layout dashboard hiển thị được 2 biểu đồ mẫu |
| **Ngày 3 (Thứ Tư)** | Code HTML/CSS `hr-document-library.html` & `admin-user-management.html`. Viết CRUD tài liệu. | 22:00 Ngày 3 | Thêm/sửa/xóa tài liệu và người dùng vào LocalStorage |
| **Ngày 4 (Thứ Năm)** | Hiện thực **AI-3: Progress Risk Warning** trên Dashboard (Quét rủi ro trễ hạn, nút gửi nhắc). | 22:00 Ngày 4 | Khối cảnh báo rủi ro hoạt động tự động |
| **Ngày 5 (Thứ Sáu)** | Test tích hợp toàn bộ hệ thống, merge các nhánh vào `dev`, viết khung Báo cáo PDF. | 18:00 Ngày 5 | Bản nháp Báo cáo BTL + 0 lỗi Console |
| **Ngày 6 (Thứ Bảy)** | **Quay 4 Video OBS có mặt khuôn mặt** cho 4 màn hình chính (`SV3-01` đến `SV3-04`). | 17:00 Ngày 6 | 4 file video MP4 upload lên Google Drive/YouTube |
| **Ngày 7 (Chủ Nhật)** | Đóng gói file PDF hoàn chỉnh, kiểm tra lại toàn bộ link video, nộp bài lên LMS. | 15:00 Ngày 7 | Hoàn tất nộp bài thành công |

---

## 3. HƯỚNG DẪN CÁCH LÀM TỪNG NHIỆM VỤ

### 📝 Nhiệm vụ 1: Thiết lập Git Flow, Trello & Khung Dự án
* **Nhánh Git:** `docs/project-setup`
* **Cách làm chi tiết:**
  1. Khởi tạo repository trên GitHub: `cse122-onboardai-teamXX`.
  2. Tạo 2 nhánh chính:
     * `main`: Nhánh sản phẩm hoàn thiện, chỉ merge khi có video OBS và kiểm tra xong.
     * `dev`: Nhánh tích hợp hằng ngày của cả nhóm.
  3. Tạo file `README.md` theo cấu trúc: Giới thiệu đề tài, Bảng phân công nhóm, Hướng dẫn chạy (chỉ cần mở qua Live Server), Bảng danh sách link video OBS.
  4. Tạo bảng Trello:
     * Cột: *TỒN ĐỌNG (Backlog) -> CẦN LÀM (To Do) -> ĐANG LÀM (In Progress) -> CHỜ DUYỆT (Review) -> HOÀN THÀNH (Done)*.
     * Mỗi task tạo 1 thẻ, gán tên thành viên và deadline cụ thể.

---

### 📝 Nhiệm vụ 2: HR Dashboard & Biểu đồ Chart.js (`hr-dashboard.html`)
* **Nhánh Git:** `feature/hr-dashboard`
* **Cách làm chi tiết:**
  1. **HTML Layout:**
     * Hàng 1: 4 Thẻ chỉ số tổng quan (KPI Cards):
       * 👥 *Tổng nhân sự mới:* `12`
       * 📈 *Tiến độ trung bình:* `68%`
       * 🤝 *Buổi 1-on-1 đã hoàn thành:* `18`
       * ⚠️ *Nhân sự cần hỗ trợ:* `2`
     * Hàng 2: 2 Khung biểu đồ (Dùng thẻ `<canvas>`):
       * Khung 1: Biểu đồ Donut (Tỷ lệ hoàn thành theo nhóm: *Đúng hạn, Chậm tiến độ, Đã xong*).
       * Khung 2: Biểu đồ Cột (Tiến độ hoàn thành trung bình của từng Phòng ban).
     * Hàng 3: **Khu vực Cảnh báo AI-3** (xem Nhiệm vụ 5).
  2. **JavaScript & Tích hợp Chart.js:**
     * Nhúng thư viện CDN: `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>`.
     * Đọc dữ liệu từ `API.getAll('newHires')` để tính toán số liệu thật đẩy vào biểu đồ:
       ```javascript
       const ctx = document.getElementById('statusChart').getContext('2d');
       new Chart(ctx, {
         type: 'doughnut',
         data: {
           labels: ['Đúng hạn', 'Nguy cơ chậm', 'Đã hoàn thành'],
           datasets: [{
             data: [7, 2, 3],
             backgroundColor: ['#2563eb', '#ef4444', '#16a34a']
           }]
         },
         options: { responsive: true, maintainAspectRatio: false }
       });
       ```

---

### 📝 Nhiệm vụ 3: Thư viện tài liệu nội bộ (`hr-document-library.html`)
* **Nhánh Git:** `feature/hr-documents`
* **Cách làm chi tiết:**
  1. **HTML Layout:**
     * Thanh tìm kiếm tài liệu theo từ khóa + Nút ➕ *[Thêm tài liệu mới]*.
     * Lưới danh sách tài liệu (Document Grid): Mỗi tài liệu là 1 card hiển thị: Icon tệp PDF, Tiêu đề, Danh mục (Tag màu), Trích đoạn nội dung tóm tắt, Ngày cập nhật, Nút *[Sửa]* và *[Xóa]*.
     * Modal Thêm/Sửa tài liệu: Gồm Form nhập Tiêu đề, Danh mục (Dropdown: *Quy chế, Phúc lợi, IT, Văn hóa*), Nội dung tóm tắt, Vị trí trang tham chiếu (VD: Trang 15).
  2. **JavaScript CRUD:**
     * Hàm render danh sách từ `API.getAll('documents')`.
     * Tính năng Tìm kiếm: Bắt sự kiện `input`, so khớp từ khóa với tiêu đề hoặc nội dung.
     * Thêm tài liệu mới: Lưu vào LocalStorage thông qua `API.create('documents', newDoc)` $\rightarrow$ Cập nhật tức thì vào Grid mà không cần reload trang.
     * Xóa tài liệu: Hiển thị hộp thoại `confirm("Bạn có chắc chắn muốn xóa tài liệu này?")` trước khi xóa.

---

### 📝 Nhiệm vụ 4: Quản trị Người dùng (`admin-user-management.html`) & Trang `404.html`
* **Nhánh Git:** `feature/admin-users`
* **Cách làm chi tiết:**
  1. **`admin-user-management.html`:**
     * Bảng danh sách tất cả tài khoản trong hệ thống (Họ tên, Email, Vai trò: *Admin, HR, Mentor, New Hire*, Trạng thái: *Hoạt động / Bị khóa*).
     * Modal Cấp tài khoản mới: Nhập Họ tên, Email, Chọn Vai trò, Gán Mentor phụ trách.
     * Chức năng Khóa/Mở khóa tài khoản: Bấm nút đổi trạng thái từ `active` sang `disabled` và ngược lại.
  2. **`404.html`:**
     * Giao diện thông báo lỗi trang không tìm thấy: Hình minh họa đẹp mắt, thông điệp rõ ràng và nút bấm quay về trang chủ.

---

### 📝 Nhiệm vụ 5: Hiện thực tính năng AI-3: Progress Risk Warning
* **Nhánh Git:** `feature/ai-risk-warning`
* **Tích hợp tại:** `hr-dashboard.html` (và hiển thị cả trên `mentor-mentee-list.html` của SV2).
* **Cách làm chi tiết theo chu trình 7 bước:**
  1. *Logic quét tự động:* Viết hàm `checkProgressRisks()`:
     * Duyệt qua toàn bộ danh sách `newHires`.
     * Điều kiện rủi ro: Nếu số ngày kể từ `joinDate` đã trôi qua $> 5$ ngày mà tiến độ `progress < 30%` $\rightarrow$ Đưa nhân sự này vào danh sách **Nguy cơ cao (High Risk)**.
  2. *Giao diện hiển thị cảnh báo (UI Box):*
     * Hộp thoại nổi bật viền đỏ/vàng: ⚠️ **"Phát hiện 1 nhân sự có nguy cơ chậm tiến độ hội nhập"**.
  3. *Giải thích nguyên nhân của AI (Bắt buộc theo đề bài):*
     ```html
     <div class="ai-risk-card">
       <h4>Nhân viên: Trần Thị B (Marketing) - Tiến độ: 20%</h4>
       <div class="ai-analysis">
         🤖 <strong>AI Phân tích nguyên nhân:</strong> Nhân sự đã vào công ty 7 ngày nhưng bị nghẽn ở bước <em>'Cài đặt tài khoản công cụ'</em> quá 3 ngày chưa được duyệt, dẫn đến các nhiệm vụ chuyên môn tiếp theo bị đình trệ.
       </div>
       <div class="ai-actions">
         <button class="btn-warning" onclick="sendReminder('MT01')">✉️ Gửi nhắc nhở Mentor</button>
         <button class="btn-outline" onclick="scheduleHelp('NH02')">📅 Lên lịch HR hỗ trợ</button>
       </div>
     </div>
     ```
  4. *Quyền kiểm soát của User:*
     * Khi bấm *"Gửi nhắc nhở Mentor"*: Hiển thị Toast thông báo màu xanh: *"Đã gửi cảnh báo tới Mentor phụ trách qua email/hệ thống!"*.
     * Có nút *"Bỏ qua cảnh báo"* nếu HR xác nhận trường hợp này được nghỉ phép hợp lệ.

---

### 📝 Nhiệm vụ 6: Tổng hợp Báo cáo BTL (PDF) & AI Usage Report
* **Cách làm chi tiết:**
  1. Tạo file `docs/ai-usage-report.md` theo mẫu quy định tại Mục 20 của đề bài BTL (Khai báo các prompt tạo khung layout, prompt tạo mock data, những lỗi AI gặp phải và cách sinh viên tự sửa).
  2. Soạn thảo Báo cáo BTL (file Word) gồm:
     * Trang bìa: Tên trường, môn học, đề tài BTL-20, thông tin 3 sinh viên.
     * Chương 1: Bối cảnh, Bài toán và Mục tiêu (dựa trên Guide 01).
     * Chương 2: Phân tích Vai trò và Bảng kiểm kê màn hình (Guide 02 & 04).
     * Chương 3: Kiến trúc Dữ liệu và Mô phỏng 3 tính năng AI (Guide 06 - 09).
     * Chương 4: Hướng dẫn cài đặt, Ảnh chụp màn hình và Bảng phân công minh chứng Git/OBS (Guide 10).
  3. Xuất file sang định dạng `BaoCao_BTL20_OnboardAI_NhomXX.pdf`.

---

## 4. KỊCH BẢN QUAY 4 VIDEO OBS CHO SV3 (BẮT BUỘC)

* **Quy chuẩn:** Bật webcam khuôn mặt ở góc màn hình, mic rõ ràng, thời lượng 2 – 3 phút/video.
* **Kịch bản chi tiết:**
  * **Video 1 (`SV3-01-hr-dashboard.mp4`):**
    1. Giới thiệu tên, vai trò DevOps & HR Lead.
    2. Trình chiếu code HTML và đoạn khởi tạo Chart.js trên VS Code.
    3. Thao tác trên web: Rê chuột vào các cột biểu đồ để xem Tooltip nhảy số liệu tương tác.
  * **Video 2 (`SV3-02-ai-progress-risk.mp4`):**
    1. Demo tính năng **AI-3: Progress Risk Warning**.
    2. Giải thích logic quét tự động nhân sự trễ hạn.
    3. Đọc to phần AI giải thích nguyên nhân nghẽn tiến độ.
    4. Bấm nút "Gửi nhắc nhở Mentor" để demo Toast thông báo phản hồi.
  * **Video 3 (`SV3-03-hr-document-library.mp4`):**
    1. Demo Thư viện tài liệu: Thao tác tìm kiếm tài liệu theo từ khóa.
    2. Thêm 1 tài liệu mới: "Quy định làm thêm giờ (OT)".
    3. Mở trang chat AI-1 của SV1 để chứng minh câu hỏi về OT lập tức trả lời được dựa trên tài liệu mới tạo.
  * **Video 4 (`SV3-04-admin-user-management.mp4`):**
    1. Trình chiếu bảng quản lý người dùng và phân quyền 4 vai trò.
    2. Thao tác khóa 1 tài khoản (đổi trạng thái sang Bị khóa).
    3. Demo mở đường link không tồn tại để hiển thị trang `404.html`.

---

## 5. KỊCH BẢN ỨNG PHÓ KHI GIẢNG VIÊN HỎI THI (LIVE CODING 5 PHÚT)
* **Tình huống 1: "Đổi màu biểu đồ Doughnut Chart từ xanh dương sang màu tím."**
  * *Cách làm:* Trong đoạn khởi tạo Chart.js, đổi mã màu `backgroundColor: ['#2563eb', ...]` thành `['#8b5cf6', ...]`.
* **Tình huống 2: "Thêm 1 trường nhập 'Tác giả tài liệu' vào Modal Thêm tài liệu."**
  * *Cách làm:* Vào file HTML thêm thẻ `<input id="docAuthor" placeholder="Nhập tên người soạn">`, trong file JS lấy thêm giá trị `author: docAuthor.value` khi lưu vào LocalStorage.
