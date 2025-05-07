
import React from 'react';
import { BookOpen, BookText, GraduationCap } from 'lucide-react';

const features = [
  {
    name: 'Complete Syllabus',
    description:
      'Access the complete, up-to-date syllabus for every subject in your B.Tech program. Know exactly what to study for your exams.',
    icon: <BookText className="h-6 w-6 text-exam-700" />,
  },
  {
    name: 'Curated Questions',
    description:
      'Practice with carefully selected exam questions that cover all important topics and concepts in your curriculum.',
    icon: <BookOpen className="h-6 w-6 text-exam-700" />,
  },
  {
    name: 'Detailed Solutions',
    description:
      'Learn from comprehensive, step-by-step solutions that help you understand complex concepts and problem-solving techniques.',
    icon: <GraduationCap className="h-6 w-6 text-exam-700" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-exam-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-exam-900 font-display sm:text-4xl">
            Everything You Need to Excel
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our platform is designed to provide you with all the resources you need to succeed in your B.Tech exams.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-1 -right-1 w-24 h-24 bg-exam-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-exam-100 group-hover:bg-exam-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-exam-900 group-hover:text-exam-700 transition-colors">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
