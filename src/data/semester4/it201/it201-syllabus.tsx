import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const It201Syllabus = () => {
  const { semester, subject } = useParams<{ semester?: string; subject?: string }>();

  return (
    <main className="py-8 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 bg-gradient-to-r from-exam-700 to-exam-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="relative p-6 sm:p-8">
            <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
            <div className="relative z-10 max-w-4xl">
              <nav className="flex items-center mb-4 text-white/90 text-sm" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
                <Link to={`/semester/${semester}`} className="hover:text-white transition">Semester {semester}</Link>
                <ChevronRight className="h-4 w-4 mx-2 text-white/60" />
                <span aria-current="page">Syllabus</span>
              </nav>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                IT201 - Java Programming
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Master Java programming through object-oriented concepts, desktop application development, and hands-on labs using modern Java APIs.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Course Objectives */}
          <section className="bg-white rounded-xl shadow-sm border border-rose-200 p-6 hover:shadow-md hover:bg-rose-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-rose-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Develop proficiency in Java programming skills.</li>
              <li>Understand the object-oriented paradigm in the context of Java.</li>
              <li>Design desktop applications using the latest Java-based APIs.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-rose-200 p-6 hover:shadow-md hover:bg-rose-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-rose-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-rose-600 mb-2">Module I: Introduction to Java and OOP (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Concepts of object-oriented programming and Java features.</li>
                  <li>Differences between Java and C++.</li>
                  <li>Data types, control statements, identifiers, arrays, and operators.</li>
                  <li>Classes, constructors, inheritance (multilevel), method overriding, abstract and final classes.</li>
                  <li>String class and various string operations.</li>
                  <li>Runtime polymorphism.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-rose-600 mb-2">Module II: Packages, Interfaces, and Exceptions (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Defining, implementing, and importing packages.</li>
                  <li>Interfaces, functional interfaces, and lambda expressions.</li>
                  <li>Errors vs. exceptions, types of exceptions, and exception handling.</li>
                  <li>Java’s built-in exceptions, custom exceptions, and exception logging.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-rose-600 mb-2">Module III: Multithreading and I/O (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Creating, implementing, and extending threads.</li>
                  <li>Thread priorities, synchronization, suspending, resuming, and stopping threads.</li>
                  <li>I/O streams (byte and character), file handling.</li>
                  <li>Exploring Java packages: java.lang, java.util, java.util.regex.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-rose-600 mb-2">Module IV: Generics and Collections (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Generics (templates) and user-defined generic classes.</li>
                  <li>Java.util package and collection framework.</li>
                  <li>List, Set, and Map interfaces.</li>
                  <li>Vector, ArrayList, Stack, Queue, and LinkedList.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-rose-600 mb-2">Module V: Annotations and Maven (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Java annotations and creating custom annotations.</li>
                  <li>Maven framework: repositories, dependencies, plugins, goals, and build lifecycle.</li>
                  <li>Project Object Model (pom.xml) and building a core Java application.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lab Details */}
          <section className="bg-white rounded-xl shadow-sm border border-rose-200 p-6 hover:shadow-md hover:bg-rose-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-rose-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Lab Details</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
              <li>Develop programs using classes, objects, control constructs, arrays, and functions.</li>
              <li>Create AWT applications to display images and text.</li>
              <li>Implement programs using interfaces and packages.</li>
              <li>Write programs for I/O operations and random file access.</li>
              <li>Develop event-driven Java programs.</li>
              <li>Design Graphical User Interface (GUI) applications.</li>
              <li>Create multithreaded Java programs.</li>
              <li>Build a core Java application using a pom.xml file.</li>
            </ul>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-rose-200 p-6 hover:shadow-md hover:bg-rose-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-rose-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Develop proficiency in Java programming using object-oriented concepts.</li>
              <li>Implement interfaces, packages, and exception handling in Java applications.</li>
              <li>Design multithreaded and I/O-based Java programs.</li>
              <li>Utilize generics and the Java Collections Framework effectively.</li>
              <li>Build Java applications using Maven and annotations.</li>
            </ul>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to={`/semester/${semester}/${subject}`}
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-exam-200 text-exam-700 font-medium hover:bg-exam-50 transition-colors"
          >
            Back to Subject
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default It201Syllabus;