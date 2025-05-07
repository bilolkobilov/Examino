import React from 'react';

const Etmn100 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Entrepreneurship and Management (ETMN100)</h2>
    <p className="mt-4 text-gray-600">This course covers entrepreneurship, innovation, and management principles.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to Entrepreneurship</li>
      <li>Unit 2: Business Planning</li>
      <li>Unit 3: Management Skills</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Outline the steps to start a new business.</p>
    <p className="mt-2 text-gray-600">2. Discuss the role of innovation in entrepreneurship.</p>
    <div className="mt-6">
      <a
        href="/semester/7/etmn100/etmn100-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "etmn100",
  code: "ETMN100",
  name: "Entrepreneurship and Management",
  credits: 2,
  color: "bg-orange-100 text-orange-700"
};

export default Etmn100;
