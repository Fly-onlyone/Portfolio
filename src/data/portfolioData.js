export const personalInfo = {
  name: 'Nguyễn Gia Huy',
  title: 'AI Engineer',
  email: 'flytheonlyone111@gmail.com',
  phone: '0812994808',
  github: 'https://github.com/Fly-onlyone',
  location: 'Thành Phố Hồ Chí Minh',
  dob: '01/07/2003'
};

export const objective = 'Fresher Python Engineer tập trung vào Data, Automation và AI. Có kinh nghiệm thực tập xây dựng báo cáo dữ liệu và tự động hóa xử lý Excel bằng Python, pandas và openpyxl; đồng thời phát triển các dự án với FastAPI, React, Playwright, Tauri, scikit-learn và Apache Hive. Quan tâm đến việc xây dựng các công cụ và sản phẩm giải quyết bài toán thực tế.';

export const education = {
  school: 'Đại học Ngoại ngữ – Tin học TP.HCM',
  degree: 'Cử nhân Công nghệ Thông tin – Chuyên ngành Khoa học Dữ liệu',
  period: '2022 - 06/2026',
  gpa: '3.26/4.00',
  honors: 'Giỏi',
  cert: 'IELTS 6.0'
};

export const skills = [
  { category: 'Ngôn ngữ lập trình', icon: 'Code', items: ['Python', 'Java', 'C#', 'JavaScript'] },
  { category: 'Backend & Automation', icon: 'Terminal', items: ['FastAPI', 'Playwright', 'openpyxl'] },
  { category: 'Data & ML', icon: 'Analytics', items: ['pandas', 'scikit-learn', 'Jupyter', 'RapidMiner'] },
  { category: 'Frontend / Desktop', icon: 'DesktopWindows', items: ['React', 'Streamlit', 'Tauri'] },
  { category: 'Hạ tầng dữ liệu', icon: 'Storage', items: ['Hive', 'Hadoop', 'MongoDB', 'Docker'] },
  { category: 'Công cụ', icon: 'Build', items: ['Git', 'GitHub'] }
];

export const projects = [
  {
    title: 'Hệ thống dự đoán mắc bệnh ung thư',
    subtitle: 'Ứng dụng Big Data để lưu dữ liệu, thống kê và tìm kiếm',
    period: '12/2024 - 4/2025',
    members: 2,
    repos: [
      { label: 'BigData', url: 'https://github.com/Fly-onlyone/BigData' },
      { label: 'Hive', url: 'https://github.com/Fly-onlyone/Hive' }
    ],
    description: [
      'Xây dựng ứng dụng Streamlit hỗ trợ batch prediction từ Excel, xử lý 21 đặc trưng nguy cơ và triệu chứng để phân loại mức nguy cơ Low / Medium / High.',
      'Tích hợp pipeline dự đoán với Apache Hive qua PyHive, tự động lưu kết quả và hỗ trợ tìm kiếm, lọc dữ liệu bệnh nhân theo nhiều chỉ số.',
      'Triển khai môi trường Hadoop/Hive đa container bằng Docker Compose gồm NameNode, DataNode, Hive Metastore, HiveServer và PostgreSQL metastore.'
    ],
    techStack: ['Python', 'pandas', 'Streamlit', 'Apache Hive', 'PyHive', 'Hadoop HDFS', 'Docker Compose', 'Altair', 'RapidMiner']
  },
  {
    title: 'Khóa luận tốt nghiệp',
    subtitle: 'Tiền xử lý dữ liệu cho bài toán phân loại và phân cụm',
    period: '5/2025 - 8/2025',
    members: 2,
    repos: [
      { label: 'KhoaLuan', url: 'https://github.com/Fly-onlyone/KhoaLuan' }
    ],
    description: [
      'Nghiên cứu ảnh hưởng của tiền xử lý dữ liệu trên hai bài toán: phân loại dữ liệu Cora 7 lớp và phân cụm hành vi người dùng.',
      'Thực nghiệm các bước feature selection, data scaling/standardization và model evaluation; áp dụng SVC và đánh giá bằng Accuracy, Macro Precision, Recall và F1-score.',
      'So sánh kết quả giữa các phương pháp tiền xử lý, đồng thời trực quan hóa và đánh giá chất lượng cụm để phân tích tác động đến hiệu quả mô hình.'
    ],
    techStack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Jupyter Notebook', 'Matplotlib']
  },
  {
    title: 'ZZZ Bot',
    subtitle: 'Thao tác tự động trên trình duyệt bằng thư viện Playwright',
    period: '10/2024 - 4/2026',
    members: 1,
    repos: [
      { label: 'ZZZ_Bot_Python', url: 'https://github.com/Fly-onlyone/ZZZ_Bot_Python' }
    ],
    description: [
      'Thiết kế và phát triển ứng dụng desktop tự động hóa hoàn chỉnh với FastAPI, Playwright/OpenCV, React và Tauri.',
      'Xây dựng các chức năng lập lịch tác vụ, API giao tiếp, lưu trạng thái, ghi nhật ký, sao lưu/khôi phục dữ liệu và gửi thông báo.',
      'Thiết lập quy trình CI/CD bằng GitHub Actions với pytest, Ruff và ESLint/Prettier; đóng gói và phát hành ứng dụng Windows bằng PyInstaller và Tauri/NSIS.'
    ],
    techStack: ['FastAPI', 'Playwright', 'OpenCV', 'React', 'Tauri', 'GitHub Actions', 'PyInstaller']
  }
];

export const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' }
];
