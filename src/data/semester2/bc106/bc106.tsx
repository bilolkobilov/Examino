import React from 'react';

const Bc106 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Technical Communication - II (BC106)</h2>
    <p className="mt-4 text-gray-600">
      This course advances technical writing and communication skills.
    </p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Advanced Report Writing</li>
      <li>Unit 2: Group Discussions</li>
      <li>Unit 3: Interview Techniques</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Draft a technical report on a new technology.</p>
    <p className="mt-2 text-gray-600">2. Prepare for a mock interview scenario.</p>
    <div className="mt-6">
      <a
        href="/semester/2/bc106/bc106-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "bc106",
  code: "BC106",
  name: "Technical Communication - II",
  credits: 4,
  color: "bg-emerald-100 text-emerald-700"
};

export default Bc106;
