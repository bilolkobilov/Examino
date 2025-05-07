import React, { useState, useEffect } from "react";
import '@fontsource/jetbrains-mono';
import { Copy, Check, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

// Difficulty badge component
const DifficultyBadge = ({ level }: { level: 'Basic' | 'Intermediate' | 'Advanced' }) => {
  const colors = {
    Basic: 'bg-green-100 text-green-800',
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
const CodeBlock = ({ code, language = "java" }: { code: string; language?: string }) => {
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

// Question component with expanded features
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
      // You could store this in localStorage for persistence
      localStorage.setItem(`java-q-${number}`, 'read');
    }
  }, [isOpen, number, hasBeenRead]);

  return (
    <div className="mb-4 md:mb-6 rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-3 md:p-4 bg-[#f9f5ff] hover:bg-[#f3e8ff] transition-colors duration-200"
      >
        <div className="flex items-start md:items-center justify-between gap-2">
          <div className="flex items-start md:items-center gap-2 md:gap-4">
            <span className="text-[#4c1d95] font-bold text-sm md:text-base mt-1 md:mt-0">{number}.</span>
            <span className="font-medium text-sm md:text-base text-gray-900 leading-tight md:leading-normal">{question}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <DifficultyBadge level={difficulty} />
            <span className="text-[#4c1d95]">
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
        <div className="h-0.5 md:h-1 bg-green-500 transition-all duration-300" />
      )}
    </div>
  );
};

// Main component
const It201 = () => {
  const [filter, setFilter] = useState<'all' | 'Basic' | 'Intermediate' | 'Advanced'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header section */}
      <div className="mb-8 md:mb-12 text-center px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#4c1d95] to-[rgb(190,18,60)] bg-clip-text text-transparent leading-tight">
          Java Programming (IT201)
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
          A comprehensive guide to Java programming concepts with practical examples and explanations.
        </p>
        <div className="flex justify-center items-center">
          <a
            href="/semester/4/it201/it201-syllabus"
            className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-[#4c1d95] text-white text-sm md:text-base rounded-lg hover:bg-[#3a146e] transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            View Syllabus
          </a>
        </div>
      </div>

      {/* Questions section */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-[#4c1d95]">Core Java Concepts</h2>
          <QuestionCard
            number={1}
            question="What are the major features of Java that support object-oriented programming?"
            difficulty="Basic"
          >
            <div>
              <p><b>Java</b> supports object-oriented programming (OOP) through these main features:</p>
              <ul className="list-disc ml-6">
                <li><b>Encapsulation</b>: Bundles data (fields) and code (methods) inside a class, protecting data from outside interference.</li>
                <li><b>Inheritance</b>: Lets a class (child) use properties and methods of another class (parent), promoting code reuse.</li>
                <li><b>Polymorphism</b>: Allows one interface to be used for different data types (e.g., method overloading and overriding).</li>
                <li><b>Abstraction</b>: Hides complex implementation details and shows only the necessary features (using abstract classes or interfaces).</li>
              </ul>
              <p className="mt-4">Example:</p>
              <CodeBlock code={`class Animal { // Encapsulation
      void sound() { // Polymorphism (overridden in subclasses)
          System.out.println("Animal makes a sound");
      }
  }
  class Dog extends Animal { // Inheritance
      @Override
      void sound() {
          System.out.println("Dog barks");
      }
  }`} />
              <p className="mt-4"><b>Explanation:</b> The <code>Animal</code> class encapsulates data and behavior. <code>Dog</code> inherits from <code>Animal</code> and overrides the <code>sound()</code> method, demonstrating polymorphism and inheritance.</p>
            </div>
          </QuestionCard>
          
          <QuestionCard
            number={2}
            question="What is a constructor in Java? Write a program to demonstrate constructor overloading."
            difficulty="Basic"
          >
            <div>
              <p>A <b>constructor</b> is a special method called when an object is created. It initializes the object. <b>Constructor overloading</b> means having multiple constructors with different parameter lists in the same class.</p>
              <CodeBlock code={`class Student {
      String name;
      int age;
      // Default constructor
      Student() {
          name = "Unknown";
          age = 0;
      }
      // Parameterized constructor
      Student(String n, int a) {
          name = n;
          age = a;
      }
      void display() {
          System.out.println(name + ", " + age);
      }
      public static void main(String[] args) {
          Student s1 = new Student();
          Student s2 = new Student("Alice", 20);
          s1.display(); // Unknown, 0
          s2.display(); // Alice, 20
      }
  }`} />
              <p className="mt-4"><b>Explanation:</b> The <code>Student</code> class has two constructors: one with no arguments (default) and one with parameters. This is constructor overloading.</p>
            </div>
          </QuestionCard>

          {/* 3. Inheritance types and multilevel example */}
          <QuestionCard
            number={3}
            question="What is inheritance? Explain different types with a multilevel inheritance example."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Inheritance</b> is a fundamental OOP concept where a class can inherit properties and methods from another class. Types:</p>
              <ul className="list-disc ml-6">
                <li><b>Single</b>: One class inherits from one class</li>
                <li><b>Multilevel</b>: Chain of inheritance (A → B → C)</li>
                <li><b>Hierarchical</b>: Multiple classes inherit from one class</li>
                <li><b>Multiple</b>: One class inherits from multiple classes (supported through interfaces in Java)</li>
              </ul>
              <p className="mt-2">Multilevel Inheritance Example:</p>
              <CodeBlock code={`
  class Animal {
      void eat() { System.out.println("Eating"); }
  }
  class Dog extends Animal {
      void bark() { System.out.println("Barking"); }
  }
  class Puppy extends Dog {
      void weep() { System.out.println("Weeping"); }
      public static void main(String[] args) {
          Puppy p = new Puppy();
          p.eat();   // From Animal
          p.bark();  // From Dog
          p.weep();  // Own method
      }
  }`} />
              <div className="mt-2">
                <b>Line-by-line Explanation:</b>
                <ul className="list-disc ml-6">
                  <li><code>{'class Animal { ... }'}</code>: Base class (superclass) definition. This is the root of our inheritance hierarchy.</li>
                  <li><code>{'void eat() { ... }'}</code>: Method in Animal class with no return value (<code>void</code>). All subclasses will inherit this method.</li>
                  <li><code>{'class Dog extends Animal'}</code>: Dog class inherits from Animal using <code>extends</code> keyword. It now has access to <code>eat()</code>.</li>
                  <li><code>{'void bark() { ... }'}</code>: New method specific to Dog class. Not available in Animal.</li>
                  <li><code>{'class Puppy extends Dog'}</code>: Puppy inherits from Dog (which inherits from Animal) - this is multilevel inheritance.</li>
                  <li><code>{'void weep() { ... }'}</code>: Method specific to Puppy class.</li>
                  <li><code>{'public static void main(String[] args)'}</code>: Entry point of the program. <code>public</code> makes it accessible everywhere, <code>static</code> means it belongs to the class.</li>
                  <li><code>{'Puppy p = new Puppy()'}</code>: Creates a new Puppy object. Can access methods from all three classes.</li>
                  <li><code>{'p.eat()'}</code>: Calls method from Animal (grandfather class)</li>
                  <li><code>{'p.bark()'}</code>: Calls method from Dog (parent class)</li>
                  <li><code>{'p.weep()'}</code>: Calls method from Puppy (own class)</li>
                </ul>
                <p className="mt-2"><b>Key Concepts Demonstrated:</b></p>
                <ul className="list-disc ml-6">
                  <li>Method Inheritance: Puppy can use methods from all ancestor classes</li>
                  <li>Access Hierarchy: Each level adds new functionality</li>
                  <li>Code Reuse: No need to rewrite inherited methods</li>
                  <li>Multilevel Chain: Animal → Dog → Puppy shows three levels of inheritance</li>
                </ul>
              </div>
            </div>
          </QuestionCard>

          {/* 4. Compile-time vs run-time polymorphism */}
          <QuestionCard
            number={4}
            question="Differentiate between compile-time and run-time polymorphism. Explain with method overloading and overriding."
            difficulty="Intermediate"
          >
            <div>
              <p className="mb-2">Java supports two types of polymorphism:</p>
              <ul className="list-disc ml-6 mb-4">
                <li><b>Compile-time polymorphism (Static)</b>: Method overloading, resolved during compilation</li>
                <li><b>Run-time polymorphism (Dynamic)</b>: Method overriding, resolved during execution</li>
              </ul>
              <CodeBlock code={`
  // Compile-time polymorphism (Method Overloading)
  class Calculator {
      // Method with 2 integer parameters
      int add(int a, int b) {
          return a + b;
      }
      // Overloaded method with 3 integer parameters
      int add(int a, int b, int c) {
          return a + b + c;
      }
      // Overloaded method with double parameters
      double add(double a, double b) {
          return a + b;
      }
  }
  
  // Run-time polymorphism (Method Overriding)
  class Animal {
      void makeSound() {
          System.out.println("Some sound");
      }
  }
  
  class Cat extends Animal {
      @Override
      void makeSound() {
          System.out.println("Meow");
      }
  }
  
  class Main {
      public static void main(String[] args) {
          // Compile-time polymorphism
          Calculator calc = new Calculator();
          System.out.println(calc.add(5, 3));       // Calls first method
          System.out.println(calc.add(5, 3, 2));    // Calls second method
          System.out.println(calc.add(5.5, 3.5));   // Calls third method
  
          // Run-time polymorphism
          Animal animal = new Cat();    // Reference type Animal, object type Cat
          animal.makeSound();           // Calls Cat's makeSound() method
      }
  }`} />
              <div className="mt-2">
                <b>Line-by-line Explanation:</b>
                <ul className="list-disc ml-6">
                  <h4 className="font-semibold mt-2">Compile-time Polymorphism:</h4>
                  <li><code>class Calculator</code>: Class demonstrating method overloading</li>
                  <li><code>int add(int a, int b)</code>: First version of add method with 2 integer parameters</li>
                  <li><code>int add(int a, int b, int c)</code>: Overloaded version with 3 parameters</li>
                  <li><code>double add(double a, double b)</code>: Overloaded version with different parameter types</li>
                  
                  <h4 className="font-semibold mt-2">Run-time Polymorphism:</h4>
                  <li><code>class Animal</code>: Base class with a method that will be overridden</li>
                  <li><code>void makeSound()</code>: Method in base class</li>
                  <li><code>class Cat extends Animal</code>: Subclass that will override the method</li>
                  <li><code>@Override</code>: Annotation indicating method overriding</li>
                  <li><code>Animal animal = new Cat()</code>: Creates Cat object with Animal reference</li>
                  
                  <h4 className="font-semibold mt-2">Key Differences:</h4>
                  <li>Method overloading is resolved based on method signature during compilation</li>
                  <li>Method overriding is resolved based on the actual object type during runtime</li>
                  <li>Overloading requires different parameter lists</li>
                  <li>Overriding requires inheritance and same method signature</li>
                </ul>
                
                <p className="mt-2"><b>Important Concepts:</b></p>
                <ul className="list-disc ml-6">
                  <li><b>Method Signature</b>: Name and parameter list (type, number, order)</li>
                  <li><b>Dynamic Binding</b>: Runtime decision of which method to call</li>
                  <li><b>Static Binding</b>: Compile-time decision of which method to call</li>
                  <li><b>Virtual Method Invocation</b>: Process of calling overridden method</li>
                </ul>
              </div>
            </div>
          </QuestionCard>

          {/* 5. Interface and multiple inheritance */}
          <QuestionCard
            number={5}
            question="What is an interface in Java? How can it be used to achieve multiple inheritance?"
            difficulty="Intermediate"
          >
            <div>
              <p>An <b>interface</b> is a reference type with abstract methods. A class can implement multiple interfaces, achieving multiple inheritance (not possible with classes alone).</p>
              <CodeBlock code={`
  interface A { void show(); }
  interface B { void display(); }
  class Demo implements A, B {
      public void show() { System.out.println("Show"); }
      public void display() { System.out.println("Display"); }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 6. Abstract class vs interface */}
          <QuestionCard
            number={6}
            question="What is the difference between abstract classes and interfaces in Java?"
            difficulty="Intermediate"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Abstract class</b>: Can have method bodies, fields, constructors. Supports single inheritance.</li>
                <li><b>Interface</b>: Only abstract methods (Java 8+: default/static allowed), no constructors, supports multiple inheritance.</li>
              </ul>
              <CodeBlock code={`
  abstract class Animal {
      abstract void sound();
      void eat() { System.out.println("Eating"); }
  }
  interface Pet {
      void play();
  }
  `} />
            </div>
          </QuestionCard>

          {/* 7. Functional interface and lambda */}
          <QuestionCard
            number={7}
            question="What is a functional interface? How is it used with lambda expressions?"
            difficulty="Basic"
          >
            <div>
              <p>A <b>functional interface</b> has only one abstract method. Lambdas can be used to implement them concisely.</p>
              <CodeBlock code={`
  @FunctionalInterface
  interface Greetable {
      void greet(String name);
  }
  public class Main {
      public static void main(String[] args) {
          Greetable g = (name) -> System.out.println("Hello, " + name);
          g.greet("Alice"); // Output: Hello, Alice
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 8. Lambda to sort array of strings */}
          <QuestionCard
            number={8}
            question="Write a Java program using lambda expressions to sort an array of strings."
            difficulty="Basic"
          >
            <div>
              <CodeBlock code={`
  import java.util.Arrays;
  public class SortStrings {
      public static void main(String[] args) {
          String[] arr = {"Banana", "Apple", "Mango"};
          Arrays.sort(arr, (a, b) -> a.compareTo(b));
          for(String s : arr) {
              System.out.println(s);
          }
      }
  }
  `} />
              <p className="mt-4"><b>Explanation:</b> The <code>Arrays.sort</code> method uses a lambda expression to compare strings alphabetically.</p>
            </div>
          </QuestionCard>

          {/* 9. Custom annotation */}
          <QuestionCard
            number={9}
            question="What is a custom annotation? How is it different from built-in annotations? Demonstrate usage."
            difficulty="Intermediate"
          >
            <div>
              <p>A <b>custom annotation</b> is user-defined. Built-in annotations are provided by Java (like <code>@Override</code>). Custom ones are created with <code>@interface</code>.</p>
              <CodeBlock code={`
  // Define custom annotation
  @interface MyAnnotation {
      String value();
  }
  // Use annotation
  @MyAnnotation(value = "Example")
  class Demo {}
  `} />
            </div>
          </QuestionCard>

          {/* 10. Purpose of annotations */}
          <QuestionCard
            number={10}
            question="Explain the purpose of Java annotations. List some commonly used built-in annotations."
            difficulty="Basic"
          >
            <div>
              <p><b>Annotations</b> provide metadata about code. They are used for compiler checks, code analysis, and frameworks.</p>
              <ul className="list-disc ml-6">
                <li><code>@Override</code>: Checks if a method overrides a superclass method.</li>
                <li><code>@Deprecated</code>: Marks code as outdated.</li>
                <li><code>@SuppressWarnings</code>: Suppresses compiler warnings.</li>
              </ul>
            </div>
          </QuestionCard>

          {/* Exception Handling */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Exception Handling</h3>

          {/* 11. Errors vs Exceptions */}
          <QuestionCard
            number={11}
            question="Differentiate between errors and exceptions with suitable examples."
            difficulty="Basic"
          >
            <div>
              <p><b>Errors</b> are serious issues not meant to be handled by programs (e.g., <code>OutOfMemoryError</code>). <b>Exceptions</b> are conditions that can be handled (e.g., <code>NullPointerException</code>).</p>
              <CodeBlock code={`
  // Error example
  public class ErrorDemo {
      public static void main(String[] args) {
          // StackOverflowError (error)
          main(args);
      }
  }
  // Exception example
  public class ExceptionDemo {
      public static void main(String[] args) {
          int a = 5 / 0; // ArithmeticException
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 12. Types of exceptions */}
          <QuestionCard
            number={12}
            question="What are the different types of exceptions in Java? Explain with examples."
            difficulty="Intermediate"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Checked exceptions</b>: Checked at compile time (e.g., <code>IOException</code>).</li>
                <li><b>Unchecked exceptions</b>: Checked at runtime (e.g., <code>NullPointerException</code>).</li>
              </ul>
              <CodeBlock code={`
  // Checked exception
  import java.io.*;
  class CheckedDemo {
      public static void main(String[] args) throws IOException {
          FileReader fr = new FileReader("file.txt");
      }
  }
  // Unchecked exception
  class UncheckedDemo {
      public static void main(String[] args) {
          String s = null;
          System.out.println(s.length()); // NullPointerException
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 13. Custom exceptions */}
          <QuestionCard
            number={13}
            question="How are custom exceptions created and handled in Java?"
            difficulty="Intermediate"
          >
            <div>
              <p>Custom exceptions extend <code>Exception</code> or <code>RuntimeException</code>.</p>
              <CodeBlock code={`
  class MyException extends Exception {
      public MyException(String msg) { super(msg); }
  }
  public class TestCustomException {
      public static void main(String[] args) {
          try {
              throw new MyException("Custom error!");
          } catch (MyException e) {
              System.out.println(e.getMessage());
          }
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 14. try-catch-finally with built-in and custom exceptions */}
          <QuestionCard
            number={14}
            question="Write a program demonstrating try-catch-finally with built-in and custom exceptions."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  class MyException extends Exception {
      public MyException(String msg) { super(msg); }
  }
  public class ExceptionDemo {
      public static void main(String[] args) {
          try {
              int a = 5 / 0; // Built-in exception
          } catch (ArithmeticException e) {
              System.out.println("Caught: " + e);
          } finally {
              System.out.println("Finally block always runs");
          }
          try {
              throw new MyException("Custom error");
          } catch (MyException e) {
              System.out.println("Caught custom: " + e.getMessage());
          }
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* Multithreading */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Multithreading</h3>

          {/* 15. What is multithreading? Thread and Runnable */}
          <QuestionCard
            number={15}
            question="What is multithreading in Java? Explain the process of creating threads using Thread and Runnable."
            difficulty="Basic"
          >
            <div>
              <p><b>Multithreading</b> allows multiple parts of a program to run at the same time. Threads can be created by extending <code>Thread</code> or implementing <code>Runnable</code>.</p>
              <CodeBlock code={`
  // Extending Thread
  class MyThread extends Thread {
      public void run() {
          System.out.println("Thread running");
      }
  }
  // Implementing Runnable
  class MyRunnable implements Runnable {
      public void run() {
          System.out.println("Runnable running");
      }
  }
  public class ThreadDemo {
      public static void main(String[] args) {
          new MyThread().start();
          new Thread(new MyRunnable()).start();
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 16. Thread priority */}
          <QuestionCard
            number={16}
            question="What is thread priority and how can we set it?"
            difficulty="Basic"
          >
            <div>
              <p>Thread priority determines the order in which threads are scheduled. Use <code>setPriority()</code> (1 to 10).</p>
              <CodeBlock code={`
  Thread t = new Thread();
  t.setPriority(Thread.MAX_PRIORITY); // 10
  `} />
            </div>
          </QuestionCard>

          {/* 17. Thread lifecycle and start() vs run() */}
          <QuestionCard
            number={17}
            question="Explain the lifecycle of a thread in Java with a diagram. Differentiate between start() and run()."
            difficulty="Intermediate"
          >
            <div>
              <p><b>Lifecycle:</b> New → Runnable → Running → Blocked/Waiting → Dead</p>
              <p><b>start()</b> creates a new thread and calls <code>run()</code>. Calling <code>run()</code> directly does not start a new thread.</p>
              <CodeBlock code={`
  Thread t = new Thread(() -> System.out.println("Hello"));
  t.start(); // New thread
  // t.run(); // Runs in current thread
  `} />
            </div>
          </QuestionCard>

          {/* 18. Thread synchronization with synchronized keyword */}
          <QuestionCard
            number={18}
            question="How is thread synchronization implemented in Java? Explain with synchronized keyword."
            difficulty="Intermediate"
          >
            <div>
              <p><b>synchronized</b> ensures only one thread accesses a block/method at a time.</p>
              <CodeBlock code={`
  class Counter {
      private int count = 0;
      public synchronized void increment() {
          count++;
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 19. Synchronized methods */}
          <QuestionCard
            number={19}
            question="What are synchronized methods and why are they important?"
            difficulty="Basic"
          >
            <div>
              <p>Synchronized methods prevent thread interference and memory consistency errors by allowing only one thread to execute them at a time.</p>
              <CodeBlock code={`
  class SyncDemo {
      public synchronized void print() {
          System.out.println("Synchronized method");
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 20. Program: extends Thread and print numbers */}
          <QuestionCard
            number={20}
            question="Create a Java program that extends the Thread class and prints numbers using multiple threads."
            difficulty="Basic"
          >
            <div>
              <CodeBlock code={`
  class NumberThread extends Thread {
      private int num;
      public NumberThread(int num) { this.num = num; }
      public void run() {
          System.out.println("Number: " + num);
      }
      public static void main(String[] args) {
          for (int i = 1; i <= 5; i++) {
              new NumberThread(i).start();
          }
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* String Handling */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 String Handling</h3>

          {/* 21. What is a String? Immutability */}
          <QuestionCard
            number={21}
            question="What is a String in Java? Explain the concept of immutability with code."
            difficulty="Basic"
          >
            <div>
              <p>A <b>String</b> is a sequence of characters. Strings are <b>immutable</b>: once created, they cannot be changed.</p>
              <CodeBlock code={`
  String s1 = "Hello";
  s1.concat(" World"); // Does not change s1
  System.out.println(s1); // Output: Hello
  `} />
            </div>
          </QuestionCard>

          {/* 22. String operations: compareTo, substring, concat, replace */}
          <QuestionCard
            number={22}
            question="What are different types of string operations in Java? Demonstrate compareTo(), substring(), concat() and replace()."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  String s = "Java";
  System.out.println(s.compareTo("Javb")); // -1
  System.out.println(s.substring(1,3)); // av
  System.out.println(s.concat(" Programming")); // Java Programming
  System.out.println(s.replace('a','o')); // Jovo
  `} />
            </div>
          </QuestionCard>

          {/* Collections Framework */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Collections Framework</h3>

          {/* 23. What is the Java Collection Framework? List vs Set vs Map */}
          <QuestionCard
            number={23}
            question="What is the Java Collection Framework? What are the differences between List, Set, and Map?"
            difficulty="Basic"
          >
            <div>
              <p>The <b>Java Collection Framework</b> provides classes and interfaces for storing groups of objects.</p>
              <ul className="list-disc ml-6">
                <li><b>List</b>: Ordered, allows duplicates (e.g., ArrayList).</li>
                <li><b>Set</b>: Unordered, no duplicates (e.g., HashSet).</li>
                <li><b>Map</b>: Key-value pairs (e.g., HashMap).</li>
              </ul>
            </div>
          </QuestionCard>

          {/* 24. ArrayList vs LinkedList */}
          <QuestionCard
            number={24}
            question="Explain the differences between ArrayList and LinkedList. When should each be used?"
            difficulty="Intermediate"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>ArrayList</b>: Fast random access, slow insert/delete in middle. Use for frequent access.</li>
                <li><b>LinkedList</b>: Fast insert/delete, slow random access. Use for frequent insert/delete.</li>
              </ul>
            </div>
          </QuestionCard>

          {/* 25. HashSet vs TreeSet */}
          <QuestionCard
            number={25}
            question="Differentiate between HashSet and TreeSet with examples."
            difficulty="Intermediate"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>HashSet</b>: Unordered, fast, allows null.</li>
                <li><b>TreeSet</b>: Sorted, slower, no null.</li>
              </ul>
              <CodeBlock code={`
  import java.util.*;
  HashSet<String> hs = new HashSet<>();
  hs.add("B"); hs.add("A");
  System.out.println(hs); // [A, B] (order not guaranteed)
  TreeSet<String> ts = new TreeSet<>();
  ts.add("B"); ts.add("A");
  System.out.println(ts); // [A, B] (sorted)
  `} />
            </div>
          </QuestionCard>

          {/* 26. Map interface and HashMap example */}
          <QuestionCard
            number={26}
            question="Explain the Map interface with an example using HashMap."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.util.*;
  HashMap<Integer, String> map = new HashMap<>();
  map.put(1, "Alice");
  map.put(2, "Bob");
  System.out.println(map.get(1)); // Alice
  `} />
            </div>
          </QuestionCard>

          {/* 27. HashMap for student records */}
          <QuestionCard
            number={27}
            question="Write a Java program using HashMap to store and retrieve student records."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.util.*;
  public class StudentMap {
      public static void main(String[] args) {
          HashMap<Integer, String> students = new HashMap<>();
          students.put(101, "Alice");
          students.put(102, "Bob");
          System.out.println(students.get(101)); // Alice
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 28. Stack and queue with ArrayDeque */}
          <QuestionCard
            number={28}
            question="Write a program to demonstrate stack and queue operations using ArrayDeque."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.util.*;
  ArrayDeque<Integer> stack = new ArrayDeque<>();
  stack.push(1); stack.push(2);
  System.out.println(stack.pop()); // 2 (stack)
  ArrayDeque<Integer> queue = new ArrayDeque<>();
  queue.offer(1); queue.offer(2);
  System.out.println(queue.poll()); // 1 (queue)
  `} />
            </div>
          </QuestionCard>

          {/* 29. Iterating over a List */}
          <QuestionCard
            number={29}
            question="How do you iterate over a List using different approaches?"
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  List<String> list = Arrays.asList("A", "B", "C");
  // For loop
  for(int i=0;i<list.size();i++) System.out.println(list.get(i));
  // Enhanced for
  for(String s : list) System.out.println(s);
  // forEach with lambda
  list.forEach(s -> System.out.println(s));
  `} />
            </div>
          </QuestionCard>

          {/* Generics and Packages */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Generics and Packages</h3>

          {/* 30. What are generics? Why used? */}
          <QuestionCard
            number={30}
            question="What are generics in Java? Why are they used?"
            difficulty="Basic"
          >
            <div>
              <p><b>Generics</b> allow classes and methods to operate on any data type. They provide type safety and code reusability.</p>
              <CodeBlock code={`
  List<Integer> list = new ArrayList<>(); // Only Integer allowed
  `} />
            </div>
          </QuestionCard>

          {/* 31. Generic class for pair */}
          <QuestionCard
            number={31}
            question="Create a generic class that stores a pair of values of any type and prints them."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  class Pair<T, U> {
      T first;
      U second;
      Pair(T first, U second) {
          this.first = first;
          this.second = second;
      }
      void print() {
          System.out.println(first + ", " + second);
      }
      public static void main(String[] args) {
          Pair<Integer, String> p = new Pair<>(1, "One");
          p.print(); // 1, One
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 32. Packages: user-defined */}
          <QuestionCard
            number={32}
            question="What are packages in Java? How are user-defined packages created and imported?"
            difficulty="Basic"
          >
            <div>
              <p><b>Packages</b> group related classes. Create with <code>package</code> keyword. Import with <code>import</code>.</p>
              <CodeBlock code={`
  // In file: mypack/Hello.java
  package mypack;
  public class Hello { public void sayHi() { System.out.println("Hi"); } }
  // In another file
  import mypack.Hello;
  `} />
            </div>
          </QuestionCard>

          {/* 33. Six built-in packages */}
          <QuestionCard
            number={33}
            question="Name and explain any six built-in packages in Java."
            difficulty="Basic"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>java.lang</b>: Core classes (String, Math, System)</li>
                <li><b>java.util</b>: Collections, Date, Scanner</li>
                <li><b>java.io</b>: Input/output (File, InputStream)</li>
                <li><b>java.net</b>: Networking (Socket, URL)</li>
                <li><b>java.awt</b>: GUI components</li>
                <li><b>java.sql</b>: Database connectivity</li>
              </ul>
            </div>
          </QuestionCard>

          {/* File Handling and Regular Expressions */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 File Handling and Regular Expressions</h3>

          {/* 34. What is file handling? Insert data */}
          <QuestionCard
            number={34}
            question="What is file handling in Java? How do you insert data into an existing file?"
            difficulty="Intermediate"
          >
            <div>
              <p>File handling is reading/writing files. Use <code>FileWriter</code> in append mode to insert data.</p>
              <CodeBlock code={`
  FileWriter fw = new FileWriter("file.txt", true); // true = append
  fw.write("New data\n");
  fw.close();
  `} />
            </div>
          </QuestionCard>

          {/* 35. Read/write text file with FileReader/FileWriter */}
          <QuestionCard
            number={35}
            question="Write a program to read from and write to a text file using FileReader and FileWriter."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.io.*;
  public class FileDemo {
      public static void main(String[] args) throws IOException {
          FileWriter fw = new FileWriter("test.txt");
          fw.write("Hello World\n");
          fw.close();
          FileReader fr = new FileReader("test.txt");
          int i;
          while((i=fr.read())!=-1) System.out.print((char)i);
          fr.close();
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 36. Regex: validate email addresses */}
          <QuestionCard
            number={36}
            question="Develop a program using java.util.regex to validate email addresses from a list."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.util.regex.*;
  public class EmailValidator {
      public static void main(String[] args) {
          String[] emails = {"test@mail.com", "bad@.com"};
          Pattern p = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");
          for(String email : emails) {
              Matcher m = p.matcher(email);
              System.out.println(email + ": " + m.matches());
          }
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* Streams and I/O */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Streams and I/O</h3>

          {/* 37. Byte stream vs character stream */}
          <QuestionCard
            number={37}
            question="Differentiate between byte stream and character stream with examples."
            difficulty="Basic"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Byte stream</b>: Handles raw bytes (e.g., <code>FileInputStream</code>).</li>
                <li><b>Character stream</b>: Handles characters (e.g., <code>FileReader</code>).</li>
              </ul>
              <CodeBlock code={`
  FileInputStream fis = new FileInputStream("file.bin"); // byte stream
  FileReader fr = new FileReader("file.txt"); // character stream
  `} />
            </div>
          </QuestionCard>

          {/* Maven and Build Tools */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Maven and Build Tools</h3>

          {/* 38. What is Maven? Purpose of pom.xml */}
          <QuestionCard
            number={38}
            question="What is Maven and what is the purpose of the pom.xml file?"
            difficulty="Basic"
          >
            <div>
              <p><b>Maven</b> is a build automation tool for Java projects. <code>pom.xml</code> manages project configuration, dependencies, and build settings.</p>
            </div>
          </QuestionCard>

          {/* 39. Key elements of pom.xml */}
          <QuestionCard
            number={39}
            question="Explain key elements of pom.xml and their roles in building a Java application."
            difficulty="Intermediate"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>groupId</b>: Project group (e.g., com.example)</li>
                <li><b>artifactId</b>: Project name</li>
                <li><b>version</b>: Project version</li>
                <li><b>dependencies</b>: External libraries</li>
                <li><b>build</b>: Build settings</li>
              </ul>
            </div>
          </QuestionCard>

          {/* 40. Maven build lifecycle, goals, plugins, dependencies */}
          <QuestionCard
            number={40}
            question="Describe Maven's build lifecycle. How do goals, plugins, and dependencies work?"
            difficulty="Intermediate"
          >
            <div>
              <p>Maven lifecycle: <b>validate → compile → test → package → verify → install → deploy</b>. <b>Goals</b> are tasks (e.g., compile). <b>Plugins</b> add features. <b>Dependencies</b> are external libraries.</p>
            </div>
          </QuestionCard>

          {/* 41. Common Maven issues and troubleshooting */}
          <QuestionCard
            number={41}
            question="What are common Maven issues and how do you troubleshoot them?"
            difficulty="Intermediate"
          >
            <div>
              <ul className="list-disc ml-6">
                <li>Dependency conflicts: Check <code>dependency:tree</code></li>
                <li>Build failures: Check error logs</li>
                <li>Missing plugins: Update repositories</li>
              </ul>
            </div>
          </QuestionCard>

          {/* 42. Basic Maven project and add Gson dependency */}
          <QuestionCard
            number={42}
            question="Set up a basic Maven project and add a dependency (e.g., Gson) in pom.xml."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  <project ...>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>1.0</version>
    <dependencies>
      <dependency>
        <groupId>com.google.code.gson</groupId>
        <artifactId>gson</artifactId>
        <version>2.8.9</version>
      </dependency>
    </dependencies>
  </project>
  `} />
            </div>
          </QuestionCard>

          {/* 43. Build Java app with Maven: user input to file */}
          <QuestionCard
            number={43}
            question="Build a Java application using Maven that takes user input and stores it in a file."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.util.*;
  import java.io.*;
  public class InputToFile {
      public static void main(String[] args) throws IOException {
          Scanner sc = new Scanner(System.in);
          String data = sc.nextLine();
          FileWriter fw = new FileWriter("output.txt");
          fw.write(data);
          fw.close();
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* Additional Coding Tasks */}
          <h3 className="text-2xl font-semibold text-[#4c1d95] mt-10">🔹 Additional Coding Tasks</h3>

          {/* 44. Bank account, multilevel inheritance, abstract/final */}
          <QuestionCard
            number={44}
            question="Create a Java class for a bank account and implement multilevel inheritance with abstract and final classes."
            difficulty="Advanced"
          >
            <div>
              <CodeBlock code={`
  abstract class Account {
      double balance;
      abstract void deposit(double amt);
  }
  class SavingsAccount extends Account {
      void deposit(double amt) { balance += amt; }
  }
  final class MyAccount extends SavingsAccount {
      void show() { System.out.println("Balance: " + balance); }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 45. User-defined package and import */}
          <QuestionCard
            number={45}
            question="Create a user-defined package and import it into another class for execution."
            difficulty="Basic"
          >
            <div>
              <CodeBlock code={`
  // In file: mypack/Hello.java
  package mypack;
  public class Hello { public void sayHi() { System.out.println("Hi"); } }
  // In another file
  import mypack.Hello;
  `} />
            </div>
          </QuestionCard>

          {/* 46. Multiple inheritance with interfaces */}
          <QuestionCard
            number={46}
            question="Write a program to demonstrate how multiple inheritance is achieved using interfaces."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  interface A { void show(); }
  interface B { void display(); }
  class Demo implements A, B {
      public void show() { System.out.println("Show"); }
      public void display() { System.out.println("Display"); }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 47. Collection sorting with lambda */}
          <QuestionCard
            number={47}
            question="Write a program that demonstrates collection sorting using a lambda expression."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  import java.util.*;
  List<String> list = Arrays.asList("Banana", "Apple", "Mango");
  list.sort((a, b) -> a.compareTo(b));
  System.out.println(list);
  `} />
            </div>
          </QuestionCard>

          {/* 48. Custom annotation and apply */}
          <QuestionCard
            number={48}
            question="Create a custom annotation and apply it to a class or method."
            difficulty="Basic"
          >
            <div>
              <CodeBlock code={`
  @interface Info { String author(); }
  @Info(author = "Alice")
  class Demo {}
  `} />
            </div>
          </QuestionCard>

          {/* 49. Thread synchronization with synchronized blocks */}
          <QuestionCard
            number={49}
            question="Write a Java program to demonstrate the use of thread synchronization using synchronized blocks."
            difficulty="Intermediate"
          >
            <div>
              <CodeBlock code={`
  class Counter {
      int count = 0;
      void increment() {
          synchronized(this) {
              count++;
          }
      }
  }
  `} />
            </div>
          </QuestionCard>

          {/* 50. Java vs C++: memory management, platform independence */}
          <QuestionCard
            number={50}
            question="Describe differences between Java and C++ in terms of memory management and platform independence."
            difficulty="Basic"
          >
            <div>
              <ul className="list-disc ml-6">
                <li><b>Memory management</b>: Java has automatic garbage collection; C++ requires manual memory management.</li>
                <li><b>Platform independence</b>: Java runs on JVM (write once, run anywhere); C++ is platform-dependent (compiled for each OS).</li>
              </ul>
            </div>
          </QuestionCard>
        </section>
      </div>
    </div>
  );
};

export const subjectData = {
  id: "it201",
  code: "IT201",
  name: "Java Programming",
  credits: 4,
  color: "bg-[#f9f5ff] text-[#4c1d95]"
};

export default It201;
