export const personalInfo = {
  name: 'Nguyễn Gia Huy',
  title: 'Data Analyst / Data Scientist',
  email: 'flytheonlyone111@gmail.com',
  phone: '0822066908',
  github: 'https://github.com/Fly-onlyone',
  location: 'Thành Phố Hồ Chí Minh',
  dob: '01/07/2003',
  // `file` is relative to public/; prefix with import.meta.env.BASE_URL when linking.
  cv: [
    { label: 'CV Data Analyst', file: 'cv/Nguyen-Gia-Huy-Data-Analyst.pdf' },
    { label: 'CV Data Scientist', file: 'cv/Nguyen-Gia-Huy-Data-Scientist.pdf' }
  ]
};

export const objective = 'Fresher Data Analyst / Data Scientist. Cử nhân Khoa học Dữ liệu (HUFLIT, loại Giỏi, GPA 3.26/4.0), IELTS 6.0. Có kinh nghiệm thực tập xử lý dữ liệu bán hàng và tồn kho bằng Python tại hệ thống đại lý Honda HEAD Khánh An; làm các dự án máy học với scikit-learn và Big Data với Hadoop/Hive. Quan tâm đến việc đánh giá mô hình đúng cách và biến dữ liệu thành báo cáo giúp ra quyết định.';

export const education = {
  school: 'Đại học Ngoại ngữ – Tin học TP.HCM',
  degree: 'Cử nhân Công nghệ Thông tin – Chuyên ngành Khoa học Dữ liệu',
  period: '2022 - 06/2026',
  gpa: '3.26/4.00',
  honors: 'Giỏi',
  cert: 'IELTS 6.0'
};

export const experience = [
  {
    company: 'Công ty TNHH Thương mại và Dịch vụ Khánh An (hệ thống đại lý Honda HEAD)',
    role: 'Thực tập sinh Phân tích Dữ liệu (Data Analyst Intern)',
    period: '09/2025 - 12/2025',
    description: [
      'Viết script Python (pandas, openpyxl) tự động tổng hợp file Excel bán hàng và tồn kho của 5 chi nhánh (~35.000 mã phụ tùng), thay cho tổng hợp thủ công.',
      'Script tính mức tiêu thụ trung bình tháng (AMC), xếp hạng sản phẩm theo doanh số và gắn cảnh báo tồn kho (cần đặt hàng / tồn kho cao).',
      'Xuất file Excel có sẵn công thức và định dạng để phòng Kinh doanh tự kiểm tra; thời gian xử lý giảm xuống dưới 3 phút.'
    ],
    techStack: ['Python', 'pandas', 'openpyxl', 'Excel']
  }
];

export const skills = [
  { category: 'Ngôn ngữ & truy vấn', icon: 'Code', items: ['Python', 'SQL', 'HiveQL'] },
  { category: 'Xử lý & phân tích dữ liệu', icon: 'TableChart', items: ['pandas', 'NumPy', 'openpyxl', 'Excel'] },
  { category: 'Machine Learning', icon: 'ModelTraining', items: ['scikit-learn', 'imbalanced-learn', 'SVM', 'Decision Tree', 'K-Means', 'PCA'] },
  { category: 'Trực quan hóa', icon: 'BarChart', items: ['Matplotlib', 'Seaborn', 'Altair', 'Streamlit'] },
  { category: 'Big Data & cơ sở dữ liệu', icon: 'Storage', items: ['Hadoop HDFS', 'Apache Hive', 'MongoDB', 'Docker Compose'] },
  { category: 'Công cụ', icon: 'Build', items: ['Jupyter', 'Google Colab', 'Kaggle', 'Git/GitHub', 'RapidMiner'] }
];

export const projects = [
  {
    title: 'Khóa luận tốt nghiệp',
    subtitle: 'Ảnh hưởng của tiền xử lý dữ liệu đến bài toán phân loại và phân cụm',
    period: '05/2025 - 08/2025',
    members: 2,
    repos: [
      { label: 'KhoaLuan', url: 'https://github.com/Fly-onlyone/KhoaLuan' }
    ],
    highlight: 'F1-macro 0,733 → 0,776 trên Cora (đánh giá không rò rỉ dữ liệu)',
    description: [
      'Phân loại 2.708 bài báo Cora (7 chủ đề): so sánh các pipeline chọn đặc trưng (VarianceThreshold, SelectKBest–chi²), chuẩn hóa (Normalizer, StandardScaler) và cân bằng lớp (RandomOverSampler) với SVM tuyến tính.',
      'Đánh giá lại bằng quy trình không rò rỉ (chia train/test trước, tiền xử lý nằm trong imblearn Pipeline): F1-macro tăng từ 0,733 lên 0,776; phát hiện kết quả ban đầu (≈0,93) bị thổi phồng do oversampling trước khi chia dữ liệu.',
      'Phân cụm 98.913 người dùng sàn thời trang C2C: Isolation Forest, QuantileTransformer, PCA (10 thành phần, giữ 95,3% phương sai), K-Means chọn k = 4 theo Silhouette (0,585), Davies–Bouldin và Calinski–Harabasz.'
    ],
    techStack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'imbalanced-learn', 'Matplotlib', 'Seaborn', 'Jupyter']
  },
  {
    title: 'Hệ thống dự đoán mức nguy cơ ung thư phổi trên Hadoop/Hive',
    subtitle: 'Đồ án môn Big Data',
    period: '12/2024 - 04/2025',
    members: 2,
    repos: [
      { label: 'BigData', url: 'https://github.com/Fly-onlyone/BigData' }
    ],
    highlight: 'Accuracy 0,75 trên hồ sơ chưa thấy (grouped CV), thay vì 100% ảo',
    description: [
      'Ứng dụng Streamlit dự đoán mức nguy cơ Low / Medium / High từ file Excel 21 chỉ số, lưu kết quả vào bảng Hive (ORC, transactional) qua PyHive; hỗ trợ lọc, thống kê và biểu đồ.',
      'Dựng Hadoop HDFS + Hive (metastore PostgreSQL) bằng Docker Compose gồm 5 container.',
      'Phát hiện 1.000 dòng dữ liệu chỉ có 53 hồ sơ khác nhau; đánh giá lại bằng StratifiedGroupKFold: Decision Tree đạt accuracy 0,75, Logistic Regression 0,87.'
    ],
    techStack: ['Python', 'pandas', 'scikit-learn', 'Streamlit', 'Altair', 'Apache Hive', 'PyHive', 'Hadoop HDFS', 'Docker Compose', 'RapidMiner']
  }
];

export const navLinks = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Kỹ năng', href: '#skills' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Liên hệ', href: '#contact' }
];
