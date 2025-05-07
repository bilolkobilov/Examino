import React from 'react';

const Cse205 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Programming in Python (CSE205)</h2>
    <p className="mt-4 text-gray-600">This course introduces programming concepts using Python.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Python Basics</li>
      <li>Unit 2: Data Structures</li>
      <li>Unit 3: Object-Oriented Programming</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write a Python program to reverse a string.</p>
    <p className="mt-2 text-gray-600">2. Implement a stack using Python lists.</p>
    <div className="mt-6">
      <a
        href="/semester/3/cse205/cse205-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse205",
  code: "CSE205",
  name: "Programming in Python",
  credits: 5,
  color: "bg-violet-100 text-violet-700"
};

export default Cse205;
