import React from 'react';

const Law140 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Cyber Law and Ethics (LAW140)</h2>
    <p className="mt-4 text-gray-600">This course covers legal and ethical issues in cyberspace.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to Cyber Law</li>
      <li>Unit 2: Intellectual Property Rights</li>
      <li>Unit 3: Cyber Crimes and Ethics</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the importance of cyber law in the digital age.</p>
    <p className="mt-2 text-gray-600">2. Discuss ethical issues related to data privacy.</p>
    <div className="mt-6">
      <a
        href="/semester/7/law140/law140-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "law140",
  code: "LAW140",
  name: "Cyber Law and Ethics",
  credits: 2,
  color: "bg-lime-100 text-lime-700"
};

export default Law140;
