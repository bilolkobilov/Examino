import React from 'react';

const Es104 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Engineering Graphics Lab (ES104)</h2>
    <p className="mt-4 text-gray-600">
      This lab course focuses on technical drawing and engineering graphics.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Orthographic Projections</li>
      <li>Unit 2: Isometric Drawings</li>
      <li>Unit 3: CAD Software Basics</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Draw the orthographic projection of a given object.</p>
    <p className="mt-2 text-gray-600">2. Create an isometric view of a mechanical part.</p>
    <div className="mt-6">
      <a
        href="/semester/2/es104/es104-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "es104",
  code: "ES104",
  name: "Engineering Graphics Lab",
  credits: 1,
};

export default Es104;
