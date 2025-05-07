import React from 'react';

const Etmj100 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Major Project (ETMJ100)</h2>
    <p className="mt-4 text-gray-600">This course involves the planning, execution, and presentation of a major project in the field of study.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Project Planning and Proposal</li>
      <li>Unit 2: Implementation and Documentation</li>
      <li>Unit 3: Presentation and Evaluation</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Outline the steps involved in planning a major project.</p>
    <p className="mt-2 text-gray-600">2. Discuss best practices for project documentation.</p>
    <div className="mt-6">
      <a
        href="/semester/8/etmj100/etmj100-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "etmj100",
  code: "ETMJ100",
  name: "Major Project",
  credits: 10,
  color: "bg-indigo-100 text-indigo-700"
};

export default Etmj100;
