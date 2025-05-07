import React from 'react';

const Cse201 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Database Management Systems (CSE201)</h2>
    <p className="mt-4 text-gray-600">This course covers database concepts and SQL.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Relational Databases</li>
      <li>Unit 2: SQL Queries</li>
      <li>Unit 3: Database Design</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Write an SQL query to join two tables.</p>
    <p className="mt-2 text-gray-600">2. Design a normalized database schema.</p>
    <div className="mt-6">
      <a
        href="/semester/5/cse201/cse201-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "cse201",
  code: "CSE201",
  name: "Database Management Systems",
  credits: 5,
  color: "bg-green-100 text-green-700"
};

export default Cse201;
