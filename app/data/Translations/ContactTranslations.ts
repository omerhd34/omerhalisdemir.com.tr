export interface ContactTranslations {
  title: string;
  subtitle: string;
  formTitle: string;
  contactInfo: string;
  socialMedia: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  send: string;
  sending: string;
  location: string;
  phone: string;
  emailLabel: string;
  availability: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  phonePlaceholder: string;
}

const translations: Record<string, ContactTranslations> = {
  TR: {
    title: "İletişim",
    subtitle: "Benimle İletişime Geçin",
    formTitle: "Mesaj Gönder",
    contactInfo: "İletişim Bilgileri",
    socialMedia: "Sosyal Medya",
    name: "İsim & Soyisim:",
    email: "E-posta:",
    subject: "Konu:",
    message: "Mesaj:",
    send: "Gönder",
    sending: "Gönderiliyor...",
    location: "Konum:",
    phone: "Telefon:",
    emailLabel: "E-posta:",
    availability:
      "Yeni projeler ve iş birliği fırsatları için her zaman açığım!",
    namePlaceholder: "İsim & Soyisim",
    emailPlaceholder: "ornek@email.com",
    subjectPlaceholder: "Mesajınızın konusu",
    messagePlaceholder: "Mesajınızı buraya yazın...",
    phonePlaceholder: "Telefon numarası",
  },
  EN: {
    title: "Contact",
    subtitle: "Get In Touch With Me",
    formTitle: "Send Message",
    contactInfo: "Contact Information",
    socialMedia: "Social Media",
    name: "Name & Surname:",
    email: "Email:",
    subject: "Subject:",
    message: "Message:",
    send: "Send",
    sending: "Sending...",
    location: "Location:",
    phone: "Phone:",
    emailLabel: "Email:",
    availability:
      "I'm always open to new projects and collaboration opportunities!",
    namePlaceholder: "Name & Surname",
    emailPlaceholder: "example@email.com",
    subjectPlaceholder: "Subject of your message",
    messagePlaceholder: "Write your message here...",
    phonePlaceholder: "Telephone No",
  },
};

export default translations;
