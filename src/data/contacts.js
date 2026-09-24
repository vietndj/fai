/**
 * src/data/contacts.js
 * Mạng lưới thông tin liên hệ, hotline, email, campus và liên kết chính thức FAI
 */

export const HOTLINES = {
  hn: {
    label: 'Cơ sở Hà Nội',
    display: '024 7300 8855',
    raw: '02473008855',
    tel: 'tel:02473008855'
  },
  dn: {
    label: 'Cơ sở Đà Nẵng',
    display: '0236 730 8826',
    raw: '02367308826',
    tel: 'tel:02367308826'
  },
  primary: '024 7300 8855',
  secondary: '0236 730 8826',
  primaryTel: 'tel:02473008855',
  secondaryTel: 'tel:02367308826'
};

export const EMAILS = {
  general: 'fai@fpt.edu.vn',
  admissions: 'fai@fpt.edu.vn',
  mailto: 'mailto:fai@fpt.edu.vn'
};

export const WORKING_HOURS = {
  display: '8:00 - 21:00 hàng ngày',
  detail: 'Thời gian làm việc từ 8:00 - 21:00 hàng ngày, kể cả Thứ 7 và Chủ Nhật'
};

export const ADMISSION_CAMPUSES = ['Hà Nội', 'Đà Nẵng'];

export const EXTERNAL_LINKS = {
  privacyPolicy: 'https://fpt.edu.vn/thu-vien-anh/11140',
  leadSubmitScript: 'https://script.google.com/macros/s/AKfycbwfPoh5H-YB8CcPWw9GijIv44YjXtHbrwdLX7XCMWnhTmg5ocW-aGt3PnCIMiC_pvSKrw/exec',
  websites: {
    fai: 'https://fai.fpt.edu.vn',
    aptech: 'https://aptech.fpt.edu.vn',
    arena: 'https://arena.fpt.edu.vn',
    skillking: 'https://skillking.fpt.edu.vn',
    jetking: 'https://jetking.fpt.edu.vn'
  },
  zalo: {
    fai: 'https://zalo.me/3164559225263453576',
    aptech: 'https://zalo.me/fptaptech',
    arena: 'https://zalo.me/fptarenaofficial',
    skillking: 'https://zalo.me/fptskillking',
    jetking: 'https://zalo.me/jetkingfpt'
  },
  socials: {
    facebook: 'https://www.facebook.com/VienDaoTaoQuocTeFPT',
    youtube: 'https://www.youtube.com/@fpt.academyinternational',
    tiktok: 'https://www.tiktok.com/@vien.dao.tao.quoc.te.fpt',
    instagram: 'https://www.instagram.com/fptacademyinternational',
    threads: 'https://www.threads.com/@fptacademyinternational'
  }
};

// Mạng lưới campus chi tiết theo từng thương hiệu (phục vụ src/app/lien-he/page.js)
export const aptechCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Aptech - Cơ sở Phan Tây Nhạc',
    address: 'Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội',
    hotline: '0833 999 810',
    email: 'aptech.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Aptech - Cơ sở Tôn Thất Thuyết',
    address: '8 Tôn Thất Thuyết, Phường Cầu Giấy, TP Hà Nội',
    hotline: '0833 999 810',
    email: 'aptech.hn@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Aptech - Cơ sở 21 Bis Hậu Giang',
    address: '21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP HCM',
    hotline: '0834 999 810',
    email: 'aptech.hcm@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Aptech - Cơ sở Nguyên Hồng',
    address: '84A Nguyên Hồng, P. Hạnh Thông, TP HCM',
    hotline: '0834 999 810',
    email: 'aptech.hcm@fpt.edu.vn'
  }
];

export const arenaCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Arena - Cơ sở Đội Cấn',
    address: '264 Đội Cấn, Phường Ba Đình, TP Hà Nội',
    hotline: '024 7300 8855',
    email: 'farena.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Arena - Cơ sở Lương Yên',
    address: '94 Lương Yên, Phường Bạch Đằng, TP Hà Nội',
    hotline: '024 7300 8855',
    email: 'farena.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Arena - Cơ sở Phan Tây Nhạc',
    address: 'Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội',
    hotline: '024 7300 8855',
    email: 'farena.hn@fpt.edu.vn'
  },
  {
    city: 'Đà Nẵng',
    name: 'FPT Arena - Cơ sở Đà Nẵng',
    address: '130 Đống Đa, Phường Hải Châu, TP Đà Nẵng',
    hotline: '0236 730 8826',
    email: 'farena.dn@fpt.edu.vn'
  },
  {
    city: 'TP Hồ Chí Minh',
    name: 'FPT Arena - Cơ sở 21 Bis Hậu Giang',
    address: '21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP Hồ Chí Minh',
    hotline: '028 7300 8866',
    email: 'farena.hcm@fpt.edu.vn'
  },
  {
    city: 'TP Hồ Chí Minh',
    name: 'FPT Arena - Cơ sở Nguyên Hồng',
    address: '84A Nguyên Hồng, Phường Hạnh Thông, TP Hồ Chí Minh',
    hotline: '028 7300 8866',
    email: 'farena.hcm@fpt.edu.vn'
  },
  {
    city: 'Cần Thơ',
    name: 'FPT Arena - Cơ sở Cần Thơ',
    address: '55 Cách Mạng Tháng 8, Phường Cái Khế, TP Cần Thơ',
    hotline: '0292 730 8806',
    email: 'farena.ct@fpt.edu.vn'
  }
];

export const skillkingCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Skillking - Cơ sở Phan Tây Nhạc',
    address: 'Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội',
    hotline: '024 7300 8855',
    email: 'skillking.hn@fpt.edu.vn'
  },
  {
    city: 'Hà Nội',
    name: 'FPT Skillking - Cơ sở Lương Yên',
    address: '94 Lương Yên, Phường Bạch Đằng, TP Hà Nội',
    hotline: '024 7300 8855',
    email: 'skillking.hn@fpt.edu.vn'
  },
  {
    city: 'Đà Nẵng',
    name: 'FPT Skillking - Cơ sở Đà Nẵng',
    address: '130 Đống Đa, Phường Hải Châu, TP Đà Nẵng',
    hotline: '0236 730 8826',
    email: 'skillking.dn@fpt.edu.vn'
  },
  {
    city: 'TP Hồ Chí Minh',
    name: 'FPT Skillking - Cơ sở 21 Bis Hậu Giang',
    address: '21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP Hồ Chí Minh',
    hotline: '028 7300 8866',
    email: 'skillking.hcm@fpt.edu.vn'
  },
  {
    city: 'TP Hồ Chí Minh',
    name: 'FPT Skillking - Cơ sở Nguyên Hồng',
    address: '84A Nguyên Hồng, Phường Hạnh Thông, TP Hồ Chí Minh',
    hotline: '028 7300 8866',
    email: 'skillking.hcm@fpt.edu.vn'
  },
  {
    city: 'Cần Thơ',
    name: 'FPT Skillking - Cơ sở Cần Thơ',
    address: '55 Cách Mạng Tháng 8, Phường Cái Khế, TP Cần Thơ',
    hotline: '0292 730 8806',
    email: 'skillking.ct@fpt.edu.vn'
  }
];

export const jetkingCampuses = [
  {
    city: 'Hà Nội',
    name: 'FPT Jetking - Cơ sở Phan Tây Nhạc',
    address: 'Cổng số 1, Nhà E, Toà nhà FPT Polytechnic, 13 Phan Tây Nhạc, Phường Xuân Phương, TP Hà Nội',
    hotline: '0833 999 810',
    email: 'jetking.hn@fpt.edu.vn'
  },
  {
    city: 'Đà Nẵng',
    name: 'FPT Jetking - Cơ sở Đà Nẵng',
    address: '130 Đống Đa, Phường Hải Châu, TP Đà Nẵng',
    hotline: '0941 173 530',
    email: 'jetking.dn@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Jetking - Cơ sở 21 Bis Hậu Giang',
    address: '21 Bis Hậu Giang, Phường Tân Sơn Nhất, TP HCM',
    hotline: '0834 999 810',
    email: 'jetking.hcm@fpt.edu.vn'
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'FPT Jetking - Cơ sở Nguyên Hồng',
    address: '84A Nguyên Hồng, P. Hạnh Thông, TP HCM',
    hotline: '0834 999 810',
    email: 'jetking.hcm@fpt.edu.vn'
  }
];

// Danh sách Campus gom theo Thành phố (phục vụ Footer.jsx và hệ thống liên hệ)
export const campusesByCity = {
  hanoi: {
    city: 'Hà Nội',
    addresses: [
      '13 Phan Tây Nhạc, Phường Xuân Phương',
      'Số 8 Tôn Thất Thuyết, Phường Cầu Giấy',
      '94 Lương Yên, Phường Hai Bà Trưng',
      '264 Đội Cấn, Phường Ba Đình'
    ]
  },
  hcm: {
    city: 'TP. Hồ Chí Minh',
    addresses: [
      '21 Bis Hậu Giang, Phường Tân Sơn Nhất',
      '84A Nguyên Hồng, Phường Hạnh Thông'
    ]
  },
  danang: {
    city: 'Đà Nẵng',
    addresses: [
      '130 Đống Đa, Phường Hải Châu'
    ]
  },
  cantho: {
    city: 'Cần Thơ',
    addresses: [
      '55 Cách Mạng Tháng Tám, Phường Cái Khế'
    ]
  }
};

export const CAMPUSES_BY_CITY = campusesByCity;
