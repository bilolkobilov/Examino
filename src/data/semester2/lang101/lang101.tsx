import React from 'react';

const Lang101 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Introduction to German Culture / Hispanic World / Arabic Culture (LANG101)</h2>
    <p className="mt-4 text-gray-600">
      This course explores cultural aspects of German, Hispanic, or Arabic regions.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Cultural History</li>
      <li>Unit 2: Language Basics</li>
      <li>Unit 3: Traditions and Customs</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write an essay on German cultural traditions.</p>
    <p className="mt-2 text-gray-600">2. Compare Hispanic and Arabic cultural practices.</p>
    <div className="mt-6">
      <a
        href="/semester/2/lang101/lang101-syllabus"
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
  name: "Introduction to German Culture / Hispanic World / Arabic Culture",
  credits: 3,
  color: "bg-indigo-100 text-indigo-700"
};

export default Lang101;
