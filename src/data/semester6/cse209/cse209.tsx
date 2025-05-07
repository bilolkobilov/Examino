import React from 'react';

const Cse209 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Intelligent Systems and Design Thinking (CSE209)</h2>
    <p className="mt-4 text-gray-600">This course covers intelligent systems and design thinking principles.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Introduction to Intelligent Systems</li>
      <li>Unit 2: Design Thinking Process</li>
      <li>Unit 3: Applications in Engineering</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Describe the stages of design thinking.</p>
    <p className="mt-2 text-gray-600">2. Give an example of an intelligent system in daily life.</p>
    <div className="mt-6">
      <a
        href="/semester/6/cse209/cse209-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse209",
  code: "CSE209",
  name: "Intelligent Systems and Design Thinking",
  credits: 2,
  color: "bg-blue-100 text-blue-700"
};

export default Cse209;
