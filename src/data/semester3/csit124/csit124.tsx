import React from 'react';

const Csit124 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Data Structures Using C (CSIT124)</h2>
    <p className="mt-4 text-gray-600">This course covers fundamental data structures in C.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Arrays and Linked Lists</li>
      <li>Unit 2: Stacks and Queues</li>
      <li>Unit 3: Trees and Graphs</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Implement a linked list in C.</p>
    <p className="mt-2 text-gray-600">2. Write a C function to traverse a binary tree.</p>
    <div className="mt-6">
      <a
        href="/semester/3/csit124/csit124-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "csit124",
  code: "CSIT124",
  name: "Data Structures Using C",
  credits: 4,
  color: "bg-rose-100 text-rose-700"
};

export default Csit124;
