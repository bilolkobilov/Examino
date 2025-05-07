import React from 'react';

const It432 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Full Stack Development (IT432)</h2>
    <p className="mt-4 text-gray-600">This course covers full stack web development concepts.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Frontend Technologies</li>
      <li>Unit 2: Backend Development</li>
      <li>Unit 3: Deployment and DevOps</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Build a simple CRUD app using a frontend and backend framework.</p>
    <p className="mt-2 text-gray-600">2. Explain the CI/CD pipeline.</p>
    <div className="mt-6">
      <a
        href="/semester/6/it432/it432-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "it432",
  code: "IT432",
  name: "Full Stack Development",
  credits: 6,
  color: "bg-rose-100 text-rose-700"
};

export default It432;
