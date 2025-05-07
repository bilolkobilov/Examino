import React from 'react';

const Lang101 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Language and Communication Skills (LANG101)</h2>
    <p className="mt-4 text-gray-600">This course covers communication, writing, and presentation skills.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Communication Fundamentals</li>
      <li>Unit 2: Technical Writing</li>
      <li>Unit 3: Presentation Skills</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write a technical report on a given topic.</p>
    <p className="mt-2 text-gray-600">2. Prepare a presentation outline for a seminar.</p>
    <div className="mt-6">
      <a
        href="/semester/7/lang101/lang101-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "lang101",
  code: "LANG101",
  name: "Language and Communication Skills",
  credits: 2,
  color: "bg-fuchsia-100 text-fuchsia-700"
};

export default Lang101;
