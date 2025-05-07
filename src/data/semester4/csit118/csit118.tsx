import React from 'react';

const Csit118 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for IT Applications in Business (CSIT118)</h2>
    <p className="mt-4 text-gray-600">This course covers the use of IT in business environments.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Business Information Systems</li>
      <li>Unit 2: E-Commerce</li>
      <li>Unit 3: IT Infrastructure</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the components of an information system.</p>
    <p className="mt-2 text-gray-600">2. Discuss the impact of e-commerce on traditional business.</p>
    <div className="mt-6">
      <a
        href="/semester/4/csit118/csit118-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "csit118",
  code: "CSIT118",
  name: "IT Applications in Business",
  credits: 4,
  color: "bg-blue-100 text-blue-700"
};

export default Csit118;
