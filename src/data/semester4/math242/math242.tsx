import React from 'react';

const Math242 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Applied Mathematics - IV (MATH242)</h2>
    <p className="mt-4 text-gray-600">This course covers advanced mathematics topics for engineers.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Laplace Transforms</li>
      <li>Unit 2: Numerical Methods</li>
      <li>Unit 3: Complex Variables</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Solve a differential equation using Laplace transforms.</p>
    <p className="mt-2 text-gray-600">2. Apply a numerical method to find a root of an equation.</p>
    <div className="mt-6">
      <a
        href="/semester/4/math242/math242-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "math242",
  code: "MATH242",
  name: "Applied Mathematics - IV",
  credits: 4,
  color: "bg-amber-100 text-amber-700"
};

export default Math242;
