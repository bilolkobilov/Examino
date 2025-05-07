import React from 'react';

const Cse202 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Operating System (CSE202)</h2>
    <p className="mt-4 text-gray-600">This course covers operating system concepts and design.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Process Management</li>
      <li>Unit 2: Memory Management</li>
      <li>Unit 3: File Systems</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the concept of virtual memory.</p>
    <p className="mt-2 text-gray-600">2. Describe different process scheduling algorithms.</p>
    <div className="mt-6">
      <a
        href="/semester/4/cse202/cse202-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse202",
  code: "CSE202",
  name: "Operating System",
  credits: 4,
  color: "bg-green-100 text-green-700"
};

export default Cse202;
