import React from 'react';

const Chem136 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Engineering Chemistry (CHEM136)</h2>
    <p className="mt-4 text-gray-600">
      This course covers chemical principles relevant to engineering.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Atomic Structure</li>
      <li>Unit 2: Chemical Bonding</li>
      <li>Unit 3: Thermodynamics</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Describe the types of chemical bonds with examples.</p>
    <p className="mt-2 text-gray-600">2. Explain the laws of thermodynamics.</p>
    <div className="mt-6">
      <a
        href="/semester/2/chem136/chem136-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "chem136",
  code: "CHEM136",
  name: "Engineering Chemistry",
  credits: 5,
  color: "bg-violet-100 text-violet-700"
};

export default Chem136;
