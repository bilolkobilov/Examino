import React from 'react';

const Cse207 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Digital Electronics and Computer Organization (CSE207)</h2>
    <p className="mt-4 text-gray-600">This course covers digital logic and computer organization concepts.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Logic Gates</li>
      <li>Unit 2: Flip-Flops and Registers</li>
      <li>Unit 3: CPU Organization</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Design a 4-bit binary counter using flip-flops.</p>
    <p className="mt-2 text-gray-600">2. Explain the fetch-execute cycle in a CPU.</p>
    <div className="mt-6">
      <a
        href="/semester/3/cse207/cse207-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse207",
  code: "CSE207",
  name: "Digital Electronics and Computer Organization",
  credits: 5,
  color: "bg-violet-100 text-violet-700"
};

export default Cse207;
