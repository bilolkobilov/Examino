import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const Math242Syllabus = () => {
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
                MATH242 - Applied Mathematics-IV
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore numerical analysis and statistical methods to solve complex applied problems in engineering and business, focusing on probability, distributions, and curve fitting.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Course Objectives */}
          <section className="bg-white rounded-xl shadow-sm border border-amber-200 p-6 hover:shadow-md hover:bg-amber-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-amber-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Master numerical analysis techniques for applied problem-solving.</li>
              <li>Understand foundational statistics for interdisciplinary applications.</li>
              <li>Prepare for advanced coursework in probability and data analysis.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-amber-200 p-6 hover:shadow-md hover:bg-amber-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-amber-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-amber-600 mb-2">Module I: Iterative Techniques & Interpolation (40%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Bisection Method</li>
                  <li>Method of False Position</li>
                  <li>Newton-Raphson Method</li>
                  <li>Jacobi Iteration Method</li>
                  <li>Gauss-Seidel Method</li>
                  <li>Finite Differences & Tables</li>
                  <li>Newton's Forward/Backward Interpolation</li>
                  <li>Gauss Forward/Backward Formula</li>
                  <li>Lagrange's Interpolation</li>
                  <li>Newton Divided Difference</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-600 mb-2">Module II: Numerical Differentiation & Integration (30%)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Numerical Differentiation</li>
                  <li>Numerical Integration (Trapezoidal, Simpson's Rules)</li>
                  <li>Differential Equations (Euler, Runge-Kutta 4th Order)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-600 mb-2">Module III: Probability & Distributions (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Probability Fundamentals</li>
                  <li>Expected Value & Variance</li>
                  <li>Binomial, Poisson, Normal Distributions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-amber-600 mb-2">Module IV: Curve Fitting & Least Squares (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Moments, Skewness, Kurtosis</li>
                  <li>Least Squares Curve Fitting</li>
                  <li>Linear and Parabolic Fits</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-amber-200 p-6 hover:shadow-md hover:bg-amber-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-amber-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Solve equations using iterative numerical methods.</li>
              <li>Apply probability distributions to real-world problems.</li>
              <li>Fit curves to data using least squares techniques.</li>
              <li>Perform numerical differentiation and integration.</li>
              <li>Construct interpolation polynomials for data analysis.</li>
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

export default Math242Syllabus;