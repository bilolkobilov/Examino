import React from 'react';

const Cse206 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Computer Graphics (CSE206)</h2>
    <p className="mt-4 text-gray-600">This course covers the fundamentals of computer graphics and visualization.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Graphics Hardware and Software</li>
      <li>Unit 2: 2D and 3D Transformations</li>
      <li>Unit 3: Rendering Techniques</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the graphics pipeline.</p>
    <p className="mt-2 text-gray-600">2. Describe the process of 3D rendering.</p>
    <div className="mt-6">
      <a
        href="/semester/7/cse206/cse206-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse206",
  code: "CSE206",
  name: "Computer Graphics",
  credits: 4,
  color: "bg-violet-100 text-violet-700"
};

export default Cse206;
