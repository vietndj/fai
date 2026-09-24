/**
 * src/data/tuition.js
 * Thông tin tài khoản ngân hàng chuyển khoản học phí chính thức 2026
 * Áp dụng cho 2 cơ sở đào tạo chính: Hà Nội & Đà Nẵng (Ngân hàng TPBank).
 */

export const TUITION_ACCOUNTS = [
  {
    campusKey: 'HN',
    campusName: 'Cơ sở Hà Nội',
    badge: 'HÀ NỘI CAMPUS',
    accountNumber: '00006969813',
    accountName: 'Trường Đại học FPT',
    bankName: 'Ngân hàng Tiên Phong (TPBank) chi nhánh Hà Nội',
    shortBank: 'TPBank',
    branch: 'Chi nhánh Hà Nội',
    transferSyntax: 'FAIHN_hotensinhvien_HP HK 1',
    syntaxExample: 'FAIHN_NguyenVanAn_HP HK 1',
    address: 'Toà nhà FPT, Phố Dịch Vọng Hậu, Cầu Giấy, Hà Nội'
  },
  {
    campusKey: 'DN',
    campusName: 'Cơ sở Đà Nẵng',
    badge: 'ĐÀ NẴNG CAMPUS',
    accountNumber: '03557714109',
    accountName: 'Phân hiệu trường Đại học FPT tại TP Đà Nẵng',
    bankName: 'Ngân hàng Tiên Phong (TPBank) chi nhánh Đà Nẵng',
    shortBank: 'TPBank',
    branch: 'Chi nhánh Đà Nẵng',
    transferSyntax: 'FAIDN_hotensinhvien_HP HK 1',
    syntaxExample: 'FAIDN_TranThiBinh_HP HK 1',
    address: 'Khu đô thị công nghệ FPT Đà Nẵng, P. Hòa Hải, Q. Ngũ Hành Sơn, TP. Đà Nẵng'
  }
];

export const TUITION_TRANSFER_NOTES = [
  'Học viên ghi chính xác cú pháp chuyển khoản tương ứng với cơ sở đăng ký học (HN hoặc DN).',
  'Ghi rõ họ và tên không dấu (ví dụ: NguyenVanAn) và kỳ đóng học phí (ví dụ: HP HK 1).',
  'Lưu lại hình ảnh biên lai giao dịch thành công để nộp kèm hồ sơ nhập học hoặc gửi cho cán bộ tuyển sinh phụ trách.',
  'Mọi khoản thanh toán cần được thực hiện qua đúng số tài khoản TPBank chính thức công bố tại trang này.'
];

// Backward-compatible aliases
export const tuitionAccounts = TUITION_ACCOUNTS;
export const tuitionTransferNotes = TUITION_TRANSFER_NOTES;
