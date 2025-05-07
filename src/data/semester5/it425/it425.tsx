import React from 'react';

const It425 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Cyber and Information Security (IT425)</h2>
    <p className="mt-4 text-gray-600">This course covers cybersecurity principles and practices.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Security Fundamentals</li>
      <li>Unit 2: Cryptography</li>
      <li>Unit 3: Network Security</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain symmetric vs asymmetric encryption.</p>
    <p className="mt-2 text-gray-600">2. Describe a common network attack and its mitigation.</p>
    <div className="mt-6">
      <a
        href="/semester/5/it425/it425-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "it425",
  code: "IT425",
  name: "Cyber and Information Security",
  credits: 2,
  color: "bg-blue-100 text-blue-700"
};

export default It425;
