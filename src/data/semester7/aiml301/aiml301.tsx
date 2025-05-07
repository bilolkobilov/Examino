import React from 'react';

const Aiml301 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Artificial Intelligence and Machine Learning (AIML301)</h2>
    <p className="mt-4 text-gray-600">This course covers AI and ML concepts, algorithms, and applications.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to AI</li>
      <li>Unit 2: Machine Learning Algorithms</li>
      <li>Unit 3: Applications of AI/ML</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain supervised vs unsupervised learning.</p>
    <p className="mt-2 text-gray-600">2. Describe a real-world application of AI.</p>
    <div className="mt-6">
      <a
        href="/semester/7/aiml301/aiml301-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "aiml301",
  code: "AIML301",
  name: "Artificial Intelligence and Machine Learning",
  credits: 4,
  color: "bg-blue-100 text-blue-700"
};

export default Aiml301;
