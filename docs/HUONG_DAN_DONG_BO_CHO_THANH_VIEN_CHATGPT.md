# TÀI LIỆU ĐỒNG BỘ QUY TRÌNH & NẠP CONTEXT CHO THÀNH VIÊN DÙNG CHATGPT
## DỰ ÁN BÀI TẬP LỚN CSE122: ONBOARDAI (BTL-20)
> **Dành cho:** Bạn Hoàng và ChatGPT của Hoàng  
> **Mục đích:** Đồng bộ 100% kiến trúc dữ liệu, tên file, Design System và quy trình Git CLI để ghép code không bị lỗi 404 và đạt điểm tối đa bài tập lớn.

---

## 📌 HƯỚNG DẪN DÀNH CHO BẠN HOÀNG:
Khi bắt đầu một phiên chat mới với ChatGPT để nhờ viết code, bạn hãy **COPY TOÀN BỘ NỘI DUNG FILE NÀY** và gửi cho ChatGPT với câu lệnh:
> *"Đây là tài liệu quy chuẩn dự án của nhóm tôi. Hãy đọc kỹ kiến trúc, tên file, cấu trúc LocalStorage và quy chuẩn Design System dưới đây để viết code chuẩn xác 100% cho các nhiệm vụ của tôi."*

---

# PHẦN 1: BẢN ĐỒ PHÂN CÔNG & DANH SÁCH TÊN FILE BẮT BUỘC

Nhóm có 2 thành viên, phân chia nhiệm vụ như sau:

### 1. Phân hệ của Trưởng nhóm (Huy) phụ trách:
- `index.html`: Landing Page giới thiệu (COM01).
- `newhire-onboarding-dashboard.html`: Bảng điều khiển nhân sự mới (NH01).
- `newhire-checklist.html`: Hành trình & Checklist 60 ngày (NH02).
- `newhire-ai-help.html`: Trợ lý AI hỏi đáp nội quy (NH03 - AI-1).
- `hr-dashboard.html`: Bảng điều khiển HR & Biểu đồ Chart.js (HR01 - AI-3).
- `admin-user-management.html`: Quản trị tài khoản (AD02).

### 2. Phân hệ của Hoàng phụ trách:
- `login.html`: Đăng nhập & Chọn vai trò nhanh (COM02). *(LƯU Ý: Tuyệt đối không đặt tên có dấu cách hay `(1)`)*.
- `mentor-mentee-list.html`: Danh sách nhân sự mới cần kèm cặp (MT01).
- `mentor-checkin-note.html`: Phiếu ghi nhận đánh giá 1-on-1 (MT02).
- `mentor-task-assignment.html`: Giao việc kèm tính năng AI Gợi ý Checklist (MT03 - AI-2).
- `profile.html`: Hồ sơ cá nhân (COM03).
- `assets/data/mock-data.json`: Dữ liệu Mock 6 thực thể.
- `js/api.js`: Module CRUD LocalStorage dùng chung.

---

# PHẦN 2: QUY CHUẨN LIÊN THÔNG DỮ LIỆU (LOCALSTORAGE & SESSION)

Để trang `login.html` của Hoàng đăng nhập xong có thể nhảy thẳng vào Dashboard của Huy mà **KHÔNG BỊ LỖI MẤT DỮ LIỆU**, bắt buộc phải tuân thủ 2 điều:

### 1. Đường dẫn chuyển trang (Redirect URLs) chính xác:
Sau khi đăng nhập hoặc bấm nút chọn vai trò nhanh, chuyển hướng theo đúng các file sau:
```javascript
const DASHBOARD_REDIRECTS = {
  newhire: "newhire-onboarding-dashboard.html", // BẮT BUỘC đúng tên này
  mentor: "mentor-mentee-list.html",           // BẮT BUỘC đúng tên này
  hr: "hr-dashboard.html",
  admin: "admin-user-management.html"
};
```

### 2. Định dạng lưu Session `currentUser` vào LocalStorage:
Hệ thống chung của Huy dùng hàm `API.getCurrentUser()` để lấy thông tin người dùng đang đăng nhập. Vì vậy, khi đăng nhập thành công, bạn **PHẢI lưu đúng object `currentUser`** như sau:

```javascript
// Dữ liệu mẫu nạp sẵn cho 4 vai trò:
const MOCK_ACCOUNTS = {
  newhire: {
    id: "NH01",
    name: "Nguyễn Văn An",
    email: "an.nguyen@company.com",
    role: "newhire",
    title: "Frontend Developer",
    department: "Phòng Kỹ thuật",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=An"
  },
  mentor: {
    id: "M01",
    name: "Trần Thị Mai",
    email: "mai.tran@company.com",
    role: "mentor",
    title: "Tech Lead",
    department: "Phòng Kỹ thuật",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai"
  },
  hr: {
    id: "HR01",
    name: "Lê Hoàng Nam",
    email: "nam.le@company.com",
    role: "hr",
    title: "HR Specialist",
    department: "Phòng Nhân sự",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nam"
  },
  admin: {
    id: "AD01",
    name: "Quản trị viên Hệ thống",
    email: "admin@company.com",
    role: "admin",
    title: "System Admin",
    department: "Ban Công nghệ",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
  }
};

// Hàm xử lý đăng nhập & lưu phiên chuẩn:
function handleLoginSuccess(role, email) {
  let user = MOCK_ACCOUNTS[role] || MOCK_ACCOUNTS.newhire;
  if (email && email !== user.email) {
    user = { ...user, email: email };
  }
  // BẮT BUỘC LƯU KEY NÀY:
  localStorage.setItem('currentUser', JSON.stringify(user));
  localStorage.setItem('isLoggedIn', 'true');

  // Chuyển hướng tới đúng trang:
  window.location.href = DASHBOARD_REDIRECTS[role];
}
```

---

# PHẦN 3: TIÊU CHUẨN GIAO DIỆN (DESIGN SYSTEM CHUNG)

Để bài tập lớn đồng bộ, các màn hình của Hoàng cần sử dụng cùng một phong cách với nhóm:
1. **Font chữ:** `Inter` (Google Fonts).
2. **Framework CSS:** Tailwind CSS CDN (`<script src="https://cdn.tailwindcss.com"></script>`).
3. **Thư viện Icon:** **Lucide Icons** (Vector SVG), gọi `<script src="https://unpkg.com/lucide@latest"></script>` và kích hoạt bằng `lucide.createIcons();` ở cuối body.  
   *(❌ Tuyệt đối KHÔNG dùng emoji thô `👨‍💻`, `🧑‍🏫` làm icon giao diện)*.
4. **Màu chủ đạo (Primary Color):** Blue (`#2563eb`).

---

# PHẦN 4: MÃ NGUỒN CHUẨN CỦA TRANG `login.html` (MÃ COM02)
> *ChatGPT bên phía bạn Hoàng có thể dùng trực tiếp mã nguồn chuẩn này:*

```html
<!DOCTYPE html>
<html lang="vi" class="h-full">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đăng nhập – OnboardAI Enterprise</title>
  
  <!-- Font Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'] },
          colors: {
            brand: { 50: '#eff6ff', 100: '#dbeafe', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' }
          }
        }
      }
    }
  </script>

  <!-- Lucide Vector Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 min-h-screen flex items-center justify-center p-4 font-sans text-slate-900 antialiased">

  <div class="w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 space-y-6">
    <!-- Header Logo -->
    <div class="text-center space-y-2">
      <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mx-auto shadow-md">
        <i data-lucide="compass" class="w-6 h-6"></i>
      </div>
      <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">Onboard<span class="text-blue-600">AI</span></h1>
      <p class="text-xs text-slate-500">Nền tảng đồng hành và quản trị hội nhập nhân sự thông minh</p>
    </div>

    <!-- Form Đăng nhập -->
    <form id="loginForm" class="space-y-4">
      <div>
        <label for="loginEmail" class="block text-xs font-semibold text-slate-700 mb-1.5">Email làm việc</label>
        <div class="relative">
          <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input type="email" id="loginEmail" placeholder="name@company.com" required
            class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label for="loginPassword" class="block text-xs font-semibold text-slate-700">Mật khẩu</label>
          <a href="#" onclick="alert('Tính năng khôi phục mật khẩu đang thử nghiệm. Hãy dùng đăng nhập vai trò nhanh bên dưới!'); return false;" class="text-[11px] font-semibold text-blue-600 hover:underline">Quên mật khẩu?</a>
        </div>
        <div class="relative">
          <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
          <input type="password" id="loginPassword" placeholder="••••••••" required
            class="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all">
        </div>
      </div>

      <div id="loginErrorMsg" class="hidden p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium text-center"></div>

      <button type="submit" class="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center justify-center gap-1.5">
        <span>Đăng nhập hệ thống</span>
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    </form>

    <!-- Phân cách chọn nhanh vai trò -->
    <div class="relative flex py-1 items-center">
      <div class="flex-grow border-t border-slate-200"></div>
      <span class="shrink-0 mx-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Hoặc vào nhanh với vai trò</span>
      <div class="flex-grow border-t border-slate-200"></div>
    </div>

    <!-- Bộ 4 nút chọn nhanh vai trò -->
    <div class="grid grid-cols-2 gap-2.5">
      <button onclick="quickSelectRole('newhire')" class="p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left flex items-center gap-2.5 active:scale-95 group">
        <div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
          <i data-lucide="user-check" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-800">New Hire</div>
          <div class="text-[10px] text-slate-400">Nhân sự mới</div>
        </div>
      </button>

      <button onclick="quickSelectRole('mentor')" class="p-2.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-all text-left flex items-center gap-2.5 active:scale-95 group">
        <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
          <i data-lucide="award" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-800">Mentor</div>
          <div class="text-[10px] text-slate-400">Cố vấn chuyên môn</div>
        </div>
      </button>

      <button onclick="quickSelectRole('hr')" class="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left flex items-center gap-2.5 active:scale-95 group">
        <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
          <i data-lucide="users" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-800">HR Manager</div>
          <div class="text-[10px] text-slate-400">Nhân sự & Báo cáo</div>
        </div>
      </button>

      <button onclick="quickSelectRole('admin')" class="p-2.5 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 transition-all text-left flex items-center gap-2.5 active:scale-95 group">
        <div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
          <i data-lucide="shield" class="w-4 h-4"></i>
        </div>
        <div>
          <div class="text-xs font-bold text-slate-800">Admin</div>
          <div class="text-[10px] text-slate-400">Quản trị hệ thống</div>
        </div>
      </button>
    </div>

    <div class="pt-2 text-center text-[11px] text-slate-400">
      Đồ án môn CSE122 &bull; Nhóm 10 (OnboardAI)
    </div>
  </div>

  <script>
    const DASHBOARD_REDIRECTS = {
      newhire: "newhire-onboarding-dashboard.html",
      mentor: "mentor-mentee-list.html",
      hr: "hr-dashboard.html",
      admin: "admin-user-management.html"
    };

    const MOCK_ACCOUNTS = {
      newhire: {
        id: "NH01",
        name: "Nguyễn Văn An",
        email: "an.nguyen@company.com",
        role: "newhire",
        title: "Frontend Developer",
        department: "Phòng Kỹ thuật",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=An"
      },
      mentor: {
        id: "M01",
        name: "Trần Thị Mai",
        email: "mai.tran@company.com",
        role: "mentor",
        title: "Tech Lead",
        department: "Phòng Kỹ thuật",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai"
      },
      hr: {
        id: "HR01",
        name: "Lê Hoàng Nam",
        email: "nam.le@company.com",
        role: "hr",
        title: "HR Specialist",
        department: "Phòng Nhân sự",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nam"
      },
      admin: {
        id: "AD01",
        name: "Quản trị viên Hệ thống",
        email: "admin@company.com",
        role: "admin",
        title: "System Admin",
        department: "Ban Công nghệ",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
      }
    };

    function loginWithRole(role, customEmail = null) {
      const user = MOCK_ACCOUNTS[role] || MOCK_ACCOUNTS.newhire;
      if (customEmail) user.email = customEmail;
      
      // Lưu phiên chuẩn đồng bộ toàn dự án
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      
      // Chuyển hướng
      window.location.href = DASHBOARD_REDIRECTS[role];
    }

    function quickSelectRole(role) {
      loginWithRole(role);
    }

    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value.trim();

      if (!email || !pass) {
        const err = document.getElementById('loginErrorMsg');
        err.innerText = 'Vui lòng nhập đầy đủ Email và Mật khẩu!';
        err.classList.remove('hidden');
        return;
      }

      // Xác định role dựa vào email hoặc mặc định vào New Hire
      let detectedRole = 'newhire';
      if (email.includes('mentor') || email.includes('mai')) detectedRole = 'mentor';
      else if (email.includes('hr') || email.includes('nam')) detectedRole = 'hr';
      else if (email.includes('admin')) detectedRole = 'admin';

      loginWithRole(detectedRole, email);
    });

    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });
  </script>
</body>
</html>
```

---

# PHẦN 5: QUY TRÌNH GIT DÒNG LỆNH (GIT CLI) BẮT BUỘC ĐỂ KHÔNG BỊ TRỪ ĐIỂM

> ⚠️ **CẢNH BÁO QUAN TRỌNG:** Thầy cô chấm điểm lịch sử Git. Tuyệt đối **KHÔNG dùng nút "Upload files"** trên web GitHub (sẽ sinh commit `Add files via upload` bị trừ điểm).

### Các bước bạn Hoàng cần làm trên máy tính cá nhân:

#### Bước 1: Mở Terminal / PowerShell tại thư mục dự án trên máy bạn
```bash
# 1. Kéo code mới nhất từ nhánh chung dev về máy:
git checkout dev
git pull origin dev

# 2. Tạo hoặc chuyển sang nhánh của bạn:
git checkout -b hoang/feature/auth-login
```

#### Bước 2: Lưu code vào đúng tên file `login.html`
- Tạo file `login.html` tại thư mục gốc của dự án (ngang hàng với `index.html`).
- Dán mã nguồn từ **Phần 4** ở trên vào.

#### Bước 3: Dùng lệnh Git CLI để commit và push lên GitHub
```bash
# 3. Kiểm tra trạng thái:
git status

# 4. Thêm file vào vùng chờ commit:
git add login.html

# 5. Commit với thông điệp chuẩn mực chuyên nghiệp:
git commit -m "feat(auth): implement login page with role switcher and session management"

# 6. Đẩy lên nhánh của bạn trên GitHub:
git push -u origin hoang/feature/auth-login
```

#### Bước 4: Tạo Pull Request (PR) trên GitHub
- Lên GitHub, bấm vào nút **"Compare & pull request"**.
- Chọn Base branch là: **`dev`** (tuyệt đối không chọn `main`).
- Bấm **"Create pull request"** để Trưởng nhóm (Huy) duyệt và gộp vào dự án.
