import React from 'react';

const It423 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Introduction to Cloud Computing (IT423)</h2>
    <p className="mt-4 text-gray-600">
      This course introduces cloud computing concepts and technologies.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Cloud Models</li>
      <li>Unit 2: Virtualization</li>
      <li>Unit 3: Cloud Security</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the difference between IaaS, PaaS, and SaaS.</p>
    <p className="mt-2 text-gray-600">2. What are the security challenges in cloud computing?</p>
    <div className="mt-6">
      <a
        href="/semester/2/it423/it423-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "it423",
  code: "IT423",
  name: "Introduction to Cloud Computing",
  credits: 3,
  color: "bg-green-100 text-green-700"
};

export default It423;
