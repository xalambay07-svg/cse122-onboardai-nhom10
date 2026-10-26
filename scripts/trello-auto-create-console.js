/**
 * SCRIPT TỰ ĐỘNG TẠO BẢNG TRELLO KANBAN TRỰC TIẾP TRÊN WEB TRELLO.COM
 * Dự án: [CSE122 - BTL20] OnboardAI – Nền tảng Hội nhập Nhân sự Thông minh (Nhóm 10)
 */
(async function createOnboardAITrelloBoard() {
  // Tạo hộp hiển thị tiến độ nổi ngay giữa màn hình Trello để người dùng theo dõi trực tiếp
  const banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:999999;background:#1E1B4B;color:#FFFFFF;padding:14px 24px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.45);font-family:sans-serif;font-size:14px;font-weight:700;border:2px solid #10B981;';
  banner.textContent = '🚀 Đang bắt đầu khởi tạo Bảng Trello OnboardAI (BTL-20 - Nhóm 10)...';
  document.body.appendChild(banner);

  function setStatus(msg) {
    console.log(msg);
    banner.textContent = msg;
  }

  const dscMatch = document.cookie.match(/(?:^|;\s*)dsc=([^;]+)/);
  if (!dscMatch) {
    banner.style.borderColor = '#F43F5E';
    setStatus('❌ Lỗi: Anh hãy dán mã này ở tab https://trello.com/b/J0c8nZ2l/my-trello-board nhé!');
    return;
  }
  const dsc = decodeURIComponent(dscMatch[1]);

  async function trelloReq(method, path, body = {}) {
    const opts = {
      method,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    };
    if (method !== 'GET') {
      opts.body = JSON.stringify({ ...body, dsc });
    }
    const res = await fetch(`https://trello.com${path}`, opts);
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`HTTP ${res.status} (${path}): ${errText}`);
    }
    return res.json();
  }

  try {
    let idBoard = null;
    let boardUrl = location.href;

    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts[0] === 'b' && pathParts[1]) {
      const boardInfo = await trelloReq('GET', `/1/boards/${pathParts[1]}?lists=open&labels=all`);
      idBoard = boardInfo.id;
      boardUrl = boardInfo.url;
      setStatus(`⏳ Đang đổi tên bảng sang "[CSE122 - BTL20] OnboardAI - Nhóm 10" & bật chế độ Public...`);

      // Đổi tên bảng chuẩn BTL-20 và mở quyền Public để Giảng viên xem được
      try {
        const updatedBoard = await trelloReq('PUT', `/1/boards/${idBoard}`, {
          name: '[CSE122 - BTL20] OnboardAI - Nhóm 10',
          desc: 'Bảng quản lý tiến độ Agile/Kanban 4 tuần - Dự án OnboardAI (BTL-20 - Học phần CSE122 - Nhóm 10)',
          'prefs/permissionLevel': 'public'
        });
        if (updatedBoard && updatedBoard.url) boardUrl = updatedBoard.url;
      } catch (e) {
        console.warn('Không thể bật public tự động, vẫn đổi tên bảng:', e);
        await trelloReq('PUT', `/1/boards/${idBoard}`, {
          name: '[CSE122 - BTL20] OnboardAI - Nhóm 10'
        });
      }

      // Đóng các cột mặc định (To Do, Doing, Done) nếu bảng mới tạo
      if (Array.isArray(boardInfo.lists)) {
        for (const oldList of boardInfo.lists) {
          await trelloReq('PUT', `/1/lists/${oldList.id}/closed`, { value: true });
        }
      }
    } else {
      setStatus('⏳ Đang tạo bảng mới [CSE122 - BTL20] OnboardAI - Nhóm 10...');
      const me = await trelloReq('GET', '/1/members/me?organizations=all');
      const idOrganization = (me.idOrganizations && me.idOrganizations[0]) || undefined;
      const newBoard = await trelloReq('POST', '/1/boards', {
        name: '[CSE122 - BTL20] OnboardAI - Nhóm 10',
        desc: 'Bảng quản lý tiến độ Agile/Kanban 4 tuần - Dự án OnboardAI (BTL-20 - Học phần CSE122 - Nhóm 10)',
        defaultLists: false,
        idOrganization,
        prefs_permissionLevel: 'public',
        prefs_background: 'blue'
      });
      idBoard = newBoard.id;
      boardUrl = newBoard.url;
    }

    // 1. Tạo 6 Cột (Lists) theo thứ tự từ trái sang phải
    const LIST_DEFS = [
      { key: 'info', name: '📌 1. Thông tin Dự án & Quy ước' },
      { key: 'backlog', name: '📋 2. Backlog (Danh sách việc)' },
      { key: 'w12', name: '🎨 3. Tuần 1–2: Thiết kế & Khung UI/Data' },
      { key: 'w3', name: '⚡ 4. Tuần 3: Lập trình DOM, CRUD & AI' },
      { key: 'review', name: '🔍 5. Kiểm thử & Quay OBS (In Review)' },
      { key: 'done', name: '✅ 6. Đã hoàn thành (Done)' }
    ];

    const listIds = {};
    for (let i = 0; i < LIST_DEFS.length; i++) {
      const item = LIST_DEFS[i];
      setStatus(`📂 Đang tạo cột [${i + 1}/6]: ${item.name}...`);
      const createdList = await trelloReq('POST', '/1/lists', {
        name: item.name,
        idBoard,
        pos: (i + 1) * 16384
      });
      listIds[item.key] = createdList.id;
    }

    // 2. Tạo 7 Nhãn màu (Labels)
    const LABEL_DEFS = [
      { key: 'SV1', name: 'SV1 - Nguyễn Gia Huy (2551170897)', color: 'blue' },
      { key: 'SV2', name: 'SV2 - Core Data & Mentor (Hoàng)', color: 'green' },
      { key: 'SV3', name: 'SV1 - DevOps, HR & Admin (Huy) (Trưởng nhóm)', color: 'purple' },
      { key: 'CORE', name: 'Core Data & Architecture', color: 'orange' },
      { key: 'AI', name: 'AI Feature (Bắt buộc)', color: 'red' },
      { key: 'UI', name: 'UI/UX & Responsive', color: 'yellow' },
      { key: 'TEST', name: 'Testing, Git & Báo cáo', color: 'sky' }
    ];

    setStatus('🏷️ Đang tạo 7 nhãn màu phân công thành viên & hạng mục...');
    const labelIds = {};
    for (const lbl of LABEL_DEFS) {
      const createdLbl = await trelloReq('POST', '/1/labels', {
        name: lbl.name,
        color: lbl.color,
        idBoard
      });
      labelIds[lbl.key] = createdLbl.id;
    }

    // 3. Danh sách 25 Thẻ công việc (1 thẻ INFO + 24 thẻ T01..T24)
    const CARDS = [
      {
        list: 'info',
        name: '[INFO-01] Tài nguyên Dự án, Nhánh Git & Quy ước Phối hợp Nhóm 10',
        labels: ['TEST', 'SV3'],
        desc: 'Repository GitHub: https://github.com/xalambay07-svg/cse122-onboardai-nhom10.git\nNhánh chính: main (Production), dev (Integration)\nQuy tắc: Mọi thao tác đọc/ghi dữ liệu đều thông qua window.OnboardAPI (js/api.js) đồng bộ LocalStorage (onboardai_db_v1).',
        checklist: [
          'Thống nhất quy tắc nhánh Git & Conventional Commits (feat:, fix:, style:, docs:)',
          'Cấu hình kho dữ liệu chung window.OnboardAPI (js/api.js)',
          'Lưu trữ tài liệu tra cứu tài khoản 4 vai trò tại docs/TAI_KHOAN_DANG_NHAP.md'
        ]
      },
      {
        list: 'done',
        name: '[T01 - Tuần 1] Phân tích nghiệp vụ BTL-20 & Đặc tả 4 phân hệ người dùng',
        labels: ['SV3', 'TEST'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm) | Nhánh: main\nPhân tích bài toán Hội nhập nhân sự (Onboarding) tại doanh nghiệp, xác định rõ 4 nhóm tác nhân (New Hire, Mentor, HR Specialist, System Admin) và 3 tính năng AI cốt lõi.',
        checklist: [
          'Xác định 4 vai trò người dùng và ma trận phân quyền RBAC',
          'Đặc tả 3 tính năng AI: AI-1 (Policy Q&A), AI-2 (Checklist/Mentor Matching), AI-3 (HR Risk Radar)',
          'Hoàn thiện tài liệu docs/TONG_QUAN_VA_QUY_TRINH_PHOI_HOP.md'
        ]
      },
      {
        list: 'done',
        name: '[T02 - Tuần 1] Lập Danh mục màn hình (Screen Inventory) & Sơ đồ luồng (User Flows)',
        labels: ['SV2', 'SV3'],
        desc: 'Phụ trách: SV2 – Đào Viết Huy Hoàng (2551170888) & SV3 | File bàn giao: README.md\nLiệt kê đầy đủ 9 màn hình chức năng của dự án OnboardAI và thiết kế sơ đồ luồng nghiệp vụ khép kín.',
        checklist: [
          'Thiết lập bảng Screen Inventory cho 4 phân hệ',
          'Vẽ sơ đồ luồng xác thực đăng nhập & điều hướng theo vai trò',
          'Vẽ sơ đồ luồng nộp minh chứng – duyệt nhiệm vụ – cảnh báo rủi ro HR'
        ]
      },
      {
        list: 'done',
        name: '[T03 - Tuần 1] Thiết kế UI/UX Design System & Wireframe trên Figma',
        labels: ['SV1', 'UI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | Nhánh: feat/sv1-ui-newhire\nThiết kế bảng màu thương hiệu (Primary Indigo #4F46E5, Emerald #10B981, Amber #F59E0B, Rose #F43F5E), Typography Plus Jakarta Sans & Inter, và bố cục Bento Grid.',
        checklist: [
          'Xây dựng Color Tokens & Typography Scale',
          'Thiết kế UI Components: Sidebar, KPI Cards, Badges, Modals',
          'Thiết kế Wireframe cho 9 màn hình chính'
        ]
      },
      {
        list: 'done',
        name: '[T04 - Tuần 1] Thiết kế Lược đồ Dữ liệu JSON (Schema) & Kiến trúc LocalStorage',
        labels: ['SV2', 'CORE'],
        desc: 'Phụ trách: SV2 – Đào Viết Huy Hoàng (2551170888) | File: assets/data/mock-data.json\nThiết kế cấu trúc JSON chuẩn cho 6 nhân sự mới (NH01..NH06), 8 người đồng hành (MT01..MT08), danh sách công việc, kho FAQ chính sách và nhật ký kiểm toán.',
        checklist: [
          'Định nghĩa schema cho users, mentors, newHires, tasks, templates, faqs, activityLogs',
          'Thiết kế khóa lưu trữ onboardai_db_v1 trong LocalStorage',
          'Thống nhất chữ ký hàm (method signatures) cho window.OnboardAPI'
        ]
      },
      {
        list: 'done',
        name: '[T05 - Tuần 1] Khởi tạo GitHub Repository, Cấu trúc Thư mục & Bảng Trello Kanban',
        labels: ['SV3', 'TEST'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm) | Nhánh: main / dev\nKhởi tạo kho mã nguồn GitHub của Nhóm 10, tạo cây thư mục chuẩn và thiết lập bảng Trello Kanban 6 cột.',
        checklist: [
          'Khởi tạo thư mục css/, js/, assets/data/, assets/images/, docs/',
          'Tạo nhánh main, dev và các nhánh thành viên',
          'Thiết lập bảng Trello 6 cột và gắn nhãn cho 24 thẻ công việc'
        ]
      },
      {
        list: 'done',
        name: '[T06 - Tuần 2] Xây dựng Global CSS Design System (css/style.css)',
        labels: ['SV1', 'CORE', 'UI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | File: css/style.css\nLập trình bộ khung CSS dùng chung cho toàn dự án: biến màu sắc, bố cục Sidebar + Main Content, Bento Grid, Table, Modal, Drawer và Responsive Breakpoints.',
        checklist: [
          'Khai báo hệ thống biến CSS (:root) đồng bộ toàn bộ 9 màn hình',
          'Xây dựng layout Sidebar cố định và Topbar linh hoạt',
          'Tạo class tiện ích cho Button, Badge, Progress Bar và Toast Notification'
        ]
      },
      {
        list: 'done',
        name: '[T07 - Tuần 2] Xây dựng Cơ sở dữ liệu mẫu (mock-data.json) & Data Engine (js/api.js)',
        labels: ['SV2', 'CORE'],
        desc: 'Phụ trách: SV2 – Đào Viết Huy Hoàng (2551170888) | File: assets/data/mock-data.json, js/api.js\nHoàn thiện dữ liệu mẫu tiếng Việt chân thực và lập trình thư viện window.OnboardAPI hỗ trợ đọc/ghi LocalStorage.',
        checklist: [
          'Nhập dữ liệu đầy đủ cho 6 New Hires (NH01..NH06) và 8 Mentors (MT01..MT08)',
          'Lập trình các hàm getNewHires(), updateTaskStatus(), submitTaskProof(), submitMentorReview()',
          'Tích hợp sự kiện storage để đồng bộ dữ liệu tức thì giữa các tab trình duyệt'
        ]
      },
      {
        list: 'done',
        name: '[T08 - Tuần 2] Dựng giao diện Trang chủ Landing Page (index.html) & Đăng nhập (login.html)',
        labels: ['SV1', 'UI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | File: index.html, login.html\nThiết kế trang giới thiệu giải pháp OnboardAI và cổng đăng nhập xác thực điều hướng đúng phân hệ theo vai trò.',
        checklist: [
          'Xây dựng Hero Banner và khu vực giới thiệu 3 mô-đun AI trên index.html',
          'Thiết kế form đăng nhập tinh gọn, chuyên nghiệp trên login.html',
          'Kiểm tra điều hướng tự động sau khi đăng nhập thành công'
        ]
      },
      {
        list: 'done',
        name: '[T09 - Tuần 2] Dựng khung giao diện Dashboard Nhân viên mới & Checklist (NH-01, NH-02)',
        labels: ['SV1', 'UI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | File: newhire-onboarding-dashboard.html, newhire-checklist.html\nDựng giao diện tổng quan lộ trình hội nhập của nhân viên mới, 4 thẻ chỉ số KPI, khu vực Người đồng hành và danh sách Checklist.',
        checklist: [
          'Dựng Hero tiến độ, 4 KPI Cards và Timeline 3 giai đoạn trên Dashboard',
          'Dựng giao diện danh sách nhiệm vụ, bộ lọc giai đoạn và ô tìm kiếm trên trang Checklist',
          'Dựng Modal nộp minh chứng hoàn thành công việc'
        ]
      },
      {
        list: 'done',
        name: '[T10 - Tuần 2] Dựng khung giao diện Phân hệ Người hướng dẫn (mentor-mentee-list.html) & Hồ sơ (profile.html)',
        labels: ['SV2', 'UI'],
        desc: 'Phụ trách: SV2 – Đào Viết Huy Hoàng (2551170888) | File: mentor-mentee-list.html, profile.html\nXây dựng giao diện quản lý danh sách nhân viên mới dành cho Mentor và trang quản lý hồ sơ cá nhân.',
        checklist: [
          'Dựng 4 KPI tổng quan Mentor và lưới thẻ Mentee đang hướng dẫn',
          'Dựng Modal chấm điểm định kỳ và xem chi tiết tiến độ Mentee',
          'Dựng trang profile.html hiển thị thông tin cá nhân'
        ]
      },
      {
        list: 'done',
        name: '[T11 - Tuần 2] Dựng khung giao diện HR Dashboard (hr-dashboard.html) & Admin (admin-user-management.html)',
        labels: ['SV3', 'UI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm) | File: hr-dashboard.html, admin-user-management.html\nXây dựng giao diện Trung tâm điều hành HR và trang Quản trị hệ thống & Phân quyền người dùng dành cho Admin.',
        checklist: [
          'Dựng 4 KPI Cards, khung biểu đồ Chart.js và bảng theo dõi toàn công ty trên hr-dashboard.html',
          'Dựng khu vực quản lý kịch bản Onboarding mẫu (Templates)',
          'Dựng bảng danh sách tài khoản và Nhật ký kiểm toán (Audit Logs) trên admin-user-management.html'
        ]
      },
      {
        list: 'done',
        name: '[T12 - Tuần 2] Kiểm tra Responsive & Đồng bộ Navigation Sidebar trên toàn bộ 9 màn hình',
        labels: ['UI', 'TEST'],
        desc: 'Phụ trách: Cả nhóm (SV1, SV2, SV3) | Nhánh: dev\nRà soát tính nhất quán của thanh Sidebar, Header, liên kết chuyển trang và khả năng co giãn trên các kích thước màn hình.',
        checklist: [
          'Đồng bộ menu điều hướng giữa các màn hình trong cùng phân hệ',
          'Kiểm tra hiển thị trên màn hình Laptop (1366px), Desktop (1920px) và Mobile (375px)'
        ]
      },
      {
        list: 'w3',
        name: '[T13 - Tuần 3] Lập trình Luồng Checklist, Bộ lọc Giai đoạn & Nộp Minh chứng (newhire-checklist.html)',
        labels: ['SV1', 'CORE'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | Nhánh: huy/feature/newhire-checklist\nLập trình tương tác DOM cho phép nhân viên mới lọc công việc theo giai đoạn, đánh dấu hoàn thành, đính kèm link minh chứng và tự động cập nhật phần trăm tiến độ.',
        checklist: [
          'Lập trình bộ lọc công việc theo Tuần 1, Tháng 1, Tháng 2 và trạng thái',
          'Lưu link minh chứng (proofUrl) và ghi chú (proofNote) vào LocalStorage',
          'Tự động tính lại tiến độ tổng thể ngay khi tick hoàn thành'
        ]
      },
      {
        list: 'w3',
        name: '[T14 - Tuần 3] Nâng cấp Hệ thống Đề xuất 8 Người đồng hành (Mentor) & Khung Chat Trực tiếp',
        labels: ['SV1', 'SV2', 'AI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) & SV2 – Đào Viết Huy Hoàng (2551170888) | File: newhire-onboarding-dashboard.html\nMỗi tài khoản mới chưa có sẵn Mentor cố định mà được AI gợi ý danh sách 8 Người đồng hành (MT01..MT08) kèm điểm tương thích (Match Score %), SĐT, Zalo, giới thiệu chi tiết và khung Chat trực tiếp.',
        checklist: [
          'Xây dựng thuật toán AI tính điểm phù hợp giữa Nhân viên mới và 8 Mentor',
          'Hiển thị đầy đủ SĐT, Zalo, chuyên môn, phong cách hỗ trợ để người dùng tự chọn Mentor',
          'Lập trình ngăn kéo Chat trực tiếp với Người đồng hành có gợi ý câu hỏi nhanh và phản hồi tự động'
        ]
      },
      {
        list: 'done',
        name: '[T15 - Tuần 3] Lập trình Tính năng AI-1: Trợ lý Hỏi đáp Chính sách & Sổ tay Nhân sự (newhire-ai-help.html)',
        labels: ['SV1', 'AI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | File: newhire-ai-help.html\nPhát triển trợ lý AI-1 giúp nhân viên mới hỏi đáp tức thì về chế độ phúc lợi, bảo hiểm, nghỉ phép, cấp phát thiết bị IT và quy trình đánh giá thử việc.',
        checklist: [
          'Lập trình giao diện hội thoại AI có trích dẫn nguồn tài liệu nội bộ',
          'Thiết lập các nút câu hỏi mẫu (Quick Prompts) theo chủ đề',
          'Kết nối bộ tìm kiếm trực tiếp với kho dữ liệu FAQ trong mock-data.json'
        ]
      },
      {
        list: 'done',
        name: '[T16 - Tuần 3] Lập trình Phân hệ Mentor: Duyệt Minh chứng, Giao thêm việc & Đánh giá Mentee',
        labels: ['SV2', 'CORE'],
        desc: 'Phụ trách: SV2 – Đào Viết Huy Hoàng (2551170888) | File: mentor-mentee-list.html\nLập trình đầy đủ nghiệp vụ dành cho Người hướng dẫn: theo dõi tiến độ từng Mentee, kiểm tra link minh chứng, giao thêm đầu việc mới và chấm điểm định kỳ.',
        checklist: [
          'Lập trình lọc danh sách Mentee theo trạng thái tiến độ',
          'Lập trình chức năng giao thêm nhiệm vụ và duyệt trạng thái hoàn thành',
          'Lập trình Modal chấm điểm 1–5 sao và lưu nhận xét của Mentor'
        ]
      },
      {
        list: 'done',
        name: '[T17 - Tuần 3] Lập trình Tính năng AI-2: Cá nhân hóa Lộ trình Checklist theo Vị trí (Checklist Personalizer)',
        labels: ['SV2', 'AI'],
        desc: 'Phụ trách: SV2 – Đào Viết Huy Hoàng (2551170888) | File: mentor-mentee-list.html, js/api.js\nXây dựng mô-đun AI-2 tự động phân tích vị trí công việc (Frontend, Backend, AI/Data, Product, QC, Marketing) để đề xuất các đầu việc hội nhập chuyên sâu.',
        checklist: [
          'Xây dựng kho mẫu nhiệm vụ chuyên biệt theo từng vị trí kỹ thuật và nghiệp vụ',
          'Cho phép Mentor hoặc HR kích hoạt AI-2 bổ sung nhiệm vụ cá nhân hóa chỉ với 1 click'
        ]
      },
      {
        list: 'done',
        name: '[T18 - Tuần 3] Lập trình Tính năng AI-3: Cảnh báo Sớm Rủi ro Hội nhập (HR Risk Radar) & Biểu đồ Chart.js',
        labels: ['SV3', 'AI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm) | File: hr-dashboard.html\nTích hợp Chart.js và thuật toán AI-3 Risk Radar trên HR Dashboard để tự động phát hiện nhân sự có nguy cơ chậm tiến độ và đề xuất hành động hỗ trợ kịp thời.',
        checklist: [
          'Vẽ biểu đồ tiến độ theo phòng ban và biểu đồ tỷ lệ trạng thái bằng Chart.js',
          'Hiển thị bảng cảnh báo sớm AI-3 Risk Radar kèm mức độ rủi ro và khuyến nghị can thiệp',
          'Lập trình chức năng xuất báo cáo CSV (Export CSV)'
        ]
      },
      {
        list: 'done',
        name: '[T19 - Tuần 3] Lập trình Phân hệ Admin: Quản lý Người dùng CRUD, Khóa/Mở khóa & Nhật ký Kiểm toán',
        labels: ['SV3', 'CORE'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm) | File: admin-user-management.html\nHoàn thiện bảng điều khiển Quản trị viên: thêm/sửa tài khoản, đổi vai trò, khóa/mở khóa người dùng, xem Audit Logs và khôi phục dữ liệu mẫu.',
        checklist: [
          'Lập trình tìm kiếm & lọc tài khoản theo Vai trò, Phòng ban, Trạng thái',
          'Lập trình thêm mới, chỉnh sửa vai trò và khóa/mở khóa tài khoản',
          'Tích hợp nút Khôi phục dữ liệu gốc (Reset Demo Data) và Xuất file JSON'
        ]
      },
      {
        list: 'done',
        name: '[T20 - Tuần 3] Thiết lập Hệ thống Tài khoản Đăng nhập Chuẩn cho 4 Vai trò & Tài liệu Tra cứu',
        labels: ['SV1', 'SV3'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) & SV2 ? ??o Vi?t Huy Ho?ng (2551170888) | File: login.html, docs/TAI_KHOAN_DANG_NHAP.md\nCấu hình đầy đủ tài khoản đăng nhập cho cả 4 vai trò (New Hire, Mentor, HR, Admin), đồng bộ thông tin người dùng trên thanh Topbar và lập file tra cứu nhanh.',
        checklist: [
          'Tích hợp tài khoản Mentor, HR, Admin và 6 New Hires vào login.html',
          'Giữ giao diện đăng nhập tinh gọn, chuẩn thực tế',
          'Tạo file docs/TAI_KHOAN_DANG_NHAP.md tổng hợp toàn bộ email và mật khẩu'
        ]
      },
      {
        list: 'review',
        name: '[T21 - Tuần 4] Chuẩn hóa Ảnh đại diện Mentor Việt Nam & Tối ưu Hiệu năng Cuộn trang 60FPS',
        labels: ['SV1', 'UI'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897) | File: assets/images/mentors/mt01.jpg..mt08.jpg, css/style.css\nCập nhật bộ ảnh chân dung người Việt Nam chuyên nghiệp cho 8 Người đồng hành, loại bỏ các icon trang trí dư thừa và tối ưu CSS giúp cuộn trang mượt mà.',
        checklist: [
          'Cập nhật ảnh chân dung người Việt cho 8 Mentor (mt01.jpg..mt08.jpg)',
          'Loại bỏ các icon trang trí không cần thiết trên giao diện',
          'Tối ưu hiệu năng render CSS khi cuộn trang danh sách dài'
        ]
      },
      {
        list: 'review',
        name: '[T22 - Tuần 4] Nâng cấp Chế độ Thị sát Đa người dùng (Multi-User View-As) cho HR & Admin',
        labels: ['SV3', 'CORE'],
        desc: 'Phụ trách: SV1 – Nguyễn Gia Huy (2551170897 - Trưởng nhóm) | Nhánh: fix/sv3-data-sync-hr-admin\nNâng cấp Chế độ thị sát (View-As) cho phép chọn xem góc nhìn của bất kỳ Nhân sự mới nào (NH01..NH06) hoặc bất kỳ Người hướng dẫn nào (MT01..MT08) ngay từ Sidebar và thanh Impersonation Bar.',
        checklist: [
          'Tích hợp hộp chọn 6 Nhân viên mới (NH01..NH06) và 8 Mentor (MT01..MT08) trên Sidebar',
          'Tích hợp bộ chuyển đổi nhanh nhân sự/mentor trên thanh #adminImpersonateBar đầu trang',
          'Tự động cập nhật dữ liệu Dashboard, Checklist và Danh sách Mentee theo người được chọn'
        ]
      },
      {
        list: 'review',
        name: '[T23 - Tuần 4] Kiểm thử Liên thông Toàn Hệ thống (End-to-End) & Quay 11 Video Minh chứng OBS',
        labels: ['TEST', 'SV1', 'SV2', 'SV3'],
        desc: 'Phụ trách: Cả nhóm (SV1, SV2, SV3) | Nhánh: main / dev\nThực hiện kiểm thử tích hợp toàn bộ luồng dữ liệu giữa 4 phân hệ và quay đầy đủ 11 video OBS minh chứng theo quy định của học phần CSE122.',
        checklist: [
          'Kiểm thử luồng Nhân viên mới chọn Mentor, chat với Mentor và nộp minh chứng',
          'Kiểm thử luồng Mentor duyệt minh chứng, chấm điểm và dùng AI-2',
          'Kiểm thử luồng HR xem biểu đồ, AI-3 Risk Radar và Admin thị sát đa người dùng'
        ]
      },
      {
        list: 'done',
        name: '[T24 - Tuần 4] Hoàn thiện Báo cáo Sử dụng AI (ai-usage-report.md), Tài liệu Trello & Đóng gói Nộp bài',
        labels: ['TEST', 'SV3'],
        desc: 'Phụ trách: Cả nhóm (SV1, SV2, SV3) | File: docs/ai-usage-report.md, docs/QUY_TRINH_TRELLO_KANBAN.md\nTổng hợp báo cáo sử dụng AI minh bạch, tài liệu quy trình Trello Kanban 4 tuần và đồng bộ toàn bộ mã nguồn lên GitHub.',
        checklist: [
          'Hoàn thiện docs/ai-usage-report.md và README.md',
          'Hoàn thiện docs/QUY_TRINH_TRELLO_KANBAN.md và trello-kanban.html',
          'Merge và đồng bộ tất cả nhánh lên GitHub Repository chính thức'
        ]
      }
    ];

    for (let i = 0; i < CARDS.length; i++) {
      const c = CARDS[i];
      setStatus(`⏳ Đang tạo thẻ [${i + 1}/${CARDS.length}]: ${c.name.slice(0, 48)}...`);
      const idList = listIds[c.list] || listIds.done;
      const idLabels = c.labels.map(k => labelIds[k]).filter(Boolean);

      const cardCreated = await trelloReq('POST', '/1/cards', {
        name: c.name,
        desc: c.desc,
        idList,
        idLabels,
        pos: (i + 1) * 16384
      });

      if (Array.isArray(c.checklist) && c.checklist.length > 0) {
        const cl = await trelloReq('POST', '/1/checklists', {
          idCard: cardCreated.id,
          name: 'Checklist công việc con'
        });
        for (const itemName of c.checklist) {
          await trelloReq('POST', `/1/checklists/${cl.id}/checkItems`, {
            name: itemName,
            checked: true
          });
        }
      }
    }

    setStatus('🎉 HOÀN TẤT 100%! Đã tạo xong toàn bộ 6 Cột, 7 Nhãn & 25 Thẻ trên Trello.com!');
    setTimeout(() => {
      location.href = boardUrl;
    }, 1200);
  } catch (err) {
    console.error(err);
    banner.style.borderColor = '#F43F5E';
    setStatus('❌ Có lỗi khi chạy script: ' + err.message);
  }
})();
