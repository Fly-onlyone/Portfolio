import { l10n } from '../i18n/languageContext';

// Translatable fields use l10n(vi, en); everything else is shared by both
// languages. Components read this through usePortfolioData().

export const personalInfo = {
  name: 'Nguyễn Gia Huy',
  title: 'Data Analyst / Data Scientist',
  email: 'flytheonlyone111@gmail.com',
  phone: l10n('0822066908', '+84 822 066 908'),
  github: 'https://github.com/Fly-onlyone',
  linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-gia-huy-304547418/',
  location: l10n('Thành Phố Hồ Chí Minh', 'Ho Chi Minh City, Vietnam'),
  dob: '01/07/2003',
  // `file` is relative to public/; prefix with import.meta.env.BASE_URL when linking.
  cv: l10n(
    [
      { label: 'CV Data Analyst', file: 'cv/Nguyen-Gia-Huy-Data-Analyst-VI.pdf' },
      { label: 'CV Data Scientist', file: 'cv/Nguyen-Gia-Huy-Data-Scientist-VI.pdf' }
    ],
    [
      { label: 'Data Analyst CV', file: 'cv/Nguyen-Gia-Huy-Data-Analyst-EN.pdf' },
      { label: 'Data Scientist CV', file: 'cv/Nguyen-Gia-Huy-Data-Scientist-EN.pdf' }
    ]
  )
};

export const objective = l10n(
  'Fresher Data Analyst / Data Scientist. Cử nhân Công nghệ Thông tin, chuyên ngành Khoa học Dữ liệu (HUFLIT, loại Giỏi, GPA 3.26/4.0), IELTS 6.0. Có kinh nghiệm thực tập xử lý dữ liệu bán hàng và tồn kho bằng Python tại hệ thống đại lý Honda HEAD Khánh An; làm các dự án máy học với scikit-learn và Big Data với Hadoop/Hive. Quan tâm đến việc đánh giá mô hình đúng cách và biến dữ liệu thành báo cáo giúp ra quyết định.',
  'Fresher Data Analyst / Data Scientist. B.Sc. in Information Technology (Data Science major) from HUFLIT, Very Good classification (GPA 3.26/4.0), IELTS 6.0. Data Analyst intern at the Khanh An Honda HEAD dealership network, processing sales and inventory data with Python; built machine learning projects with scikit-learn and Big Data projects with Hadoop/Hive. Interested in evaluating models properly and turning data into reports that support decision-making.'
);

export const education = {
  school: l10n(
    'Đại học Ngoại ngữ – Tin học TP.HCM',
    'Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT)'
  ),
  degree: l10n(
    'Cử nhân Công nghệ Thông tin – Chuyên ngành Khoa học Dữ liệu',
    'Bachelor of Information Technology – Data Science major'
  ),
  period: '2022 - 06/2026',
  gpa: '3.26/4.00',
  honors: l10n('Giỏi', 'Very Good'),
  cert: 'IELTS 6.0'
};

export const experience = [
  {
    company: l10n(
      'Công ty TNHH Thương mại và Dịch vụ Khánh An (hệ thống đại lý Honda HEAD)',
      'Khanh An Trading and Services Co., Ltd. (Honda HEAD dealership network)'
    ),
    role: l10n('Thực tập sinh Phân tích Dữ liệu (Data Analyst Intern)', 'Data Analyst Intern'),
    period: '09/2025 - 12/2025',
    description: l10n(
      [
        'Viết script Python (pandas, openpyxl) tự động tổng hợp file Excel bán hàng và tồn kho của 5 chi nhánh (~35.000 mã phụ tùng), thay cho tổng hợp thủ công.',
        'Script tính mức tiêu thụ trung bình tháng (AMC), xếp hạng sản phẩm theo doanh số và gắn cảnh báo tồn kho (cần đặt hàng / tồn kho cao).',
        'Xuất file Excel có sẵn công thức và định dạng để phòng Kinh doanh tự kiểm tra; thời gian xử lý giảm xuống dưới 3 phút.'
      ],
      [
        'Wrote Python scripts (pandas, openpyxl) that consolidate the sales and inventory Excel files of 5 branches (~35,000 spare-part codes), replacing manual consolidation.',
        'The scripts calculate average monthly consumption (AMC), rank products by sales and flag inventory alerts (reorder needed / overstock).',
        'Exported formatted Excel reports with live formulas so the Sales team could check the numbers themselves; processing time dropped to under 3 minutes.'
      ]
    ),
    techStack: ['Python', 'pandas', 'openpyxl', 'Excel']
  }
];

export const skills = [
  { category: l10n('Ngôn ngữ & truy vấn', 'Languages & querying'), icon: 'Code', items: ['Python', 'SQL', 'HiveQL'] },
  { category: l10n('Xử lý & phân tích dữ liệu', 'Data processing & analysis'), icon: 'TableChart', items: ['pandas', 'NumPy', 'openpyxl', 'Excel'] },
  { category: 'Machine Learning', icon: 'ModelTraining', items: ['scikit-learn', 'imbalanced-learn', 'SVM', 'Decision Tree', 'K-Means', 'PCA'] },
  { category: l10n('Trực quan hóa', 'Visualization'), icon: 'BarChart', items: ['Matplotlib', 'Seaborn', 'Altair', 'Streamlit'] },
  { category: l10n('Big Data & cơ sở dữ liệu', 'Big Data & databases'), icon: 'Storage', items: ['Hadoop HDFS', 'Apache Hive', 'MongoDB', 'Docker Compose'] },
  { category: l10n('Công cụ', 'Tools'), icon: 'Build', items: ['Jupyter', 'Google Colab', 'Kaggle', 'Git/GitHub', 'RapidMiner'] }
];

export const projects = [
  {
    title: l10n('Khóa luận tốt nghiệp', 'Graduation Thesis'),
    subtitle: l10n(
      'Ảnh hưởng của tiền xử lý dữ liệu đến bài toán phân loại và phân cụm',
      'Impact of Data Preprocessing on Classification and Clustering'
    ),
    period: '05/2025 - 08/2025',
    members: 2,
    repos: [
      { label: 'KhoaLuan', url: 'https://github.com/Fly-onlyone/KhoaLuan' }
    ],
    highlight: l10n(
      'F1-macro 0,733 → 0,776 trên Cora (đánh giá không rò rỉ dữ liệu)',
      'Macro-F1 0.733 → 0.776 on Cora (leakage-free evaluation)'
    ),
    description: l10n(
      [
        'Phân loại 2.708 bài báo Cora (7 chủ đề): so sánh các pipeline chọn đặc trưng (VarianceThreshold, SelectKBest–chi²), chuẩn hóa (Normalizer, StandardScaler) và cân bằng lớp (RandomOverSampler) với SVM tuyến tính.',
        'Đánh giá lại bằng quy trình không rò rỉ (chia train/test trước, tiền xử lý nằm trong imblearn Pipeline): F1-macro tăng từ 0,733 lên 0,776.',
        'Phân cụm 98.913 người dùng sàn thời trang C2C: Isolation Forest, QuantileTransformer, PCA (10 thành phần, giữ 95,3% phương sai), K-Means chọn k = 4 theo Silhouette (0,585), Davies–Bouldin và Calinski–Harabasz.'
      ],
      [
        'Classified 2,708 Cora research papers (7 topics): compared pipelines for feature selection (VarianceThreshold, SelectKBest–chi²), scaling (Normalizer, StandardScaler) and class balancing (RandomOverSampler) with a linear SVM.',
        'Re-evaluated with a leakage-free protocol (train/test split first, preprocessing inside an imblearn Pipeline): macro-F1 improved from 0.733 to 0.776.',
        'Clustered 98,913 users of a C2C fashion marketplace: Isolation Forest, QuantileTransformer, PCA (10 components, 95.3% variance retained), K-Means with k = 4 chosen by Silhouette (0.585), Davies–Bouldin and Calinski–Harabasz.'
      ]
    ),
    techStack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'imbalanced-learn', 'Matplotlib', 'Seaborn', 'Jupyter']
  },
  {
    title: l10n(
      'Hệ thống dự đoán mức nguy cơ ung thư phổi trên Hadoop/Hive',
      'Cancer Risk Prediction System on Hadoop/Hive'
    ),
    subtitle: l10n('Đồ án môn Big Data', 'Big Data course project'),
    period: '12/2024 - 04/2025',
    members: 2,
    repos: [
      { label: 'BigData', url: 'https://github.com/Fly-onlyone/BigData' }
    ],
    highlight: l10n(
      'Accuracy 0,75 trên hồ sơ chưa thấy (grouped CV)',
      'Accuracy 0.75 on unseen profiles (grouped CV)'
    ),
    description: l10n(
      [
        'Ứng dụng Streamlit dự đoán mức nguy cơ Low / Medium / High từ file Excel 21 chỉ số, lưu kết quả vào bảng Hive (ORC, transactional) qua PyHive; hỗ trợ lọc, thống kê và biểu đồ.',
        'Dựng Hadoop HDFS + Hive (metastore PostgreSQL) bằng Docker Compose gồm 5 container.',
        'Phát hiện 1.000 dòng dữ liệu chỉ có 53 hồ sơ khác nhau; đánh giá lại bằng StratifiedGroupKFold: Decision Tree đạt accuracy 0,75, Logistic Regression 0,87.'
      ],
      [
        'Streamlit app that predicts Low / Medium / High risk from an Excel file with 21 indicators and writes the results to a Hive table (ORC, transactional) via PyHive; supports filtering, summaries and charts.',
        'Set up Hadoop HDFS + Hive (PostgreSQL metastore) with Docker Compose across 5 containers.',
        'Found that the 1,000 rows hold only 53 distinct profiles; re-evaluated with StratifiedGroupKFold: Decision Tree reaches 0.75 accuracy, Logistic Regression 0.87.'
      ]
    ),
    techStack: ['Python', 'pandas', 'scikit-learn', 'Streamlit', 'Altair', 'Apache Hive', 'PyHive', 'Hadoop HDFS', 'Docker Compose', 'RapidMiner']
  }
];

export const navLinks = [
  { label: l10n('Trang chủ', 'Home'), href: '#hero' },
  { label: l10n('Giới thiệu', 'About'), href: '#about' },
  { label: l10n('Kinh nghiệm', 'Experience'), href: '#experience' },
  { label: l10n('Kỹ năng', 'Skills'), href: '#skills' },
  { label: l10n('Dự án', 'Projects'), href: '#projects' },
  { label: l10n('Liên hệ', 'Contact'), href: '#contact' }
];
