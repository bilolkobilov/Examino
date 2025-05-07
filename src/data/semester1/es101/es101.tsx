import React from 'react';

const Es101 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Engineering Mechanics (ES101)</h2>
    <p className="mt-4 text-gray-600">
      This course focuses on the principles of mechanics applied to engineering problems.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Statics</li>
      <li>Unit 2: Dynamics</li>
      <li>Unit 3: Strength of Materials</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Determine the resultant force on a system of two forces: 5N at 30° and 3N at 90°.</p>
    <p className="mt-2 text-gray-600">2. Calculate the moment of a force about a point.</p>
    <div className="mt-6">
      <a
        href="/semester/1/es101/es101-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "es101",
  code: "ES101",
  name: "Engineering Mechanics",
  credits: 4,
};

export default Es101;
