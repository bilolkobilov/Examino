import React from 'react';

const Sports = () => (
  <div>
    <h2 className="text-2xl font-bold text-exam-900">Syllabus for Sports and Physical Education</h2>
    <p className="mt-4 text-gray-600">This course covers physical education, sports, and wellness activities.</p>
    <ul className="mt-4 list-disc pl-5 text-gray-600">
      <li>Unit 1: Physical Fitness</li>
      <li>Unit 2: Team Sports</li>
      <li>Unit 3: Health and Wellness</li>
    </ul>
    <h3 className="mt-6 text-xl font-semibold text-exam-900">Practice Questions</h3>
    <p className="mt-2 text-gray-600">1. List the benefits of regular physical activity.</p>
    <p className="mt-2 text-gray-600">2. Describe the rules of a chosen team sport.</p>
    <div className="mt-6">
      <a
        href="/semester/6/sports/sports-syllabus"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        See Syllabus
      </a>
    </div>
  </div>
);

export const subjectData = {
  id: "sports",
  code: "SPORTS",
  name: "Sports and Physical Education",
  credits: 1,
  color: "bg-yellow-100 text-yellow-700"
};

export default Sports;
