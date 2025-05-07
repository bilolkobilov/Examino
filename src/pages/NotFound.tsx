import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft, AlertTriangle, Sparkles, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const [characterExpression, setCharacterExpression] = useState("sad");
  const [clickCount, setClickCount] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const constraintsRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleCharacterClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount % 3 === 0) {
      setCharacterExpression("happy");
      setTimeout(() => setCharacterExpression("sad"), 1500);
    } else if (clickCount % 5 === 0) {
      setCharacterExpression("surprised");
      setTimeout(() => setCharacterExpression("sad"), 1500);
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.3 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.4, 0.3],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 } 
    },
    tap: { scale: 0.97 }
  };

  const pathVariants = {
    initial: { pathLength: 0 },
    animate: { 
      pathLength: 1,
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 }
    }
  };

  const dragVariants = {
    float: { 
      y: [0, -8, 0],
      scale: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    },
    drag: { 
      scale: 1.08,
      y: 0,
      transition: { duration: 0.15, ease: "easeOut" } 
    },
    dragEnd: { 
      scale: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      } 
    }
  };

  const pathSegments = location.pathname.split('/').filter(Boolean);
  if (pathSegments.length === 0) pathSegments.push('/');

  const characterSize = windowSize.width < 640 ? 56 : 
                        windowSize.width < 768 ? 64 : 72;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <Navbar />
      <AnimatePresence>
        <motion.main 
          className="flex-grow py-12 px-4 sm:py-16 md:py-24 flex flex-col items-center justify-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          ref={constraintsRef}
        >

          <div className="container mx-auto relative z-10 w-full max-w-6xl">
            <motion.div 
              className="mb-6 md:mb-8 px-4"
              variants={itemVariants}
            >
              <div className="flex items-center text-sm text-purple-500 space-x-2">
                <Link 
                  to="/" 
                  className="hover:text-purple-700 transition-colors flex items-center"
                >
                  <Home className="h-3.5 w-3.5 mr-1" />
                  <span>Home</span>
                </Link>
                <span>/</span>
                <span>Page Not Found</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
              <motion.div 
                className="flex flex-col justify-center px-2 sm:px-4 md:px-6 order-2 md:order-1"
                variants={itemVariants}
              >
                <motion.div variants={itemVariants}>
                  <motion.div 
                    className="inline-flex items-center py-1 px-3 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    <span>Error 404</span>
                  </motion.div>
                </motion.div>

                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
                  variants={itemVariants}
                >
                  Page Not Found
                </motion.h1>

                <motion.p 
                  className="text-lg text-purple-700 mb-6 max-w-lg"
                  variants={itemVariants}
                >
                  The page you're looking for doesn't exist or has been moved.
                </motion.p>

                <motion.div 
                  className="mb-8 p-4 bg-purple-50 border border-purple-100 rounded-lg shadow-sm"
                  variants={itemVariants}
                >
                  <p className="text-purple-500 text-sm mb-2">Requested URL:</p>
                  <div className="bg-white p-3 rounded border border-purple-200 font-mono text-sm text-purple-800 overflow-x-auto">
                    {pathSegments.map((segment, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + (index * 0.12) }}
                      >
                        {index > 0 && "/"}
                        {segment}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  variants={itemVariants}
                >
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      aria-label="Return to homepage"
                    >
                      <Home className="h-5 w-5 mr-2" />
                      Return to Home
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/semesters"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-100 text-purple-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                      aria-label="Go to semesters page"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back to Semesters
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="mt-4 sm:mt-6 flex items-center text-purple-500 text-xs sm:text-sm"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Psst! Try dragging the character around...</span>
                  <span className="md:hidden">Psst! Try tapping the character...</span>
                </motion.div>
                <div className="md:hidden flex justify-center mt-4">
                  <motion.div
                    className="relative p-0 pointer-events-auto cursor-pointer"
                    style={{ maxWidth: '100vw' }}
                    initial="float"
                    animate={isDragging ? "drag" : "float"}
                    drag
                    dragTransition={{ 
                      bounceStiffness: 600,
                      bounceDamping: 20
                    }}
                    dragConstraints={constraintsRef}
                    dragElastic={0.5}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => {
                      setIsDragging(false);
                      setCharacterExpression(prev => 
                        prev === "sad" ? "surprised" : "sad"
                      );
                      setTimeout(() => setCharacterExpression("sad"), 1000);
                    }}
                  >
                    <motion.div
                      onClick={handleCharacterClick}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10"
                    >
                      <svg
                        className="w-32 h-32 sm:w-40 sm:h-40"
                        viewBox="0 0 240 240"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.circle 
                          cx="120" 
                          cy="120" 
                          r="100" 
                          fill="#DECDFF"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            duration: 0.6, 
                            ease: [0.175, 0.885, 0.32, 1.275] 
                          }}
                        />
                        <AnimatePresence mode="wait">
                          {characterExpression === "sad" && (
                            <motion.g
                              key="sad"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.path 
                                d="M70 110C70 110 90 90 120 90C150 90 170 110 170 110" 
                                stroke="#7B3AF5" 
                                strokeWidth="6"
                                strokeLinecap="round"
                                variants={pathVariants}
                                initial="initial"
                                animate="animate"
                              />
                              <motion.circle 
                                cx="95" 
                                cy="135" 
                                r="10" 
                                fill="#7B3AF5"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
                              />
                              <motion.circle 
                                cx="145" 
                                cy="135" 
                                r="10" 
                                fill="#7B3AF5"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
                              />
                            </motion.g>
                          )}
                          {characterExpression === "happy" && (
                            <motion.g
                              key="happy"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.path 
                                d="M70 90C70 90 90 110 120 110C150 110 170 90 170 90" 
                                stroke="#7B3AF5" 
                                strokeWidth="6"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.4 }}
                              />
                              <motion.circle 
                                cx="95" 
                                cy="75" 
                                r="8" 
                                fill="#7B3AF5"
                                initial={{ y: 0, scale: 0 }}
                                animate={{ y: 10, scale: 1 }}
                                transition={{ duration: 0.3, type: "spring" }}
                              />
                              <motion.circle 
                                cx="145" 
                                cy="75" 
                                r="8" 
                                fill="#7B3AF5"
                                initial={{ y: 0, scale: 0 }}
                                animate={{ y: 10, scale: 1 }}
                                transition={{ duration: 0.3, type: "spring", delay: 0.1 }}
                              />
                            </motion.g>
                          )}
                          {characterExpression === "surprised" && (
                            <motion.g
                              key="surprised"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.circle 
                                cx="95" 
                                cy="85" 
                                r="15" 
                                stroke="#7B3AF5"
                                strokeWidth="5"
                                fill="#DECDFF"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1, 1.2, 1] }}
                                transition={{ duration: 0.6, times: [0, 0.3, 0.7, 1] }}
                              />
                              <motion.circle 
                                cx="145" 
                                cy="85" 
                                r="15"
                                stroke="#7B3AF5"
                                strokeWidth="5" 
                                fill="#DECDFF"
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1, 1.2, 1] }}
                                transition={{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.7, 1] }}
                              />
                              <motion.path 
                                d="M100 130 C110 140, 130 140, 140 130" 
                                stroke="#7B3AF5" 
                                strokeWidth="5"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              />
                            </motion.g>
                          )}
                        </AnimatePresence>
                        <motion.rect 
                          x="90" 
                          y="170" 
                          width="60" 
                          height="10" 
                          rx="5" 
                          fill="#7B3AF5"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1, duration: 0.3, type: "spring" }}
                        />
                      </svg>
                      {clickCount === 0 && (
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center text-purple-800 text-center text-base font-medium opacity-0"
                          animate={{ 
                            opacity: [0, 0.7, 0],
                            scale: [0.9, 1, 0.9]
                          }}
                          transition={{ 
                            delay: 1.5, 
                            duration: 2, 
                            times: [0, 0.5, 1],
                            repeat: 1,
                            repeatDelay: 3
                          }}
                        >
                          <span className="bg-white/70 px-2 py-1 rounded-full">Tap me!</span>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="hidden md:flex items-center justify-center order-1 md:order-2 pt-2 sm:pt-4 md:pt-0">
                <motion.div 
                  className="relative bg-purple-700/5 rounded-full p-4 sm:p-8 md:p-12 cursor-grab active:cursor-grabbing touch-manipulation max-w-[90vw] max-h-[50vw] sm:max-w-none sm:max-h-none"
                  initial="float"
                  animate={isDragging ? "drag" : "float"}
                  drag
                  dragTransition={{ 
                    bounceStiffness: 600,
                    bounceDamping: 20
                  }}
                  dragConstraints={constraintsRef}
                  dragElastic={0.5}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={() => {
                    setIsDragging(false);
                    setCharacterExpression(prev => 
                      prev === "sad" ? "surprised" : "sad"
                    );
                    setTimeout(() => setCharacterExpression("sad"), 1000);
                  }}
                >
                  <motion.div
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 bg-purple-300 rounded-full opacity-30 blur-xl"
                  />
                  <motion.div
                    onClick={handleCharacterClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    <svg
                      className={`w-${characterSize} h-${characterSize}`}
                      viewBox="0 0 240 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.circle 
                        cx="120" 
                        cy="120" 
                        r="100" 
                        fill="#DECDFF"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.175, 0.885, 0.32, 1.275] 
                        }}
                      />
                      <AnimatePresence mode="wait">
                        {characterExpression === "sad" && (
                          <motion.g
                            key="sad"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.path 
                              d="M70 110C70 110 90 90 120 90C150 90 170 110 170 110" 
                              stroke="#7B3AF5" 
                              strokeWidth="6"
                              strokeLinecap="round"
                              variants={pathVariants}
                              initial="initial"
                              animate="animate"
                            />
                            <motion.circle 
                              cx="95" 
                              cy="135" 
                              r="10" 
                              fill="#7B3AF5"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
                            />
                            <motion.circle 
                              cx="145" 
                              cy="135" 
                              r="10" 
                              fill="#7B3AF5"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
                            />
                          </motion.g>
                        )}
                        {characterExpression === "happy" && (
                          <motion.g
                            key="happy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.path 
                              d="M70 90C70 90 90 110 120 110C150 110 170 90 170 90" 
                              stroke="#7B3AF5" 
                              strokeWidth="6"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.4 }}
                            />
                            <motion.circle 
                              cx="95" 
                              cy="75" 
                              r="8" 
                              fill="#7B3AF5"
                              initial={{ y: 0, scale: 0 }}
                              animate={{ y: 10, scale: 1 }}
                              transition={{ duration: 0.3, type: "spring" }}
                            />
                            <motion.circle 
                              cx="145" 
                              cy="75" 
                              r="8" 
                              fill="#7B3AF5"
                              initial={{ y: 0, scale: 0 }}
                              animate={{ y: 10, scale: 1 }}
                              transition={{ duration: 0.3, type: "spring", delay: 0.1 }}
                            />
                          </motion.g>
                        )}
                        {characterExpression === "surprised" && (
                          <motion.g
                            key="surprised"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.circle 
                              cx="95" 
                              cy="85" 
                              r="15" 
                              stroke="#7B3AF5"
                              strokeWidth="5"
                              fill="#DECDFF"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1, 1.2, 1] }}
                              transition={{ duration: 0.6, times: [0, 0.3, 0.7, 1] }}
                            />
                            <motion.circle 
                              cx="145" 
                              cy="85" 
                              r="15"
                              stroke="#7B3AF5"
                              strokeWidth="5" 
                              fill="#DECDFF"
                              initial={{ scale: 0 }}
                              animate={{ scale: [0, 1, 1.2, 1] }}
                              transition={{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.7, 1] }}
                            />
                            <motion.path 
                              d="M100 130 C110 140, 130 140, 140 130" 
                              stroke="#7B3AF5" 
                              strokeWidth="5"
                              strokeLinecap="round"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            />
                          </motion.g>
                        )}
                      </AnimatePresence>
                      <motion.rect 
                        x="90" 
                        y="170" 
                        width="60" 
                        height="10" 
                        rx="5" 
                        fill="#7B3AF5"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, duration: 0.3, type: "spring" }}
                      />
                    </svg>
                    {clickCount === 0 && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center text-purple-800 text-center text-lg font-medium opacity-0"
                        animate={{ 
                          opacity: [0, 0.7, 0],
                          scale: [0.9, 1, 0.9]
                        }}
                        transition={{ 
                          delay: 1.5, 
                          duration: 2, 
                          times: [0, 0.5, 1],
                          repeat: 1,
                          repeatDelay: 3
                        }}
                      >
                        <span className="bg-white/70 px-2 py-1 rounded-full">Tap me!</span>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default NotFound;