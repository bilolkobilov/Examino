import React from 'react';

const Cse304 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Compiler Construction (CSE304)</h2>
    <p className="mt-4 text-gray-600">This course covers compiler design and implementation.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Lexical Analysis</li>
      <li>Unit 2: Syntax Analysis</li>
      <li>Unit 3: Code Generation</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write a regular expression for identifiers.</p>
    <p className="mt-2 text-gray-600">2. Explain the role of a parser in a compiler.</p>
    <div className="mt-6">
      <a
        href="/semester/6/cse304/cse304-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse304",
  code: "CSE304",
  name: "Compiler Construction",
  credits: 4,
  color: "bg-green-100 text-green-700"
};

export default Cse304;
