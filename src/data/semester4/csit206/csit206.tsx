import React from 'react';

const Csit206 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Discrete Mathematics for IT (CSIT206)</h2>
    <p className="mt-4 text-gray-600">This course covers discrete mathematics topics for IT students.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Sets and Relations</li>
      <li>Unit 2: Graph Theory</li>
      <li>Unit 3: Combinatorics</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Prove a property of relations using set theory.</p>
    <p className="mt-2 text-gray-600">2. Solve a combinatorial problem involving permutations.</p>
    <div className="mt-6">
      <a
        href="/semester/4/csit206/csit206-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "csit206",
  code: "CSIT206",
  name: "Discrete Mathematics for IT",
  credits: 4,
  color: "bg-violet-100 text-violet-700"
};

export default Csit206;
