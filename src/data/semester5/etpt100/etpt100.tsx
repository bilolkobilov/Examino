import React from 'react';

const Etpt100 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for In-House Practical Training (ETPT100)</h2>
    <p className="mt-4 text-gray-600">This course provides practical training in an engineering environment.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Industrial Safety</li>
      <li>Unit 2: Project Work</li>
      <li>Unit 3: Report Writing</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Prepare a safety checklist for a lab.</p>
    <p className="mt-2 text-gray-600">2. Write a report on your practical training experience.</p>
    <div className="mt-6">
      <a
        href="/semester/5/etpt100/etpt100-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "etpt100",
  code: "ETPT100",
  name: "In-House Practical Training",
  credits: 4,
  color: "bg-emerald-100 text-emerald-700"
};

export default Etpt100;
