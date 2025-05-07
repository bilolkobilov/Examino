import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const Lang101Syllabus = () => {
  const { semester, subject } = useParams<{ semester?: string; subject?: string }>();

  return (
    <main className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 bg-gradient-to-r from-exam-700 to-exam-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="relative p-6 sm:p-8">
            <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
            <div className="relative z-10 max-w-4xl">
              <nav className="flex items-center mb-4 text-white/90 text-sm" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
                <Link to={`/semester/${semester}`} className="hover:text-white transition">Semester {semester}</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
                <span aria-current="page">Syllabus</span>
              </nav>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                LANG101 - Language Elective
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Develop foundational skills in a language of your choice (e.g., French, Spanish, or German), focusing on vocabulary, grammar, and cultural understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Course Objectives */}
          <section className="bg-white rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md hover:bg-blue-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Develop basic proficiency in a chosen language (e.g., French, Spanish, or German).</li>
              <li>Understand fundamental grammar and vocabulary for everyday communication.</li>
              <li>Gain insights into the culture and context of the language.</li>
            </ul>
          </section>

          {/* Note for Detailed Syllabus */}
          <section className="bg-white rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md hover:bg-blue-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Important Note</h2>
            </div>
            <p className="text-gray-700">
              For the detailed syllabus, please check your Amizone courses page, as this is a selective course where you choose one language out of three options.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to={`/semester/${semester}/${subject}`}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-exam-200 text-exam-700 font-medium hover:bg-exam-50 transition-colors"
          >
            Back to Subject
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Lang101Syllabus;