# KẾ HOẠCH ĐỒNG BỘ CODE CHO SV2 (HOÀNG) & QUY TRÌNH ĐẨY LÊN GITHUB CẬP NHẬT WEB

> **Dự án:** Hệ thống Quản lý Onboarding Nhân sự Mới tích hợp AI (**OnboardAI** – Đề tài BTL-20, Học phần CSE122)
> **Kho lưu trữ (GitHub Repo):** `https://github.com/xalambay07-svg/cse122-onboardai-nhom10.git`
> **Địa chỉ Website Live (GitHub Pages):** `https://xalambay07-svg.github.io/cse122-onboardai-nhom10/`
> **Người lập:** SV3 – Nguyễn Quốc Huy (Trưởng nhóm) gửi SV2 – Nguyễn Huy Hoàng (`hoagf-dev`)

---

## PHẦN 1: KHI CODE XONG PHẢI UP LÊN ĐÂU Ở GITHUB ĐỂ CẬP NHẬT TRÊN WEB?

### 1.1. Cơ chế cập nhật của trang Web hiện tại
Trang web chính thức tại địa chỉ **`https://xalambay07-svg.github.io/cse122-onboardai-nhom10/`** được xuất bản tự động thông qua **GitHub Pages**, cấu hình lấy mã nguồn trực tiếp từ:
- **Nhánh (Branch):** **`main`** (thư mục gốc `/root`).
- **Ý nghĩa:**
  - Nếu SV2 chỉ đẩy code lên nhánh cá nhân (ví dụ `hoang/feature/trang-dang-nhap`) hoặc chỉ gộp vào `dev` mà **chưa gộp (merge) vào nhánh `main`**, thì trang web GitHub Pages **sẽ KHÔNG thay đổi**.
  - Ngay khi code được gộp vào nhánh **`main`**, GitHub Actions (`pages-build-deployment`) sẽ tự động chạy và cập nhật trang web sau khoảng **1 – 2 phút** (nhấn `Ctrl + F5` trên trình duyệt để xóa bộ nhớ đệm cũ và xem bản mới).

### 1.2. Các lỗi Git cần tuyệt đối tránh (rút kinh nghiệm từ lịch sử commit trước)
1. **KHÔNG dùng nút "Add file -> Upload files" trên giao diện web GitHub:** Việc kéo-thả file trên web tạo ra các commit `Add files via upload` hoặc sinh file trùng đuôi `login.html.html`, vi phạm tiêu chí đánh giá kỹ năng Git của môn CSE122 và dễ ghi đè mất code của thành viên khác.
2. **KHÔNG đặt tên nhánh là đường dẫn URL** (trước đây từng có nhánh tên `origin/https/huyhoang.github.io/onboarding-portal/login.html`). Chỉ đặt tên nhánh theo quy ước: `hoang/feature/<ten-tinh-nang>`.

### 1.3. Quy trình 5 bước bằng lệnh Git để SV2 lấy code mới của SV3 và đẩy lên Web

#### Bước 1: Đồng bộ code mới nhất của SV3 (Huy) về máy trước khi code
Hiện tại SV3 đã hoàn thiện toàn bộ 6 màn hình, bộ nhận diện thương hiệu (Logo SVG, linh vật AI **Onbi**, 4 huy hiệu cột mốc) và đã gộp lên cả `main` lẫn `dev` (commit `8ce5821`). SV2 mở Terminal / Git Bash tại thư mục dự án và chạy:

```bash
git checkout dev
git pull origin main
```

#### Bước 2: Tạo nhánh tính năng riêng của SV2 để làm việc
```bash
git checkout -b hoang/feature/dong-bo-mentor-login-profile
```

#### Bước 3: Sau khi AI của SV2 code xong & kiểm tra trên trình duyệt локал (Local)
Kiểm tra danh sách các file đã sửa/tạo mới bằng `git status`, sau đó đóng gói và đẩy lên GitHub:

```bash
git add js/api.js login.html mentor-mentee-list.html mentor-checkin-note.html mentor-task-assignment.html profile.html
git commit -m "feat(sv2): dong bo giao dien Mentor (MT01-MT03), Login (COM02), Profile (COM03) va bo sung ham API"
git push -u origin hoang/feature/dong-bo-mentor-login-profile
```

#### Bước 4: Gộp vào nhánh `dev` và tạo Pull Request (Đúng chuẩn làm việc nhóm CSE122)
- Lên GitHub kho `xalambay07-svg/cse122-onboardai-nhom10`, tạo **Pull Request (PR)** từ nhánh `hoang/feature/dong-bo-mentor-login-profile` vào nhánh **`dev`**.
- Hoặc gộp trực tiếp dưới máy vào `dev` rồi đẩy lên:
```bash
git checkout dev
git pull origin dev
git merge hoang/feature/dong-bo-mentor-login-profile
git push origin dev
```

#### Bước 5: Đưa từ `dev` lên nhánh `main` để CẬP NHẬT TRANG WEB LIVE
Để code chính thức xuất hiện trên `https://xalambay07-svg.github.io/cse122-onboardai-nhom10/`, Trưởng nhóm (Huy) hoặc SV2 thực hiện gộp từ `dev` sang **`main`**:

```bash
git checkout main
git pull origin main
git merge dev
git push origin main
```
> **Sau khi lệnh `git push origin main` chạy xong:** Đợi 60–90 giây, mở `https://xalambay07-svg.github.io/cse122-onboardai-nhom10/` và bấm `Ctrl + F5` là toàn bộ giao diện mới sẽ hiển thị trên web!

---

## PHẦN 2: BẢNG PHÂN CÔNG CỦA SV2 & HIỆN TRẠNG CÁC FILE TRONG REPO

| STT | Mã màn hình / Module | Tên file (ở thư mục gốc hoặc `js/`) | Hiện trạng trong Repo | Nhiệm vụ cụ thể của SV2 (Hoàng) |
| :-: | :--- | :--- | :--- | :--- |
| 1 | **Data & Fake API** | `js/api.js` | Đã có (136 dòng) | **Cập nhật bắt buộc:** Bổ sung 3 hàm đang bị các màn hình gọi nhưng chưa có (`getNewHires`, `getTasksByNewHire`, `resetDB`) và đồng bộ khóa đăng nhập `currentUser` / `ONBOARDAI_CURRENT_USER`. |
| 2 | **COM02** | `login.html` | Đã có (73KB) | **Sửa lỗi đồng bộ nghiêm trọng:** Đang dùng sai font (`Be Vietnam Pro`), thiếu `js/api.js`, sai ID tài khoản (`USR_NH_001` thay vì `NH01`), và cả 4 vai trò đều đang trỏ nhầm `redirectUrl: 'mentor-mentee-list.html'`. |
| 3 | **MT01** | `mentor-mentee-list.html` | Đã có (19KB) | **Nâng cấp đồng bộ:** Thay logo Sidebar bằng `assets/images/brand/onboardai-mark.svg`, thêm Favicon, nạp động danh sách Mentee từ `API.getNewHires()`, thêm bộ lọc/tìm kiếm, gắn link thật sang `mentor-checkin-note.html`, `mentor-task-assignment.html`, `profile.html`. |
| 4 | **MT02** | `mentor-checkin-note.html` | **CHƯA CÓ (404)** | **Tạo mới:** Màn hình Ghi chú đánh giá 1-on-1 & Phản hồi định kỳ tuần cho Mentee, đọc/lưu vào bảng `checkins` qua `API.getAll('checkins')` và `API.create('checkins', data)`. |
| 5 | **MT03 (AI-2)** | `mentor-task-assignment.html` | **CHƯA CÓ (404)** | **Tạo mới:** Màn hình Giao việc chuyên môn & **AI-2: Checklist Personalizer** (AI gợi ý lộ trình công việc cá nhân hóa theo vị trí, có linh vật **Onbi** trạng thái `thinking`/`happy`, bấm duyệt sẽ lưu thật vào bảng `tasks` của Mentee). |
| 6 | **COM03** | `profile.html` | **CHƯA CÓ (404)** | **Tạo mới:** Màn hình Hồ sơ cá nhân & Đổi mật khẩu dùng chung cho cả 4 vai trò. **(Hiện tại Sidebar của các trang New Hire và Admin đã gắn link tới `profile.html`, nếu thiếu file này khi bấm vào sẽ bị lỗi 404!)** |

> **Lưu ý quan trọng:** SV2 **TUYỆT ĐỐI KHÔNG chỉnh sửa** 6 file HTML của SV3 (`index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`, `hr-dashboard.html`, `admin-user-management.html`) và không xóa các class của SV3 trong `css/style.css` để tránh xung đột (merge conflict) khi gộp nhánh.

---

## PHẦN 3: SỬA LỖI ĐỒNG BỘ DỮ LIỆU & ĐĂNG NHẬP (`js/api.js` & `login.html`)

### 3.1. Chuẩn hóa `js/api.js` (Cực kỳ quan trọng)
Hiện tại các trang của hệ thống đang gọi một số phương thức trên đối tượng `window.API` mà trong `js/api.js` chưa định nghĩa, đồng thời khóa lưu người dùng đang bị lệch giữa `'currentUser'` và `'ONBOARDAI_CURRENT_USER'`.

**Yêu cầu cập nhật `js/api.js`:**
1. Giữ nguyên `STORAGE_KEY = 'ONBOARDAI_DB_V4'` và các hàm CRUD hiện có (`init`, `getAll`, `getById`, `create`, `update`, `delete`, `getOnboardingStatus`, `getDepartmentProgress`).
2. **Bổ sung thêm 3 hàm helper bắt buộc** vào đối tượng `API`:
   ```javascript
   // Lấy danh sách nhân sự mới (được gọi bởi hr-dashboard.html và mentor-mentee-list.html)
   async getNewHires() {
     return await this.getAll('newHires');
   },

   // Lấy danh sách nhiệm vụ theo mã New Hire (được gọi bởi mentor-mentee-list.html, MT03, NH01, NH02)
   async getTasksByNewHire(newHireId) {
     const tasks = await this.getAll('tasks');
     return tasks.filter(t => t.newHireId === newHireId);
   },

   // Khôi phục dữ liệu gốc từ mock-data.json (được gọi bởi admin-user-management.html)
   async resetDB() {
     localStorage.removeItem(STORAGE_KEY);
     return await this.init();
   },
   ```
3. **Đồng bộ hàm `getCurrentUser()`, `setCurrentUser(user)` và `logout()`** để tương thích cả 2 khóa `currentUser` và `ONBOARDAI_CURRENT_USER`:
   ```javascript
   getCurrentUser() {
     const userStr = localStorage.getItem('currentUser') || localStorage.getItem('ONBOARDAI_CURRENT_USER');
     if (userStr) {
       try { return JSON.parse(userStr); } catch (e) {}
     }
     return {
       id: 'NH01',
       name: 'Nguyễn Văn An',
       role: 'newhire',
       roleLabel: 'Nhân sự mới',
       position: 'Frontend Developer',
       department: 'Engineering (Kỹ thuật)',
       avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An'
     };
   },

   setCurrentUser(user) {
     const json = JSON.stringify(user);
     localStorage.setItem('currentUser', json);
     localStorage.setItem('ONBOARDAI_CURRENT_USER', json);
     localStorage.setItem('isLoggedIn', 'true');
     if (user && user.role) {
       localStorage.setItem('userRole', user.role);
     }
   },

   logout() {
     localStorage.removeItem('currentUser');
     localStorage.removeItem('ONBOARDAI_CURRENT_USER');
     localStorage.removeItem('isLoggedIn');
     localStorage.removeItem('userRole');
     sessionStorage.removeItem('isImpersonating');
     sessionStorage.removeItem('impersonatedUserName');
     sessionStorage.removeItem('impersonateReturnUrl');
     window.location.href = 'login.html';
   }
   ```

### 3.2. Sửa lỗi điều hướng và tài khoản trong `login.html` (Mã COM02)
Trong file `login.html` hiện tại của SV2 đang có 4 điểm lệch với hệ thống của SV3 cần sửa ngay:
1. **Nhúng `<script src="js/api.js"></script>`** và gọi `await API.init()` khi trang tải.
2. **Đổi Font & Logo/Favicon:**
   - Đổi Google Font từ `Be Vietnam Pro` sang **`Inter` (`400;500;600;700;800`)** và nhúng `<link rel="stylesheet" href="css/style.css">`.
   - Thêm thẻ Favicon `<link rel="icon" type="image/svg+xml" href="assets/images/brand/onboardai-mark-small.svg">` và hiển thị logo chính `assets/images/brand/onboardai-mark.svg`.
3. **Sửa bảng `ROLES_DATA` trong `login.html` đúng chuẩn ID và đúng trang đích (`redirectUrl`) của từng vai trò:**
   | Vai trò (`role`) | Mã `id` chuẩn | Họ tên (`name`) | Email demo | Trang đích bắt buộc (`redirectUrl`) |
   | :--- | :--- | :--- | :--- | :--- |
   | `newhire` | **`NH01`** | Nguyễn Văn An | `an.nguyen@company.vn` | **`newhire-onboarding-dashboard.html`** |
   | `mentor` | **`MT01`** | Trần Thị Mai | `mai.tran@company.vn` | **`mentor-mentee-list.html`** |
   | `hr` | **`HR01`** | Lê Thu Hà | `ha.le@company.vn` | **`hr-dashboard.html`** |
   | `admin` | **`AD01`** | Phạm Quốc Bảo | `admin@company.vn` | **`admin-user-management.html`** |
4. **Khi đăng nhập thành công:**
   - Xóa các cờ thị sát cũ trong `sessionStorage` (`isImpersonating`, `impersonatedUserName`, `impersonateReturnUrl`).
   - Gọi `API.setCurrentUser(userPayload)` (để lưu đồng thời vào `currentUser`, `ONBOARDAI_CURRENT_USER`, `isLoggedIn = 'true'`, `userRole`).
   - Chuyển hướng `window.location.href = roleData.redirectUrl`.

---

## PHẦN 4: QUY CHUẨN GIAO DIỆN & BỘ KHUNG DÙNG CHUNG (DESIGN SYSTEM CỦA SV3)

Để khi giảng viên chấm bài và bấm chuyển qua lại giữa các trang của SV3 và SV2 **không có bất kỳ sự lệch tông nào**, tất cả các trang của SV2 (`mentor-mentee-list.html`, `mentor-checkin-note.html`, `mentor-task-assignment.html`, `profile.html`, `login.html`) phải tuân thủ 100% các quy tắc sau:

### 4.1. Thẻ `<head>` chuẩn (Copy nguyên văn cho mọi trang của SV2)
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Tên màn hình] | OnboardAI Enterprise</title>
  <link rel="icon" type="image/svg+xml" href="assets/images/brand/onboardai-mark-small.svg">

  <!-- Font Inter Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- CSS Design System (Chứa View Transitions, Onbi Mascot, Badges, Status Pills) -->
  <link rel="stylesheet" href="css/style.css">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            brand: { 50: '#eff6ff', 100: '#dbeafe', 500: '#1F5AFE', 600: '#1F5AFE', 700: '#1748cc' },
            onboard: {
              bg: '#F1F5F9',
              surface: '#FFFFFF',
              border: '#E2E8F0',
              blue: '#1F5AFE',
              mint: '#00B67A'
            }
          }
        }
      }
    }
  </script>

  <!-- Lucide Vector Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
```

### 4.2. Hệ màu 3 lớp (3-Layer Surface), Bo góc & Bóng đổ
- **Nền trang (`<body>`):** `class="bg-[#F1F5F9] text-slate-900 font-sans antialiased h-full flex flex-col"`
- **Thẻ nội dung (Card):** `bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-5` (hoặc `p-6`).
- **Ô phụ bên trong Card:** `bg-slate-50/80 border border-slate-200/80 rounded-xl`.
- **Nút bấm chính (Primary CTA):** `bg-[#1F5AFE] hover:bg-blue-700 text-white rounded-xl text-xs font-bold px-4 py-2.5 shadow-xs transition active:scale-95`.
- **Nhãn trạng thái tiếng Việt đồng bộ với SV3:**
  - Nhiệm vụ (`task.status`):
    - `'completed'` $\rightarrow$ `Hoàn thành` (`bg-emerald-50 text-emerald-700 border border-emerald-200`)
    - `'in_progress'` $\rightarrow$ `Đang thực hiện` (`bg-blue-50 text-[#1F5AFE] border border-blue-200`)
    - `'pending'` $\rightarrow$ `Chưa bắt đầu` (`bg-slate-100 text-slate-600 border border-slate-200`)
    - `'overdue'` $\rightarrow$ `Quá hạn` (`bg-rose-50 text-rose-700 border border-rose-200`)
  - Nhân sự mới (`newHire.status`):
    - `'on_track'` $\rightarrow$ `<span class="pill-status pill-on-track">ĐÚNG TIẾN ĐỘ</span>`
    - `'at_risk'` $\rightarrow$ `<span class="pill-status pill-blocked">CẦN HỖ TRỢ</span>`
    - `'completed'` $\rightarrow$ `<span class="pill-status pill-completed">HOÀN THÀNH</span>`

### 4.3. Thanh "Chế độ thị sát" (`#adminImpersonateBar`) ở đầu `<body>`
Bên phân hệ HR (`hr-dashboard.html`) và Admin (`admin-user-management.html`) của SV3 có nút **"Thị sát Người hướng dẫn"** trỏ thẳng sang `mentor-mentee-list.html` kèm biến `sessionStorage.setItem('isImpersonating', 'true')`.
Vì vậy, tất cả các trang Mentor (`MT01`, `MT02`, `MT03`) và `profile.html` **bắt buộc phải đặt thanh `#adminImpersonateBar` ngay đầu `<body>`**:

```html
<!-- Thanh Thị sát của Quản trị viên / HR (Mặc định ẩn, tự hiện khi sessionStorage có isImpersonating) -->
<div id="adminImpersonateBar" class="hidden bg-slate-900 text-white px-4 py-2.5 text-xs font-medium flex flex-wrap items-center justify-between gap-2 z-50 border-b border-indigo-500/40 shrink-0">
  <div class="flex items-center gap-2">
    <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-500 text-white">Chế độ thị sát</span>
    <span class="text-slate-300">Đang xem giao diện dưới góc nhìn của <strong id="impersonatedTargetName" class="text-white">Trần Thị Mai (Mentor - Tech Lead)</strong></span>
  </div>
  <button onclick="exitImpersonation('hr-dashboard.html')" class="px-3 py-1.5 rounded-xl bg-[#1F5AFE] hover:bg-blue-600 text-white text-xs font-bold transition shadow-xs">
    Thoát chế độ xem & Quay lại Bảng điều khiển
  </button>
</div>
```

### 4.4. Cấu trúc Sidebar chuẩn cho phân hệ Mentor (`#appSidebar`)
- Phải giữ đúng `id="appSidebar"` để khớp với hiệu ứng chuyển trang mượt `view-transition-name: sidebar` trong `css/style.css`.
- Thay icon la bàn cũ bằng **Logo thương hiệu SVG mới** (`assets/images/brand/onboardai-mark.svg`) giống hệt 6 trang của SV3:

```html
<aside id="appSidebar" class="w-64 bg-white border-r border-[#E2E8F0] flex flex-col shrink-0 fixed inset-y-0 left-0 z-40 md:static transition-transform duration-300 -translate-x-full md:translate-x-0">
  <!-- Logo Header đồng bộ 100% với SV3 -->
  <div class="h-16 flex items-center gap-3 px-6 border-b border-slate-100">
    <a href="index.html" class="flex items-center gap-2.5 hover:no-underline">
      <img src="assets/images/brand/onboardai-mark.svg" alt="OnboardAI" width="36" height="36" class="w-9 h-9 shrink-0">
      <div>
        <span class="text-base font-extrabold tracking-tight text-slate-900">Onboard<span class="text-[#1F5AFE]">AI</span></span>
        <span class="block text-[10px] uppercase font-bold tracking-wider text-indigo-600">Mentor Workspace</span>
      </div>
    </a>
  </div>

  <!-- Navigation Links của Mentor -->
  <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
    <div class="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
      Không gian Người hướng dẫn
    </div>
    <!-- Trang nào đang active thì dùng class: bg-indigo-50/80 text-indigo-600 font-semibold ; trang khác dùng: text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium -->
    <a href="mentor-mentee-list.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors ...">
      <i data-lucide="users" class="w-4 h-4"></i>
      <span>Danh sách Mentee</span>
    </a>
    <a href="mentor-checkin-note.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors ...">
      <i data-lucide="clipboard-Signature" class="w-4 h-4"></i>
      <span>Đánh giá 1-on-1 (MT02)</span>
    </a>
    <a href="mentor-task-assignment.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-colors ...">
      <div class="flex items-center gap-3">
        <i data-lucide="sparkles" class="w-4 h-4"></i>
        <span>Giao việc & AI-2</span>
      </div>
      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-700">AI-2</span>
    </a>

    <div class="pt-5 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
      Liên kết nhanh
    </div>
    <a href="newhire-onboarding-dashboard.html" onclick="sessionStorage.setItem('isImpersonating','true'); sessionStorage.setItem('impersonateReturnUrl', window.location.pathname.split('/').pop());" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
      <i data-lucide="eye" class="w-4 h-4"></i>
      <span>Xem góc nhìn Mentee</span>
    </a>

    <div class="pt-5 px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
      Tài khoản & Hệ thống
    </div>
    <a href="profile.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
      <i data-lucide="user-cog" class="w-4 h-4"></i>
      <span>Hồ sơ cá nhân</span>
    </a>
    <a href="index.html" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
      <i data-lucide="globe" class="w-4 h-4"></i>
      <span>Trang giới thiệu</span>
    </a>
    <a href="login.html" onclick="logout()" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors">
      <i data-lucide="log-out" class="w-4 h-4"></i>
      <span>Đăng xuất</span>
    </a>
  </nav>
</aside>
```

### 4.5. Tài sản hình ảnh (Logo, Linh vật Onbi, Huy hiệu) đã có sẵn trong Repo để SV2 tái sử dụng
SV3 đã thiết kế và đưa sẵn vào thư mục `assets/images/` các file chất lượng cao sau, SV2 **sử dụng trực tiếp đường dẫn tương đối**:
- **Logo chính:** `assets/images/brand/onboardai-mark.svg`
- **Favicon (Icon tab trình duyệt):** `assets/images/brand/onboardai-mark-small.svg`
- **Linh vật nữ trợ lý AI Onbi (phong cách Anime 2D):**
  - Avatar tròn 36px (`.onbi-avatar`): `assets/images/mascot/onbi-avatar.webp` (fallback `.png`)
  - Dáng vẫy tay chào: `assets/images/mascot/onbi-greeting.webp`
  - Dáng suy nghĩ (dùng khi AI-2 đang phân tích gợi ý công việc): `assets/images/mascot/onbi-thinking.webp`
  - Dáng vui mừng (dùng khi AI-2 tạo xong lộ trình hoặc Mentee đạt 100%): `assets/images/mascot/onbi-happy.webp`
  - Dáng xin lỗi: `assets/images/mascot/onbi-apologetic.webp`
- **4 Huy hiệu cột mốc (`.badge`):** `assets/images/badges/badge-1.webp` đến `badge-4.webp`.

---

## PHẦN 5: ĐẶC TẢ CHI TIẾT 4 MÀN HÌNH MENTOR & PROFILE CẦN HOÀN THIỆN

### 5.1. Màn hình 1: `mentor-mentee-list.html` (Mã MT01 – Danh sách Mentee phụ trách)
- **Mục tiêu:** Hiển thị danh sách nhân sự mới do Mentor phụ trách, đồng bộ tiến độ thực tế từ `tasks` trong `ONBOARDAI_DB_V4`.
- **Các nâng cấp cần làm trên file hiện có:**
  1. Cập nhật `<head>` (thêm Favicon SVG) và Sidebar chuẩn Mục 4.4 (đổi sang logo `onboardai-mark.svg`, có đủ link tới `mentor-checkin-note.html`, `mentor-task-assignment.html`, `profile.html`).
  2. **Đọc dữ liệu động từ `API.getNewHires()` và `API.getAll('tasks')`:**
     - Với mỗi Mentee, tự động tính lại số nhiệm vụ đã hoàn thành (`status === 'completed'`) trên tổng số nhiệm vụ của Mentee đó (nếu Mentee chưa có task riêng trong mảng `tasks`, fallback về trường `mentee.progress` trong `newHires`).
     - Hỗ trợ thanh **Tìm kiếm theo tên/mã/vị trí** và **Lọc theo trạng thái** (`Tất cả`, `Đúng tiến độ`, `Cần hỗ trợ`).
  3. **Trên mỗi thẻ Mentee có 3 nút hành động chạy thật:**
     - **Nút "Ghi chú 1-on-1"**: Chuyển sang `mentor-checkin-note.html?menteeId=${mentee.id}`.
     - **Nút "Giao việc & AI-2"**: Chuyển sang `mentor-task-assignment.html?menteeId=${mentee.id}`.
     - **Nút "Xem góc nhìn Mentee"**: Ghi `sessionStorage.setItem('isImpersonating', 'true')`, `sessionStorage.setItem('impersonatedUserName', mentee.name + ' (' + mentee.role + ')')`, `sessionStorage.setItem('impersonateReturnUrl', 'mentor-mentee-list.html')` rồi mở `newhire-onboarding-dashboard.html`.

### 5.2. Màn hình 2: `mentor-checkin-note.html` (Mã MT02 – Đánh giá 1-on-1 & Phản hồi định kỳ)
- **Mục tiêu:** Cho phép Mentor ghi nhận buổi gặp 1-on-1 hàng tuần với Mentee, đánh giá mức độ hòa nhập và lưu vào bảng `checkins` trong LocalStorage.
- **Bố cục & Tính năng bắt buộc:**
  1. **Chọn Mentee & Xem tóm tắt tiến độ (Đọc từ `?menteeId=` trên URL hoặc chọn từ Dropdown):**
     - Hiển thị thông tin Mentee (`NH01` Nguyễn Văn An, `NH02` Trần Minh Tuấn, `NH03` Lê Hoàng Long, `NH04` Phạm Thị Hương), vị trí, ngày gia nhập, % tiến độ hiện tại.
  2. **Biểu mẫu Tạo ghi chú Check-in 1-on-1 mới:**
     - Chọn Tuần đánh giá (`Tuần 1`, `Tuần 2`, `Tuần 3`, `Tuần 4`, `Tháng 2`).
     - Chọn Đánh giá tổng quan (`Xuất sắc - Vượt kỳ vọng`, `Đạt yêu cầu - Đúng tiến độ`, `Cần hỗ trợ thêm - Có vướng mắc`).
     - Chấm điểm 3 tiêu chí (thang 1–5 sao hoặc thanh trượt): *Kỹ năng chuyên môn*, *Hòa nhập văn hóa*, *Chủ động giao tiếp*.
     - Ô nhập **Điểm mạnh ghi nhận (`strengths`)**, **Khó khăn / Vướng mắc cần tháo gỡ (`blockers`)**, và **Hành động tiếp theo (`nextSteps` / `notes`)**.
     - Checkbox **"Chuyển tiếp cảnh báo tới HR (Lê Thu Hà)"** nếu Mentee đang gặp khó khăn.
     - Khi bấm **"Lưu biên bản 1-on-1"**:
       - Gọi `await API.create('checkins', newCheckin)` để lưu thật vào `ONBOARDAI_DB_V4`.
       - Nếu Mentor đánh dấu Mentee `"Cần hỗ trợ thêm"`, gọi thêm `await API.update('newHires', menteeId, { status: 'at_risk' })` để bên bảng điều khiển HR (`hr-dashboard.html`) của SV3 tự động nhận diện cảnh báo!
       - Hiện Toast thông báo thành công và render ngay biên bản vừa tạo vào danh sách lịch sử bên dưới.
  3. **Lịch sử các buổi Check-in 1-on-1 (`checkins` timeline):**
     - Đọc từ `await API.getAll('checkins')`, lọc theo `newHireId` đang chọn.
     - Cho phép xem chi tiết hoặc xóa/chỉnh sửa ghi chú vừa tạo.

### 5.3. Màn hình 3: `mentor-task-assignment.html` (Mã MT03 – Giao việc chuyên môn & Tính năng AI-2: Checklist Personalizer)
- **Mục tiêu:** Đây là **1 trong 3 tính năng AI cốt lõi của đề tài BTL-20** (cùng với AI-1 ở NH03 và AI-3 ở HR01 của SV3). Giúp Mentor cá nhân hóa lộ trình công việc cho Mentee theo vị trí chuyên môn chỉ trong vài giây.
- **Quy trình tương tác 7 bước của AI-2 (Checklist Personalizer):**
  1. **Chọn Mentee mục tiêu** (ví dụ `NH01 - Nguyễn Văn An - Frontend Developer` hoặc `NH03 - Lê Hoàng Long - Backend Developer`).
  2. **Khu vực cấu hình đầu vào cho AI-2 (có hình linh vật nữ Onbi bên cạnh):**
     - Chọn **Vị trí chuyên môn (Role Template)**: `Frontend Developer (React/Tailwind)`, `Backend Developer (Node.js/PostgreSQL)`, `UI/UX Designer (Figma/Design System)`, `QA/QC Engineer`.
     - Chọn **Cấp độ kinh nghiệm**: `Fresher / Mới ra trường`, `Junior (1-2 năm)`, `Middle / Senior`.
     - Chọn **Giai đoạn Onboarding**: `Ngày 1 (Làm quen)`, `Tuần 1 (Thiết lập & Kiến trúc)`, `Tháng 1 (Thực chiến dự án)`, `Tháng 2 (Tự chủ & Tối ưu)`.
     - Ô nhập **Yêu cầu trọng tâm của dự án** (có sẵn các chip gợi ý nhanh để bấm 1 chạm).
  3. **Bấm nút `"✨ Nhờ Onbi (AI-2) đề xuất Checklist cá nhân hóa"`:**
     - Hiển thị trạng thái AI đang phân tích trong ~900ms: linh vật Onbi chuyển sang ảnh **`assets/images/mascot/onbi-thinking.webp`** kèm hiệu ứng quét sáng `.animate-shimmer`.
  4. **Hiển thị danh sách 4–5 nhiệm vụ do AI-2 đề xuất:**
     - Linh vật Onbi chuyển sang ảnh **`assets/images/mascot/onbi-happy.webp`**.
     - Mỗi nhiệm vụ gợi ý có: Checkbox chọn duyệt, Tên nhiệm vụ (`title`), Giai đoạn (`phase`: `'Ngày 1'` | `'Tuần 1'` | `'Tháng 1'` | `'Tháng 2'`), Danh mục (`category`: `'Chuyên môn'` | `'Thiết lập'` | `'Văn hóa'`), Thời lượng ước tính (`estimatedTime`), Hạn hoàn thành (`dueDate` định dạng `DD/MM/YYYY`), và nhãn `AI-2 Đề xuất` + Lý do AI gợi ý.
     - Mentor có thể chỉnh sửa trực tiếp tiêu đề/hạn hoàn thành hoặc bỏ chọn các mục không cần thiết.
  5. **Bấm nút `"Phê duyệt & Giao các nhiệm vụ đã chọn cho Mentee"`:**
     - Với mỗi nhiệm vụ được tích chọn, gọi `await API.create('tasks', { newHireId, title, category, dueDate, status: 'pending', phase, estimatedTime, description, assignedBy: 'Trần Thị Mai (Mentor)', source: 'AI-2' })`.
     - **Tính toán lại `% progress` của Mentee đó** và cập nhật vào `newHires` qua `await API.update('newHires', newHireId, { progress: newPct })`.
     - **Kết quả liên thông tuyệt đối với SV3:** Ngay sau khi Mentor bấm Giao việc ở trang này, khi mở sang trang `newhire-checklist.html` hoặc `newhire-onboarding-dashboard.html` của SV3, các nhiệm vụ do Mentor/AI-2 giao sẽ **xuất hiện ngay lập tức** trong lộ trình của Nhân sự mới!
  6. **Form Giao thêm nhiệm vụ thủ công (Manual Task Assignment):** Cho phép Mentor tự thêm 1 nhiệm vụ lẻ ngoài gợi ý của AI.
  7. **Bảng danh sách nhiệm vụ hiện tại của Mentee đang chọn:** Hiển thị toàn bộ các task của Mentee (đọc từ `API.getTasksByNewHire(menteeId)`), cho phép Mentor đổi trạng thái (`Hoàn thành` / `Đang thực hiện`) hoặc xóa nhiệm vụ.

### 5.4. Màn hình 4: `profile.html` (Mã COM03 – Hồ sơ cá nhân & Bảo mật tài khoản)
- **Mục tiêu:** Màn hình dùng chung cho cả 4 vai trò (`newhire`, `mentor`, `hr`, `admin`) khi bấm vào mục **"Hồ sơ cá nhân"** trên Sidebar.
- **Yêu cầu tính năng & Đồng bộ đặc biệt:**
  1. **Tự động nhận diện vai trò người dùng đang đăng nhập** qua `API.getCurrentUser()` để:
     - Hiển thị đúng thông tin cá nhân (Họ tên, Mã nhân sự, Email, Vai trò, Phòng ban, Chức danh, Avatar).
     - **Render menu Sidebar tương ứng với vai trò đó** (hoặc có nút `"← Quay lại Bảng điều khiển chính"` tự động trỏ về `newhire-onboarding-dashboard.html`, `mentor-mentee-list.html`, `hr-dashboard.html` hoặc `admin-user-management.html` tùy theo `user.role`).
  2. **Form Cập nhật thông tin cá nhân:**
     - Cho phép sửa Họ tên, Số điện thoại, Giới thiệu ngắn, Kỹ năng chuyên môn, Múi giờ / Ngôn ngữ thông báo.
     - Khi bấm **"Lưu thay đổi"**, cập nhật lại đối tượng `user` qua `API.setCurrentUser(updatedUser)` và hiện Toast báo thành công.
  3. **Form Đổi mật khẩu & Bảo mật:**
     - Nhập Mật khẩu hiện tại, Mật khẩu mới, Xác nhận mật khẩu mới (kiểm tra độ mạnh mật khẩu trực quan).
  4. **Chế độ Khóa Chỉ-Đọc (Read-Only Guard) khi đang ở Chế độ Thị sát (`isImpersonating`):**
     - Khi HR hoặc Admin đang dùng chế độ "Thị sát" (`sessionStorage.getItem('isImpersonating') !== null`), trang `profile.html` phải hiển thị một banner thông báo màu hổ phách: *"Bạn đang ở chế độ Thị sát (View-As). Các thao tác chỉnh sửa hồ sơ và đổi mật khẩu được khóa để bảo vệ dữ liệu cá nhân của nhân sự."* và làm mờ (`disabled`) nút Lưu / Đổi mật khẩu.

---

## PHẦN 6: PROMPT MẪU ĐỂ SV2 COPY NGUYÊN VĂN GỬI CHO AI BÊN MÁY SV2

> **Hướng dẫn cho SV2 (Hoàng):** Sau khi bạn mở dự án và chạy `git pull origin main` để lấy code mới nhất của Huy về máy, hãy **copy toàn bộ khung Prompt bên dưới** và dán cho trợ lý AI (Antigravity / Cursor / ChatGPT / Claude) của bạn:

```markdown
Bạn là Senior Frontend Developer phụ trách phần việc của SV2 (Hoàng) trong dự án Bài tập lớn môn CSE122 "OnboardAI" (HTML5 + Tailwind CSS CDN + Vanilla JS + LocalStorage Fake DB).
Trưởng nhóm (SV3 - Huy) đã hoàn thành và đẩy lên nhánh `main` 6 màn hình của SV3 (`index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`, `hr-dashboard.html`, `admin-user-management.html`) cùng bộ `css/style.css`, `assets/data/mock-data.json` và hình ảnh thương hiệu trong `assets/images/`.

Hãy đọc kỹ tài liệu `docs/KE_HOACH_DONG_BO_SV2_VA_DEPLOY_GITHUB.md` và tham chiếu trực tiếp cấu trúc HTML/CSS trong `newhire-onboarding-dashboard.html` và `css/style.css` để thực hiện trọn vẹn phần việc của SV2 gồm 6 hạng mục sau:

1. **Cập nhật `js/api.js` (Giữ nguyên `STORAGE_KEY = 'ONBOARDAI_DB_V4'`):**
   - Bổ sung 3 phương thức: `getNewHires()`, `getTasksByNewHire(newHireId)`, và `resetDB()`.
   - Sửa `getCurrentUser()` để đọc `localStorage.getItem('currentUser') || localStorage.getItem('ONBOARDAI_CURRENT_USER')`.
   - Sửa `setCurrentUser(user)` để ghi đồng thời cả `'currentUser'`, `'ONBOARDAI_CURRENT_USER'`, `'isLoggedIn' = 'true'`, và `'userRole' = user.role`.
   - Sửa `logout()` để xóa sạch cả `'currentUser'`, `'ONBOARDAI_CURRENT_USER'`, `'isLoggedIn'`, `'userRole'` và các khóa `isImpersonating`, `impersonatedUserName`, `impersonateReturnUrl` trong `sessionStorage`.

2. **Đồng bộ `login.html` (Mã COM02):**
   - Dùng font `Inter`, nhúng `css/style.css`, `js/api.js`, favicon `assets/images/brand/onboardai-mark-small.svg` và logo `assets/images/brand/onboardai-mark.svg`.
   - Sửa `ROLES_DATA` đúng ID chuẩn (`NH01`, `MT01`, `HR01`, `AD01`) và đúng `redirectUrl` cho từng vai trò:
     + `newhire` -> `newhire-onboarding-dashboard.html`
     + `mentor` -> `mentor-mentee-list.html`
     + `hr` -> `hr-dashboard.html`
     + `admin` -> `admin-user-management.html`
   - Khi đăng nhập thành công, xóa cờ impersonation trong `sessionStorage`, gọi `API.setCurrentUser(user)` và chuyển hướng đúng `redirectUrl`.

3. **Nâng cấp `mentor-mentee-list.html` (Mã MT01):**
   - Đồng bộ Sidebar `#appSidebar` với logo `assets/images/brand/onboardai-mark.svg`, thanh `#adminImpersonateBar` ở đầu `<body>`, và menu điều hướng đầy đủ tới `mentor-mentee-list.html`, `mentor-checkin-note.html`, `mentor-task-assignment.html`, `profile.html`.
   - Nạp động danh sách Mentee từ `API.getNewHires()` kết hợp tính tiến độ thực tế từ `API.getAll('tasks')`, có tìm kiếm theo tên/mã và lọc theo trạng thái (`Đúng tiến độ`, `Cần hỗ trợ`), có nút chuyển sang Ghi chú 1-on-1 (`?menteeId=`), Giao việc AI-2 (`?menteeId=`) và Xem góc nhìn Mentee.

4. **Tạo mới `mentor-checkin-note.html` (Mã MT02):**
   - Giao diện Đánh giá 1-on-1 & Phản hồi định kỳ của Mentor cho Mentee (hỗ trợ đọc `?menteeId=` từ URL hoặc chọn từ dropdown).
   - Có biểu mẫu chấm điểm, nhập Điểm mạnh, Khó khăn/Vướng mắc, Hành động tiếp theo, tùy chọn gửi cảnh báo cho HR; khi bấm Lưu sẽ gọi `API.create('checkins', ...)` và cập nhật danh sách lịch sử check-in bên dưới.

5. **Tạo mới `mentor-task-assignment.html` (Mã MT03 - Tích hợp AI-2 Checklist Personalizer):**
   - Cho phép chọn Mentee, chọn Role Template, cấp độ, giai đoạn và bấm nút nhờ trợ lý AI **Onbi** gợi ý lộ trình công việc cá nhân hóa.
   - Sử dụng hình ảnh linh vật Onbi có sẵn trong `assets/images/mascot/onbi-thinking.webp` (khi đang phân tích) và `assets/images/mascot/onbi-happy.webp` (khi gợi ý xong) kèm class `.onbi-stage` trong `css/style.css`.
   - Khi Mentor bấm Phê duyệt & Giao việc, lưu từng task được chọn vào bảng `tasks` qua `API.create('tasks', ...)` với đúng `newHireId` (ví dụ `'NH01'`) để bên màn hình `newhire-checklist.html` của SV3 hiển thị ngay lập tức. Kèm form giao việc thủ công và danh sách quản lý các task hiện có của Mentee.

6. **Tạo mới `profile.html` (Mã COM03):**
   - Trang Hồ sơ cá nhân & Đổi mật khẩu dùng chung cho cả 4 vai trò, đọc người dùng hiện tại từ `API.getCurrentUser()`, tự động điều chỉnh Sidebar/nút quay lại theo `role`.
   - Nếu đang ở chế độ thị sát (`sessionStorage.getItem('isImpersonating')`), hiển thị cảnh báo Read-Only và khóa các nút chỉnh sửa/đổi mật khẩu.

RÀNG BUỘC QUAN TRỌNG:
- TUYỆT ĐỐI KHÔNG chỉnh sửa 6 file HTML của SV3 (`index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`, `hr-dashboard.html`, `admin-user-management.html`) và không xóa bất kỳ nội dung nào trong `css/style.css`.
```
