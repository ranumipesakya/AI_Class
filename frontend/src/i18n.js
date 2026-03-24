import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "navbar_courses": "Courses",
      "navbar_dashboard": "Dashboard",
      "navbar_login": "Login",
      "navbar_logout": "Logout",
      "home_hero_title1": "Empower Your Future with",
      "home_hero_title2": "LankaEduHub",
      "home_hero_subtitle": "A comprehensive learning platform for Sri Lankan students. Master your A/L and O/L syllabuses with expert teachers, past papers, quizzes, and our intelligent AI tutor.",
      "home_btn_browse": "Browse Courses",
      "home_btn_login": "Student Login"
    }
  },
  si: {
    translation: {
      "navbar_courses": "පාඨමාලා",
      "navbar_dashboard": "පුවරුව (Dashboard)",
      "navbar_login": "ඇතුල් වන්න",
      "navbar_logout": "පිටවන්න",
      "home_hero_title1": "ඔබේ අනාගතය සවිබල ගන්වන්න",
      "home_hero_title2": "LankaEduHub වෙතින්",
      "home_hero_subtitle": "ශ්‍රී ලාංකික සිසුන් සඳහා පුළුල් ඉගෙනුම් වේදිකාවක්. විශිෂ්ට ගුරුවරුන්, පසුගිය ප්‍රශ්න පත්‍ර සහ AI උපදේශක සමඟින් ඔබේ සාමාන්‍ය සහ උසස් පෙළ විෂය නිර්දේශ ප්‍රගුණ කරන්න.",
      "home_btn_browse": "පාඨමාලා බලන්න",
      "home_btn_login": "සිසුන්ගේ පිවිසුම"
    }
  },
  ta: {
    translation: {
      "navbar_courses": "பாடநெறிகள்",
      "navbar_dashboard": "கட்டுப்பாட்டு அறை",
      "navbar_login": "உள்நுழைக",
      "navbar_logout": "வெளியேறு",
      "home_hero_title1": "உங்கள் எதிர்காலத்தை மேம்படுத்துங்கள்",
      "home_hero_title2": "LankaEduHub உடன்",
      "home_hero_subtitle": "இலங்கை மாணவர்களுக்கான விரிவான கற்றல் தளம். சிறந்த ஆசிரியர்கள், கடந்தகால வினாத்தாள்கள் மற்றும் AI உதவியுடன் உங்கள் க.பொ.த (A/L) மற்றும் (O/L) பாடங்களை மாஸ்டர் செய்யுங்கள்.",
      "home_btn_browse": "பாடநெறிகளை காண்க",
      "home_btn_login": "மாணவர் உள்நுழைவு"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
