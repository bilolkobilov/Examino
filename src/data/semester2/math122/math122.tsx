import React from 'react';

const Math122 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Applied Mathematics - II (MATH122)</h2>
    <p className="mt-4 text-gray-600">
      This course covers advanced calculus and differential equations.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Integral Calculus</li>
      <li>Unit 2: Series Solutions</li>
      <li>Unit 3: Partial Differential Equations</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Solve the integral of x^2 e^x dx.</p>
    <p className="mt-2 text-gray-600">2. Find the general solution to a given PDE.</p>
    <div className="mt-6">
      <a
        href="/semester/2/math122/math122-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "math122",
  code: "MATH122",
  name: "Applied Mathematics - II",
  credits: 4,
  color: "bg-rose-100 text-rose-700"
};

export default Math122;
