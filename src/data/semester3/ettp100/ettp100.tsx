import React from 'react';

const Ettp100 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Term Paper (ETTP100)</h2>
    <p className="mt-4 text-gray-600">This course involves writing a term paper on a selected engineering topic.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Research Methodology</li>
      <li>Unit 2: Literature Review</li>
      <li>Unit 3: Paper Writing</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Choose a topic and write a literature review.</p>
    <p className="mt-2 text-gray-600">2. Draft an outline for your term paper.</p>
    <div className="mt-6">
      <a
        href="/semester/3/ettp100/ettp100-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "ettp100",
  code: "ETTP100",
  name: "Term Paper",
  credits: 1,
  color: "bg-emerald-100 text-emerald-700"
};

export default Ettp100;
