import React from 'react';

const Aiml201 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Introduction to AI and Machine Learning (AIML201)</h2>
    <p className="mt-4 text-gray-600">This course introduces artificial intelligence and machine learning concepts.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to AI</li>
      <li>Unit 2: Machine Learning Basics</li>
      <li>Unit 3: Applications of AI</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Define supervised and unsupervised learning.</p>
    <p className="mt-2 text-gray-600">2. List real-world applications of AI.</p>
    <div className="mt-6">
      <a
        href="/semester/4/aiml201/aiml201-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "aiml201",
  code: "AIML201",
  name: "Introduction to AI and Machine Learning",
  credits: 3,
  color: "bg-emerald-100 text-emerald-700"
};

export default Aiml201;
