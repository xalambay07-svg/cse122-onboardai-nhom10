/**
 * API & LocalStorage Data Engine - OnboardAI (CSE122 - BTL-20)
 * Mô phỏng RESTful API và lưu trữ bền vững trên trình duyệt
 */

const STORAGE_KEY = 'ONBOARDAI_DB_V1';

const API = {
  /**
   * Khởi tạo cơ sở dữ liệu từ file mock-data.json nếu LocalStorage chưa có
   */
  async init() {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
      try {
        const res = await fetch('assets/data/mock-data.json');
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          console.log('[API] Khởi tạo CSDL LocalStorage thành công từ mock-data.json');
        }
      } catch (err) {
        console.warn('[API] Không thể nạp mock-data.json tự động (có thể do mở file:/// trực tiếp), sử dụng dữ liệu fallback.', err);
      }
    }
  },

  /**
   * Lấy toàn bộ CSDL
   */
  getDB() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  },

  /**
   * Lưu toàn bộ CSDL
   */
  saveDB(db) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  },

  /**
   * Lấy tất cả bản ghi của một thực thể (collection)
   */
  getAll(collection) {
    const db = this.getDB();
    return db[collection] || [];
  },

  /**
   * Lấy chi tiết một bản ghi theo ID
   */
  getById(collection, id) {
    const items = this.getAll(collection);
    return items.find(item => item.id === id) || null;
  },

  /**
   * Thêm mới một bản ghi (Create)
   */
  create(collection, data) {
    const db = this.getDB();
    if (!db[collection]) db[collection] = [];
    const newItem = {
      id: 'ID_' + Date.now().toString(36),
      createdAt: new Date().toISOString(),
      ...data
    };
    db[collection].unshift(newItem);
    this.saveDB(db);
    return newItem;
  },

  /**
   * Cập nhật một bản ghi (Update)
   */
  update(collection, id, updatedFields) {
    const db = this.getDB();
    if (!db[collection]) return null;
    const index = db[collection].findIndex(item => item.id === id);
    if (index !== -1) {
      db[collection][index] = {
        ...db[collection][index],
        ...updatedFields,
        updatedAt: new Date().toISOString()
      };
      this.saveDB(db);
      return db[collection][index];
    }
    return null;
  },

  /**
   * Xóa một bản ghi (Delete)
   */
  delete(collection, id) {
    const db = this.getDB();
    if (!db[collection]) return false;
    const prevLen = db[collection].length;
    db[collection] = db[collection].filter(item => item.id !== id);
    if (db[collection].length !== prevLen) {
      this.saveDB(db);
      return true;
    }
    return false;
  },

  /**
   * Quản lý phiên người dùng hiện tại (Session Mock)
   */
  getCurrentUser() {
    const userStr = localStorage.getItem('ONBOARDAI_CURRENT_USER');
    if (userStr) return JSON.parse(userStr);
    // Mặc định trả về New Hire nếu chưa đăng nhập
    return {
      id: 'NH01',
      name: 'Nguyễn Văn An',
      role: 'newhire',
      email: 'an.nguyen@onboardai.vn'
    };
  },

  setCurrentUser(user) {
    localStorage.setItem('ONBOARDAI_CURRENT_USER', JSON.stringify(user));
  },

  logout() {
    localStorage.removeItem('ONBOARDAI_CURRENT_USER');
    window.location.href = 'login.html';
  }
};

// Tự động khởi tạo khi nhúng script
API.init();
