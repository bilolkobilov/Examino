import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const Csit206Syllabus = () => {
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
                CSIT206 - Discrete Mathematics for IT
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Master the fundamentals of discrete mathematics, including logic, relations, functions, graphs, and trees, with applications to computer science and IT.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Course Objectives */}
          <section className="bg-white rounded-xl shadow-sm border border-violet-200 p-6 hover:shadow-md hover:bg-violet-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-violet-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-violet-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Understand discrete mathematical structures (logic, relations, functions, graphs, trees) with applications to computer science and IT.</li>
              <li>Explore computational and algorithmic aspects of relations, logic, functions, graphs, trees, and algebraic structures in IT applications.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-violet-200 p-6 hover:shadow-md hover:bg-violet-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-violet-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-violet-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-violet-700 mb-2">Module I: Mathematical Logic (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Propositions, propositional calculus, and logical operations (conjunction, disjunction, negation, conditional, biconditional).</li>
                  <li>Compound statements, equivalence, duality, and algebra of statements.</li>
                  <li>Valid and invalid arguments, tautologies, contradictions, and contingencies.</li>
                  <li>Practical: Truth-table tests and symbolic logic for argument evaluation.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-violet-700 mb-2">Module II: Relations and Functions (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Properties of binary relations, closure, Warshall’s algorithm, equivalence relations, and partitions.</li>
                  <li>Partial ordering relations and posets.</li>
                  <li>Functions: injective, surjective, bijective, numeric, and generating functions.</li>
                  <li>Recurrence relations and linear recurrence relations with constant coefficients.</li>
                  <li>Practical: Analyze reflexive, symmetric, and transitive properties of relations.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-violet-700 mb-2">Module III: Graph Theory (25%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Graph terminology, representation, multigraphs, weighted graphs, and subgraphs.</li>
                  <li>Complete, regular, bipartite, and isomorphic graphs; graph operations.</li>
                  <li>Paths, circuits, Hamiltonian and Euler paths, Dijkstra’s algorithm, graph coloring, and traveling salesman problem.</li>
                  <li>Practical: Graph representation, vertex/edge sets, adjacency matrices, and edge count analysis.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-violet-700 mb-2">Module IV: Trees (25%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Tree characterization, prefix codes, optimal prefix codes, and binary search trees.</li>
                  <li>Tree traversal, spanning trees, fundamental trees, and cut sets.</li>
                  <li>Minimal spanning trees (Kruskal’s and Prim’s algorithms), max flow min cut theorem.</li>
                  <li>Practical: Choose roots for maximum and minimum tree height.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-violet-700 mb-2">Module V: Algebraic Structure (10%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Algebraic structures with one binary operation: semigroups, monoids, and groups.</li>
                  <li>Isomorphism, homomorphism, and cyclic groups.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-violet-200 p-6 hover:shadow-md hover:bg-violet-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-violet-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-violet-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Demonstrate knowledge of how relations and functions are defined.</li>
              <li>Analyze algebraic structures.</li>
              <li>Describe partially ordered sets (posets) and their applications.</li>
              <li>Apply graph theory and trees in computer science contexts.</li>
              <li>Formulate concepts of propositional logic.</li>
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

export default Csit206Syllabus;