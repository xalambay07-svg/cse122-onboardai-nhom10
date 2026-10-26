# BÁO CÁO MINH BẠCH SỬ DỤNG AI (AI USAGE REPORT) – BTL-20: ONBOARDAI

> **Học phần:** Phát triển Ứng dụng Web Cơ bản – CSE122  
> **Đề tài:** BTL-20 – **OnboardAI – Hành trình hội nhập nhân sự mới**  
> **Chuẩn biểu mẫu:** Phần 10 & Phụ lục F – Tài liệu hướng dẫn BTL CSE122

---

## 1. Nguyên tắc sử dụng AI của Nhóm 10

Nhóm sử dụng các công cụ AI (Gemini / Antigravity AI Agent / ChatGPT) như **trợ lý gợi ý khung mã nguồn, dữ liệu mẫu và giải pháp kỹ thuật**, tuyệt đối tuân thủ nguyên tắc:
1. Sinh viên chủ động phân tích nghiệp vụ, luồng người dùng, bảng kiểm kê màn hình trước khi đặt câu lệnh (Prompt).
2. Mọi đoạn mã do AI gợi ý đều được sinh viên đọc hiểu, kiểm tra cấu trúc DOM, chỉnh sửa logic cho khớp với `window.OnboardAPI` (`js/api.js`) và kiểm thử thực tế trên trình duyệt.
3. Toàn bộ thành viên nắm vững các hàm trong phân hệ của mình để giải thích trong video OBS và sẵn sàng chỉnh sửa trực tiếp (Live Coding) khi bảo vệ.

---

## 2. Chi tiết Khai báo Sử dụng AI theo Mẫu Phụ lục F

### Mục 1: Thiết kế Kiến trúc Dữ liệu JSON & Engine LocalStorage (`js/api.js`)

```text
Công cụ: Gemini / Antigravity AI & ChatGPT
Câu lệnh: "Thiết kế cấu trúc mock-data.json và module js/api.js dùng LocalStorage cho bài toán hội nhập nhân sự mới OnboardAI gồm 4 vai trò (New Hire, Mentor, HR, Admin), hỗ trợ cập nhật tiến độ task, nộp minh chứng và đồng bộ giữa các trang HTML."
AI sinh ra: Khung đối tượng OnboardAPI cơ bản với các hàm đọc/ghi LocalStorage và cấu trúc mảng newHires, tasks, faqs.
Sinh viên chỉnh sửa:
  - Chuẩn hóa khóa lưu trữ ONBOARDAI_DB_V4 để tránh xung đột dữ liệu cũ.
  - Bổ sung dữ liệu thực tế cho 6 nhân sự mới (NH01..NH06) và mở rộng 8 Người đồng hành (MT01..MT08) có đầy đủ SĐT, Zalo, phòng ban, chuyên môn.
  - Viết thêm sự kiện lắng nghe window.addEventListener('storage') để khi nhân viên mới tích hoàn thành task ở tab này thì tab HR và Mentor tự động cập nhật.
Cách kiểm chứng: Mở DevTools -> Application -> Local Storage, tích hoàn thành nhiệm vụ trên newhire-checklist.html và kiểm tra phần trăm tiến độ tự động tăng trên hr-dashboard.html.
Điều học được: Cách tổ chức kiến trúc trạng thái dùng chung (Shared State) giữa nhiều trang HTML tĩnh bằng LocalStorage và cơ chế bất đồng bộ async/await với fetch JSON.
```

---

### Mục 2: Hệ thống AI Đề xuất 8 Người đồng hành & Khung Chat Trực tiếp (`newhire-onboarding-dashboard.html`)

```text
Công cụ: Antigravity AI
Câu lệnh: "Nâng cấp phần Người đồng hành trên newhire-onboarding-dashboard.html: khi tài khoản mới tạo chưa gán sẵn cố định 1 Mentor mà để AI tính điểm tương thích (Match Score %) gợi ý 8 Mentor kèm SĐT, Zalo, ảnh chân dung người Việt và khung Chat trực tiếp."
AI sinh ra: Giao diện Modal danh sách Mentor, hàm tính điểm gợi ý và ngăn kéo Chat (Mentor Chat Drawer).
Sinh viên chỉnh sửa:
  - Tinh chỉnh thuật toán buildPersonalizedMentorCatalog() để tính điểm phù hợp theo phòng ban và vị trí của từng nhân sự mới.
  - Tối ưu hiệu năng CSS (loại bỏ backdrop-filter nặng, thêm will-change và tối ưu sự kiện cuộn) giúp trượt lên xuống danh sách 8 Mentor mượt mà 60fps.
  - Thay thế toàn bộ ảnh đại diện bằng bộ ảnh chân dung công sở Việt Nam (assets/images/mentors/mt01.jpg..mt08.jpg) và lược bỏ các icon trang trí rườm rà.
Cách kiểm chứng: Đăng nhập tài khoản nhân sự mới, mở Modal Khám phá Người đồng hành, kiểm tra cuộn mượt, bấm chọn Mentor mới và gửi tin nhắn trong khung Chat, tải lại trang kiểm tra lịch sử chat vẫn được giữ nguyên.
Điều học được: Kỹ thuật tối ưu hiệu năng hiển thị DOM (Rendering Performance) khi có nhiều thẻ phức tạp và cách quản lý trạng thái hội thoại theo từng cặp New Hire – Mentor.
```

---

### Mục 3: Trợ lý AI-1 Hỏi đáp Chính sách & Trải nghiệm khi AI không chắc chắn (`newhire-ai-help.html`)

```text
Công cụ: Gemini / Antigravity AI
Câu lệnh: "Xây dựng trang newhire-ai-help.html cho tính năng AI-1 hỏi đáp quy chế công ty, có hiệu ứng đang phân tích, trích dẫn nguồn điều khoản và xử lý trường hợp câu hỏi mơ hồ hoặc ngoài phạm vi dữ liệu."
AI sinh ra: Khung giao diện chat AI và hàm tìm kiếm từ khóa đơn giản.
Sinh viên chỉnh sửa:
  - Xây dựng thuật toán chấm điểm ngữ nghĩa 3 vùng (Zone 1: Độ tin cậy cao -> trả lời + trích dẫn điều khoản; Zone 2: Câu hỏi mơ hồ -> gợi ý câu hỏi làm rõ; Zone 3: Ngoài phạm vi -> thông báo AI chưa đủ dữ liệu và hiển thị nút [Chuyển câu hỏi cho HR]).
  - Thêm hiệu ứng gõ chữ (typewriteHtml) và nút sao chép / đánh giá hữu ích.
Cách kiểm chứng: Thử hỏi câu có trong quy chế ("Bảo hiểm", "Thiết bị IT") để kiểm tra Zone 1; hỏi từ khóa ngắn mơ hồ để kiểm tra Zone 2; và hỏi câu ngoài lề để kiểm tra nút chuyển tiếp HR ở Zone 3.
Điều học được: Cách thiết kế trải nghiệm sản phẩm AI (AI UX) có khả năng giải thích (Explainability) và cơ chế dự phòng an toàn (Fallback) khi AI không chắc chắn theo đúng Mục 3.8 & 3.9.
```

---

### Mục 4: Phân hệ Người hướng dẫn & AI-2 Cá nhân hóa Lộ trình (`mentor-mentee-list.html`)

```text
Công cụ: ChatGPT & Antigravity AI
Câu lệnh: "Xây dựng giao diện quản lý danh sách Mentee cho Mentor (mentor-mentee-list.html), hỗ trợ tìm kiếm, lọc trạng thái và tính năng AI-2 gợi ý checklist theo vị trí công việc."
AI sinh ra: Bố cục danh sách thẻ Mentee và bộ lọc cơ bản.
Sinh viên chỉnh sửa:
  - Đồng bộ danh sách 8 Mentor (MENTOR_DIRECTORY) với phân hệ Nhân viên mới để khi nhân viên chọn Mentor nào thì Mentee đó xuất hiện đúng trong danh sách của Mentor đó.
  - Bổ sung tính năng cho phép chuyển đổi góc nhìn giữa cả 8 Mentor (MT01..MT08) khi Admin hoặc HR vào kiểm tra.
Cách kiểm chứng: Đăng nhập bằng các tài khoản mentor@onboardai.vn, minh.nguyen@onboardai.vn, tuan.le@onboardai.vn và kiểm tra bộ lọc, tìm kiếm, trạng thái rỗng (Empty State).
Điều học được: Cách liên kết dữ liệu hai chiều giữa hai vai trò (New Hire <-> Mentor) và xử lý lọc mảng kết hợp nhiều điều kiện trong JavaScript.
```

---

### Mục 5: Trung tâm Điều hành HR (`Chart.js` + AI-3) & Chế độ Thị sát Đa người dùng (`hr-dashboard.html`, `admin-user-management.html`)

```text
Công cụ: Antigravity AI
Câu lệnh: "Tích hợp biểu đồ Chart.js, bảng cảnh báo sớm AI-3 trên hr-dashboard.html và nâng cấp Chế độ thị sát (View-As) trên admin-user-management.html để xem được toàn bộ 6 Nhân sự mới và 8 Người hướng dẫn."
AI sinh ra: Cấu hình biểu đồ Chart.js, bảng CRUD người dùng và thanh Impersonation Bar cơ bản.
Sinh viên chỉnh sửa:
  - Nâng cấp Chế độ thị sát (View-As) cả ở Sidebar trái và thanh điều khiển #adminImpersonateBar trên đầu trang, truyền tham số ?view_as=newhire&nh_id=NH01..NH06 và ?view_as=mentor&mt_id=MT01..MT08.
  - Bổ sung kiểm tra hợp lệ dữ liệu (Form Validation) chống trùng email, chống khóa/xóa Admin cuối cùng và ghi nhận đầy đủ vào Nhật ký kiểm toán (Audit Logs).
Cách kiểm chứng: Đăng nhập tài khoản Admin (admin@onboardai.vn), mở Chế độ thị sát ở Sidebar, chọn lần lượt từng nhân sự NH01..NH06 và từng Mentor MT01..MT08 để kiểm tra dữ liệu hiển thị chính xác theo người được chọn.
Điều học được: Cách sử dụng URLSearchParams để truyền trạng thái điều hướng giữa các trang và cách tích hợp thư viện biểu đồ Chart.js với dữ liệu động từ LocalStorage.
```
