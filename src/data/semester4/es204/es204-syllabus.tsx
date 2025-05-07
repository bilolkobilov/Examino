import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const BasicSimulationLabSyllabus = () => {
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
                ES204 - Basic Simulation Lab
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Master MATLAB through hands-on labs, focusing on arithmetic, logical, and matrix operations, statistical analysis, and visualization techniques for engineering applications.
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
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Develop proficiency in MATLAB for arithmetic, logical, and mathematical operations with visualization.</li>
              <li>Apply MATLAB to solve basic engineering problems through practical simulations.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md hover:bg-blue-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-blue-600 mb-2">Module I: MATLAB Programming and Visualization (100%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Create one- and two-dimensional arrays (vectors and matrices).</li>
                  <li>Perform arithmetic operations: addition, subtraction, multiplication, exponentiation.</li>
                  <li>Execute matrix operations: inverse, transpose, rank, with plotting.</li>
                  <li>Manipulate matrices: concatenating, indexing, sorting, shifting, reshaping, resizing, flipping.</li>
                  <li>Apply relational operations: &gt;, &lt;, ==, ~=, &gt;=, &lt;=.</li>
                  <li>Apply logical operations: AND, OR, NOT.</li>
                  <li>Plot sine and cosine waves using MATLAB.</li>
                  <li>Perform polynomial operations: evaluation, roots, addition, subtraction, multiplication, division, differentiation, integration.</li>
                  <li>Solve simultaneous linear equations using matrix methods.</li>
                  <li>Calculate statistical measures: mean, median, standard deviation, variance.</li>
                  <li>Create visualizations: 2D/3D plots, subplots, bar graphs, pie charts, histograms, surface plots, mesh grids, contour plots.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-blue-200 p-6 hover:shadow-md hover:bg-blue-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Create and manipulate arrays and matrices in MATLAB for engineering computations.</li>
              <li>Perform arithmetic, relational, and logical operations to analyze data.</li>
              <li>Visualize data using various plotting techniques, including 2D/3D plots and statistical charts.</li>
              <li>Solve linear equations and polynomial problems using MATLAB's computational tools.</li>
              <li>Apply statistical methods to interpret and summarize data effectively.</li>
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

export default BasicSimulationLabSyllabus;