import React from 'react';

const Cse302 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Data Communication and Computer Networks (CSE302)</h2>
    <p className="mt-4 text-gray-600">This course covers data communication and networking concepts.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Network Models</li>
      <li>Unit 2: Routing and Switching</li>
      <li>Unit 3: Network Security</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Explain the OSI model layers.</p>
    <p className="mt-2 text-gray-600">2. Describe a routing protocol.</p>
    <div className="mt-6">
      <a
        href="/semester/6/cse302/cse302-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse302",
  code: "CSE302",
  name: "Data Communication and Computer Networks",
  credits: 4,
  color: "bg-violet-100 text-violet-700"
};

export default Cse302;
