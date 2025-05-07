
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-exam-900 to-exam-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-display sm:text-4xl">
            Ready to Ace Your B.Tech Exams?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Start your exam preparation journey today with ExamSpark. Access comprehensive syllabi,
            curated questions, and detailed solutions for all your subjects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/semesters">
              <Button size="lg" className="bg-white text-exam-900 hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
