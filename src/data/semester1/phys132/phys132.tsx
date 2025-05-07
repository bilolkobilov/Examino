import React from 'react';

const Phys132 = () => (
  <div>
    <h2 className="text-2xl font-bold">Syllabus for Engineering Physics (PHYS132)</h2>
    <p className="mt-4">
      This course introduces fundamental physics concepts for engineering students.
    </p>
    <ul className="mt-4 list-disc pl-5">
      <li>Unit 1: Mechanics</li>
      <li>Unit 2: Thermodynamics</li>
      <li>Unit 3: Electromagnetism</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold">Practice Questions</h3>
    <p className="mt-2">1. Calculate the force on a 2kg object accelerating at 3m/s².</p>
    <p className="mt-2">2. What is the electric field at a distance of 1m from a 5C charge?</p>
    <div className="mt-6">
      <a
        href="/semester/1/phys132/phys132-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "phys132",
  code: "PHYS132",
  name: "Engineering Physics",
  credits: 5,
};

export default Phys132;
