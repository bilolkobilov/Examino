import React from 'react';

const Bs309 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Cognitive Skills, Leadership and Decision Making (BS309)</h2>
    <p className="mt-4 text-gray-600">This course covers leadership, decision making, and cognitive skills for engineers.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Leadership Theories</li>
      <li>Unit 2: Decision Making Models</li>
      <li>Unit 3: Cognitive Biases</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Describe a leadership style and its application.</p>
    <p className="mt-2 text-gray-600">2. Analyze a decision-making scenario for biases.</p>
    <div className="mt-6">
      <a
        href="/semester/5/bs309/bs309-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "bs309",
  code: "BS309",
  name: "Cognitive Skills, Leadership and Decision Making",
  credits: 4,
  color: "bg-rose-100 text-rose-700"
};

export default Bs309;
