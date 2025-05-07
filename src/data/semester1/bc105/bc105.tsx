import React from 'react';

const Bc105 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Technical Communication - I (BC105)</h2>
    <p className="mt-4 text-gray-600">
      This course focuses on developing technical writing and communication skills.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to Technical Communication</li>
      <li>Unit 2: Report Writing</li>
      <li>Unit 3: Presentation Skills</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write a technical report on a recent engineering project.</p>
    <p className="mt-2 text-gray-600">2. Prepare a presentation on effective communication strategies.</p>
    <div className="mt-6">
      <a
        href="/semester/1/bc105/bc105-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "bc105",
  code: "BC105",
  name: "Technical Communication - I",
  credits: 4,
};

export default Bc105;
