import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Index from "./pages/Index";
import SemestersPage from "./pages/SemestersPage";
import SemesterPage from "./pages/SemesterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import * as semesterModules from '@/data';

const queryClient = new QueryClient();

type DynamicSubjectProps = { semester: string; subject: string };
const DynamicSubject = ({ semester, subject }: DynamicSubjectProps) => {
  const semesterModule = (semesterModules as any)[`semester${semester}`];
  if (!semesterModule) {
    return <NotFound />;
  }

  const SubjectComponent = lazy(() =>
    Promise.resolve({ default: semesterModule[subject] }).catch(() => {
      throw new Error('Subject not found');
    })
  );

  return (
    <SubjectLayout>
      <Suspense fallback={<div>Loading subject...</div>}>
        <SubjectComponent />
      </Suspense>
    </SubjectLayout>
  );
};

type DynamicSyllabusProps = { semester: string; subject: string };
const DynamicSyllabus = ({ semester, subject }: DynamicSyllabusProps) => {
  const semesterModule = (semesterModules as any)[`semester${semester}`];
  if (!semesterModule) {
    return <NotFound />;
  }

  const SyllabusComponent = lazy(() =>
    Promise.resolve({ default: semesterModule[`${subject}Syllabus`] }).catch(() => {
      throw new Error('Syllabus not found');
    })
  );

  return (
    <SubjectLayout>
      <Suspense fallback={<div>Loading syllabus...</div>}>
        <SyllabusComponent />
      </Suspense>
    </SubjectLayout>
  );
};

const SubjectLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/semesters" element={<SemestersPage />} />
          <Route path="/semester/:id" element={<SemesterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/semester/:semester/:subject"
            element={<RouteRenderer type="subject" />}
          />
          <Route
            path="/semester/:semester/:subject/:syllabus"
            element={<RouteRenderer type="syllabus" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

import { useParams } from "react-router-dom";
const RouteRenderer = ({ type }: { type: "subject" | "syllabus" }) => {
  const { semester, subject } = useParams();
  if (!semester || !subject) return <NotFound />;
  if (type === "subject") {
    return <DynamicSubject semester={semester} subject={subject} />;
  }
  const syllabusId = subject.replace(/-syllabus$/, "");
  return <DynamicSyllabus semester={semester} subject={syllabusId} />;
};

export default App;