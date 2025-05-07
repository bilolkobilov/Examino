import React from 'react';

const Cse303 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Analysis and Design of Algorithms (CSE303)</h2>
    <p className="mt-4 text-gray-600">This course covers algorithm analysis and design techniques.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Time and Space Complexity</li>
      <li>Unit 2: Divide and Conquer</li>
      <li>Unit 3: Dynamic Programming</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Analyze the time complexity of merge sort.</p>
    <p className="mt-2 text-gray-600">2. Solve a problem using dynamic programming.</p>
    <div className="mt-6">
      <a
        href="/semester/5/cse303/cse303-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse303",
  code: "CSE303",
  name: "Analysis and Design of Algorithms",
  credits: 5,
  color: "bg-violet-100 text-violet-700"
};

export default Cse303;
