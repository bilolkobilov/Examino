import React from 'react';

const Math211 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Applied Mathematics - III (MATH211)</h2>
    <p className="mt-4 text-gray-600">This course covers advanced topics in mathematics for engineers.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Complex Analysis</li>
      <li>Unit 2: Fourier Series</li>
      <li>Unit 3: Probability and Statistics</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Find the Fourier series of a given function.</p>
    <p className="mt-2 text-gray-600">2. Solve a probability distribution problem.</p>
    <div className="mt-6">
      <a
        href="/semester/3/math211/math211-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "math211",
  code: "MATH211",
  name: "Applied Mathematics - III",
  credits: 4,
  color: "bg-green-100 text-green-700"
};

export default Math211;
