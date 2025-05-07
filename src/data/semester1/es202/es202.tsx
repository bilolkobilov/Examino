import React from 'react';

const Es202 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Introduction to Computers and Programming in C (ES202)</h2>
    <p className="mt-4 text-gray-600">
      This course introduces programming concepts using the C language.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Basics of C Programming</li>
      <li>Unit 2: Control Structures</li>
      <li>Unit 3: Functions and Arrays</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write a C program to find the factorial of a number.</p>
    <p className="mt-2 text-gray-600">2. Write a C program to reverse an array.</p>
    <div className="mt-6">
      <a
        href="/semester/1/es202/es202-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "es202",
  code: "ES202",
  name: "Introduction to Computers and Programming in C",
  credits: 3,
};

export default Es202;
