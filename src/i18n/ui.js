import { l10n } from './languageContext';

// Interface strings (section titles, labels, tooltips) in both languages.
export const ui = {
  hero: {
    greeting: l10n('Xin chào, tôi là', 'Hi, I’m'),
    contact: l10n('Liên hệ', 'Contact'),
  },
  about: {
    title: l10n('Giới thiệu', 'About'),
    subtitle: l10n('Học vấn & thông tin cá nhân', 'Education & personal info'),
    personalInfo: l10n('Thông tin cá nhân', 'Personal info'),
    education: l10n('Học vấn', 'Education'),
    dob: l10n('Ngày sinh', 'Date of birth'),
    location: l10n('Địa điểm', 'Location'),
    gpa: 'GPA',
    cert: l10n('Chứng chỉ', 'Certificate'),
    honors: l10n('Xếp loại', 'Classification'),
  },
  experience: {
    title: l10n('Kinh nghiệm', 'Experience'),
    subtitle: l10n('Quá trình thực tập và làm việc', 'Internships and work'),
  },
  skills: {
    title: l10n('Kỹ năng', 'Skills'),
    subtitle: l10n('Công nghệ và công cụ tôi sử dụng', 'Technologies and tools I use'),
  },
  projects: {
    title: l10n('Dự án', 'Projects'),
    subtitle: l10n('Những dự án tôi đã thực hiện', 'Projects I have worked on'),
    members: l10n('thành viên', 'members'),
  },
  contact: {
    title: l10n('Liên hệ', 'Contact'),
    subtitle: l10n('Hãy kết nối với tôi', 'Let’s connect'),
    email: 'Email',
    phone: l10n('Điện thoại', 'Phone'),
    github: 'GitHub',
    location: l10n('Địa điểm', 'Location'),
    copy: l10n('Sao chép', 'Copy'),
    openLink: l10n('Mở liên kết', 'Open link'),
  },
  navbar: {
    theme: l10n('Chế độ hiển thị', 'Theme'),
    light: l10n('Sáng', 'Light'),
    dark: l10n('Tối', 'Dark'),
    system: l10n('Hệ thống', 'System'),
    switchLanguage: l10n('Switch to English', 'Chuyển sang tiếng Việt'),
    otherLanguage: l10n('EN', 'VI'),
  },
};
