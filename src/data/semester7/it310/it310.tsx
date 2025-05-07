import React from 'react';

const It310 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Cloud Computing (IT310)</h2>
    <p className="mt-4 text-gray-600">This course covers cloud computing concepts, architectures, and services.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Cloud Fundamentals</li>
      <li>Unit 2: Cloud Service Models</li>
      <li>Unit 3: Cloud Security and Management</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain IaaS, PaaS, and SaaS with examples.</p>
    <p className="mt-2 text-gray-600">2. Discuss security challenges in cloud computing.</p>
    <div className="mt-6">
      <a
        href="/semester/7/it310/it310-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "it310",
  code: "IT310",
  name: "Cloud Computing",
  credits: 4,
  color: "bg-sky-100 text-sky-700"
};

export default It310;
