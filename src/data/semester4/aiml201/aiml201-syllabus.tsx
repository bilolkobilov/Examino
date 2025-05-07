import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const Aiml201Syllabus = () => {
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
                AIML201 - Introduction to AI and Machine Learning
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore the foundations of AI and machine learning, focusing on pattern learning, mathematical concepts, and practical applications through Python-based labs.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Course Objectives */}
          <section className="bg-white rounded-xl shadow-sm border border-emerald-200 p-6 hover:shadow-md hover:bg-emerald-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Introduce learning patterns from data and develop a theoretical foundation for state-of-the-art machine learning algorithms.</li>
              <li>Strengthen mathematical concepts required for AI and machine learning.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-emerald-200 p-6 hover:shadow-md hover:bg-emerald-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-emerald-600 mb-2">Module I: Introduction (25%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Defining artificial intelligence and AI techniques.</li>
                  <li>Predicate logic, representing knowledge as rules, and simple facts in logic.</li>
                  <li>Procedural vs. declarative knowledge, logic programming.</li>
                  <li>Mathematical foundations: matrix theory and statistics for machine learning.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-600 mb-2">Module II: Classification (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Concept of machines learning from data.</li>
                  <li>Classification of problems: regression vs. classification.</li>
                  <li>Supervised and unsupervised learning.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-600 mb-2">Module III: Regression Models (25%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Linear regression: model representation for single variable.</li>
                  <li>Single variable cost function.</li>
                  <li>Gradient descent for linear regression and its practical applications.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-600 mb-2">Module IV: Optimization Techniques (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Logistic regression: classification, hypothesis representation, decision boundary, cost function.</li>
                  <li>Advanced optimization techniques.</li>
                  <li>Multi-classification (one-vs-all) and addressing overfitting.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-emerald-600 mb-2">Module V: Case Studies (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Discussion on clustering algorithms.</li>
                  <li>Use cases centered around clustering and classification.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lab Details */}
          <section className="bg-white rounded-xl shadow-sm border border-emerald-200 p-6 hover:shadow-md hover:bg-emerald-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Lab Details</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
              <li>Implement logical rules in Python.</li>
              <li>Apply linear regression, gradient descent, and logistic regression on a dataset.</li>
              <li>Add missing values in a dataset.</li>
              <li>Perform and plot underfitting and overfitting in a dataset.</li>
              <li>Implement clustering and classification algorithms.</li>
            </ul>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-emerald-200 p-6 hover:shadow-md hover:bg-emerald-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Design and implement machine learning solutions for classification, regression, and clustering problems.</li>
              <li>Evaluate and interpret results of various machine learning techniques.</li>
              <li>Design and implement machine learning algorithms for real-world applications.</li>
              <li>Apply mathematical foundations (matrix theory, statistics) to AI and ML problems.</li>
              <li>Understand theoretical foundations of AI techniques and logic programming.</li>
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

export default Aiml201Syllabus;