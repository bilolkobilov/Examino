import React from 'react';

const Es201 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Basic Electronics Engineering (ES201)</h2>
    <p className="mt-4 text-gray-600">This course introduces basic concepts in electronics engineering.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Semiconductors</li>
      <li>Unit 2: Diodes and Transistors</li>
      <li>Unit 3: Amplifiers</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the working of a PN junction diode.</p>
    <p className="mt-2 text-gray-600">2. Design a simple transistor amplifier circuit.</p>
    <div className="mt-6">
      <a
        href="/semester/3/es201/es201-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "es201",
  code: "ES201",
  name: "Basic Electronics Engineering",
  credits: 4,
  color: "bg-blue-100 text-blue-700"
};

export default Es201;
