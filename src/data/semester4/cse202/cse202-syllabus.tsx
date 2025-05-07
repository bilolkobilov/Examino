import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const Cse202Syllabus = () => {
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
                CSE202 - Operating System
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore the fundamentals of operating systems, including process, memory, device, and file management, with hands-on labs in UNIX/Linux and CPU scheduling.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Course Objectives */}
          <section className="bg-white rounded-xl shadow-sm border border-green-200 p-6 hover:shadow-md hover:bg-green-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Course Objectives</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Understand the role and challenges of operating systems in general-purpose computing.</li>
              <li>Learn memory management techniques across different operating systems.</li>
              <li>Analyze characteristics influencing operating system selection.</li>
              <li>Explore file and process management in computing environments.</li>
            </ul>
          </section>

          {/* Syllabus Modules */}
          <section className="bg-white rounded-xl shadow-sm border border-green-200 p-6 hover:shadow-md hover:bg-green-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Syllabus Modules</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-green-700 mb-2">Module I: Introduction to Operating System (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Operating system functions and evolution (batch, interactive, multiprogramming, time-sharing, real-time).</li>
                  <li>Multiprocessor and distributed systems.</li>
                  <li>System protection, OS structure, services, system programs, and calls.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-700 mb-2">Module II: Process Management (25%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Process concepts, state models, scheduling, and synchronization.</li>
                  <li>Threads, interprocess communication, and concurrency (producer-consumer, critical sections, semaphores, monitors).</li>
                  <li>CPU scheduling algorithms (preemptive and non-preemptive, multiprocessor).</li>
                  <li>Deadlock: models, prevention, avoidance, detection, and recovery.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-700 mb-2">Module III: Memory Management (25%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>Single contiguous allocation, fragmentation, paging, and segmentation.</li>
                  <li>Virtual memory, demand paging, page replacement algorithms, and frame allocation.</li>
                  <li>Thrashing, cache memory, swapping, and overlays.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-700 mb-2">Module IV: Device Management (15%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>I/O hardware principles, device controllers, and drivers.</li>
                  <li>Memory-mapped I/O, DMA, interrupts, and interrupt handlers.</li>
                  <li>I/O scheduling, buffering, caching, and spooling.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-700 mb-2">Module V: File System and Protection/Security (20%)</h3>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
                  <li>File concepts, organization, access mechanisms, and directory structures.</li>
                  <li>File sharing, allocation methods, and free space management.</li>
                  <li>Protection policies, authentication, and access authorization.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lab Details */}
          <section className="bg-white rounded-xl shadow-sm border border-green-200 p-6 hover:shadow-md hover:bg-green-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Lab Details</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 gap-y-1">
              <li>Use basic UNIX/Linux shell commands.</li>
              <li>Execute commands for inodes, I/O redirection, piping, process control, and email.</li>
              <li>Develop shell scripts using interactive scripts, positional parameters, arithmetic, conditionals, loops, and case structures.</li>
              <li>Create a shell script to display lines between specified line numbers.</li>
              <li>Create a shell script to delete lines containing a specific word.</li>
              <li>Create a shell script to list all files in the current directory.</li>
              <li>Simulate UNIX commands using C programming.</li>
              <li>Implement CPU scheduling algorithms: FCFS and Shortest Job First.</li>
              <li>Implement CPU scheduling algorithms: Round Robin and Priority-based.</li>
            </ul>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white rounded-xl shadow-sm border border-green-200 p-6 hover:shadow-md hover:bg-green-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-50 p-2 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-green-700" />
              </div>
              <h2 className="text-xl font-semibold text-exam-900">Learning Outcomes</h2>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Understand the core concepts and responsibilities of operating systems.</li>
              <li>Design and implement algorithms for CPU scheduling, deadlock handling, and synchronization.</li>
              <li>Apply memory management techniques effectively.</li>
              <li>Analyze and evaluate I/O components in computing systems.</li>
              <li>Demonstrate storage management and protection policies.</li>
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

export default Cse202Syllabus;