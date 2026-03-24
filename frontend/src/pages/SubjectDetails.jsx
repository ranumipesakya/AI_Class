import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import g6L1Pdf from '../assets/G6-L1.pdf';
import g6L2Pdf from '../assets/G6-L2.pdf';
import g6L3Pdf from '../assets/G6-L3.pdf';
import g6L4Pdf from '../assets/G6-L4.pdf';
import g6L5Pdf from '../assets/G6-L5.pdf';
import g6L6Pdf from '../assets/G6-L6.pdf';
import g6L7Pdf from '../assets/G6-L7.pdf';
import g6L8Pdf from '../assets/G6-L8.pdf';
import g6L9Pdf from '../assets/G6-L9.pdf';
import g6L10Pdf from '../assets/G6-L10.pdf';
import g6L11Pdf from '../assets/G6-L11.pdf';
import g6L12Pdf from '../assets/G6-L12.pdf';
import g6L13Pdf from '../assets/G6-L13.pdf';
import g6L14Pdf from '../assets/G6-L14.pdf';
import g6L15Pdf from '../assets/G6-L15.pdf';

// Hardcoded DB of Grade 6 Buddhism Chapters
const grade6BuddhismChapters = [
  { id: 1, en: "The wonderful prince Bosat", si: "අසිරිමත් බෝසත් කුමරු", pdfUrl: g6L1Pdf },
  { id: 2, en: "Childhood and Youth of Prince Sidhu", si: "සිදුහත් කුමරුගේ ළමාවිය", pdfUrl: g6L2Pdf },
  { id: 3, en: "Lord Buddha, the teacher of the world", si: "තිලොවට ගුරු බුදුපියාණෝ", pdfUrl: g6L3Pdf },
  { id: 4, en: "Let's go to the temple", si: "අපි පන්සල් යමු", pdfUrl: g6L4Pdf },
  { id: 5, en: "Let's spread meth hearts to everyone", si: "පතුරමු සැමට මෙත්සිත්", pdfUrl: g6L5Pdf },
  { id: 6, en: "Little monk Rahula", si: "රාහුල පොඩි හාමුදුරුවෝ", pdfUrl: g6L6Pdf },
  { id: 7, en: "The Golden Gates of Progress", si: "දියුණුවේ රන් දොරටු", pdfUrl: g6L7Pdf },
  { id: 8, en: "Sila for Nourishment of Life", si: "දිවිමග සරු කරන සීලය", pdfUrl: g6L8Pdf },
  { id: 9, en: "Let's kept Pansil", si: "පන්සිල් රකිමු", pdfUrl: g6L9Pdf },
  { id: 10, en: "Parental Virtues Varuna", si: "මව්පිය ගුණ වරුණ", pdfUrl: g6L10Pdf },
  { id: 11, en: "Young People Who Overcame Challenges", si: "අභියෝග ජයගත් යොවුන්විය", pdfUrl: g6L11Pdf },
  { id: 12, en: "Let's Save Ours", si: "අපේකම සුරකිමු", pdfUrl: g6L12Pdf },
  { id: 13, en: "Let's know good and bad and engage in good", si: "හොද නරක දැනගෙන හොද දේ කරමු", pdfUrl: g6L13Pdf },
  { id: 14, en: "Be Resilient to Change", si: "වෙනස් වීමට ඔරොත්තු දෙමු", pdfUrl: g6L14Pdf },
  { id: 15, en: "Let's Get Rid of Guilt", si: "වරදින් මිදෙමු", pdfUrl: g6L15Pdf },
  { id: 16, en: "When Protects the Environment, It Will Save...", si: "පරිසරය රැකගත් විට එය අපත් රකියි" },
  { id: 17, en: "Let's Go to the Season of Mihindu Ma Himi", si: "මිහිඳු මා හිමි සමයට යමු" },
  { id: 18, en: "Let's Save the Cultural Legacy", si: "ශාසනික දායාද සුරකිමු" },
  { id: 19, en: "Frugality is a path to Success", si: "අරපිරිමැස්ම දියුණුවට මගයි" },
  { id: 20, en: "Gold Feathers", si: "රන් පිහාටු" },
  { id: 21, en: "Let us be Fertile with Devotion", si: "සැදැහැ ගුණයෙන් පොහොසත් වෙමු" }
];

const SubjectDetails = () => {
  const { gradeId, subjectName } = useParams();
  const { t } = useTranslation();

  // Mapping parameter ID to readable grade string
  const gradeMap = {
    'g6': 'Grade 6', 'g7': 'Grade 7', 'g8': 'Grade 8', 'g9': 'Grade 9',
    'g10': 'Grade 10', 'g11': 'Grade 11 (O/L)', 'g12': 'Grade 12 (A/L)', 'g13': 'Grade 13 (A/L)'
  };
  
  const readableGrade = gradeMap[gradeId] || gradeId;

  // Let's decide what chapters to show. For now, if g6 + Buddhism, show our highly detailed array.
  // Else, return a dummy array.
  let chapters = [];
  if (gradeId === 'g6' && subjectName === 'Buddhism') {
    chapters = grade6BuddhismChapters;
  } else {
    // Generate some dummy chapters for other subjects
    chapters = Array.from({ length: 5 }).map((_, i) => ({
      id: i + 1,
      en: `Chapter ${i + 1} for ${subjectName}`,
      si: `පාඩම ${i + 1}`
    }));
  }

  // Handler for opening a specific PDF. 
  const openPdf = (chapter) => {
    // If we have an explicit imported PDF URL, use it immediately
    if (chapter.pdfUrl) {
      window.open(chapter.pdfUrl, '_blank');
      return;
    }
    
    // Otherwise construct a dynamic path from public/assets
    const pdfPath = `/assets/${gradeId}/${subjectName.toLowerCase().replace(/\s+/g, '')}/chapter_${chapter.id}.pdf`;
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <Link to="/courses" className="flex items-center text-primary-600 hover:text-primary-800 font-medium mb-4 transition-colors">
          <ArrowLeft size={18} className="mr-1" /> Back to Courses
        </Link>
        <div className="flex items-center gap-3">
          <div className="bg-primary-100 p-3 rounded-2xl text-primary-700">
            <BookOpen size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">{subjectName}</h1>
            <p className="text-lg font-medium text-slate-500">{readableGrade} Syllabus</p>
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {chapters.map((chapter) => (
          <button 
            key={chapter.id}
            onClick={() => openPdf(chapter)}
            className="card overflow-hidden bg-white border border-slate-200 hover:border-primary-400 hover:shadow-xl transition-all flex flex-col group text-left h-full"
          >
            {/* Text Area */}
            <div className="p-4 flex flex-col justify-start h-24">
              <span className="font-bold text-slate-800 text-sm leading-tight line-clamp-2 group-hover:text-primary-700 transition-colors">
                {chapter.en}
              </span>
              <span className="text-slate-500 text-xs mt-1 line-clamp-1 font-medium">
                {chapter.si}
              </span>
            </div>
            
            {/* Image Thumbnail Area */}
            <div className="relative w-full h-32 bg-slate-100 mt-auto">
              <div className="absolute top-0 left-0 bg-blue-600 text-white font-bold text-xs px-2 py-1 rounded-br-lg z-10">
                {chapter.id < 10 ? `0${chapter.id}` : chapter.id}
              </div>
              
              {/* Fallback image representing the chapter thumb */}
              <div className="w-full h-full object-cover flex items-center justify-center bg-slate-200 relative overflow-hidden group-hover:bg-slate-300 transition-colors">
                 <img 
                   src={`/assets/thumbnails/chapter_${chapter.id}.jpg`} 
                   alt={`Thumbnail for ${chapter.en}`}
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                   onError={(e) => {
                     // Fallback if user hasn't added images yet
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'flex';
                   }}
                 />
                 <div className="hidden absolute inset-0 flex-col items-center justify-center text-slate-400">
                    <Download size={24} className="mb-2 group-hover:text-primary-500 transition-colors" />
                    <span className="text-xs font-semibold">Click to PDF</span>
                 </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectDetails;
