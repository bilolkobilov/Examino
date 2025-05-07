import React from 'react';

const Etisr101 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Environmental Studies and Social Responsibility (ETISR101)</h2>
    <p className="mt-4 text-gray-600">This course covers environmental awareness and social responsibility.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Environmental Science Basics</li>
      <li>Unit 2: Sustainability and Conservation</li>
      <li>Unit 3: Social Responsibility Initiatives</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Discuss the importance of biodiversity.</p>
    <p className="mt-2 text-gray-600">2. Propose a sustainability project for your community.</p>
    <div className="mt-6">
      <a
        href="/semester/7/etisr101/etisr101-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "etisr101",
  code: "ETISR101",
  name: "Environmental Studies and Social Responsibility",
  credits: 2,
  color: "bg-green-100 text-green-700"
};

export default Etisr101;
