# DANH SÁCH LỖI CẦN SỬA – PHẦN CỦA SV3 (HUY)

> **Phạm vi:** Chỉ gồm lỗi nằm trong 6 file của SV3 (`index.html`, `newhire-onboarding-dashboard.html`, `newhire-checklist.html`, `newhire-ai-help.html`, `hr-dashboard.html`, `admin-user-management.html`).
> **Không bao gồm** các lỗi liên quan hoặc liên kết tới phần của SV2 (login, trang Mentor, profile, thanh thị sát dành cho Mentor...).
> **Nguyên tắc sửa:** Chỉ dùng các hàm đã có sẵn trong `js/api.js` (`init`, `getDB`, `saveDB`, `getAll`, `getById`, `create`, `update`, `delete`, `getCurrentUser`) và **không sửa `js/api.js`**, để trang của SV3 chạy đúng mà không phụ thuộc SV2.
> Trang của SV3 **vẫn đọc/ghi qua `js/api.js`** vào cùng một kho dữ liệu `ONBOARDAI_DB_V4`, nên dữ liệu không bị tách rời. Xem thêm mục **"Nguyên tắc chống lệch đồng bộ"** ở cuối file trước khi sửa.
> **Ngày rà soát:** 16/10/2026

---

## Tổng quan

| # | Mức độ | File | Lỗi | Trạng thái |
| :-: | :-: | :--- | :--- | :-: |
| 1 | 🔴 Nặng | `admin-user-management.html` | Danh sách tài khoản bị reset về dữ liệu mẫu mỗi lần tải lại trang | ☐ Chưa sửa |
| 2 | 🔴 Nặng | `admin-user-management.html` | Nút "Khôi phục dữ liệu mẫu" báo lỗi JS, không chạy | ☐ Chưa sửa |
| 3 | 🔴 Nặng | `hr-dashboard.html` | Không đọc dữ liệu thật, 4 thẻ KPI là số viết cứng | ☐ Chưa sửa |
| 4 | 🟡 Vừa | 5 trang có nút Đăng xuất | Đăng xuất không xóa hết thông tin phiên | ☐ Chưa sửa |

---

## Lỗi 1 – Admin: tài khoản bị reset mỗi lần tải lại trang (F5)

- **File / vị trí:** `admin-user-management.html`, hàm `loadInitialData()` (khoảng dòng 1254–1269).
- **Code hiện tại:**
  ```javascript
  let db = null;
  if (window.API) {
    db = await API.init();   // API.init() không trả về gì -> db luôn là undefined
  }
  if (db && Array.isArray(db.users) && ...) {
    usersList = db.users;    // nhánh này không bao giờ chạy
  } else {
    usersList = JSON.parse(JSON.stringify(FALLBACK_USERS));
    ...
    persistAllData();        // ghi đè dữ liệu mẫu lên CSDL chung
  }
  ```
- **Nguyên nhân:** `API.init()` chỉ nạp dữ liệu vào LocalStorage, không `return` dữ liệu. Vì vậy `db` luôn rỗng, trang luôn dùng `FALLBACK_USERS` rồi gọi `persistAllData()` ghi đè lên `ONBOARDAI_DB_V4`.
- **Hậu quả:** Khóa / mở khóa / thêm / sửa / xóa tài khoản, đổi phòng ban, nhật ký hoạt động… đều **mất hết sau khi F5**. Giảng viên thử là thấy ngay.
- **Cách sửa:** Sau `await API.init()` thì đọc dữ liệu bằng `API.getDB()`:
  ```javascript
  let db = null;
  if (window.API) {
    await API.init();
    db = API.getDB();
  }
  ```
  Giữ nguyên điều kiện kiểm tra `db.users[0].status` (để lần đầu, khi `users` trong mock-data chưa có các trường `status`, `departmentId`… thì vẫn nạp `FALLBACK_USERS` một lần rồi lưu lại).
- **Cách kiểm tra sau khi sửa:** Khóa 1 tài khoản → F5 → tài khoản vẫn ở trạng thái "Đã khóa"; dòng nhật ký vừa tạo vẫn còn.

---

## Lỗi 2 – Admin: nút "Khôi phục dữ liệu mẫu" không chạy

- **File / vị trí:** `admin-user-management.html`, hàm `resetDemoDatabase()` (khoảng dòng 2760–2766).
- **Code hiện tại:**
  ```javascript
  async function resetDemoDatabase() {
    if (window.API) {
      await API.resetDB();   // hàm này KHÔNG tồn tại trong js/api.js
    }
    await loadInitialData();
    showToast('Đã khôi phục toàn bộ dữ liệu mẫu AD02 về trạng thái chuẩn!', 'success');
  }
  ```
- **Nguyên nhân:** Gọi hàm `API.resetDB()` không có trong `js/api.js` → lỗi `TypeError: API.resetDB is not a function`, đoạn code phía sau không chạy.
- **Hậu quả:** Bấm nút không có phản ứng gì, không hiện thông báo, dữ liệu không được khôi phục.
- **Cách sửa (không phụ thuộc `js/api.js`, nhưng làm giống hệt đặc tả `resetDB()` đã giao cho SV2):**
  - **Khôi phục TOÀN BỘ CSDL** (cả `newHires`, `tasks`, `checkins`, `users`, `departments`, `auditLogs`…), không chỉ riêng danh sách tài khoản. Đặc tả `resetDB()` trong tài liệu gửi SV2 là *"xóa `ONBOARDAI_DB_V4` rồi gọi lại `init()`"* → nút của SV3 phải cho ra cùng kết quả, tránh tình trạng 2 nút "khôi phục" chạy khác nhau.
  - **Ưu tiên hàm của SV2 nếu đã có, chưa có thì tự làm** – sau này Hoàng bổ sung `resetDB()` thì trang tự chuyển sang dùng hàm chung:
    ```javascript
    async function resetDemoDatabase() {
      if (window.API) {
        if (typeof API.resetDB === 'function') {
          await API.resetDB();                         // dùng hàm chung khi SV2 đã bổ sung
        } else {
          localStorage.removeItem('ONBOARDAI_DB_V4');  // tự làm, đúng đặc tả resetDB()
          await API.init();                            // nạp lại từ assets/data/mock-data.json
        }
      }
      await loadInitialData();  // sau khi sửa Lỗi 1: nạp FALLBACK_USERS nếu users chưa có trường status, rồi lưu lại
      showToast('Đã khôi phục toàn bộ dữ liệu mẫu AD02 về trạng thái chuẩn!', 'success');
    }
    ```
  - **Lưu ý thứ tự:** Phải sửa **Lỗi 1 trước** thì `loadInitialData()` mới đọc đúng dữ liệu vừa khôi phục.
  - Nên thêm hộp xác nhận (`confirm` hoặc modal) trước khi khôi phục, vì thao tác này xóa cả tiến độ checklist của New Hire và việc Mentor đã giao.
- **Cách kiểm tra sau khi sửa:** Khóa vài tài khoản + tick vài nhiệm vụ ở checklist New Hire → bấm "Khôi phục dữ liệu mẫu" → hiện toast, danh sách tài khoản **và** tiến độ checklist đều trở về ban đầu → F5 vẫn giữ trạng thái ban đầu.

---

## Lỗi 3 – HR: không đọc dữ liệu thật, KPI viết cứng

- **File / vị trí:** `hr-dashboard.html`
  - Khởi chạy trang: khoảng dòng 962–981.
  - Danh sách viết sẵn `let newHiresData = [...]`: khoảng dòng 564.
- **Code hiện tại:**
  ```javascript
  await API.init();
  const liveHires = await API.getNewHires();   // hàm KHÔNG tồn tại -> lỗi bị try/catch nuốt
  ...
  countUp(document.getElementById('kpiTotalOnboarding'), 4);              // số cứng
  countUp(document.getElementById('kpiAvgProgress'), 58, { suffix: '%' }); // số cứng
  countUp(document.getElementById('kpiAtRisk'), 1);                        // số cứng
  countUp(document.getElementById('kpiBlockedIt'), 1);                     // số cứng
  // thanh tiến độ trung bình cũng cố định 57.5%
  ```
- **Nguyên nhân:**
  1. `API.getNewHires()` không có trong `js/api.js` → lỗi bị `try/catch` bỏ qua → trang luôn dùng danh sách viết sẵn trong file.
  2. 4 thẻ KPI và thanh tiến độ trung bình được gán số cố định, không tính từ dữ liệu.
- **Hậu quả:** New Hire tick hoàn thành checklist (dữ liệu `tasks` thay đổi) nhưng trang HR **không thay đổi gì** → mất tính liên thông giữa các vai trò, dễ bị phát hiện khi demo.
- **Cách sửa (không phụ thuộc `js/api.js`):**
  1. **Ưu tiên hàm của SV2 nếu đã có, chưa có thì dùng hàm sẵn có** (cho ra cùng dữ liệu vì đặc tả `getNewHires()` = `getAll('newHires')`):
     ```javascript
     await API.init();
     const liveHires = (typeof API.getNewHires === 'function')
       ? await API.getNewHires()
       : API.getAll('newHires');
     ```
  2. **Tính lại `progress` của từng nhân sự theo CÔNG THỨC CHUNG** (xem mục "Nguyên tắc chống lệch đồng bộ"): lấy `API.getAll('tasks')`, lọc theo `newHireId`, `progress = Math.round(số task completed / tổng số task × 100)`; nếu nhân sự **chưa có task nào** thì giữ nguyên `progress` đang lưu trong `newHires`.
  3. Tính 4 KPI từ `newHiresData`:
     - **Tổng đang onboarding** = số nhân sự có `status !== 'completed'`.
     - **Tiến độ trung bình** = trung bình `progress` (làm tròn), dùng cho cả số % và độ rộng thanh `kpiAvgProgressBar`.
     - **Có rủi ro** = số nhân sự `status === 'at_risk'`.
     - **Bị chặn IT** = số nhân sự `blocked === true`.
  4. Gọi `countUp(...)` với các giá trị vừa tính thay cho số cứng.
- **Cách kiểm tra sau khi sửa:** Đăng nhập New Hire → tick thêm 1 nhiệm vụ trong checklist → mở trang HR → tiến độ của Nguyễn Văn An và KPI "Tiến độ trung bình" thay đổi theo.

---

## Lỗi 4 – Đăng xuất không xóa hết thông tin phiên

- **File / vị trí:**

  | File | Hàm `logout()` | Đang xóa | Còn thiếu |
  | :--- | :--- | :--- | :--- |
  | `newhire-onboarding-dashboard.html` | ~dòng 370 | `currentUser`, `isLoggedIn` | `ONBOARDAI_CURRENT_USER`, `userRole`, cờ sessionStorage |
  | `newhire-checklist.html` | ~dòng 598 | `currentUser`, `isLoggedIn` | `ONBOARDAI_CURRENT_USER`, `userRole`, cờ sessionStorage |
  | `newhire-ai-help.html` | ~dòng 1201 | `currentUser`, `ONBOARDAI_CURRENT_USER`, `isLoggedIn` | `userRole`, cờ sessionStorage |
  | `hr-dashboard.html` | ~dòng 647 | `currentUser`, `isLoggedIn` | `ONBOARDAI_CURRENT_USER`, `userRole`, cờ sessionStorage |
  | `admin-user-management.html` | ~dòng 1105 | `currentUser`, `isLoggedIn` | `ONBOARDAI_CURRENT_USER`, `userRole`, cờ sessionStorage |

  *(Cờ sessionStorage = `isImpersonating`, `impersonatedUserName`, `impersonateReturnUrl`.)*
- **Hậu quả:** Sau khi đăng xuất, thông tin người dùng cũ và cờ "thị sát" vẫn còn → đăng nhập lại có thể vẫn hiện tên người cũ hoặc thanh "Chế độ thị sát" hiện sai.
- **Cách sửa:** Thống nhất một hàm `logout()` giống nhau cho cả 5 trang:
  ```javascript
  function logout() {
    ['currentUser', 'ONBOARDAI_CURRENT_USER', 'isLoggedIn', 'userRole']
      .forEach(k => localStorage.removeItem(k));
    ['isImpersonating', 'impersonatedUserName', 'impersonateReturnUrl']
      .forEach(k => sessionStorage.removeItem(k));
  }
  ```
  (Link Đăng xuất vẫn giữ `href="login.html"` như hiện tại.)
  **Lưu ý:** Không xóa `ONBOARDAI_DB_V4` (CSDL chung) và `unansweredQuestions` (câu hỏi chuyển HR) khi đăng xuất.
- **Cách kiểm tra sau khi sửa:** Từ Admin bấm "Thị sát" 1 tài khoản → bấm Đăng xuất → mở DevTools (F12) › Application › Local Storage / Session Storage → các khóa trên đã bị xóa.

---

## Nguyên tắc chống lệch đồng bộ (đọc trước khi sửa)

Sửa mà không đụng `js/api.js` **không làm dữ liệu bị tách rời**, vì mọi trang (SV3 và SV2) vẫn đọc/ghi qua `js/api.js` vào cùng một kho `ONBOARDAI_DB_V4` trong LocalStorage. Chỉ cần tuân thủ 3 nguyên tắc sau để tránh "mỗi trang một kiểu":

### Nguyên tắc 1 – Hành vi phải giống hệt đặc tả đã giao cho SV2
Tài liệu `docs/KE_HOACH_DONG_BO_SV2_VA_DEPLOY_GITHUB.md` (Phần 3.1) đã quy định 2 hàm SV2 sẽ bổ sung. Khi SV3 tự làm thay, phải cho ra **cùng kết quả**:

| Hàm SV2 sẽ bổ sung | Đặc tả | SV3 tự làm thay bằng |
| :--- | :--- | :--- |
| `API.getNewHires()` | `getAll('newHires')` | `API.getAll('newHires')` |
| `API.resetDB()` | Xóa `ONBOARDAI_DB_V4` rồi gọi lại `init()` – khôi phục **toàn bộ** CSDL | `localStorage.removeItem('ONBOARDAI_DB_V4'); await API.init();` |

→ Áp dụng cho **Lỗi 2** (không được chỉ khôi phục riêng danh sách tài khoản) và **Lỗi 3**.

### Nguyên tắc 2 – "Có hàm chung thì dùng, chưa có thì tự làm"
Luôn kiểm tra `typeof API.<tên hàm> === 'function'` trước khi gọi. Khi SV2 bổ sung hàm vào `js/api.js`, trang của SV3 **tự động chuyển sang dùng hàm chung**, không cần sửa lại, và không bao giờ tồn tại 2 bản code chạy song song khác nhau.

→ Áp dụng cho **Lỗi 2** (`API.resetDB`) và **Lỗi 3** (`API.getNewHires`).

### Nguyên tắc 3 – Một công thức tính % tiến độ cho mọi trang
Công thức đang dùng ở `newhire-onboarding-dashboard.html` (~dòng 478) và `newhire-checklist.html` (~dòng 965):
```javascript
const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
// completed = số task có status === 'completed' của New Hire đó; total = tổng số task của New Hire đó
```
→ Trang HR (**Lỗi 3**) phải dùng **đúng công thức này** để cùng một nhân sự không hiện 2 con số khác nhau ở 2 trang.
→ Nhân sự **chưa có task nào** thì trang HR giữ `progress` đang lưu trong `newHires` (không hiện 0%).

**Hiện trạng lệch đang có & con số sau khi sửa** (theo `assets/data/mock-data.json` hiện tại):

| Nhân sự | Số task trong `tasks` | `progress` lưu sẵn (HR đang hiện) | Trang New Hire đang hiện | HR sau khi sửa |
| :--- | :-: | :-: | :-: | :-: |
| NH01 – Nguyễn Văn An | 5 (1 hoàn thành) | 65% | **20%** | **20%** ✅ khớp |
| NH02 – Trần Minh Tuấn | 1 (chưa hoàn thành) | 25% | – | **0%** ⚠️ |
| NH03 – Lê Hoàng Long | 0 | 40% | – | 40% (giữ nguyên) |
| NH04 – Phạm Thị Hương | 0 | 100% | – | 100% (giữ nguyên) |

- **NH01:** Hiện tại HR ghi 65% nhưng trang New Hire của chính An ghi 20% → **đây là lệch đang tồn tại**, sửa Lỗi 3 sẽ hết lệch.
- **NH02 ⚠️:** Do mock-data chỉ có 1 task cho NH02 nên con số sẽ đổi từ 25% xuống 0%. Trạng thái "Cần hỗ trợ" (`at_risk`) vẫn giữ nguyên nên không ảnh hưởng logic cảnh báo. Nếu muốn giữ con số đẹp khi demo, cần bổ sung thêm task mẫu cho NH02 trong `mock-data.json` (file chung – trao đổi với SV2 trước khi sửa).
- **KPI "Tiến độ trung bình"** sau khi sửa sẽ là (20 + 0 + 40 + 100) / 4 = **40%** (hiện đang viết cứng 58%).

### Lỗi 4 (Đăng xuất) không phụ thuộc `js/api.js`
Hàm `logout()` mới xóa **cả hai** khóa `currentUser` và `ONBOARDAI_CURRENT_USER`, nên dù sau này SV2 thống nhất dùng khóa nào thì vẫn khớp.

### Ghi chú ngoài phạm vi (chưa phải lỗi, không cần sửa lúc này)
Danh sách tài khoản đang có **2 nguồn**:
- `assets/data/mock-data.json` → `users` (9 tài khoản, ít trường).
- `admin-user-management.html` → `FALLBACK_USERS` (có thêm `status`, `departmentId`, `lastLogin`…).

Hiện chỉ trang Admin dùng danh sách tài khoản nên chưa gây lỗi. Nếu sau này `profile.html` của SV2 cũng đọc thông tin người dùng thì cần thống nhất về một nguồn – việc này liên quan dữ liệu chung nên sẽ bàn với SV2 sau.

---

## Thứ tự sửa khuyến nghị

1. **Lỗi 1** (Admin giữ dữ liệu sau F5) – phải làm trước vì Lỗi 2 dựa vào `loadInitialData()` đã sửa.
2. **Lỗi 2** (Nút khôi phục).
3. **Lỗi 3** (HR đọc dữ liệu thật + KPI).
4. **Lỗi 4** (Đăng xuất – sửa đồng loạt 5 trang).

---

## Quy trình sau khi sửa xong

```bash
git checkout -b huy/fix/sv3-data-sync
git add admin-user-management.html hr-dashboard.html newhire-onboarding-dashboard.html newhire-checklist.html newhire-ai-help.html
git commit -m "fix(sv3): giu du lieu Admin sau F5, sua nut khoi phuc, HR doc du lieu that, dang xuat xoa sach phien"
git push -u origin huy/fix/sv3-data-sync
# Gộp vào dev rồi vào main để cập nhật web
git checkout dev && git pull origin dev && git merge huy/fix/sv3-data-sync && git push origin dev
git checkout main && git pull origin main && git merge dev && git push origin main
```

Sau khi `push origin main`, chờ 1–2 phút rồi mở web và nhấn `Ctrl + F5`.
