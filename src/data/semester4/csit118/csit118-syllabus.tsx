import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const Csit118Syllabus = () => {
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
                CSIT118 - IT Applications in Business
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore the role of information technology in business, covering computers, networks, e-commerce, ERP, DBMS, and emerging trends like AI and cloud computing.
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
              <li>Provide conceptual knowledge of information technology for future managers.</li>
              <li>Highlight key technologies such as DBMS, networks, internet, and e-commerce used in industry.</li>
              <li>Develop understanding to make efficient routine managerial decisions.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md hover:bg-blue-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Module I: Computers (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Introduction to computers and their basic structure.</li>
                  <li>Computers in home (reference, education, communication, entertainment, smart appliances).</li>
                  <li>Computers in education, workplace (productivity, decision-making, customer service), and mobile applications (portable devices, kiosks, GPS).</li>
                  <li>Computer generations, types (size/technology), hardware/software support, peripherals, memory management.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Module II: Computer Networks and Internet Technology (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Computer networks, components, types, and topologies (advantages/disadvantages).</li>
                  <li>Communication channels, client-server architecture, and LAN concepts.</li>
                  <li>Internet: history, concepts, myths, differences from intranet/extranet, domain name service, protocols, addressing.</li>
                  <li>Internet services, support technologies, censorship, and privacy issues.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Module III: E-Commerce (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>E-commerce vs. e-business, advantages, and disadvantages.</li>
                  <li>Transaction and business models, e-commerce technologies.</li>
                  <li>Hosting e-commerce sites, electronic payment systems.</li>
                  <li>E-commerce applications, ethical/legal/taxation/international issues, and security concerns.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Module IV: Enterprise Resource Planning (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>ERP introduction, history, scope, and benefits.</li>
                  <li>Related technologies: BPR, MIS, DSS, EIS, SCM, OLAP.</li>
                  <li>ERP implementation methodology, lifecycle, success factors, pitfalls, and management concerns.</li>
                  <li>ERP market: vendors and packages.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Module V: Database Management System (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>DBMS introduction, need, and components.</li>
                  <li>Benefits of DBMS over traditional file systems.</li>
                  <li>Classification and types of database models.</li>
                  <li>Database approach: benefits and disadvantages.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-700 mb-2">Module VI: Future Trends in Technology (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Cloud computing, SaaS, and big data in business.</li>
                  <li>AI, machine learning, and industrial IoT applications.</li>
                  <li>Intelligent interfaces, augmented reality, quantum computing, blockchain, and smart dust.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md hover:bg-blue-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Classify and describe various applications of information technology based on business needs.</li>
              <li>Identify appropriate technologies for various business functions.</li>
              <li>Develop plans for adopting information technology in an organization.</li>
              <li>Demonstrate basic skills required for information technology management.</li>
              <li>Identify upcoming trends and disruptive technologies in business functional areas.</li>
            </ul>
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

export default Csit118Syllabus;