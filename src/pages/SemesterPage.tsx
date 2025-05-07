import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, FileText, FlaskConical, Code, BookText, LightbulbIcon, PencilIcon, CloudIcon, TestTube, DatabaseIcon, NetworkIcon, ShieldIcon, CpuIcon, WorkflowIcon, FileCodeIcon, GlobeIcon, UsersIcon, BarChartIcon } from 'lucide-react';

import { allSubjects } from '@/data';

const subjectStyles: Record<string, { icon: JSX.Element; color: string }> = {
  // Semester 1
  math114: { icon: <BookOpen className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  phys132: { icon: <FlaskConical className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  es101: { icon: <FileText className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  es202: { icon: <Code className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  bc105: { icon: <BookText className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  lang101: { icon: <GlobeIcon className="h-6 w-6" />, color: "bg-indigo-100 text-indigo-700" },
  ettp101: { icon: <FileText className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  // Semester 2
  es103: { icon: <LightbulbIcon className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  es104: { icon: <PencilIcon className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  it423: { icon: <CloudIcon className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  chem136: { icon: <TestTube className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  math122: { icon: <BookOpen className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  bc106: { icon: <BookText className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  // Semester 3
  es201: { icon: <CpuIcon className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  cse205: { icon: <Code className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  math211: { icon: <BookOpen className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  cse207: { icon: <CpuIcon className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  csit124: { icon: <DatabaseIcon className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  ettp100: { icon: <FileText className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  // Semester 4
  es204: { icon: <TestTube className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  math242: { icon: <BookOpen className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  cse202: { icon: <FileCodeIcon className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  csit206: { icon: <BookOpen className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  it201: { icon: <Code className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  aiml201: { icon: <LightbulbIcon className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  csit118: { icon: <GlobeIcon className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  // Semester 5
  it425: { icon: <ShieldIcon className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  cse204: { icon: <BookOpen className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  cse201: { icon: <DatabaseIcon className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  cse303: { icon: <WorkflowIcon className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  bs309: { icon: <UsersIcon className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  etpt100: { icon: <FileText className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  // Semester 6
  cse209: { icon: <LightbulbIcon className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  csit142: { icon: <FileCodeIcon className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  cse304: { icon: <Code className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  cse302: { icon: <NetworkIcon className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  it432: { icon: <Code className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  pfe301: { icon: <UsersIcon className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  sports: { icon: <FileText className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  // Semester 7
  law140: { icon: <BookText className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  soc104: { icon: <UsersIcon className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  aiml301: { icon: <BarChartIcon className="h-6 w-6" />, color: "bg-green-100 text-green-700" },
  cse206: { icon: <LightbulbIcon className="h-6 w-6" />, color: "bg-violet-100 text-violet-700" },
  it310: { icon: <ShieldIcon className="h-6 w-6" />, color: "bg-rose-100 text-rose-700" },
  csit311: { icon: <FileCodeIcon className="h-6 w-6" />, color: "bg-emerald-100 text-emerald-700" },
  etmn100: { icon: <FileText className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  etisr101: { icon: <FileText className="h-6 w-6" />, color: "bg-amber-100 text-amber-700" },
  // Semester 8
  etmj100: { icon: <FileText className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
};

const SemesterPage = () => {
  const { id } = useParams<{ id: string }>();
  const semesterNumber = id || "1";
  const subjects = allSubjects[`semester${semesterNumber}`] || {};

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="bg-gradient-to-r from-exam-800 to-exam-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12">
            <div className="flex items-center text-exam-100 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg className="mx-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Semester {semesterNumber}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold font-display sm:text-4xl mb-2">
                  Semester {semesterNumber}
                </h1>
                <p className="text-exam-100 max-w-3xl">
                  Select a subject to view its syllabus and practice with exam questions and solutions.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <div className="inline-flex rounded-md shadow">
                  <Link to="/semesters" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-exam-900 bg-white hover:bg-exam-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-exam-500">
                    All Semesters
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(subjects).map(([subjectId, subjectData]: [string, any]) => (
              <Link
                key={subjectId}
                to={`/semester/${semesterNumber}/${subjectId}`}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-100 subject-card group"
              >
                <div className={`inline-flex p-2 rounded-lg ${subjectStyles[subjectId as keyof typeof subjectStyles]?.color} mb-4`}>
                  {subjectStyles[subjectId as keyof typeof subjectStyles]?.icon}
                </div>
                <h2 className="text-xl font-semibold text-exam-900 group-hover:text-exam-700 transition-colors">
                  {subjectData.name}
                </h2>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Code:</span> {subjectData.code}
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Credits:</span> {subjectData.credits}
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-exam-600">
                  View Details
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SemesterPage;