import React from 'react';

const Soc104 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Sociology (SOC104)</h2>
    <p className="mt-4 text-gray-600">This course covers the basics of sociology and its applications.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to Sociology</li>
      <li>Unit 2: Social Institutions</li>
      <li>Unit 3: Social Change and Development</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Define sociology and its importance.</p>
    <p className="mt-2 text-gray-600">2. Discuss the role of family as a social institution.</p>
    <div className="mt-6">
      <a
        href="/semester/7/soc104/soc104-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "soc104",
  code: "SOC104",
  name: "Sociology",
  credits: 2,
  color: "bg-yellow-100 text-yellow-700"
};

export default Soc104;
