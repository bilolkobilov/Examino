import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, FileText, GraduationCap, ChevronRight, Users, BarChart, Clock, Globe, Target, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-exam-700 to-exam-900 py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
                About Examino
              </h1>
              <p className="text-lg md:text-xl text-white/80 mx-auto">
                Empowering B.Tech students with tailored exam preparation resources.
              </p>
              <div className="mt-8 flex justify-center">
                <a href="#mission" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-exam-700 font-medium hover:bg-exam-50 transition-colors shadow-md">
                  Learn more
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative -mt-16 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-exam-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-exam-100 mx-auto mb-4">
                  <Users className="h-6 w-6 text-exam-600" />
                </div>
                <h3 className="text-xl font-semibold text-exam-900 text-center mb-2">1000+</h3>
                <p className="text-gray-600 text-center text-sm">Students Helped</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-exam-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-exam-100 mx-auto mb-4">
                  <BarChart className="h-6 w-6 text-exam-600" />
                </div>
                <h3 className="text-xl font-semibold text-exam-900 text-center mb-2">92%</h3>
                <p className="text-gray-600 text-center text-sm">Success Rate</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-exam-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-exam-100 mx-auto mb-4">
                  <Clock className="h-6 w-6 text-exam-600" />
                </div>
                <h3 className="text-xl font-semibold text-exam-900 text-center mb-2">24/7</h3>
                <p className="text-gray-600 text-center text-sm">Support Access</p>
              </div>
            </div>
          </div>

          <div id="mission" className="mb-20">
            <div className="flex items-center justify-center mb-10">
              <div className="h-px bg-gray-200 w-16"></div>
              <h2 className="text-2xl font-bold text-exam-900 px-4">Our Mission</h2>
              <div className="h-px bg-gray-200 w-16"></div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-exam-50 p-8 md:p-10 flex items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-exam-900 mb-4">Empowering Engineering Excellence</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Examino is dedicated to transforming how B.Tech students prepare for their university exams. We've created a focused, user-friendly platform that provides high-quality study materials tailored specifically to the engineering curriculum.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Our mission is to help every engineering student navigate complex concepts with confidence and achieve their academic potential through strategic preparation and comprehensive resources.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-exam-100 text-exam-600">
                          <Target className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-exam-900">Focused Approach</h4>
                        <p className="mt-2 text-sm text-gray-600">We concentrate exclusively on B.Tech curriculum to provide the most relevant resources.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-exam-100 text-exam-600">
                          <Award className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-exam-900">Quality Content</h4>
                        <p className="mt-2 text-sm text-gray-600">Our materials are carefully curated by experienced educators and industry professionals.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-exam-100 text-exam-600">
                          <Globe className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-exam-900">Accessible Learning</h4>
                        <p className="mt-2 text-sm text-gray-600">We design our platform for seamless access across devices, anytime and anywhere.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="flex items-center justify-center mb-10">
              <div className="h-px bg-gray-200 w-16"></div>
              <h2 className="text-2xl font-bold text-exam-900 px-4">What We Offer</h2>
              <div className="h-px bg-gray-200 w-16"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group">
                <div className="h-2 bg-exam-600"></div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-exam-100 p-3 mb-4 group-hover:bg-exam-200 transition-colors duration-300">
                    <BookOpen className="h-6 w-6 text-exam-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-exam-900 mb-3">Complete Syllabi</h3>
                  <p className="text-gray-600 mb-4">
                    Access comprehensive syllabi for all B.Tech subjects, carefully aligned with university standards and requirements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Subject-wise organization
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Semester-based breakdowns
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Updated curriculum content
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group">
                <div className="h-2 bg-exam-600"></div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-exam-100 p-3 mb-4 group-hover:bg-exam-200 transition-colors duration-300">
                    <FileText className="h-6 w-6 text-exam-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-exam-900 mb-3">Curated Questions</h3>
                  <p className="text-gray-600 mb-4">
                    Practice with our carefully selected exam questions designed to enhance understanding and test preparation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Previous year questions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Topic-wise problems
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Difficulty-based sorting
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] group">
                <div className="h-2 bg-exam-600"></div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-exam-100 p-3 mb-4 group-hover:bg-exam-200 transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 text-exam-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-exam-900 mb-3">Detailed Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Master complex engineering concepts with our clear, step-by-step solutions and explanations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Comprehensive explanations
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Visual aids and diagrams
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <div className="rounded-full bg-exam-100 p-1 mr-2">
                        <ChevronRight className="h-3 w-3 text-exam-700" />
                      </div>
                      Alternative solution approaches
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="rounded-xl overflow-hidden bg-gradient-to-r from-exam-100 to-exam-50 border border-exam-200">
              <div className="md:flex items-center">
                <div className="md:w-2/3 p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-exam-900 mb-4">Ready to Excel in Your Exams?</h2>
                  <p className="text-gray-700 mb-6">
                    Join thousands of engineering students who have transformed their exam preparation with Examino. Get access to comprehensive study materials and start your journey to academic success.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="inline-flex items-center px-6 py-3 rounded-lg bg-exam-600 text-white font-medium hover:bg-exam-700 transition-colors">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                    <a href="#" className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-exam-200 text-exam-700 font-medium hover:bg-exam-50 transition-colors">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3 bg-exam-200 p-8 md:p-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex rounded-full bg-white p-4 mb-3">
                      <GraduationCap className="h-10 w-10 text-exam-700" />
                    </div>
                    <div className="text-2xl font-bold text-exam-900">Free Trial</div>
                    <p className="text-exam-700 text-sm mt-1">No credit card required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;