import React from 'react';

const Es103 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Basic Electrical Engineering (ES103)</h2>
    <p className="mt-4 text-gray-600">
      This course covers the fundamentals of electrical circuits and systems.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: DC Circuits</li>
      <li>Unit 2: AC Circuits</li>
      <li>Unit 3: Transformers</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Calculate the equivalent resistance of a series-parallel circuit.</p>
    <p className="mt-2 text-gray-600">2. Find the voltage across a 5Ω resistor in an AC circuit.</p>
    <div className="mt-6">
      <a
        href="/semester/2/es103/es103-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "es103",
  code: "ES103",
  name: "Basic Electrical Engineering",
  credits: 4,
};

export default Es103;
