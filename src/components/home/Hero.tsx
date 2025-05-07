import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Award, Clock, ChevronRight, Sparkles, BookCheck, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-section min-h-screen relative overflow-hidden bg-gradient-to-br from-exam-900 via-exam-800 to-exam-900  flex items-center justify-center">
      <div className="absolute inset-0 bg-white/5 opacity-20" 
        style={{ 
          backgroundSize: "30px 30px", 
          backgroundImage: "linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px)"
        }}
      ></div>
      
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-exam-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-full bg-exam-500/20 flex items-center justify-center">
                <Sparkles className="h-3 w-3 text-exam-300" />
              </div>
              <p className="text-exam-300 font-medium text-sm tracking-wider uppercase">B.Tech Excellence Platform</p>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-left leading-none">
              Ace Your B.Tech Finals with{" "}
              <div className="mt-2 sm:mt-3">
                <span className="bg-gradient-to-r from-exam-300 via-blue-400 to-exam-300 bg-clip-text text-transparent inline-block relative">
                  Expert Precision
                  <svg className="absolute -bottom-2 xl:-bottom-3 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C32 0.5 62 0.5 101 5.5C139.5 10.5 174 9.5 199 5.5" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="1" y1="5" x2="199" y2="5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#93c5fd" stopOpacity="0"/>
                        <stop offset="0.5" stopColor="#93c5fd"/>
                        <stop offset="1" stopColor="#93c5fd" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl leading-relaxed tracking-wide">
              Navigate engineering challenges confidently with our comprehensive exam preparation platform.
              Get detailed syllabus, expertly-crafted question banks, and crystal-clear solutions tailored
              specifically for B.Tech students.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">
              <Link to="/semesters" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-exam-800 hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold rounded-lg px-4 sm:px-6 py-2 sm:py-3"
                >
                  <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-exam-700" />
                  Start Your Prep Now
                </Button>
              </Link>
              <Link
                to="/about"
                className="group flex items-center justify-center sm:justify-start text-white bg-transparent border-b-2 border-white/40 hover:border-white px-2 py-2 transition-all duration-300 font-medium text-base"
              >
                Explore Our Methods
                <span className="ml-2 transition-all group-hover:translate-x-1 group-hover:text-exam-200">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -left-10 -top-10 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-exam-500/20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -right-10 -bottom-10 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>

            <div className="hidden md:block relative mx-auto w-full max-w-lg">
              <div className="animate-float bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-white/20" style={{ animationDuration: "6s" }}>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-exam-100 flex items-center justify-center shadow-md">
                    <GraduationCap className="h-5 sm:h-6 w-5 sm:w-6 text-exam-700" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-exam-800">Semester 7</div>
                    <div className="text-xs sm:text-sm text-exam-600">Network Theory</div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 my-3 sm:my-4">
                  <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-4/5 rounded-full bg-exam-500"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-exam-500"></div>
                      <span>Network Theorems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-exam-500"></div>
                      <span>Circuit Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-exam-500"></div>
                      <span>Transfer Functions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-exam-300"></div>
                      <span>Filters & Resonance</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="text-xs sm:text-sm text-exam-700 font-medium">Progress: 80%</div>
                  <div className="h-7 sm:h-8 w-7 sm:w-8 rounded-full bg-exam-100 flex items-center justify-center">
                    <BookOpen className="h-3 sm:h-4 w-3 sm:w-4 text-exam-700" />
                  </div>
                </div>
              </div>

              <div className="animate-float bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl absolute top-8 sm:top-10 -right-3 sm:-right-4 border border-white/20" style={{ animationDuration: "7s", animationDelay: "1.5s" }}>
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-md">
                    <BookOpen className="h-5 sm:h-6 w-5 sm:w-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-blue-800">Question Bank</div>
                    <div className="text-xs sm:text-sm text-blue-600">Practice Exercises</div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 my-2 sm:my-3">
                  <div className="flex justify-between items-center">
                    <div className="text-xs sm:text-sm font-medium text-gray-700">Previous Year Solved</div>
                    <div className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">28 Questions</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div className="h-full w-2/3 rounded-full bg-blue-500"></div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mt-2">Last updated: 2 days ago</div>
              </div>

              <div className="animate-float bg-exam-800/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl absolute -bottom-3 sm:-bottom-4 -left-4 sm:-left-6 border border-exam-700" style={{ animationDuration: "5s", animationDelay: "2s" }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-7 sm:h-8 w-7 sm:w-8 rounded-full bg-exam-100/20 flex items-center justify-center">
                    <Award className="h-3 sm:h-4 w-3 sm:w-4 text-white" />
                  </div>
                  <div className="text-white text-xs sm:text-sm font-medium">New materials added!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
