# ĐỀ XUẤT DỰ ÁN (PROJECT PROPOSAL) – BTL-20: ONBOARDAI

> **Học phần:** Phát triển Ứng dụng Web Cơ bản – CSE122  
> **Mã đề tài:** BTL-20 (Lĩnh vực: Nhân sự / HRTech)  
> **Tên sản phẩm:** **OnboardAI – Hành trình hội nhập nhân sự mới**  
> **Nhóm thực hiện:** Nhóm 10 (3 Sinh viên: SV1, SV2, SV3)

---

## 1. Ngữ cảnh thực tế (Context)

Trong các doanh nghiệp công nghệ và dịch vụ hiện đại, **giai đoạn hội nhập nhân sự mới (Employee Onboarding)** kéo dài trong 60 ngày thử việc đầu tiên là giai đoạn quyết định tỷ lệ gắn bó lâu dài của nhân viên. Mỗi nhân sự mới khi gia nhập công ty cần hoàn thành hàng chục đầu việc khác nhau: bàn giao thiết bị IT, ký hồ sơ pháp lý, làm quen quy chế phúc lợi, kết nối với Người đồng hành (Mentor/Buddy) và hoàn thành các bài tập chuyên môn theo từng mốc **Ngày đầu (Day 1) – Tuần 1 (Week 1) – Tháng 1 (Month 1) – Tháng 2 (Month 2)**.

---

## 2. Phát biểu vấn đề (Problem Statement)

Quy trình Onboarding truyền thống bằng file Excel, email rời rạc và tài liệu PDF tĩnh đang gây ra 4 điểm nghẽn lớn:
1. **Với Nhân viên mới (New Hire):** Bị quá tải thông tin, không biết hỏi ai khi thắc mắc về quy chế công ty (lương thưởng, bảo hiểm, nghỉ phép, cấp phát thiết bị), không được tự chọn Người đồng hành phù hợp với chuyên môn và không nắm rõ tiến độ thử việc của bản thân.
2. **Với Người hướng dẫn (Mentor):** Khó theo dõi đồng thời nhiều nhân viên mới (Mentee), thiếu công cụ kiểm tra minh chứng hoàn thành công việc và mất nhiều thời gian soạn thảo lộ trình nhiệm vụ riêng cho từng vị trí.
3. **Với Chuyên viên Nhân sự (HR Specialist):** Thiếu bảng điều khiển trực quan theo thời gian thực; chỉ phát hiện nhân viên mới gặp khủng hoảng hoặc trễ hạn khi đã kết thúc 2 tháng thử việc.
4. **Với Quản trị viên hệ thống (System Admin):** Khó kiểm soát phân quyền truy cập (RBAC), trạng thái tài khoản và nhật ký kiểm toán (Audit Logs).

---

## 3. Mục tiêu dự án (Objectives)

Xây dựng nền tảng web **OnboardAI** giải quyết trọn vẹn bài toán hội nhập nhân sự với 4 mục tiêu cốt lõi:
1. **Chuẩn hóa lộ trình hội nhập 4 giai đoạn:** Số hóa toàn bộ Checklist công việc kèm cơ chế nộp minh chứng (`Proof Submission`) và tính toán tiến độ tự động theo thời gian thực.
2. **Kết nối đa vai trò khép kín:** Liên thông dữ liệu xuyên suốt giữa **4 vai trò** (*Nhân viên mới – Người hướng dẫn – Chuyên viên HR – Quản trị viên*) thông qua kho dữ liệu đồng bộ `window.OnboardAPI` (`localStorage` + `mock-data.json`).
3. **Ứng dụng 3 tính năng AI thực chất (không trùng lặp):**
   - **AI-1 (Tìm kiếm ngữ nghĩa & Trợ lý chính sách):** Hỏi đáp sổ tay nhân sự có trích dẫn nguồn và cơ chế chuyển tiếp HR khi AI không chắc chắn.
   - **AI-2 (Ghép cặp Người đồng hành & Cá nhân hóa lộ trình):** Đề xuất 8 Mentor theo độ tương thích (`Match Score %`) kèm giải thích lý do và tự động sinh nhiệm vụ theo vị trí.
   - **AI-3 (Dự báo & Cảnh báo sớm rủi ro hội nhập – Risk Radar):** Phân tích tiến độ toàn công ty để cảnh báo sớm nhân sự có nguy cơ trễ hạn thử việc.
4. **Đảm bảo chuẩn kỹ thuật Frontend hiện đại:** HTML5 ngữ nghĩa, CSS3 Responsive đa thiết bị, Form Validation, bao phủ đầy đủ các trạng thái (Loading, Empty, Error, Success) và khả năng tiếp cận cơ bản (Accessibility).

---

## 4. Vòng đời dữ liệu & CRUD thực chất (Data Lifecycle – Mục 3.4)

Hệ thống không chỉ dừng ở thao tác Thêm/Đọc/Sửa/Xóa hình thức mà mô phỏng đầy đủ **vòng đời nghiệp vụ** của 3 thực thể cốt lõi:

### 4.1. Vòng đời Nhiệm vụ Hội nhập (Onboarding Task Lifecycle)
```text
Khởi tạo (Pending) 
  → Đang thực hiện (In Progress) 
  → Đã nộp minh chứng (Proof Submitted) 
  → Hoàn thành (Completed)
  ↘ Quá hạn / Cần hỗ trợ (Overdue / Blocked)
```

### 4.2. Vòng đời Ghép cặp Người đồng hành (Mentor Matching Lifecycle)
```text
Chưa có Mentor (Unassigned / Empty State)
  → AI Phân tích & Đề xuất 8 Mentor (AI Recommended + Match Score %)
  → Nhân sự mới lựa chọn Mentor (Selected)
  → Đang đồng hành & Trò chuyện trực tiếp (Active Chat & Coaching)
  ↘ Đổi Người đồng hành (Reassigned)
```

### 4.3. Vòng đời Tài khoản Người dùng (User Account Lifecycle)
```text
Khởi tạo chờ kích hoạt (Pending)
  → Đang hoạt động (Active)
  → Tạm khóa quyền truy cập (Locked / Disabled)
  ↘ Xóa mềm có hoàn tác / Lưu trữ (Soft Deleted with Undo / Archived)
```

---

## 5. Bao phủ trạng thái giao diện (State Coverage – Mục 3.6)

| Nhóm trạng thái | Các trạng thái được triển khai trong OnboardAI |
| :--- | :--- |
| **Trạng thái Dữ liệu** | • **Bình thường (Normal):** Hiển thị danh sách công việc, thẻ KPI, biểu đồ `Chart.js`, danh sách Mentee.<br>• **Đang tải (Loading):** Hiệu ứng Skeleton / Typing Indicator khi AI-1 đang phân tích câu hỏi hoặc khi khởi tạo dữ liệu.<br>• **Rỗng (Empty State):** Khi lọc/tìm kiếm không có kết quả hoặc khi tài khoản mới chưa chọn Mentor (kèm thông điệp hướng dẫn & nút CTA).<br>• **Thành công (Success):** Toast thông báo xanh, hiệu ứng pháo giấy (Confetti) khi hoàn thành nhiệm vụ.<br>• **Lỗi (Error State):** Cảnh báo đỏ khi nhập sai biểu mẫu, lỗi đăng nhập, hoặc trang `404.html`. |
| **Trạng thái Nghiệp vụ** | • **Nhiệm vụ:** `Chưa làm` · `Đang làm` · `Đã nộp minh chứng` · `Hoàn thành` · `Quá hạn`.<br>• **Nhân sự mới:** `Đúng tiến độ (On Track)` · `Cần chú ý (At Risk)` · `Nguy cơ trễ hạn (High Risk / Delayed)`.<br>• **Tài khoản:** `Hoạt động (Active)` · `Chờ kích hoạt (Pending)` · `Đã khóa (Locked)`. |
