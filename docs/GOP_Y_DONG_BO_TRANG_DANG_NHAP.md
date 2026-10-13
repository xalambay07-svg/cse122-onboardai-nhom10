# GÓP Ý & HƯỚNG DẪN ĐỒNG BỘ GIAO DIỆN ĐĂNG NHẬP (`login.html`)

> **Người gửi:** Nhóm trưởng / Thành viên phụ trách tích hợp hệ thống  
> **Người nhận:** Hoàng (`hoagf-dev`) – Phụ trách module Xác thực & Đăng nhập  
> **Dự án:** OnboardAI (BTL-20 – CSE122)  
> **Thời gian:** 13/10/2026  

---

### Lời mở đầu
Chào Hoàng! Giao diện mới bạn vừa đẩy lên rất đẹp và chuyên nghiệp:
- Bố cục 2 panel hiện đại (panel trái bầu trời đêm với đồ họa hành trình nét đứt chuyển động rất ấn tượng).
- Đầy đủ cả 3 luồng: Đăng nhập, Đăng ký, Quên mật khẩu có đo độ mạnh mật khẩu.
- Hỗ trợ song ngữ Tiếng Việt và Tiếng Anh rất mượt mà.

Tuy nhiên, trang web chính thức (GitHub Pages) hiện chưa hiển thị giao diện mới này do một vài điểm lệch về nhánh Git và cấu trúc dữ liệu chung của nhóm. Bạn xem qua các điểm dưới đây và cập nhật lại giúp nhóm nhé!

---

### 1. Đổi tên file và nhánh Git khi đẩy lên
1. **Tên file:**
   - Hiện tại bạn đang đặt tên là `trangdau.html`.
   - **Cần đổi tên thành:** `login.html` (để thay thế trang đăng nhập cũ và khớp với các nút "Đăng xuất", "Quay lại đăng nhập" từ tất cả các trang khác).
2. **Nhánh Git (Branch):**
   - Hiện tại bạn đang commit vào nhánh có tên là `https/huyhoang.github.io/onboarding-portal/login.html`.
   - **Cần đẩy vào:** Nhánh `dev` hoặc tạo **Pull Request từ nhánh của bạn vào `dev`** để nhóm review và gộp lên `main` (GitHub Pages của nhóm đang chạy tự động từ nhánh `main`).

---

### 2. Sửa đường dẫn chuyển trang (`redirectUrl`) theo đúng vai trò
Hiện tại trong `ROLES_DATA`, cả 4 vai trò đều đang trỏ về `mentor-mentee-list.html`. Bạn sửa lại đường dẫn chuyển trang đúng theo phân quyền của 4 thành viên trong nhóm như sau:

| Vai trò | Trang cần chuyển đến | Mô tả |
|---|---|---|
| **newhire** | `newhire-onboarding-dashboard.html` | Bảng điều khiển lộ trình của nhân sự mới |
| **mentor** | `mentor-mentee-list.html` | Danh sách mentee cần kèm cặp của Mentor |
| **hr** | `hr-dashboard.html` | Bảng điều khiển quản trị nhân sự tổng thể |
| **admin** | `admin-user-management.html` | Trang quản trị tài khoản và phân quyền |

---

### 3. Đồng bộ mã định danh (`id`) với CSDL chung (`mock-data.json`)
Các trang Dashboard, Checklist và Trợ lý AI đang đọc dữ liệu nhiệm vụ theo mã nhân viên. Nếu dùng mã `USR_NH_...` thì hệ thống sẽ không tìm thấy nhiệm vụ nào của nhân sự:

* Đổi `USR_NH_001` $\rightarrow$ **`NH01`** (Nguyễn Văn An – Frontend Developer)
* Đổi `USR_MT_102` $\rightarrow$ **`M01`** hoặc **`MT01`** (Trần Thị Mai – Tech Lead / Mentor)
* Đổi `USR_HR_055` $\rightarrow$ **`HR01`** (Lê Hoàng Nam – Chuyên viên Nhân sự)
* Đổi `USR_AD_001` $\rightarrow$ **`AD01`** (Quản trị viên Hệ thống)

---

### 4. Nhúng `js/api.js` và đồng bộ lưu phiên (`localStorage`)
1. **Thêm script API vào `<head>` hoặc trước thẻ `<script>` chính:**
   ```html
   <script src="js/api.js"></script>
   ```
2. **Trong hàm `saveSessionAndRedirect(account)`:**
   Bổ sung thêm lệnh gọi `API.setCurrentUser(sessionData)` để đảm bảo CSDL LocalStorage được khởi tạo tự động nếu người dùng truy cập web từ trang đăng nhập đầu tiên:
   ```javascript
   localStorage.setItem('currentUser', JSON.stringify(sessionData));
   localStorage.setItem('userRole', user.role);
   localStorage.setItem('isLoggedIn', 'true');
   if (window.API && window.API.setCurrentUser) {
     API.setCurrentUser(sessionData);
   }
   ```

---

### 5. Gợi ý UX: Tự điền mật khẩu mẫu khi click chọn vai trò
Form của bạn bắt buộc nhập đúng mật khẩu `123456` rất chuẩn chỉ. Tuy nhiên để tiện cho việc **demo báo cáo và giảng viên chấm bài chấm nhanh**, trong hàm `selectRole(roleKey)` bạn nên tự động điền sẵn mật khẩu `123456` vào ô `#loginPassword`:
```javascript
function selectRole(roleKey) {
  selectedRole = roleKey;
  document.querySelectorAll('.role-card[data-role]').forEach(card => {
    card.classList.toggle('is-active', card.dataset.role === roleKey);
  });
  updateLoginEmailPlaceholder();
  // Tự động điền email và mật khẩu mẫu để demo 1-chạm thuận tiện
  if (ROLES_DATA[roleKey]) {
    document.getElementById('loginEmail').value = ROLES_DATA[roleKey].email;
    document.getElementById('loginPassword').value = DEMO_PASSWORD;
  }
  hideToast();
}
```

---

### 6. Đoạn code `ROLES_DATA` mẫu đã chuẩn hóa sẵn (Chỉ cần copy vào file)

```javascript
    const ROLES_DATA = {
      newhire: {
        id: 'NH01',
        name: 'Nguyễn Văn An',
        email: 'an.nguyen@company.com',
        role: 'newhire',
        department: 'Phòng Kỹ thuật Công nghệ',
        position: 'Frontend Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An',
        mentorName: 'Trần Thị Mai',
        redirectUrl: 'newhire-onboarding-dashboard.html'
      },
      mentor: {
        id: 'M01',
        name: 'Trần Thị Mai',
        email: 'mai.tran@company.com',
        role: 'mentor',
        department: 'Phòng Kỹ thuật Công nghệ',
        position: 'Tech Lead & Mentor',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai',
        menteeCount: 3,
        redirectUrl: 'mentor-mentee-list.html'
      },
      hr: {
        id: 'HR01',
        name: 'Lê Hoàng Nam',
        email: 'nam.le@company.com',
        role: 'hr',
        department: 'Phòng Nhân sự',
        position: 'HR Specialist',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam',
        redirectUrl: 'hr-dashboard.html'
      },
      admin: {
        id: 'AD01',
        name: 'Quản trị viên Hệ thống',
        email: 'admin@company.com',
        role: 'admin',
        department: 'Ban Công nghệ & Vận hành',
        position: 'System Administrator',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
        redirectUrl: 'admin-user-management.html'
      }
    };
    const DEMO_PASSWORD = '123456';
```

---
*Cảm ơn Hoàng nhiều nhé! Cập nhật xong bạn cứ ping nhóm để merge lên `main` và chạy live ngay nhé!*
