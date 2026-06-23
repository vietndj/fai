'use client';

const stats = [
  { value: '98%', label: 'Sinh viên tốt nghiệp có việc làm ngay' },
  { value: '15+', label: 'Năm kinh nghiệm đào tạo thực chiến' },
  { value: '3', label: 'Thương hiệu giáo dục công nghệ hàng đầu' },
  { value: '20,000+', label: 'Cựu học viên thành công toàn cầu' },
];

export default function Counters() {
  return (
    <section className="section bg-dark-counters">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
