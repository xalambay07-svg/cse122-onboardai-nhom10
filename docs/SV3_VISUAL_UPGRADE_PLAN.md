# KẾ HOẠCH NÂNG CẤP HÌNH ẢNH & CHUYỂN ĐỘNG – PHẦN SV3

> **Dự án:** OnboardAI (BTL-20 – CSE122)  
> **Phạm vi:** 6 trang của SV3: `index.html`, `newhire-onboarding-dashboard.html` (NH01), `newhire-checklist.html` (NH02), `newhire-ai-help.html` (NH03), `hr-dashboard.html` (HR01), `admin-user-management.html` (AD02)  
> **Nguyên tắc:** chỉ gồm những việc **không cần chờ SV2**. Các việc liên quan `mock-data.json` / `js/api.js` để riêng ở mục 8.

---

## 0. TRẠNG THÁI CÁC QUYẾT ĐỊNH

| Hạng mục | Trạng thái |
|---|---|
| Logo | ✅ Đã chốt **phương án C** (đường chấm thành vòng liền + tia sáng AI). File SVG sẵn sàng |
| Linh vật Onbi | ✅ Đã chốt **nhân vật nữ anime 2D – bản 3, phương án 2**: da sáng, cười tự nhiên, áo vest xanh + quần. Đã tách nền, xuất file web |
| Nền phía sau Onbi | ✅ **Vòng tròn mờ** (CSS, không cần ảnh) |
| Hình trạng thái trống | ✅ **Dùng Onbi thay cho hình unDraw** (mức 1: dùng lại 4 tư thế). Không dùng 4 hình unDraw nữa |
| Huy hiệu | ✅ Chuyển thành **cột mốc theo 4 chặng**, bỏ chuỗi điểm danh, bỏ/ẩn XP. Ảnh 4 huy hiệu đã tách nền, xuất file web |

---

## 1. TÀI NGUYÊN HÌNH ẢNH

### 1.1. Tài nguyên đã xuất sẵn – chép vào dự án
Toàn bộ nằm ở `C:\Users\admin\.gemini\antigravity\scratch\onboardai-assets\` → chép **nguyên 3 thư mục** `brand/`, `mascot/`, `badges/` vào `assets/images/` của dự án:
```
assets/images/
├── brand/
│   ├── onboardai-mark.svg          logo đầy đủ (≥ 32px)
│   └── onboardai-mark-small.svg    logo rút gọn (favicon, ≤ 24px)
└── mascot/                         (mỗi file có cả .webp và .png, nền trong suốt)
    ├── onbi-avatar.webp            256×256 – avatar tròn trong chat
    ├── onbi-avatar-128.webp        128×128 – avatar nhỏ (nhẹ hơn)
    ├── onbi-greeting.webp          256×480 – tư thế chào
    ├── onbi-thinking.webp          256×480 – tư thế suy nghĩ
    ├── onbi-happy.webp             256×480 – tư thế vui
    ├── onbi-sorry.webp             256×480 – tư thế xin lỗi
    └── onbi-poses.webp             1024×480 – cả 4 tư thế trong 1 ảnh (nếu muốn cắt bằng CSS)
└── badges/                         (.webp + .png, nền trong suốt, 128×128)
    ├── badge-1.webp                Tân binh (xanh dương, tên lửa)
    ├── badge-2.webp                Tự lập (chàm, dấu tick)
    ├── badge-3.webp                Hòa nhập (xanh ngọc, kết nối đồng đội)
    └── badge-4.webp                Thành viên chính thức (vàng, ngôi sao)
```
- Dùng **WebP** (nhẹ, ~6–26KB mỗi file). File **PNG** cùng tên để dự phòng.
- Có sẵn trang `onboardai-assets/demo.html` minh họa cách dùng (logo sidebar, chat, trạng thái trống) – mở để xem trước khi làm.

### 1.2. Logo
**Favicon:** thêm vào `<head>` của **cả 6 trang**:
```html
<link rel="icon" href="assets/images/brand/onboardai-mark-small.svg" type="image/svg+xml">
```

**Logo trong sidebar:** thay icon la bàn hiện tại (giữ nguyên dòng phụ theo vai trò):
```html
<a href="index.html" class="flex items-center gap-2.5">
  <img src="assets/images/brand/onboardai-mark.svg" width="36" height="36" alt="">
  <div>
    <div class="text-[17px] font-extrabold tracking-tight leading-tight text-slate-900">Onboard<span class="text-[#1F5AFE]">AI</span></div>
    <div class="text-[10px] font-bold tracking-[.12em] text-slate-400">ENTERPRISE</div> <!-- HR SPECIALIST / SYSTEM ADMIN -->
  </div>
</a>
```
- `index.html`: thay emoji 🚀 bằng cùng logo này.
- Chữ "OnboardAI" viết bằng HTML, **không** nhúng vào SVG (SVG chèn bằng `<img>` không dùng được font của trang).
- Logo hiện chỉ dùng trên nền sáng. Trên nền tối (banner AI-3) các chấm hơi chìm → chưa đặt logo lên nền tối.

### 1.3. Linh vật Onbi

**CSS dùng chung** (thêm vào `css/style.css` hoặc thẻ `<style>` của các trang có Onbi):
```css
/* Avatar tròn trong tin nhắn */
.onbi-avatar { width: 36px; height: 36px; border-radius: 9999px; object-fit: cover;
               background: #fff; box-shadow: 0 0 0 2px #DBEAFE; flex-shrink: 0; }

/* Khung đặt hình toàn thân + nền vòng tròn mờ phía sau */
.onbi-stage { position: relative; width: var(--onbi-w, 150px); flex-shrink: 0; }
.onbi-stage::before {
  content: ""; position: absolute; left: 50%; top: 14%; width: 125%; aspect-ratio: 1; translate: -50% 0;
  border-radius: 9999px;
  background: radial-gradient(circle at 35% 30%, #DCE6FF, #EEF0FF 55%, rgba(238, 240, 255, 0) 72%);
}
.onbi-stage img { position: relative; display: block; width: 100%; height: auto; }

/* Nhấp nhô nhẹ khi đứng chờ – tắt nếu người dùng bật giảm chuyển động */
@media (prefers-reduced-motion: no-preference) {
  .onbi-float img { animation: onbi-float 4s ease-in-out infinite; }
  @keyframes onbi-float { 50% { translate: 0 -5px; } }
}
```

**HTML mẫu:**
```html
<!-- Avatar đầu tin nhắn của trợ lý -->
<img class="onbi-avatar" src="assets/images/mascot/onbi-avatar-128.webp" width="36" height="36" alt="Onbi">

<!-- Hình toàn thân có nền vòng tròn -->
<div class="onbi-stage onbi-float" style="--onbi-w:118px">
  <img src="assets/images/mascot/onbi-greeting.webp" width="256" height="480" alt="">
</div>
```

**Dùng tư thế nào ở đâu:**
| Tư thế | File | Dùng ở |
|---|---|---|
| Avatar | `onbi-avatar-128.webp` | Đầu **mỗi** tin nhắn của trợ lý ở NH03; thẻ Copilot ở NH01 |
| Chào | `onbi-greeting.webp` | Lời chào đầu trang NH03 (có `onbi-float`) |
| Suy nghĩ | `onbi-thinking.webp` | (tùy chọn) Bên cạnh khung loading "Onbi đang tra cứu tài liệu..." |
| Vui | `onbi-happy.webp` | Khi hoàn thành một chặng ở NH02 (cùng lúc với pháo giấy) |
| Xin lỗi | `onbi-sorry.webp` | Khi AI không tìm thấy câu trả lời ở NH03 |

**Nguyên tắc:** avatar dùng trong mọi tin nhắn. Hình toàn thân **chỉ** ở các khoảnh khắc chính kể trên. Xuất hiện khắp nơi sẽ rối mắt.

**Đổi tên trợ lý trong giao diện:** "OnboardAI Assistant" → **"Onbi"**, dòng phụ "Trợ lý hội nhập".

### 1.4. Trạng thái trống dùng Onbi (thay cho hình unDraw)
| Trạng thái | Trang | Tư thế | Tiêu đề | Mô tả | Nút |
|---|---|---|---|---|---|
| Hết việc hôm nay | NH01 | `onbi-happy` | "Tuyệt vời!" | "Hôm nay bạn đã xong hết việc." | Xem lộ trình |
| Bộ lọc không có kết quả | AD02 | `onbi-thinking` | "Không có tài khoản phù hợp" | "Onbi chưa tìm thấy ai khớp bộ lọc." | Xóa bộ lọc |
| Đã chuyển câu hỏi cho HR | NH03 | `onbi-sorry` | "Đã chuyển cho phòng Nhân sự" | "Câu này Onbi chưa có thông tin." | Hỏi câu khác |
| Tab "Cần can thiệp" trống | HR01 | `onbi-greeting` | "Mọi nhân sự đều đúng tiến độ!" | "Không có ai cần can thiệp lúc này." | Xem tất cả |

```html
<div class="flex flex-col items-center text-center py-8">
  <div class="onbi-stage" style="--onbi-w:96px">
    <img src="assets/images/mascot/onbi-thinking.webp" width="256" height="480" alt="">
  </div>
  <h3 class="mt-3 text-sm font-extrabold text-slate-900">Không có tài khoản phù hợp</h3>
  <p class="mt-1 text-xs text-slate-600">Onbi chưa tìm thấy ai khớp bộ lọc.</p>
  <button class="mt-3 px-3 py-1.5 rounded-lg text-xs font-bold ring-1 ring-slate-300">Xóa bộ lọc</button>
</div>
```
Hình Onbi ở đây là trang trí (ý nghĩa đã có trong câu chữ) → `alt=""`.

---

## 2. HUY HIỆU = CỘT MỐC HÀNH TRÌNH (thay cho XP & chuỗi điểm danh)

| Chặng (đã có trong NH02) | Huy hiệu | File | Mở khóa khi |
|---|---|---|---|
| Ngày 1: Chào sân & thủ tục | Tân binh | `badge-1.webp` | Xong 100% việc của Ngày 1 |
| Tuần 1: Văn hóa & môi trường | Tự lập | `badge-2.webp` | Xong 100% việc của Tuần 1 |
| Tháng 1: Dự án & tác chiến | Hòa nhập | `badge-3.webp` | Xong 100% việc của Tháng 1 |
| Tháng 2: Đánh giá thử việc | Thành viên chính thức | `badge-4.webp` | Qua đánh giá thử việc |

**Việc cần làm:**
- [ ] Thay khối sidebar *"Level 1: Tân binh · XP · 🔥 3 ngày"* (NH01, NH02) bằng **4 huy hiệu nhỏ** (đã mở: có màu; chưa mở: xám + ổ khóa) + dòng *"Cột mốc 1/4"*.
- [ ] **Bỏ chuỗi điểm danh.** Bỏ hoặc ẩn con số XP (hiện đang lệch: 650 ở NH01, 550 ở NH02).
- [ ] Trạng thái huy hiệu **tính trực tiếp từ danh sách việc** của từng chặng, không lưu số riêng.
- [ ] Ô "Huy hiệu kế tiếp" ở NH02 hiển thị huy hiệu của **chặng đang làm** + số việc còn lại để mở khóa.

**CSS** (trạng thái khóa làm bằng CSS, không cần ảnh xám riêng):
```css
.badge { position: relative; width: 40px; height: 40px; flex-shrink: 0; }
.badge img { width: 100%; height: 100%; display: block; }
.badge.is-locked img { filter: grayscale(1); opacity: .45; }
.badge.is-locked::after {   /* ổ khóa nhỏ ở góc */
  content: ""; position: absolute; right: -2px; bottom: -2px; width: 16px; height: 16px; border-radius: 9999px;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='11' width='14' height='10' rx='2'/%3E%3Cpath d='M8 11V7a4 4 0 0 1 8 0v4'/%3E%3C/svg%3E") center / 10px no-repeat;
  box-shadow: 0 0 0 1px #E2E8F0;
}
```

**HTML mẫu** (cuối sidebar):
```html
<div class="rounded-2xl ring-1 ring-slate-200 bg-white p-4">
  <div class="flex items-center justify-between mb-2.5">
    <span class="text-xs font-bold text-slate-900">Cột mốc hành trình</span>
    <span class="text-xs font-bold text-[#1F5AFE]">1/4</span>
  </div>
  <div class="flex gap-3">
    <span class="badge" title="Tân binh – đã đạt"><img src="assets/images/badges/badge-1.webp" width="128" height="128" alt="Huy hiệu Tân binh"></span>
    <span class="badge is-locked" title="Tự lập"><img src="assets/images/badges/badge-2.webp" width="128" height="128" alt="Huy hiệu Tự lập (chưa mở)"></span>
    <span class="badge is-locked" title="Hòa nhập"><img src="assets/images/badges/badge-3.webp" width="128" height="128" alt="Huy hiệu Hòa nhập (chưa mở)"></span>
    <span class="badge is-locked" title="Thành viên chính thức"><img src="assets/images/badges/badge-4.webp" width="128" height="128" alt="Huy hiệu Thành viên chính thức (chưa mở)"></span>
  </div>
  <p class="mt-2.5 text-[11px] text-slate-500">Tiếp theo: <b class="text-slate-900">Tự lập</b> · còn 4 việc</p>
</div>
```
Khi một chặng xong: bỏ class `is-locked` của huy hiệu đó + hiệu ứng lật thẻ + pháo giấy + Onbi vui (mục 3.2).

---

## 3. NÂNG CẤP CHUYỂN ĐỘNG

### 3.1. Dùng cho cả 6 trang

**① Chuyển trang mượt (sidebar đứng yên, nội dung mờ dần sang trang mới)**
```css
@media (prefers-reduced-motion: no-preference) {
  @view-transition { navigation: auto; }
}
#appSidebar { view-transition-name: sidebar; }
```
- Phải thêm vào **tất cả** các trang (cả trang đi lẫn trang đến).
- Hỗ trợ: Chrome/Edge 126+, Safari 18.2+. Firefox chưa hỗ trợ → chuyển trang bình thường, không lỗi.
- Cần mở bằng **Live Server** (mở `file:///` có thể không chạy).

**② Tôn trọng chế độ giảm chuyển động**
- Tắt **từng** hiệu ứng lớn trong `@media (prefers-reduced-motion: reduce)`: pháo giấy, lật thẻ, vệt quét sáng, nhấp nháy liên tục.
- **Không** đặt `animation-duration: 0.01ms` cho mọi thứ (có thể làm hiệu ứng giật hơn).

### 3.2. Theo từng trang

**`index.html`: hiện dần khi cuộn**
```css
@media (prefers-reduced-motion: no-preference) {
  @supports ((animation-timeline: view()) and (animation-range: entry)) {
    @keyframes reveal { from { opacity: 0; translate: 0 24px; } }
    .reveal { animation: reveal linear both; animation-timeline: view(); animation-range: entry 0% entry 60%; }
  }
}
```
Gắn class `reveal` cho từng phần nội dung. Trình duyệt không hỗ trợ thì vẫn hiện đầy đủ nội dung, chỉ không có hiệu ứng (chủ ý, không cần dự phòng vì chỉ để trang trí).

**NH01, NH02, HR01, AD02: số đếm tăng dần**
```javascript
function countUp(el, to, { duration = 800, suffix = '' } = {}) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = to + suffix; return; }
  const start = performance.now();
  const step = now => {
    const t = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(to * (1 - Math.pow(1 - t, 3))) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
// Ví dụ: countUp(document.getElementById('progressPct'), 20, { suffix: '%' });
```
Thanh tiến độ cũng chạy từ 0 (dùng `transform: scaleX()` thay vì đổi `width` cho mượt).

**NH01, NH02: dấu tick vẽ dần (sửa luôn lỗi ô hoàn thành không có dấu tick)**
```html
<svg viewBox="0 0 24 24" class="w-3.5 h-3.5" aria-hidden="true">
  <path class="tick" d="M5 13l4 4L19 7" pathLength="1" fill="none" stroke="#fff"
        stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```
```css
.tick { stroke-dasharray: 1; stroke-dashoffset: 1; }
.is-done .tick { stroke-dashoffset: 0; transition: stroke-dashoffset .3s ease-out; }
@media (prefers-reduced-motion: reduce) { .is-done .tick { transition: none; } }
```

**NH02: ăn mừng khi hoàn thành một chặng (không bắn mỗi lần tick một việc nhỏ)**
```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
```
```javascript
function celebrateFrom(el) {
  const r = el.getBoundingClientRect();
  confetti({
    particleCount: 70, spread: 70,
    origin: { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight },
    colors: ['#1F5AFE', '#4F46E5', '#00B67A', '#F59E0B'],
    disableForReducedMotion: true
  });
}
```
Trình tự: việc cuối của chặng được tick → dấu tick vẽ dần → pháo giấy bắn từ ô tick → huy hiệu của chặng **lật mở khóa** (dùng lại hiệu ứng lật thẻ đã có) → thông báo *"Bạn đã đạt cột mốc Tự lập!"*.

**NH03: câu trả lời hiện như đang gõ**
- Chữ hiện dần ~15ms/ký tự; **bấm vào bong bóng là hiện hết ngay**.
- Thẻ trích nguồn trượt lên **sau** khi chữ hiện xong; các nút câu hỏi gợi ý hiện lần lượt.
- Bật giảm chuyển động → hiện toàn bộ câu trả lời ngay.
- Lưu ý: nội dung câu trả lời có thẻ `<strong>`, nên hiện dần **theo từng đoạn chữ**, không cắt giữa thẻ HTML.

**HR01: biểu đồ & banner**
- Cột biểu đồ mọc lần lượt:
  ```javascript
  animation: {
    delay: (ctx) => (ctx.type === 'data' && ctx.mode === 'default') ? ctx.dataIndex * 150 : 0
  }
  ```
- Banner AI-3: thêm vệt quét tròn kiểu radar rất mờ phía sau (khớp tên "Risk Radar"), tắt khi giảm chuyển động.

**AD02: hiệu ứng dòng trong bảng (nếu chưa có)**
- Dòng vừa thêm/sửa: nền vàng nhạt rồi mờ dần về trắng (~1.2s).
- Dòng bị xóa: thu gọn + mờ dần (~250ms) thay vì biến mất đột ngột.
- Thông báo Hoàn tác có thanh đếm ngược 5 giây.

### 3.3. Nguyên tắc chung
- Mỗi trang **một khoảnh khắc nổi bật**, còn lại nhẹ nhàng.
- Thao tác thường ngày < 300ms; ăn mừng < 1.5s.
- Chỉ tạo chuyển động bằng `transform` / `opacity`.

---

## 4. SỬA LỖI HIỂN THỊ (trong phạm vi SV3)

| # | Lỗi | Trang | Cách sửa |
|:-:|---|---|---|
| 1 | Tràn ngang trên điện thoại (390px): thẻ chặng, nhãn trạng thái, tiêu đề việc bị cắt | NH02 | Tìm phần tử có độ rộng cố định / không xuống dòng; cho lưới chặng `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`, thêm `min-w-0` cho cột chữ |
| 2 | Thẻ chặng ghi "60%" trong khi đầu trang ghi "20%" | NH02 | Tính % chặng từ danh sách việc, không viết cứng |
| 3 | Ô việc đã hoàn thành không có dấu tick | NH01, NH02 | Dùng SVG tick ở mục 3.2 |
| 4 | Nhãn "ON TRACK" vỡ thành 2 dòng | NH01 | `whitespace-nowrap` cho mọi nhãn trạng thái |
| 5 | Ô tick đè lên mép trái thẻ; các thẻ việc dính sát nhau | NH02 | Đưa ô tick vào trong padding của thẻ; `gap-3` giữa các thẻ hoặc gom vào 1 khung + `divide-y` |
| 6 | "1 caIT" thiếu dấu cách | HR01 | Sửa chuỗi hiển thị |
| 7 | Cột tiến độ chỉ có số | HR01 | Thêm thanh 6px như trang New Hire |
| 8 | Ô "Kiểm tra sức khỏe tài khoản" chỉ chiếm nửa chiều ngang | AD02 | Cho ô kéo hết chiều ngang hoặc xếp nhiều cảnh báo dạng lưới 2 cột |
| 9 | Tiêu đề trang hiện 2 lần (thanh trên + thẻ đầu trang) | AD02 | Giữ một chỗ |
| 10 | Nút "Đăng xuất" không gọi hàm đăng xuất | NH01, NH02 | Thêm `onclick="logout()"` giống các trang khác |

---

## 5. ĐỒNG BỘ GIAO DIỆN GIỮA CÁC TRANG

- [ ] **Thanh trên cùng một kiểu cho cả 6 trang:** khuyến nghị kiểu của HR01/AD02 (tiêu đề + mô tả + ô người dùng). Chuông thông báo: có ở tất cả hoặc bỏ ở tất cả.
- [ ] **Sidebar 3 trang New Hire giống nhau:** cùng danh sách mục (Bảng điều khiển, Checklist, Trợ lý AI, Hồ sơ cá nhân, Đăng xuất).
- [ ] **Nhãn trạng thái tiếng Việt & đúng cấp:**

  | Cấp | Cũ | Mới |
  |---|---|---|
  | Việc | COMPLETED / BLOCKED / NEEDS ACTION / ON TRACK | Hoàn thành / Bị chặn / Cần làm ngay / Chưa làm |
  | Người | ON TRACK / AT RISK / COMPLETED | Đúng tiến độ / Có rủi ro / Hoàn thành |

- [ ] **Cỡ chữ:** nội dung cần đọc tối thiểu 12px; `text-[10px]`/`text-[11px]` chỉ cho nhãn chữ in hoa ngắn. Chữ phụ dùng `text-slate-500` thay `slate-400`.
- [ ] **Màu vai trò trên trang chủ** khớp với ứng dụng: Mentor màu chàm (không phải xanh lá), Admin màu tím (không phải đỏ).

---

## 6. TRANG CHỦ `index.html` (làm sau cùng)

- [ ] Chuyển sang Tailwind + cùng font, màu với các trang ứng dụng (hiện đang dùng `style.css` riêng).
- [ ] Logo mới thay emoji 🚀.
- [ ] Đầu trang: tiêu đề bên trái, **ảnh chụp Dashboard thật trong khung cửa sổ** bên phải + 2–3 thẻ nhỏ nổi nhẹ.
- [ ] Thêm phần giới thiệu **3 tính năng AI** (AI-1, AI-2, AI-3).
- [ ] Câu chữ hướng về sản phẩm: *"Hệ thống đa vai trò theo chuẩn BTL"* → *"Mỗi vai trò một không gian làm việc riêng"*.
- [ ] Chân trang bổ sung tên SV3.
- [ ] Hiện dần khi cuộn (mục 3.2).

---

## 7. THỨ TỰ THỰC HIỆN

| Bước | Việc | Mục |
|:-:|---|:-:|
| 1 | Sửa 10 lỗi hiển thị | 4 |
| 2 | Chép `brand/` + `mascot/` + `badges/` vào `assets/images/`; gắn logo + favicon cho 6 trang | 1.1, 1.2 |
| 3 | Tick vẽ dần, số đếm tăng dần, giảm chuyển động | 3 |
| 4 | Huy hiệu theo chặng + ăn mừng khi xong chặng (kèm Onbi vui) | 2, 3.2, 1.3 |
| 5 | Đồng bộ thanh trên, sidebar, nhãn, cỡ chữ | 5 |
| 6 | Onbi trong trang Trợ lý AI (avatar, lời chào, xin lỗi) + đổi tên trợ lý thành "Onbi" | 1.3 |
| 7 | Trạng thái trống dùng Onbi ở NH01, AD02, NH03, HR01; chuyển trang mượt; AI hiện chữ như đang gõ | 1.4, 3 |
| 8 | Làm lại trang chủ | 6 |

---

## 8. ĐỂ SAU (cần phối hợp SV2)

- Thống nhất cách tính tiến độ giữa HR01 (65%) và NH01/NH02 (20%).
- Dữ liệu dự phòng khi mở file trực tiếp (`file:///`).
- Chặn truy cập theo vai trò (`requireRole`).
- Thống nhất khóa lưu người đăng nhập (`currentUser` / `ONBOARDAI_CURRENT_USER`).
- Trang `profile.html` (link "Hồ sơ cá nhân" đang báo 404).
- Avatar trong `mock-data.json` chuyển về file nội bộ.

---

## 9. PROMPT MẪU GỬI SANG AI THỰC HÀNH

```text
Đọc kỹ @SV3_VISUAL_UPGRADE_PLAN.md. Chỉ sửa 6 trang: index.html, newhire-onboarding-dashboard.html,
newhire-checklist.html, newhire-ai-help.html, hr-dashboard.html, admin-user-management.html.
KHÔNG sửa js/api.js, assets/data/mock-data.json, login.html, mentor-*.html.
Tài nguyên hình ảnh đã có sẵn trong assets/images/brand/, assets/images/mascot/, assets/images/badges/ (KHÔNG tự tạo hay đổi tên file ảnh).

Làm theo thứ tự ở mục 7, mỗi lần một bước, xong bước nào báo lại danh sách thay đổi:
- Bước 1: sửa 10 lỗi ở mục 4.
- Bước 2: gắn favicon và logo sidebar theo mục 1.2 cho cả 6 trang.
- Bước 3: thêm tick SVG vẽ dần, hàm countUp, và xử lý prefers-reduced-motion theo mục 3.
- Bước 4: thay khối XP ở sidebar NH01/NH02 bằng khối cột mốc huy hiệu theo mục 2; ăn mừng khi xong chặng theo mục 3.2.
- Bước 6: thêm CSS Onbi ở mục 1.3, gắn avatar/lời chào/tư thế xin lỗi vào newhire-ai-help.html, đổi tên trợ lý thành "Onbi".
- Bước 7: thay các trạng thái trống theo bảng ở mục 1.4.
Giữ nguyên chức năng và dữ liệu hiện có; chỉ thay đổi phần trình bày và chuyển động.
```
