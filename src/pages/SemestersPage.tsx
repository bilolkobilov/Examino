import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  BookOpen, Lightbulb, FileText, ChevronRight, ChevronDown, Home, 
  Calendar, Clock, Users, BookmarkIcon, GraduationCap, Award, Book,
  ArrowRight, Plus, Minus, ListFilter, Grid2X2
} from 'lucide-react';

interface Semester {
  number: number;
  title: string;
  description: string;
  subjects: string[];
  icon: JSX.Element;
  color: string;
  textColor: string;
  borderColor: string;
  hoverColor: string;
  accentColor: string;
}

interface SemesterCardProps {
  semester: Semester;
  idx: number;
  animateSemesters: boolean;
}

interface YearSelectorProps {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

const semesters: Semester[] = [
  {
    number: 1,
    title: "First Semester",
    description: "Introduction to foundational sciences and engineering principles",
    subjects: [
      "Applied Mathematics - I",
      "Engineering Physics",
      "Engineering Mechanics",
      "Introduction to Computers and Programming in C",
      "Technical Communication - I",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture",
      "Term Paper - I"
    ],
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-exam-50",
    textColor: "text-exam-700",
    borderColor: "border-exam-200",
    hoverColor: "hover:bg-exam-100",
    accentColor: "bg-exam-600"
  },
  {
    number: 2,
    title: "Second Semester",
    description: "Core engineering and computing fundamentals",
    subjects: [
      "Applied Mathematics - II",
      "Engineering Chemistry",
      "Basic Electrical Engineering",
      "Engineering Graphics Lab",
      "Introduction to Cloud Computing",
      "Technical Communication - II",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture"
    ],
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    hoverColor: "hover:bg-blue-100",
    accentColor: "bg-blue-600"
  },
  {
    number: 3,
    title: "Third Semester",
    description: "Core computer science concepts and programming",
    subjects: [
      "Applied Mathematics - III",
      "Basic Electronics Engineering",
      "Programming in Python",
      "Digital Electronics and Computer Organization",
      "Data Structures Using C",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture",
      "Term Paper"
    ],
    icon: <FileText className="h-5 w-5" />,
    color: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    hoverColor: "hover:bg-green-100",
    accentColor: "bg-green-600"
  },
  {
    number: 4,
    title: "Fourth Semester",
    description: "Advanced programming and system design",
    subjects: [
      "Applied Mathematics - IV",
      "Basic Simulation Lab",
      "Operating System",
      "Discrete Mathematics for IT",
      "Java Programming",
      "Introduction to AI and Machine Learning",
      "IT Applications in Business",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture"
    ],
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
    hoverColor: "hover:bg-amber-100",
    accentColor: "bg-amber-600"
  },
  {
    number: 5,
    title: "Fifth Semester",
    description: "Database systems and algorithmic design",
    subjects: [
      "Cyber and Information Security",
      "Theory of Computation",
      "Database Management Systems",
      "Analysis and Design of Algorithms",
      "Cognitive Skills, Leadership and Decision Making",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture",
      "In-House Practical Training"
    ],
    icon: <FileText className="h-5 w-5" />,
    color: "bg-rose-50",
    textColor: "text-rose-700",
    borderColor: "border-rose-200",
    hoverColor: "hover:bg-rose-100",
    accentColor: "bg-rose-600"
  },
  {
    number: 6,
    title: "Sixth Semester",
    description: "Software development and network systems",
    subjects: [
      "Intelligent Systems and Design Thinking",
      "Software Engineering and Modeling",
      "Compiler Construction",
      "Data Communication and Computer Networks",
      "Full Stack Development",
      "Professional Ethics and Social Responsibility",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture",
      "Football / Basketball"
    ],
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-cyan-50",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-200",
    hoverColor: "hover:bg-cyan-100",
    accentColor: "bg-cyan-600"
  },
  {
    number: 7,
    title: "Seventh Semester",
    description: "Specialization and project-based learning",
    subjects: [
      "International Law for Engineers",
      "Sociology for Engineers",
      "Fundamentals of Data Analytics",
      "Fundamental of Machine Learning",
      "Network Management and Security",
      "Unix Operating System and Shell Programming",
      "Minor Project",
      "Introduction To German Culture / Introduction To Hispanic World / Introduction To Arabic Culture",
      "Independent Study and Research - I"
    ],
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
    hoverColor: "hover:bg-indigo-100",
    accentColor: "bg-indigo-600"
  },
  {
    number: 8,
    title: "Eighth Semester",
    description: "Capstone project and industry preparation",
    subjects: [
      "Major Project"
    ],
    icon: <FileText className="h-5 w-5" />,
    color: "bg-violet-50",
    textColor: "text-violet-700",
    borderColor: "border-violet-200",
    hoverColor: "hover:bg-violet-100",
    accentColor: "bg-violet-600"
  },
];

const SemesterCard: React.FC<SemesterCardProps> = ({ semester, idx, animateSemesters }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 transform ${
        animateSemesters ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className={`h-2 ${semester.accentColor}`}></div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className={`flex-shrink-0 w-10 h-10 ${semester.accentColor} rounded-full flex items-center justify-center mr-3`}>
              <span className="text-white font-bold text-lg">{semester.number}</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {semester.title}
              </h2>
              <p className={`text-sm ${semester.accentColor.replace('bg-', 'text-')}`}>Year {Math.ceil(semester.number / 2)}</p>
            </div>
          </div>
          <div className={`${semester.color} ${semester.textColor} p-1.5 rounded-full`}>
            {semester.icon}
          </div> 
        </div>
        
        <p className="text-gray-600 text-sm mb-5">
          {semester.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
         <div className="flex items-center gap-1.5">
            <BookmarkIcon className={`h-4 w-4 ${semester.textColor}`} />
            <span className="text-sm font-medium text-gray-700">{semester.subjects.length} subjects</span>
          </div>
          <Link 
            to={`/semester/${semester.number}`}
            className={`inline-flex items-center px-5 py-2.5 rounded-lg ${semester.accentColor} text-white font-semibold hover:shadow-md hover:scale-105 transition-all duration-200`}
          >
            View Details
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className={`p-4 rounded-lg ${semester.color} bg-opacity-30 border ${semester.borderColor} mt-5`}>
          <h3 className="font-medium text-sm text-gray-700 mb-3 flex items-center">
            <ListFilter className="h-4 w-4 mr-1.5" />
            Complete Subject List
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1.5 custom-scrollbar">
            {semester.subjects.map((subject, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-2.5 shadow-sm border border-gray-100 text-sm text-gray-800 flex items-center gap-2"
              >
                <span className={`h-2 w-2 rounded-full ${semester.accentColor} flex-shrink-0`}></span>
                <span>{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const YearSelector: React.FC<YearSelectorProps> = ({ selectedYear, setSelectedYear }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-2 sm:gap-3">
        {[1, 2, 3, 4].map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedYear === year
                ? 'bg-purple-600 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            Year {year}
          </button>
        ))}
      </div>
    </div>
  );
};

const SemestersPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(1);
  const [animateSemesters, setAnimateSemesters] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setAnimateSemesters(false);
    
    const timer = setTimeout(() => {
      setAnimateSemesters(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [selectedYear]);

  const semestersByYear: { [key: number]: Semester[] } = {
    1: semesters.slice(0, 2),
    2: semesters.slice(2, 4),
    3: semesters.slice(4, 6),
    4: semesters.slice(6, 8)
  };

  const programFeatures = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Comprehensive Curriculum",
      description: "Covers fundamentals and advanced topics in computer science and engineering.",
      color: "bg-exam-50",
      textColor: "text-exam-700",
      iconBg: "bg-exam-100"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Aligned",
      description: "Designed to meet current industry requirements and future technology trends.",
      color: "bg-blue-50",
      textColor: "text-blue-700",
      iconBg: "bg-blue-100"
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Project-Based Learning",
      description: "Focus on practical implementation through projects and hands-on training.",
      color: "bg-green-50",
      textColor: "text-green-700",
      iconBg: "bg-green-100"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative bg-gradient-to-br from-exam-800 via-exam-700 to-exam-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-black to-transparent opacity-20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-exam-600 opacity-10 blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-exam-400 opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-16 md:py-20 lg:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center space-x-2 text-white text-opacity-80 mb-4">
                <Link to="/" className="flex items-center hover:text-white transition-colors">
                  <Home className="h-4 w-4 mr-1" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-white">Curriculum</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Computer Science <span className="text-exam-200">Engineering</span>
              </h1>
              
              <p className="text-base md:text-lg text-white text-opacity-90 mb-6 md:mb-8 max-w-lg">
                A comprehensive 4-year program designed to transform you into an industry-ready professional with cutting-edge skills in computing and software development.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Calendar className="h-5 w-5 text-exam-200 mr-2" />
                  <span className="text-sm md:text-base text-white">4 Years</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Clock className="h-5 w-5 text-exam-200 mr-2" />
                  <span className="text-sm md:text-base text-white">8 Semesters</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 text-exam-200 mr-2" />
                  <span className="text-sm md:text-base text-white">Professional Faculty</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-5/12 lg:w-5/12">
              <div className="bg-white rounded-2xl shadow-xl p-5 relative backdrop-blur-sm bg-opacity-95">
                <div className="absolute -top-3 -right-3 bg-exam-600 text-white px-4 py-1 rounded-lg font-medium text-sm shadow-lg">
                  B.Tech Program
                </div>
                <div className="h-1.5 w-20 bg-exam-600 mb-4 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Program Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "Advanced Programming Techniques",
                    "Artificial Intelligence & Machine Learning",
                    "Full-Stack Web Development",
                    "Database Management Systems",
                    "Industry-Oriented Projects"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-md bg-exam-50 flex items-center justify-center mr-2 mt-0.5 border border-exam-200">
                        <div className="h-2 w-2 rounded-sm bg-exam-600"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-10 md:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                Curriculum <span className="text-exam-600">Structure</span>
              </h2>
              
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-1 flex items-center">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-exam-50 text-exam-700' : 'text-gray-500 hover:bg-gray-50'}`}
                    aria-label="Grid view"
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-exam-50 text-exam-700' : 'text-gray-500 hover:bg-gray-50'}`}
                    aria-label="List view"
                  >
                    <ListFilter className="h-4 w-4" />
                  </button>
                </div>
                
                <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-5 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Year {selectedYear} Overview</h3>
              <p className="text-gray-600 text-sm">
                {selectedYear === 1 && "Foundation year focused on core engineering principles and basic computing concepts."}
                {selectedYear === 2 && "Builds on programming fundamentals with advanced data structures and system design."}
                {selectedYear === 3 && "Focuses on specialized areas like databases, algorithms, and software engineering."}
                {selectedYear === 4 && "Capstone year with major project work and industry preparation."}
              </p>
            </div>
          </div>
          
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-5 lg:gap-6 mb-14`}>
            {semestersByYear[selectedYear].map((semester, idx) => (
              <SemesterCard 
                key={semester.number}
                semester={semester}
                idx={idx}
                animateSemesters={animateSemesters}
              />
            ))}
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Why Choose <span className="text-exam-600">Computer Science</span> Engineering?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our program is designed to prepare you for the ever-evolving world of technology and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {programFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`h-2 ${feature.textColor.replace('text', 'bg')}`}></div>
                  <div className="p-5">
                    <div className={`w-12 h-12 ${feature.iconBg} ${feature.textColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-exam-700 to-exam-900 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ready to Start Your Journey?</h3>
                <p className="text-exam-100 mb-4">Join our comprehensive computer science engineering program and build the foundation for a successful tech career.</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="https://abiturient.amity.uz/oz/site/login/?" className="bg-white text-exam-700 px-5 py-2.5 rounded-lg font-medium hover:shadow-md transition-all duration-200">
                    Apply Now
                  </Link>
                  <Link to="/contact" className="bg-exam-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-exam-500 transition-all duration-200">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-exam-800 p-6 md:p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">2025</div>
                  <div className="text-exam-200 text-sm">Admissions Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default SemestersPage;