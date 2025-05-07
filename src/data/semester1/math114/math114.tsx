import React from 'react';

const Math114 = () => (
  <div>
    <h2 className="text-2xl font-bold">Syllabus for Applied Mathematics - I (MATH114)</h2>
    <p className="mt-4">
      This course covers topics such as calculus, differential equations, and linear algebra.
    </p>
    <ul className="mt-4 list-disc pl-5">
      <li>Unit 1: Introduction to Calculus</li>
      <li>Unit 2: Differential Equations</li>
      <li>Unit 3: Linear Algebra Basics</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold">Practice Questions</h3>
    <p className="mt-2">1. Solve the following differential equation: dy/dx = x + y</p>
    <p className="mt-2">2. Find the eigenvalues of the matrix [[1, 2], [3, 4]]</p>
    <div className="mt-6">
      <a
        href="/semester/1/math114/math114-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "math114",
  code: "MATH114",
  name: "Applied Mathematics - I",
  credits: 4,
};

export default Math114;
