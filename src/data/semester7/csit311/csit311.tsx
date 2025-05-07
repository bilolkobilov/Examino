import React from 'react';

const Csit311 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Information Security (CSIT311)</h2>
    <p className="mt-4 text-gray-600">This course covers principles and practices of information security.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Security Concepts</li>
      <li>Unit 2: Threats and Vulnerabilities</li>
      <li>Unit 3: Security Technologies</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Define confidentiality, integrity, and availability.</p>
    <p className="mt-2 text-gray-600">2. Explain a common security attack and its mitigation.</p>
    <div className="mt-6">
      <a
        href="/semester/7/csit311/csit311-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "csit311",
  code: "CSIT311",
  name: "Information Security",
  credits: 4,
  color: "bg-rose-100 text-rose-700"
};

export default Csit311;
