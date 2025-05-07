import React from 'react';

const Pfe301 = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Professional Ethics and Social Responsibility (PFE301)</h2>
    <p className="mt-4 text-gray-600">This course covers professional ethics and social responsibility in engineering.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Ethical Theories</li>
      <li>Unit 2: Social Responsibility</li>
      <li>Unit 3: Case Studies</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. Discuss an ethical dilemma in engineering.</p>
    <p className="mt-2 text-gray-600">2. Analyze a case study on social responsibility.</p>
    <div className="mt-6">
      <a
        href="/semester/6/pfe301/pfe301-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "pfe301",
  code: "PFE301",
  name: "Professional Ethics and Social Responsibility",
  credits: 2,
  color: "bg-emerald-100 text-emerald-700"
};

export default Pfe301;
