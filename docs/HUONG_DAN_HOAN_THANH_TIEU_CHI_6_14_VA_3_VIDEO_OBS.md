# HƯỚNG DẪN ĐỐI CHIẾU & HOÀN THÀNH CÁC TIÊU CHÍ ĐÁNH GIÁ CỐT LÕI (MỤC 6 → MỤC 14)

> **Dự án:** BTL-20 – **OnboardAI**: Nền tảng Hội nhập Nhân sự Thông minh (Nhóm 10)  
> **Repository GitHub:** `https://github.com/xalambay07-svg/cse122-onboardai-nhom10.git`

---

## PHẦN 1: BẢNG ĐỐI CHIẾU TRẠNG THÁI HIỆN TẠI (MỤC 6 → MỤC 14)

| Mục | Yêu cầu trong Phiếu đánh giá | Trạng thái trong Code hiện tại | Vị trí File & Cách trình bày / Kiểm tra khi chấm bài |
|:---:|:---|:---:|:---|
| **6** | Có tương tác JavaScript thực tế (tìm kiếm, lọc, đóng/mở modal, chuyển tab, tính toán...) | ✅ **Đã xong 100%** | • **Tìm kiếm & Lọc:** `newhire-checklist.html`, `mentor-mentee-list.html`, `hr-dashboard.html`, `admin-user-management.html`.<br>• **Modal & Chat Drawer:** Chọn 8 Mentor, Chat trực tiếp với Mentor (`newhire-onboarding-dashboard.html`), Thêm/Sửa User (`admin-user-management.html`).<br>• **Tính toán động:** Tự động tính lại `%` tiến độ hội nhập, số task hoàn thành, điểm tương thích AI (`Match Score %`). |
| **7** | Có kiểm tra hợp lệ dữ liệu (*Form Validation*) nếu màn hình chứa biểu mẫu | ✅ **Đã xong 100%** | • `login.html`: Kiểm tra email rỗng, sai định dạng `@`, mật khẩu `< 6` ký tự, tài khoản bị khóa.<br>• `admin-user-management.html`: Kiểm tra họ tên trống, email trùng lặp khi tạo tài khoản.<br>• `mentor-checkin-note.html` & `profile.html`: Kiểm tra các trường bắt buộc và xác nhận mật khẩu. |
| **8** | Kết nối dữ liệu từ tệp JSON / `localStorage` / MockAPI (không gõ cứng dữ liệu rác) | ✅ **Đã xong 100%** | • Dữ liệu gốc tại `assets/data/mock-data.json` được nạp qua `js/api.js` (`window.OnboardAPI`) vào `localStorage` (`onboardai_db_v1`).<br>• Mọi thay đổi (chọn Mentor, tích hoàn thành task, nộp minh chứng, khóa user) đều lưu vào `localStorage` và đồng bộ giữa các phân hệ. |
| **9** | Có trạng thái rỗng (*Empty State*) kèm thông điệp hướng dẫn và nút hành động (CTA) | ✅ **Đã xong 100%** | • Trên `newhire-checklist.html`, `mentor-mentee-list.html`, `hr-dashboard.html`, `admin-user-management.html`: Khi gõ từ khóa không khớp (VD: `xyz123`), giao diện hiện khung **Empty State** kèm nút CTA **"Xóa bộ lọc / Đặt lại tìm kiếm"**.<br>• Trên `newhire-onboarding-dashboard.html`: Tài khoản mới chưa có Mentor sẽ hiện khung Empty State kèm nút CTA **"Khám phá & Chọn Người đồng hành"**. |
| **10** | Có trạng thái đang tải (*Loading*) và trạng thái lỗi (*Error State*) khi phù hợp | ✅ **Đã xong 100%** | • **Loading State:** Hiệu ứng AI đang suy nghĩ/phân tích trên `newhire-ai-help.html` (AI-1) và `mentor-task-assignment.html` (AI-2).<br>• **Error State:** Cảnh báo lỗi đỏ trên `login.html`, các biểu mẫu và trang lỗi chuyên biệt `404.html`. |
| **11** | Đảm bảo khả năng tiếp cận cơ bản (*Accessibility*: `alt` cho ảnh, `<label>` cho input, viền `:focus-visible`) | ✅ **Đã xong 100%** | • Toàn bộ ảnh đại diện Mentor (`mt01.jpg`..`mt08.jpg`) và hình minh họa đều có thuộc tính `alt="..."`.<br>• Toàn bộ ô `input`, `select`, `textarea` đều gắn `<label>` hoặc `aria-label`.<br>• File `css/style.css` đã cấu hình `:focus-visible` hiển thị viền rõ ràng khi nhấn phím `Tab`. |
| **12** | Mã nguồn được đẩy lên nhánh riêng và tạo **Pull Request (PR)** có thành viên khác review | ⚡ **Đã đẩy đủ nhánh** *(Chỉ cần bấm tạo PR trên web GitHub)* | • Đã có sẵn các nhánh riêng trên GitHub: `huy/feature/newhire-checklist`, `fix/sv3-data-sync-hr-admin`, `dev`, `main`.<br>• Xem hướng dẫn bấm tạo Pull Request & Review trong 1 phút ở **Phần 2** bên dưới. |
| **13** | Đã hợp nhất (*Merge*) vào nhánh `dev` / `main` không gây lỗi xung đột | ✅ **Đã xong 100%** | • Toàn bộ commits đã được merge sạch sẽ vào cả `dev` và `main` trên GitHub, hoàn toàn không có conflict. |
| **14** | Có **03 Video OBS** riêng có mặt sinh viên giải thích code, sửa trực tiếp và cập nhật link vào `README.md` | 🎥 **Cần quay 03 Video OBS & dán link** | • Bảng 03 Video OBS (`OBS-01`, `OBS-02`, `OBS-03`) đã được chuẩn bị sẵn trong `README.md`.<br>• Xem kịch bản quay & vị trí sửa code trực tiếp (Live Coding) ở **Phần 3** bên dưới. |

---

## PHẦN 2: CÁCH HOÀN THÀNH MỤC 12 & 13 TRÊN GITHUB (TẠO PULL REQUEST & REVIEW TRONG 1 PHÚT)

Hiện tại em đã đẩy toàn bộ nhánh lên kho GitHub `https://github.com/xalambay07-svg/cse122-onboardai-nhom10`. Để giảng viên vào tab **Pull requests** trên GitHub thấy rõ lịch sử tạo PR và thành viên khác vào Review:

1. Anh mở link: **`https://github.com/xalambay07-svg/cse122-onboardai-nhom10/pulls`**
2. Bấm nút màu xanh **`New pull request`**.
3. Chọn nhánh đích `base: dev` (hoặc `main`) $\leftarrow$ nhánh nguồn `compare: huy/feature/newhire-checklist` (hoặc `fix/sv3-data-sync-hr-admin`).
4. Đặt tiêu đề PR (ví dụ: `feat(newhire): nâng cấp đề xuất 8 Mentor, khung chat trực tiếp và tối ưu hiệu năng`) $\rightarrow$ bấm **`Create pull request`**.
5. Bảo 1 bạn khác trong nhóm (hoặc tài khoản thứ 2) vào PR đó $\rightarrow$ chuyển sang tab **`Files changed`** $\rightarrow$ bấm nút **`Review changes`** (góc trên bên phải) $\rightarrow$ gõ nhận xét: *"Code rõ ràng, giao diện mượt, đồng bộ đúng OnboardAPI. LGTM!"* $\rightarrow$ tích chọn **`Approve`** $\rightarrow$ bấm **`Submit review`**, sau đó bấm **`Merge pull request`**.

---

## PHẦN 3: KỊCH BẢN CHI TIẾT QUAY 03 VIDEO OBS (MỤC 14 – ĐẢM BẢO ĐIỂM TUYỆT ĐỐI)

> **Lưu ý bắt buộc khi mở phần mềm OBS Studio:**
> - Bật **Display Capture (Quay toàn màn hình)** để thấy cả VS Code và Trình duyệt.
> - Bật **Video Capture Device (Webcam)** đặt ở góc dưới bên phải màn hình để **thấy rõ mặt sinh viên** đang thuyết trình.
> - Bật **Audio Input Capture (Mic)** để thu giọng giải thích.
> - Mỗi video chỉ cần dài khoảng **3 – 5 phút** theo đúng 3 bước: **(1) Demo tương tác trên web $\rightarrow$ (2) Giải thích hàm JS trong VS Code $\rightarrow$ (3) Sửa trực tiếp 1 đoạn code (Live Coding) rồi nhấn `Ctrl + S` để trình duyệt đổi ngay lập tức**.

---

### 🎬 VIDEO OBS 01: Phân hệ Nhân viên mới, Đề xuất & Chat Mentor + AI-1
- **Màn hình trình diễn:** `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`
- **Các bước quay trong video (3–4 phút):**
  1. **Demo trên trình duyệt (1.5 phút):**
     - Đăng nhập tài khoản nhân viên mới (`an.nguyen@onboardai.vn` / `123456`).
     - Trên `newhire-onboarding-dashboard.html`: Mở danh sách **8 Người đồng hành (Mentor)** do AI đề xuất kèm điểm tương thích `%`, SĐT, Zalo; bấm chọn 1 Mentor mới và mở **Khung Chat trực tiếp** gửi 1 tin nhắn cho Mentor.
     - Chuyển sang `newhire-checklist.html`: Thử gõ từ khóa bất kỳ (VD: `khongco`) để chỉ cho giảng viên thấy **Empty State kèm nút Đặt lại bộ lọc (Mục 9)**; sau đó tích hoàn thành 1 nhiệm vụ để thấy thanh `%` tiến độ tự nhảy (Mục 6, 8).
     - Chuyển sang `newhire-ai-help.html`: Bấm 1 câu hỏi nhanh để demo **Loading State (AI đang suy nghĩ - Mục 10)** và câu trả lời có trích dẫn nguồn.
  2. **Giải thích code trong VS Code (1 phút):**
     - Mở file `newhire-onboarding-dashboard.html`, chỉ vào mảng `MENTOR_PROFILES` (chứa thông tin 8 Mentor, SĐT, Zalo, ảnh `assets/images/mentors/mt01.jpg`..`mt08.jpg`) và hàm `sendMentorChatMessage()` xử lý gửi tin nhắn & lưu vào `localStorage`.
  3. **Sửa trực tiếp code – Live Coding (1 phút):**
     - Mở file `newhire-onboarding-dashboard.html`, tìm dòng chữ tiêu đề chào mừng hoặc điểm tương thích AI (hoặc đổi màu/nội dung lời chào tự động của Mentor trong khung chat), sửa trực tiếp văn bản $\rightarrow$ bấm `Ctrl + S` $\rightarrow$ quay sang trình duyệt tải lại trang để chứng minh code sửa xong ăn ngay lập tức!

---

### 🎬 VIDEO OBS 02: Core Data (`js/api.js`), Phân hệ Người hướng dẫn (Mentor) & AI-2
- **Màn hình trình diễn:** `login.html`, `js/api.js`, `mentor-mentee-list.html`, `mentor-task-assignment.html`
- **Các bước quay trong video (3–4 phút):**
  1. **Demo trên trình duyệt (1.5 phút):**
     - Tại `login.html`: Thử bấm đăng nhập khi để trống hoặc nhập sai mật khẩu để chứng minh **Form Validation & Error State (Mục 7, 10)**. Sau đó đăng nhập tài khoản Mentor (`mentor@onboardai.vn` / `123456`).
     - Tại `mentor-mentee-list.html`: Demo ô tìm kiếm Mentee theo tên và lọc theo trạng thái (`Đúng tiến độ`, `Nguy cơ trễ hạn`); bấm xem chi tiết tiến độ của Mentee và chấm điểm đánh giá định kỳ.
     - Demo tính năng **AI-2 (Cá nhân hóa lộ trình Checklist)** theo vị trí công việc.
  2. **Giải thích code trong VS Code (1 phút):**
     - Mở file `js/api.js`: Giải thích cách `OnboardAPI.init()` đọc dữ liệu từ `assets/data/mock-data.json` và lưu vào `localStorage` với khóa `onboardai_db_v1` (Mục 8).
     - Mở file `mentor-mentee-list.html`: Giải thích hàm `renderMentorDashboard()` lọc danh sách Mentee theo `mentorId` và计算 các chỉ số KPI.
  3. **Sửa trực tiếp code – Live Coding (1 phút):**
     - Trong file `mentor-mentee-list.html`, sửa tiêu đề thẻ KPI hoặc thêm 1 câu thông báo khi gửi nhắc nhở cho Mentee $\rightarrow$ bấm `Ctrl + S` $\rightarrow$ chạy thử trên trình duyệt để thấy thay đổi ngay lập tức.

---

### 🎬 VIDEO OBS 03: Phân hệ Nhân sự (HR Dashboard), Quản trị viên (Admin), Chế độ Thị sát & AI-3
- **Màn hình trình diễn:** `hr-dashboard.html`, `admin-user-management.html`
- **Các bước quay trong video (3–4 phút):**
  1. **Demo trên trình duyệt (1.5 phút):**
     - Đăng nhập tài khoản HR (`hr@onboardai.vn` / `123456`) vào `hr-dashboard.html`: Giới thiệu 4 thẻ KPI, biểu đồ thống kê **`Chart.js`** và bảng cảnh báo sớm **AI-3 (HR Risk Radar)** tự động phát hiện nhân sự trễ hạn.
     - Chuyển sang `admin-user-management.html` (hoặc đăng nhập `admin@onboardai.vn` / `123456`): Demo tìm kiếm/lọc người dùng, bấm **`+ Thêm tài khoản mới`** và để trống ô Email để chứng minh **Form Validation (Mục 7)**, sau đó khóa/mở khóa 1 tài khoản.
     - Demo **Chế độ thị sát đa người dùng (View-As)** ở góc dưới Sidebar và thanh trên cùng: Chọn chuyển đổi giữa nhiều Nhân sự mới (`NH01` $\rightarrow$ `NH06`) và nhiều Người hướng dẫn (`MT01` $\rightarrow$ `MT08`) để thấy dữ liệu tự động đổi theo đúng người được chọn.
  2. **Giải thích code trong VS Code (1 phút):**
     - Mở `hr-dashboard.html`: Chỉ vào hàm khởi tạo biểu đồ `Chart.js` và hàm phân tích rủi ro `AI-3`.
     - Mở `admin-user-management.html`: Chỉ vào hàm `enterImpersonation(role)` và `switchViewAsTarget()` truyền tham số `?view_as=newhire&nh_id=NH02` để chuyển góc nhìn.
  3. **Sửa trực tiếp code – Live Coding (1 phút):**
     - Trong `hr-dashboard.html` hoặc `admin-user-management.html`, sửa trực tiếp nhãn tiêu đề KPI hoặc màu sắc biểu đồ `Chart.js` $\rightarrow$ bấm `Ctrl + S` $\rightarrow$ tải lại trình duyệt để thấy biểu đồ/giao diện cập nhật ngay.

---

## PHẦN 4: CẬP NHẬT LINK 3 VIDEO VÀO `README.md` SAU KHI QUAY XONG

Sau khi quay xong 3 file video `.mp4` từ OBS và tải lên **Google Drive** (nhớ bật quyền *"Anyone with the link / Bất kỳ ai có đường liên kết đều xem được"*) hoặc **YouTube (Unlisted)**, anh chỉ cần dán 3 đường link đó vào bảng ở mục **`## 📹 DANH SÁCH 03 VIDEO MINH CHỨNG OBS`** trong file [`README.md`](file:///C:/Users/admin/.gemini/antigravity/scratch/onboardai-btl20/README.md) (hoặc gửi 3 link đó vào chat để em gắn vào `README.md` và push lên GitHub cho anh)!
