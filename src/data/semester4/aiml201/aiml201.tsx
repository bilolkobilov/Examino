import React, { useState, useEffect } from "react";
import '@fontsource/jetbrains-mono';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

// Difficulty badge component
const DifficultyBadge = ({ level }: { level: 'Basic' | 'Intermediate' | 'Advanced' }) => {
  const colors = {
    Basic: 'bg-emerald-100 text-emerald-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };
  return (
    <span className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${colors[level]}`}>
      {level}
    </span>
  );
};

// Code block with copy functionality
const CodeBlock = ({ code, language = "python" }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mt-2 md:mt-3">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 p-1.5 md:p-2 rounded bg-gray-800/75 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? <Check size={14} className="md:w-4 md:h-4" /> : <Copy size={14} className="md:w-4 md:h-4" />}
      </button>
      <pre className="p-3 md:p-4 rounded-lg bg-[#1e293b] text-[#d1d5db] overflow-x-auto text-xs md:text-sm font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Question card component
const QuestionCard = ({
  number,
  question,
  difficulty,
  children
}: {
  number: number;
  question: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenRead, setHasBeenRead] = useState(false);

  useEffect(() => {
    if (isOpen && !hasBeenRead) {
      setHasBeenRead(true);
      localStorage.setItem(`aiml-q-${number}`, 'read');
    }
  }, [isOpen, number, hasBeenRead]);

  return (
    <div className="mb-4 md:mb-6 rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-3 md:p-4 bg-[rgb(236,253,245)] hover:bg-[rgb(209,250,229)] transition-colors duration-200"
      >
        <div className="flex items-start md:items-center justify-between gap-2">
          <div className="flex items-start md:items-center gap-2 md:gap-4">
            <span className="text-[rgb(4,120,87)] font-bold text-sm md:text-base mt-1 md:mt-0">{number}.</span>
            <span className="font-medium text-sm md:text-base text-gray-900 leading-tight md:leading-normal">{question}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <DifficultyBadge level={difficulty} />
            <span className="text-[rgb(4,120,87)]">
              {isOpen ? <ChevronUp className="w-4 h-4 md:w-5 md:h-5" /> : <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />}
            </span>
          </div>
        </div>
      </button>
      {isOpen && (
        <div className="p-3 md:p-4 text-sm md:text-base animate-fadeIn">
          {children}
        </div>
      )}
      {hasBeenRead && !isOpen && (
        <div className="h-0.5 md:h-1 bg-emerald-500 transition-all duration-300" />
      )}
    </div>
  );
};

// Main component
const Aiml201 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="mb-8 md:mb-12 text-center px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[rgb(4,120,87)] to-[rgb(16,185,129)] bg-clip-text text-transparent leading-tight">
          Introduction to AI and Machine Learning (AIML201)
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
          A comprehensive guide to AI and Machine Learning concepts with practical Python examples and explanations.
        </p>
        <div className="flex justify-center items-center">
          <a
            href="/semester/4/aiml201/aiml201-syllabus"
            className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-[rgb(4,120,87)] text-white text-sm md:text-base rounded-lg hover:bg-[rgb(6,95,70)] transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            View Syllabus
          </a>
        </div>
      </div>

      {/* Questions section */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[rgb(4,120,87)]">Unit-I: Foundations of AI</h2>
          
          <QuestionCard
            number={1}
            question="Explain the following: (i) intelligence (ii) artificial intelligence (iii) agent (iv) rationality (v) logical reasoning"
            difficulty="Basic"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Intelligence:</b> The ability to learn, understand, reason, plan, and solve problems effectively.</li>
                <li><b>Artificial Intelligence:</b> Simulation of human intelligence processes by machines, especially computer systems.</li>
                <li><b>Agent:</b> An entity that perceives its environment through sensors and acts upon that environment through actuators.</li>
                <li><b>Rationality:</b> Making decisions that maximize the expected value of performance measure given available knowledge.</li>
                <li><b>Logical Reasoning:</b> Process of using logical rules to derive conclusions from given premises.</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={2}
            question="Determine whether the semantics of each of the following propositional logic are Satisfiable or Valid."
            difficulty="Intermediate"
          >
            <div>
              <p>Let's analyze each proposition:</p>
              <ul className="list-disc ml-6">
                <li><b>P1: (A ∧ B) ∨ ¬(A ∨ B)</b>
                  <p>This is satisfiable but not valid. It's true when A and B have opposite truth values.</p>
                </li>
                <li><b>P2: (A ∨ B) → (A ∧ B)</b>
                  <p>This is satisfiable but not valid. It's only true when A and B are both true or both false.</p>
                </li>
                <li><b>P3: (A ∧ B) → (A ∨ ¬B)</b>
                  <p>This is valid (tautology). The implication is always true regardless of A and B values.</p>
                </li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={3}
            question="Describe the various types of Knowledge Representation."
            difficulty="Basic"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Logical Representation:</b> Uses formal logic to represent facts and rules (e.g., propositional logic, predicate logic).</li>
                <li><b>Semantic Networks:</b> Graphical representation where nodes represent objects/concepts and edges represent relationships.</li>
                <li><b>Frames:</b> Structured representation with slots and fillers to represent stereotypical situations.</li>
                <li><b>Production Rules:</b> If-then rules that represent knowledge in condition-action pairs.</li>
                <li><b>Ontologies:</b> Formal specification of concepts and relationships in a domain.</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={4}
            question="Explain the algorithm of Best First Search (BFS). Give an example where BFS would work better than breadth-first search and depth-first search."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Best First Search Algorithm:</b></p>
              <ol className="list-decimal ml-6">
                <li>Start with the initial node, add it to OPEN list</li>
                <li>While OPEN is not empty:
                  <ul className="list-disc ml-6">
                    <li>Select the node with best heuristic value</li>
                    <li>Move it to CLOSED list</li>
                    <li>Expand it and add successors to OPEN list</li>
                    <li>If goal found, return success</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-2"><b>Example where BFS works better:</b></p>
              <p>In route planning with distance heuristics, BFS (using A*) finds optimal paths faster than BFS (exhaustive) or DFS (may get stuck in deep paths).</p>
            </div>
          </QuestionCard>

          <QuestionCard
            number={5}
            question="Determine whether the following proposition is contradiction or tautology: (P ∨ Q) ∧ (P ∨ ~Q) ∧ (~P ∨ Q) ∧ (~P ∨ ~Q)"
            difficulty="Intermediate"
          >
            <div>
              <p>Let's analyze the proposition using truth table:</p>
              <table className="border-collapse border border-gray-400 mt-2">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">P</th>
                    <th className="border border-gray-400 p-2">Q</th>
                    <th className="border border-gray-400 p-2">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-2">T</td>
                    <td className="border border-gray-400 p-2">T</td>
                    <td className="border border-gray-400 p-2">(T) ∧ (T) ∧ (T) ∧ (F) = F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">T</td>
                    <td className="border border-gray-400 p-2">F</td>
                    <td className="border border-gray-400 p-2">(T) ∧ (T) ∧ (F) ∧ (T) = F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">F</td>
                    <td className="border border-gray-400 p-2">T</td>
                    <td className="border border-gray-400 p-2">(T) ∧ (F) ∧ (T) ∧ (F) = F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">F</td>
                    <td className="border border-gray-400 p-2">F</td>
                    <td className="border border-gray-400 p-2">(F) ∧ (T) ∧ (T) ∧ (T) = F</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2">Since the proposition evaluates to False in all cases, it is a <b>contradiction</b>.</p>
            </div>
          </QuestionCard>

          <QuestionCard
            number={6}
            question="Discuss the following applications of artificial intelligence: a. Games b. Theorem Proving c. Natural Language Processing d. Vision and Speech Processing e. Robotics f. Expert Systems"
            difficulty="Basic"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Games:</b> AI powers game opponents (chess engines), procedural content generation, and NPC behavior.</li>
                <li><b>Theorem Proving:</b> Automated reasoning systems that can prove mathematical theorems.</li>
                <li><b>Natural Language Processing:</b> Enables machines to understand, interpret, and generate human language.</li>
                <li><b>Vision and Speech Processing:</b> Image recognition, object detection, speech-to-text, and text-to-speech systems.</li>
                <li><b>Robotics:</b> Autonomous navigation, manipulation, and decision-making in physical environments.</li>
                <li><b>Expert Systems:</b> Computer systems that emulate decision-making ability of human experts in specific domains.</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={7}
            question="Explain Hill Climbing algorithm. What are the problems encountered during hill climbing and what are the ways available to deal with these problems?"
            difficulty="Intermediate"
          >
            <div>
              <p><b>Hill Climbing Algorithm:</b></p>
              <ol className="list-decimal ml-6">
                <li>Start with initial state</li>
                <li>Loop until no better neighbor exists:
                  <ul className="list-disc ml-6">
                    <li>Evaluate all neighboring states</li>
                    <li>Move to the neighbor with highest evaluation</li>
                  </ul>
                </li>
              </ol>
              
              <p className="mt-2"><b>Problems:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Local Maxima:</b> Algorithm gets stuck at suboptimal solutions</li>
                <li><b>Plateaus:</b> Flat regions where all neighbors have same value</li>
                <li><b>Ridges:</b> Sequence of local maxima making progress difficult</li>
              </ul>
              
              <p className="mt-2"><b>Solutions:</b></p>
              <ul className="list-disc ml-6">
                <li>Random restarts</li>
                <li>Simulated annealing</li>
                <li>Tabu search</li>
                <li>Genetic algorithms</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={8}
            question="Represent the given facts in predicate logic, convert to clause form and prove by resolution that Vijay is happy!"
            difficulty="Advanced"
          >
            <div>
              <p><b>Given Facts:</b></p>
              <ol className="list-decimal ml-6">
                <li>Anyone who passes his history exams and wins the lottery is happy:
                  <p>∀x (Pass(x, history) ∧ Win(x, lottery) → Happy(x))</p>
                </li>
                <li>Anyone who studies or is lucky can pass all his exams:
                  <p>∀x (Study(x) ∨ Lucky(x) → ∀y Pass(x, y))</p>
                </li>
                <li>Vijay did not study but he is lucky:
                  <p>¬Study(Vijay) ∧ Lucky(Vijay)</p>
                </li>
                <li>Anyone who is lucky wins the lottery:
                  <p>∀x (Lucky(x) → Win(x, lottery))</p>
                </li>
              </ol>

              <p className="mt-2"><b>Clause Form:</b></p>
              <ol className="list-decimal ml-6">
                <li>¬Pass(x, history) ∨ ¬Win(x, lottery) ∨ Happy(x)</li>
                <li>Study(x) ∨ Pass(x, y)</li>
                <li>¬Lucky(x) ∨ Pass(x, y)</li>
                <li>¬Study(Vijay)</li>
                <li>Lucky(Vijay)</li>
                <li>¬Lucky(x) ∨ Win(x, lottery)</li>
              </ol>

              <p className="mt-2"><b>Resolution Proof:</b></p>
              <ol className="list-decimal ml-6">
                <li>From clause 5 and 6: Win(Vijay, lottery) [Resolve on Lucky]</li>
                <li>From clause 5 and 3: Pass(Vijay, y) [Resolve on Lucky]</li>
                <li>From step 2 (y=history): Pass(Vijay, history)</li>
                <li>From step 1, step 3, and clause 1: Happy(Vijay) [Resolve ¬Pass and Pass, then ¬Win and Win]</li>
              </ol>
            </div>
          </QuestionCard>

          <QuestionCard
            number={9}
            question="Explain A* algorithm. Explain the effect of overestimation and underestimation on A* algorithm."
            difficulty="Intermediate"
          >
            <div>
              <p><b>A* Algorithm:</b></p>
              <p>A* is a best-first search algorithm that finds the least-cost path using:</p>
              <p>f(n) = g(n) + h(n)</p>
              <ul className="list-disc ml-6">
                <li>g(n): actual cost from start to node n</li>
                <li>h(n): heuristic estimate from n to goal</li>
              </ul>

              <p className="mt-2"><b>Effects of Heuristic Accuracy:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Underestimation (h ≤ h*):</b> Guarantees optimal solution but may explore more nodes.</li>
                <li><b>Overestimation (h  h*):</b> May find suboptimal solutions but explores fewer nodes.</li>
              </ul>
              <p>For A* to be optimal, heuristic must be admissible (never overestimate).</p>
            </div>
          </QuestionCard>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[rgb(4,120,87)]">Unit-II: Machine Learning Fundamentals</h2>

          <QuestionCard
            number={10}
            question="Distinguish between Supervised and Unsupervised Learning, providing appropriate examples for each."
            difficulty="Basic"
          >
            <div>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">Aspect</th>
                    <th className="border border-gray-400 p-2">Supervised Learning</th>
                    <th className="border border-gray-400 p-2">Unsupervised Learning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-2">Definition</td>
                    <td className="border border-gray-400 p-2">Uses labeled data to learn mapping from input to output</td>
                    <td className="border border-gray-400 p-2">Finds patterns in unlabeled data</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">Examples</td>
                    <td className="border border-gray-400 p-2">Classification, Regression</td>
                    <td className="border border-gray-400 p-2">Clustering, Dimensionality reduction</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">Applications</td>
                    <td className="border border-gray-400 p-2">Spam detection, House price prediction</td>
                    <td className="border border-gray-400 p-2">Customer segmentation, Anomaly detection</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </QuestionCard>

          <QuestionCard
            number={11}
            question="Compare Classification and Regression problems in Machine Learning, including examples for each."
            difficulty="Basic"
          >
            <div>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">Feature</th>
                    <th className="border border-gray-400 p-2">Classification</th>
                    <th className="border border-gray-400 p-2">Regression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-2">Output Type</td>
                    <td className="border border-gray-400 p-2">Discrete class labels</td>
                    <td className="border border-gray-400 p-2">Continuous numerical values</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">Evaluation</td>
                    <td className="border border-gray-400 p-2">Accuracy, Precision, Recall</td>
                    <td className="border border-gray-400 p-2">MSE, RMSE, R²</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">Examples</td>
                    <td className="border border-gray-400 p-2">Email spam detection, Image recognition</td>
                    <td className="border border-gray-400 p-2">House price prediction, Stock market forecasting</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-2">Algorithms</td>
                    <td className="border border-gray-400 p-2">Logistic Regression, Decision Trees</td>
                    <td className="border border-gray-400 p-2">Linear Regression, Polynomial Regression</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </QuestionCard>

          <QuestionCard
            number={12}
            question="Define Unsupervised Learning and clarify how it differs from Supervised Learning."
            difficulty="Basic"
          >
            <div>
              <p><b>Unsupervised Learning:</b> A type of machine learning where the model learns patterns from unlabeled data without explicit supervision or correct answers.</p>
              
              <p className="mt-2"><b>Key Differences:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Data:</b> Unsupervised uses unlabeled data; supervised uses labeled data</li>
                <li><b>Goal:</b> Unsupervised finds hidden patterns; supervised learns input-output mapping</li>
                <li><b>Applications:</b> Unsupervised - clustering, dimensionality reduction; Supervised - classification, regression</li>
                <li><b>Evaluation:</b> Unsupervised is more subjective (no clear metrics); Supervised has clear metrics (accuracy, MSE)</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={13}
            question="Describe the concept of machines learning from data and its significance in AI and highlight the key differences between Supervised and Unsupervised Learning with examples."
            difficulty="Basic"
          >
            <div>
              <p><b>Machine Learning from Data:</b> The process where algorithms improve their performance on a task through experience (data) without being explicitly programmed.</p>
              
              <p className="mt-2"><b>Significance in AI:</b></p>
              <ul className="list-disc ml-6">
                <li>Enables systems to adapt to new scenarios</li>
                <li>Allows handling of complex, real-world problems</li>
                <li>Reduces need for manual programming</li>
                <li>Improves with more data</li>
              </ul>
              
              <p className="mt-2"><b>Supervised vs Unsupervised:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Supervised:</b> Learns from labeled examples (input-output pairs). Example: Predicting house prices from features.</li>
                <li><b>Unsupervised:</b> Discovers patterns in unlabeled data. Example: Grouping customers by purchasing behavior.</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={14}
            question="Explain the classification of Machine Learning problems into Regression and Classification."
            difficulty="Basic"
          >
            <div>
              <p>Machine Learning problems can be classified based on the nature of the output variable:</p>
              
              <p className="mt-2"><b>1. Classification:</b></p>
              <ul className="list-disc ml-6">
                <li>Output is discrete class labels</li>
                <li>Predicts categories or classes</li>
                <li>Examples: Spam detection (spam/not spam), Disease diagnosis (positive/negative)</li>
              </ul>
              
              <p className="mt-2"><b>2. Regression:</b></p>
              <ul className="list-disc ml-6">
                <li>Output is continuous numerical values</li>
                <li>Predicts quantities</li>
                <li>Examples: House price prediction, Temperature forecasting</li>
              </ul>
              
              <CodeBlock code={`# Classification example
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier()
clf.fit(X_train, y_train)  # y_train contains class labels
predictions = clf.predict(X_test)

# Regression example
from sklearn.linear_model import LinearRegression
reg = LinearRegression()
reg.fit(X_train, y_train)  # y_train contains continuous values
predictions = reg.predict(X_test)`} />
            </div>
          </QuestionCard>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[rgb(4,120,87)]">Unit-III: Linear Regression</h2>

          <QuestionCard
            number={15}
            question="Explain the purpose of the cost function in Linear Regression and its role in model training. Describe the role of Gradient Descent in optimizing Linear Regression models."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Cost Function in Linear Regression:</b></p>
              <ul className="list-disc ml-6">
                <li>Measures how wrong the model's predictions are compared to actual values</li>
                <li>Common cost function: Mean Squared Error (MSE) = 1/n Σ(yᵢ - ŷᵢ)²</li>
                <li>Quantifies error between predicted and actual values</li>
                <li>Goal is to minimize this function during training</li>
              </ul>
              
              <p className="mt-2"><b>Gradient Descent:</b></p>
              <ul className="list-disc ml-6">
                <li>Optimization algorithm that minimizes the cost function</li>
                <li>Works by iteratively adjusting parameters in direction of steepest descent</li>
                <li>Update rule: θⱼ = θⱼ - α * ∂J(θ)/∂θⱼ</li>
                <li>Learning rate (α) controls step size</li>
              </ul>
              
              <CodeBlock code={`# Gradient Descent for Linear Regression
def gradient_descent(X, y, theta, alpha, iterations):
    m = len(y)
    for _ in range(iterations):
        predictions = X.dot(theta)
        errors = predictions - y
        gradient = X.T.dot(errors) / m
        theta -= alpha * gradient
    return theta`} />
            </div>
          </QuestionCard>

          <QuestionCard
            number={16}
            question="Discuss the concept of Model Representation in Linear Regression and its importance in prediction tasks."
            difficulty="Basic"
          >
            <div>
              <p><b>Model Representation:</b></p>
              <p>Linear regression models the relationship between dependent variable (y) and one or more independent variables (x) using a linear equation:</p>
              <p>y = θ₀ + θ₁x₁ + θ₂x₂ + ... + θₙxₙ</p>
              
              <p className="mt-2"><b>Key Components:</b></p>
              <ul className="list-disc ml-6">
                <li>θ₀: y-intercept (bias term)</li>
                <li>θ₁...θₙ: Coefficients for each feature</li>
                <li>x₁...xₙ: Input features</li>
              </ul>
              
              <p className="mt-2"><b>Importance:</b></p>
              <ul className="list-disc ml-6">
                <li>Provides interpretable relationship between variables</li>
                <li>Simple yet effective for many prediction tasks</li>
                <li>Foundation for more complex models</li>
                <li>Allows quantification of feature importance</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={17}
            question="Explain the concept of a single-variable Linear Regression model, its applications, real-world use cases, limitations, and scenarios where it fails to provide accurate predictions."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Single-variable Linear Regression:</b></p>
              <p>Models relationship between one independent variable (x) and dependent variable (y) using:</p>
              <p>y = θ₀ + θ₁x</p>
              
              <p className="mt-2"><b>Applications:</b></p>
              <ul className="list-disc ml-6">
                <li>Predicting house prices based on square footage</li>
                <li>Estimating sales based on advertising spend</li>
                <li>Forecasting temperature based on time of year</li>
              </ul>
              
              <p className="mt-2"><b>Limitations:</b></p>
              <ul className="list-disc ml-6">
                <li>Assumes linear relationship (fails for non-linear data)</li>
                <li>Sensitive to outliers</li>
                <li>Can't capture complex patterns</li>
                <li>May underfit when true relationship is complex</li>
              </ul>
              
              <p className="mt-2"><b>Failure Cases:</b></p>
              <ul className="list-disc ml-6">
                <li>When relationship is non-linear (e.g., polynomial)</li>
                <li>When multiple interacting factors affect outcome</li>
                <li>When data has high variance</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={18}
            question="Describe the purpose of Linear Regression and its significance in predictive modeling."
            difficulty="Basic"
          >
            <div>
              <p><b>Purpose of Linear Regression:</b></p>
              <ul className="list-disc ml-6">
                <li>To model and quantify the relationship between variables</li>
                <li>To predict continuous outcomes based on input features</li>
                <li>To understand how changes in predictors affect the outcome</li>
              </ul>
              
              <p className="mt-2"><b>Significance:</b></p>
              <ul className="list-disc ml-6">
                <li>Foundation for many machine learning algorithms</li>
                <li>Provides interpretable results (coefficients show feature importance)</li>
                <li>Fast to train and implement</li>
                <li>Works well when relationships are approximately linear</li>
                <li>Baseline model for comparison with more complex algorithms</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={19}
            question="Explain how Gradient Descent adjusts parameters in Linear Regression models."
            difficulty="Intermediate"
          >
            <div>
              <p>Gradient descent adjusts parameters iteratively to minimize the cost function:</p>
              
              <ol className="list-decimal ml-6">
                <li><b>Initialize parameters:</b> Start with random values for θ₀, θ₁, ... θₙ</li>
                <li><b>Compute gradient:</b> Calculate partial derivatives of cost function with respect to each parameter</li>
                <li><b>Update parameters:</b> Move parameters in opposite direction of gradient
                  <p>θⱼ := θⱼ - α * ∂J(θ)/∂θⱼ</p>
                  <p>Where α is learning rate</p>
                </li>
                <li><b>Repeat:</b> Until convergence (when changes become very small)</li>
              </ol>
              
              <p className="mt-2"><b>Key Concepts:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Learning rate (α):</b> Controls step size (too large may overshoot, too small may take long)</li>
                <li><b>Batch vs Stochastic:</b> Batch uses all data per iteration, stochastic uses one sample</li>
                <li><b>Convergence:</b> When cost function stops decreasing significantly</li>
              </ul>
              
              <CodeBlock code={`# Parameter update in Python
def update_parameters(X, y, theta, alpha):
    m = len(y)
    predictions = X.dot(theta)
    errors = predictions - y
    gradient = X.T.dot(errors) / m
    theta -= alpha * gradient
    return theta`} />
            </div>
          </QuestionCard>

          <QuestionCard
            number={20}
            question="Discuss the mathematical representation of single-variable Linear Regression, derive the hypothesis function, and explain the role of parameters in the model."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Mathematical Representation:</b></p>
              <p>For single-variable linear regression:</p>
              <p>Hypothesis: hθ(x) = θ₀ + θ₁x</p>
              <p>Where:</p>
              <ul className="list-disc ml-6">
                <li>hθ(x): Predicted value</li>
                <li>θ₀: y-intercept (bias term)</li>
                <li>θ₁: Slope (weight for feature x)</li>
                <li>x: Input feature</li>
              </ul>
              
              <p className="mt-2"><b>Derivation:</b></p>
              <ol className="list-decimal ml-6">
                <li>Start with general linear equation: y = mx + b</li>
                <li>In ML notation: hθ(x) = θ₀ + θ₁x</li>
                <li>θ₀ and θ₁ are learned from data to minimize cost function</li>
              </ol>
              
              <p className="mt-2"><b>Role of Parameters:</b></p>
              <ul className="list-disc ml-6">
                <li><b>θ₀ (bias):</b> Baseline value when all features are zero</li>
                <li><b>θ₁ (weight):</b> How much y changes per unit change in x</li>
              </ul>
              
              <CodeBlock code={`# Example in scikit-learn
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X, y)  # Learns θ₀ (intercept_) and θ₁ (coef_)
print(f"Intercept (θ₀): {model.intercept_}")
print(f"Coefficient (θ₁): {model.coef_[0]}")`} />
            </div>
          </QuestionCard>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[rgb(4,120,87)]">Unit-IV: Logistic Regression</h2>

          <QuestionCard
            number={21}
            question="Explain the Decision Boundary in Logistic Regression and how it differs from Linear Regression."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Decision Boundary in Logistic Regression:</b></p>
              <ul className="list-disc ml-6">
                <li>Threshold (typically 0.5) that separates classes</li>
                <li>For binary classification: Predict 1 if hθ(x) ≥ 0.5, else 0</li>
                <li>Forms a linear boundary in feature space</li>
                <li>Can be visualized in 2D/3D space</li>
              </ul>
              
              <p className="mt-2"><b>Difference from Linear Regression:</b></p>
              <ul className="list-disc ml-6">
                <li>Linear Regression predicts continuous values without boundary</li>
                <li>Logistic Regression outputs probabilities and applies threshold</li>
                <li>Logistic boundary is linear in transformed space (log-odds)</li>
              </ul>
              
              <CodeBlock code={`# Plotting decision boundary
import numpy as np
import matplotlib.pyplot as plt

# Generate data
X = np.array([[1,2], [2,3], [3,1], [6,5], [7,7], [8,6]])
y = np.array([0,0,0,1,1,1])

# Train model
from sklearn.linear_model import LogisticRegression
model = LogisticRegression().fit(X, y)

# Plot boundary
x_min, x_max = X[:,0].min()-1, X[:,0].max()+1
y_min, y_max = X[:,1].min()-1, X[:,1].max()+1
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.1),
                     np.arange(y_min, y_max, 0.1))
Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)
plt.contourf(xx, yy, Z, alpha=0.4)
plt.scatter(X[:,0], X[:,1], c=y)
plt.title("Logistic Regression Decision Boundary")
plt.show()`} />
            </div>
          </QuestionCard>

          <QuestionCard
            number={22}
            question="Describe the Hypothesis Representation in Logistic Regression and its role in classification tasks."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Hypothesis Representation:</b></p>
              <p>Logistic regression uses the sigmoid function to map linear regression output to probabilities:</p>
              <p>hθ(x) = g(θᵀx) = 1 / (1 + e^(-θᵀx))</p>
              <p>Where g(z) = 1 / (1 + e^(-z)) is the sigmoid function</p>
              
              <p className="mt-2"><b>Properties:</b></p>
              <ul className="list-disc ml-6">
                <li>Output range: (0, 1) - can be interpreted as probability</li>
                <li>At z=0, g(z)=0.5</li>
                <li>As z→∞, g(z)→1</li>
                <li>As z→-∞, g(z)→0</li>
              </ul>
              
              <p className="mt-2"><b>Role in Classification:</b></p>
              <ul className="list-disc ml-6">
                <li>Provides probability estimate P(y=1|x;θ)</li>
                <li>Decision boundary at hθ(x) = 0.5 (or other threshold)</li>
                <li>Can handle both linear and (with transformations) non-linear boundaries</li>
              </ul>
              
              <CodeBlock code={`# Sigmoid function
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Hypothesis function
def h(theta, X):
    return sigmoid(X.dot(theta))`} />
            </div>
          </QuestionCard>

          <QuestionCard
            number={23}
            question="Discuss the issue of Overfitting in Logistic Regression and propose methods to mitigate it."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Overfitting in Logistic Regression:</b></p>
              <p>Occurs when model learns training data too well, including noise, resulting in poor generalization.</p>
              
              <p className="mt-2"><b>Causes:</b></p>
              <ul className="list-disc ml-6">
                <li>Too many features relative to training examples</li>
                <li>Highly complex model</li>
                <li>Training data not representative</li>
              </ul>
              
              <p className="mt-2"><b>Mitigation Strategies:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Regularization:</b>
                  <ul className="list-disc ml-6">
                    <li>L1 (Lasso): Adds λΣ|θⱼ| to cost function</li>
                    <li>L2 (Ridge): Adds λΣθⱼ² to cost function</li>
                  </ul>
                </li>
                <li><b>Feature selection:</b> Remove irrelevant features</li>
                <li><b>Cross-validation:</b> Evaluate model on unseen data</li>
                <li><b>Increase training data</b></li>
              </ul>
              
              <CodeBlock code={`# Regularized Logistic Regression
from sklearn.linear_model import LogisticRegression

# L2 regularization (default)
model_l2 = LogisticRegression(penalty='l2', C=1.0)  # C is inverse of λ

# L1 regularization
model_l1 = LogisticRegression(penalty='l1', solver='liblinear')

# ElasticNet (L1 + L2)
model_en = LogisticRegression(penalty='elasticnet', 
                            l1_ratio=0.5, 
                            solver='saga')`} />
            </div>
          </QuestionCard>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[rgb(4,120,87)]">Unit-V: Clustering</h2>

          <QuestionCard
            number={24}
            question="Discuss the importance of clustering algorithms and provide two real-world use-cases (e.g., customer segmentation, image analysis)."
            difficulty="Basic"
          >
            <div>
              <p><b>Importance of Clustering:</b></p>
              <ul className="list-disc ml-6">
                <li>Discovers hidden patterns in unlabeled data</li>
                <li>Reduces data complexity by grouping similar items</li>
                <li>Enables exploratory data analysis</li>
                <li>Foundation for many unsupervised learning tasks</li>
                <li>Useful for anomaly detection</li>
              </ul>
              
              <p className="mt-2"><b>Real-world Use Cases:</b></p>
              <ol className="list-decimal ml-6">
                <li><b>Customer Segmentation:</b>
                  <ul className="list-disc ml-6">
                    <li>Group customers by purchasing behavior</li>
                    <li>Enables targeted marketing</li>
                    <li>Example: E-commerce personalization</li>
                  </ul>
                </li>
                <li><b>Image Analysis:</b>
                  <ul className="list-disc ml-6">
                    <li>Group similar images together</li>
                    <li>Image compression (color clustering)</li>
                    <li>Example: Medical image organization</li>
                  </ul>
                </li>
              </ol>
            </div>
          </QuestionCard>

          <QuestionCard
            number={25}
            question="Discuss a clustering algorithm (e.g., K-means) and explain its application in a practical scenario."
            difficulty="Intermediate"
          >
            <div>
              <p><b>K-means Algorithm:</b></p>
              <ol className="list-decimal ml-6">
                <li>Choose K (number of clusters)</li>
                <li>Initialize K centroids randomly</li>
                <li>Repeat until convergence:
                  <ul className="list-disc ml-6">
                    <li>Assign each point to nearest centroid</li>
                    <li>Update centroids as mean of assigned points</li>
                  </ul>
                </li>
              </ol>
              
              <p className="mt-2"><b>Practical Application - Customer Segmentation:</b></p>
              <p>A retail company can use K-means to group customers based on:</p>
              <ul className="list-disc ml-6">
                <li>Purchase frequency</li>
                <li>Average spend</li>
                <li>Product preferences</li>
              </ul>
              <p>Resulting segments can be targeted with personalized marketing.</p>
              
              <CodeBlock code={`# K-means example
from sklearn.cluster import KMeans
import pandas as pd

# Sample customer data
data = pd.DataFrame({
    'annual_spend': [500, 200, 800, 300, 1000, 200, 700],
    'visit_frequency': [5, 12, 3, 8, 2, 10, 4]
})

# Cluster into 3 groups
kmeans = KMeans(n_clusters=3)
kmeans.fit(data)
data['cluster'] = kmeans.labels_

print(data.groupby('cluster').mean())`} />
            </div>
          </QuestionCard>

          <QuestionCard
            number={26}
            question="Explain the role of clustering in data analysis and provide two practical applications."
            difficulty="Basic"
          >
            <div>
              <p><b>Role in Data Analysis:</b></p>
              <ul className="list-disc ml-6">
                <li>Exploratory tool to discover natural groupings</li>
                <li>Reduces data complexity by grouping similar items</li>
                <li>Identifies outliers/anomalies</li>
                <li>Prepares data for further analysis</li>
                <li>Helps in feature engineering</li>
              </ul>
              
              <p className="mt-2"><b>Practical Applications:</b></p>
              <ol className="list-decimal ml-6">
                <li><b>Document Clustering:</b>
                  <ul className="list-disc ml-6">
                    <li>Group similar documents/news articles</li>
                    <li>Enables efficient information retrieval</li>
                  </ul>
                </li>
                <li><b>Network Security:</b>
                  <ul className="list-disc ml-6">
                    <li>Detect anomalous network traffic patterns</li>
                    <li>Identify potential security threats</li>
                  </ul>
                </li>
              </ol>
            </div>
          </QuestionCard>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-[rgb(4,120,87)]">Numerical Problems</h2>

          <QuestionCard
            number={27}
            question="Student Performance Classification Dataset"
            difficulty="Intermediate"
          >
            <div>
              <p><b>Given Dataset:</b></p>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">S.No</th>
                    <th className="border border-gray-400 p-2">CGPA</th>
                    <th className="border border-gray-400 p-2">Assessment</th>
                    <th className="border border-gray-400 p-2">Project Submitted</th>
                    <th className="border border-gray-400 p-2">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <tr key={i}>
                      <td className="border border-gray-400 p-2">{i}</td>
                      <td className="border border-gray-400 p-2">{[9.2,8.0,8.5,6.0,6.5,8.2,5.8,8.9][i-1]}</td>
                      <td className="border border-gray-400 p-2">{[85,80,81,45,50,72,38,91][i-1]}</td>
                      <td className="border border-gray-400 p-2">{[8,7,8,5,4,7,5,9][i-1]}</td>
                      <td className="border border-gray-400 p-2">{['Pass','Pass','Pass','Fail','Fail','Pass','Fail','Pass'][i-1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <p className="mt-4"><b>Solution:</b></p>
              <p>We can use a classification algorithm like Decision Trees or Logistic Regression. Here's a Python implementation:</p>
              
              <CodeBlock code={`# Student Performance Classification
import pandas as pd
from sklearn.tree import DecisionTreeClassifier

# Create DataFrame
data = {
    'CGPA': [9.2, 8.0, 8.5, 6.0, 6.5, 8.2, 5.8, 8.9],
    'Assessment': [85, 80, 81, 45, 50, 72, 38, 91],
    'Projects': [8, 7, 8, 5, 4, 7, 5, 9],
    'Result': ['Pass', 'Pass', 'Pass', 'Fail', 'Fail', 'Pass', 'Fail', 'Pass']
}
df = pd.DataFrame(data)

# Prepare data
X = df[['CGPA', 'Assessment', 'Projects']]
y = df['Result']

# Train model
model = DecisionTreeClassifier()
model.fit(X, y)

# Predict new student (CGPA=7.5, Assessment=65, Projects=6)
new_student = [[7.5, 65, 6]]
prediction = model.predict(new_student)
print(f"Prediction: {prediction[0]}")  # Likely 'Pass'`} />
              
              <p className="mt-2"><b>Analysis:</b></p>
              <p>The model learns thresholds from the data. Students with CGPA ≥ 6.5, Assessment ≥ 50, and Projects ≥ 5 tend to pass.</p>
            </div>
          </QuestionCard>

          <QuestionCard
            number={28}
            question="Linear Regression Prediction: Week (xᵢ) vs Sales (yᵢ in Thousands)"
            difficulty="Intermediate"
          >
            <div>
              <p><b>Given Data:</b></p>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">Week (xᵢ)</th>
                    <th className="border border-gray-400 p-2">Sales (yᵢ)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5].map(i => (
                    <tr key={i}>
                      <td className="border border-gray-400 p-2">{i}</td>
                      <td className="border border-gray-400 p-2">{[1.2,1.8,2.6,3.2,3.8][i-1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <p className="mt-4"><b>Solution:</b></p>
              <p>We'll fit a linear regression model y = a + bx and predict weeks 7 and 9.</p>
              
              <CodeBlock code={`# Linear Regression Prediction
import numpy as np
from sklearn.linear_model import LinearRegression

# Prepare data
X = np.array([1,2,3,4,5]).reshape(-1,1)
y = np.array([1.2,1.8,2.6,3.2,3.8])

# Fit model
model = LinearRegression()
model.fit(X, y)

# Predict weeks 7 and 9
weeks = np.array([7,9]).reshape(-1,1)
predictions = model.predict(weeks)

print(f"Week 7 prediction: {predictions[0]:.2f} thousand")
print(f"Week 9 prediction: {predictions[1]:.2f} thousand")`} />
              
              <p className="mt-2"><b>Manual Calculation:</b></p>
              <p>Calculating slope (b) and intercept (a):</p>
              <p>Mean of X = 3, Mean of Y = 2.52</p>
              <p>b = Σ((xᵢ - x̄)(yᵢ - ȳ)) / Σ(xᵢ - x̄)² = 6.4 / 10 = 0.64</p>
              <p>a = ȳ - b*x̄ = 2.52 - 0.64*3 = 0.6</p>
              <p>Equation: y = 0.6 + 0.64x</p>
              <p>Week 7: 0.6 + 0.64*7 = 5.08</p>
              <p>Week 9: 0.6 + 0.64*9 = 6.36</p>
            </div>
          </QuestionCard>

          <QuestionCard
            number={29}
            question="Logistic Regression: Given a₀ = 1, a₁ = 8, input x = 60, compute the resultant class."
            difficulty="Basic"
          >
            <div>
              <p><b>Given:</b></p>
              <ul className="list-disc ml-6">
                <li>Intercept (a₀) = 1</li>
                <li>Coefficient (a₁) = 8</li>
                <li>Input (x) = 60</li>
              </ul>
              
              <p className="mt-2"><b>Solution:</b></p>
              <p>Logistic regression formula:</p>
              <p>P(y=1) = 1 / (1 + e^(-(a₀ + a₁x)))</p>
              
              <p className="mt-2"><b>Calculation:</b></p>
              <p>z = a₀ + a₁x = 1 + 8*60 = 481</p>
              <p>P(y=1) = 1 / (1 + e^(-481)) ≈ 1.0</p>
              
              <p className="mt-2"><b>Result:</b></p>
              <p>Since probability {'>'} 0.5, predicted class is <b>1</b>.</p>
              
              <CodeBlock code={`# Verification
import math
a0, a1, x = 1, 8, 60
probability = 1 / (1 + math.exp(-(a0 + a1 * x)))
print(f"Probability: {probability:.4f}")  # Output: 1.0000`} />
            </div>
          </QuestionCard>

          <QuestionCard
            number={30}
            question="Job Offer Prediction Dataset"
            difficulty="Intermediate"
          >
            <div>
              <p><b>Given Dataset:</b></p>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">S.No</th>
                    <th className="border border-gray-400 p-2">CGPA</th>
                    <th className="border border-gray-400 p-2">Interactiveness</th>
                    <th className="border border-gray-400 p-2">Practical Knowledge</th>
                    <th className="border border-gray-400 p-2">Communication Skills</th>
                    <th className="border border-gray-400 p-2">Job Offer</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5,6,7,8,9,10].map(i => (
                    <tr key={i}>
                      <td className="border border-gray-400 p-2">{i}</td>
                      <td className="border border-gray-400 p-2">{['≥9','≥8','≥9','<8','≥8','≥9','<8','≥9','≥8','≥8'][i-1]}</td>
                      <td className="border border-gray-400 p-2">{['Yes','No','No','No','Yes','Yes','Yes','No','Yes','Yes'][i-1]}</td>
                      <td className="border border-gray-400 p-2">{['Very good','Good','Average','Average','Good','Good','Good','Very good','Good','Average'][i-1]}</td>
                      <td className="border border-gray-400 p-2">{['Good','Moderate','Poor','Good','Moderate','Moderate','Poor','Good','Good','Good'][i-1]}</td>
                      <td className="border border-gray-400 p-2">{['Yes','Yes','No','No','Yes','Yes','No','Yes','Yes','Yes'][i-1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <p className="mt-4"><b>Solution:</b></p>
              <p>We'll preprocess the data and use a classification algorithm like Random Forest:</p>
              
              <CodeBlock code={`# Job Offer Prediction
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# Create DataFrame
data = {
    'CGPA': ['≥9','≥8','≥9','<8','≥8','≥9','<8','≥9','≥8','≥8'],
    'Interactiveness': ['Yes','No','No','No','Yes','Yes','Yes','No','Yes','Yes'],
    'Practical': ['Very good','Good','Average','Average','Good','Good','Good','Very good','Good','Average'],
    'Communication': ['Good','Moderate','Poor','Good','Moderate','Moderate','Poor','Good','Good','Good'],
    'Offer': ['Yes','Yes','No','No','Yes','Yes','No','Yes','Yes','Yes']
}
df = pd.DataFrame(data)

# Encode categorical variables
le = LabelEncoder()
df_encoded = df.apply(le.fit_transform)

# Train model
X = df_encoded.drop('Offer', axis=1)
y = df_encoded['Offer']
model = RandomForestClassifier()
model.fit(X, y)

# Feature importance
print("Feature importances:", model.feature_importances_)
# Likely shows CGPA and Practical Knowledge are most important`} />
              
              <p className="mt-2"><b>Patterns:</b></p>
              <ul className="list-disc ml-6">
                <li>Students with CGPA ≥8 and good practical knowledge usually get offers</li>
                <li>Interactiveness helps but isn't mandatory</li>
                <li>Communication skills need to be at least moderate</li>
              </ul>
            </div>
          </QuestionCard>

          <QuestionCard
            number={31}
            question="K-Means Clustering: Given initial seeds Object 2 → (4,6), Object 5 → (12,4)"
            difficulty="Intermediate"
          >
            <div>
              <p><b>Given Dataset:</b></p>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400 p-2">Object</th>
                    <th className="border border-gray-400 p-2">X</th>
                    <th className="border border-gray-400 p-2">Y</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3,4,5].map(i => (
                    <tr key={i}>
                      <td className="border border-gray-400 p-2">{i}</td>
                      <td className="border border-gray-400 p-2">{[2,4,6,10,12][i-1]}</td>
                      <td className="border border-gray-400 p-2">{[4,6,8,4,4][i-1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <p className="mt-4"><b>Solution:</b></p>
              <p>We'll perform K-means clustering (K=2) with given initial centroids:</p>
              
              <CodeBlock code={`# K-means Clustering
import numpy as np
from sklearn.cluster import KMeans

# Data points
X = np.array([[2,4], [4,6], [6,8], [10,4], [12,4]])

# Initial centroids
init_centroids = np.array([[4,6], [12,4]])

# K-means with fixed initialization
kmeans = KMeans(n_clusters=2, init=init_centroids, n_init=1)
kmeans.fit(X)

print("Cluster assignments:", kmeans.labels_)
print("Final centroids:", kmeans.cluster_centers_)`} />
              
              <p className="mt-2"><b>Manual Calculation:</b></p>
              <ol className="list-decimal ml-6">
                <li><b>Initial Centroids:</b> C1=(4,6), C2=(12,4)</li>
                <li><b>First Assignment:</b>
                  <ul className="list-disc ml-6">
                    <li>Object 1: dist(C1)=2.8, dist(C2)=10.2 → Cluster 1</li>
                    <li>Object 2: dist(C1)=0, dist(C2)=8.2 → Cluster 1</li>
                    <li>Object 3: dist(C1)=2.8, dist(C2)=8.2 → Cluster 1</li>
                    <li>Object 4: dist(C1)=6.3, dist(C2)=2 → Cluster 2</li>
                    <li>Object 5: dist(C1)=8.2, dist(C2)=0 → Cluster 2</li>
                  </ul>
                </li>
                <li><b>Update Centroids:</b>
                  <ul className="list-disc ml-6">
                    <li>Cluster 1: (2+4+6)/3=4, (4+6+8)/3=6 → (4,6)</li>
                    <li>Cluster 2: (10+12)/2=11, (4+4)/2=4 → (11,4)</li>
                  </ul>
                </li>
                <li><b>Second Assignment:</b> Same as first, so algorithm converges</li>
              </ol>
              
              <p className="mt-2"><b>Final Result:</b></p>
              <ul className="list-disc ml-6">
                <li><b>Cluster 1:</b> Objects 1, 2, 3</li>
                <li><b>Cluster 2:</b> Objects 4, 5</li>
              </ul>
            </div>
          </QuestionCard>
        </section>
      </div>
    </div>
  );
};

export const subjectData = {
  id: "aiml201",
  code: "AIML201",
  name: "Introduction to AI and Machine Learning",
  credits: 3,
  color: "bg-emerald-100 text-emerald-700"
};

export default Aiml201;