import React from 'react';

const Csit142 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Software Engineering and Modeling (CSIT142)</h2>
    <p className="mt-4 text-gray-600">This course covers software engineering principles and modeling techniques.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Software Development Life Cycle</li>
      <li>Unit 2: UML Diagrams</li>
      <li>Unit 3: Agile Methodologies</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Draw a use case diagram for a library system.</p>
    <p className="mt-2 text-gray-600">2. Explain the phases of SDLC.</p>
    <div className="mt-6">
      <a
        href="/semester/6/csit142/csit142-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "csit142",
  code: "CSIT142",
  name: "Software Engineering and Modeling",
  credits: 4,
  color: "bg-amber-100 text-amber-700"
};

export default Csit142;
