import React from 'react';

const Cse204 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Theory of Computation (CSE204)</h2>
    <p className="mt-4 text-gray-600">This course covers automata theory and formal languages.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Finite Automata</li>
      <li>Unit 2: Context-Free Grammars</li>
      <li>Unit 3: Turing Machines</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Design a DFA for a given language.</p>
    <p className="mt-2 text-gray-600">2. Explain the halting problem.</p>
    <div className="mt-6">
      <a
        href="/semester/5/cse204/cse204-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse204",
  code: "CSE204",
  name: "Theory of Computation",
  credits: 4,
  color: "bg-amber-100 text-amber-700"
};

export default Cse204;
