import React from 'react';

const Es204 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Basic Simulation Lab (ES204)</h2>
    <p className="mt-4 text-gray-600">This lab course covers basic simulation techniques and tools.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to Simulation</li>
      <li>Unit 2: Simulation Software</li>
      <li>Unit 3: Experiment Design</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Design a simple simulation experiment.</p>
    <p className="mt-2 text-gray-600">2. Analyze simulation results for a given scenario.</p>
    <div className="mt-6">
      <a
        href="/semester/4/es204/es204-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "es204",
  code: "ES204",
  name: "Basic Simulation Lab",
  credits: 1,
  color: "bg-blue-100 text-blue-700"
};

export default Es204;
