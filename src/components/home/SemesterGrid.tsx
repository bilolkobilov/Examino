
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lightbulb, FileText } from 'lucide-react';

const semesters = [
  {
    number: 1,
    title: "First Semester",
    description: "Fundamental concepts and introduction to engineering principles",
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    color: "bg-indigo-50"
  },
  {
    number: 2,
    title: "Second Semester",
    description: "Core mathematics and basic programming concepts",
    icon: <Lightbulb className="h-8 w-8 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    number: 3,
    title: "Third Semester",
    description: "Advanced algorithms and data structures",
    icon: <FileText className="h-8 w-8 text-violet-600" />,
    color: "bg-violet-50"
  },
  {
    number: 4,
    title: "Fourth Semester",
    description: "Computer architecture and operating systems",
    icon: <BookOpen className="h-8 w-8 text-fuchsia-600" />,
    color: "bg-fuchsia-50"
  },
  {
    number: 5,
    title: "Fifth Semester",
    description: "Database management and software engineering",
    icon: <FileText className="h-8 w-8 text-sky-600" />,
    color: "bg-sky-50"
  },
  {
    number: 6,
    title: "Sixth Semester",
    description: "Computer networks and security principles",
    icon: <Lightbulb className="h-8 w-8 text-teal-600" />,
    color: "bg-teal-50"
  },
  {
    number: 7,
    title: "Seventh Semester",
    description: "Advanced electives and specialization topics",
    icon: <BookOpen className="h-8 w-8 text-rose-600" />,
    color: "bg-rose-50"
  },
  {
    number: 8,
    title: "Eighth Semester",
    description: "Final project work and industry preparation",
    icon: <FileText className="h-8 w-8 text-orange-600" />,
    color: "bg-orange-50"
  },
];

const SemesterGrid = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-indigo-50/30 to-violet-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-exam-900 font-display sm:text-4xl">
            Select Your Semester
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your semester to access subject-wise study materials and exam questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {semesters.map((semester) => (
            <Link 
              key={semester.number} 
              to={`/semester/${semester.number}`} 
              className="relative group"
            >
              <div className="semester-card backdrop-blur-sm bg-white/80 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-300 hover:translate-y-[-4px]">
                <div className={`absolute inset-0 ${semester.color} opacity-50 mix-blend-multiply rounded-2xl transition-opacity duration-300 group-hover:opacity-70`} />
                <div className="relative z-10">
                  <div className={`mb-5 inline-flex rounded-xl p-3 ${semester.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    {semester.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {semester.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {semester.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    Explore Subjects
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemesterGrid;
