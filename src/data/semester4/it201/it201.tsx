import React, { useState } from "react";

// Syllabus button at the top
const SyllabusButton = () => (
  <div className="mb-6 flex justify-center md:justify-start">
    <a
      href="/semester/4/it201/it201-syllabus"
      className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm md:text-base"
    >
      See Syllabus
    </a>
  </div>
);

// Dropdown component for each question
const QuestionDropdown = ({ question, children }: { question: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        className={`w-full text-left px-4 py-3 font-semibold bg-rose-50 hover:bg-rose-100 transition flex items-center justify-between text-base md:text-lg ${open ? 'border-b' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="ml-2 text-rose-500">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-4 py-3 text-gray-700 text-sm md:text-base bg-rose-50 border-t animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

// Syntax highlighting for code blocks
const CodeBlock = ({ code, lang = "java" }: { code: string; lang?: string }) => (
  <div className="w-full overflow-x-auto border rounded-lg">
    <pre className="bg-gray-900 text-green-200 p-4 text-xs md:text-sm my-0">
      <code>
        {code}
      </code>
    </pre>
  </div>
);

const It201 = () => (
  <div className="prose max-w-none px-2 md:px-8 lg:px-24 xl:px-48 mx-auto">
    <SyllabusButton />
    <h2 className="text-2xl md:text-3xl font-bold text-exam-900 mb-2 text-center md:text-left">Java Programming (IT201) – Core Concepts & Practice</h2>
    <p className="mb-6 text-gray-600 text-center md:text-left">Explore detailed, beginner-friendly answers and code examples for Java interview and exam questions. Click each question to expand and view the explanation and code.</p>

    {/* Core Java */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Core Java</h3>

    <QuestionDropdown question="1. What are the major features of Java that support object-oriented programming?">
      <div>
        <p><b>Java</b> supports object-oriented programming (OOP) through these main features:</p>
        <ul className="list-disc ml-6">
          <li><b>Encapsulation</b>: Bundles data (fields) and code (methods) inside a class, protecting data from outside interference.</li>
          <li><b>Inheritance</b>: Lets a class (child) use properties and methods of another class (parent), promoting code reuse.</li>
          <li><b>Polymorphism</b>: Allows one interface to be used for different data types (e.g., method overloading and overriding).</li>
          <li><b>Abstraction</b>: Hides complex implementation details and shows only the necessary features (using abstract classes or interfaces).</li>
        </ul>
        <p className="mt-2">Example:</p>
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
        <p className="mt-2"><b>Explanation:</b> <span className="text-gray-800">The <code>Animal</code> class encapsulates data and behavior. <code>Dog</code> inherits from <code>Animal</code> and overrides the <code>sound()</code> method, showing polymorphism and inheritance.</span></p>
      </div>
    </QuestionDropdown>

    <QuestionDropdown question="2. What is a constructor in Java? Write a program to demonstrate constructor overloading.">
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
        <p className="mt-2"><b>Explanation:</b> <span className="text-gray-800">The <code>Student</code> class has two constructors: one with no arguments (default) and one with parameters. This is constructor overloading.</span></p>
      </div>
    </QuestionDropdown>

    {/* 3. Inheritance types and multilevel example */}
    <QuestionDropdown question="3. What is inheritance? Explain different types with a multilevel inheritance example.">
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
    </QuestionDropdown>

    {/* 4. Compile-time vs run-time polymorphism */}
    <QuestionDropdown question="4. Differentiate between compile-time and run-time polymorphism. Explain with method overloading and overriding.">
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
    </QuestionDropdown>

    {/* 5. Interface and multiple inheritance */}
    <QuestionDropdown question="5. What is an interface in Java? How can it be used to achieve multiple inheritance?">
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
    </QuestionDropdown>

    {/* 6. Abstract class vs interface */}
    <QuestionDropdown question="6. What is the difference between abstract classes and interfaces in Java?">
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
    </QuestionDropdown>

    {/* 7. Functional interface and lambda */}
    <QuestionDropdown question="7. What is a functional interface? How is it used with lambda expressions?">
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
    </QuestionDropdown>

    {/* 8. Lambda to sort array of strings */}
    <QuestionDropdown question="8. Write a Java program using lambda expressions to sort an array of strings.">
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
        <p className="mt-2"><b>Explanation:</b> <span className="text-gray-800">The <code>Arrays.sort</code> method uses a lambda expression to compare strings alphabetically.</span></p>
      </div>
    </QuestionDropdown>

    {/* 9. Custom annotation */}
    <QuestionDropdown question="9. What is a custom annotation? How is it different from built-in annotations? Demonstrate usage.">
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
    </QuestionDropdown>

    {/* 10. Purpose of annotations */}
    <QuestionDropdown question="10. Explain the purpose of Java annotations. List some commonly used built-in annotations.">
      <div>
        <p><b>Annotations</b> provide metadata about code. They are used for compiler checks, code analysis, and frameworks.</p>
        <ul className="list-disc ml-6">
          <li><code>@Override</code>: Checks if a method overrides a superclass method.</li>
          <li><code>@Deprecated</code>: Marks code as outdated.</li>
          <li><code>@SuppressWarnings</code>: Suppresses compiler warnings.</li>
        </ul>
      </div>
    </QuestionDropdown>

    {/* Exception Handling */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Exception Handling</h3>

    {/* 11. Errors vs Exceptions */}
    <QuestionDropdown question="11. Differentiate between errors and exceptions with suitable examples.">
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
    </QuestionDropdown>

    {/* 12. Types of exceptions */}
    <QuestionDropdown question="12. What are the different types of exceptions in Java? Explain with examples.">
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
    </QuestionDropdown>

    {/* 13. Custom exceptions */}
    <QuestionDropdown question="13. How are custom exceptions created and handled in Java?">
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
    </QuestionDropdown>

    {/* 14. try-catch-finally with built-in and custom exceptions */}
    <QuestionDropdown question="14. Write a program demonstrating try-catch-finally with built-in and custom exceptions.">
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
    </QuestionDropdown>

    {/* Multithreading */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Multithreading</h3>

    {/* 15. What is multithreading? Thread and Runnable */}
    <QuestionDropdown question="15. What is multithreading in Java? Explain the process of creating threads using Thread and Runnable.">
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
    </QuestionDropdown>

    {/* 16. Thread priority */}
    <QuestionDropdown question="16. What is thread priority and how can we set it?">
      <div>
        <p>Thread priority determines the order in which threads are scheduled. Use <code>setPriority()</code> (1 to 10).</p>
        <CodeBlock code={`
Thread t = new Thread();
t.setPriority(Thread.MAX_PRIORITY); // 10
`} />
      </div>
    </QuestionDropdown>

    {/* 17. Thread lifecycle and start() vs run() */}
    <QuestionDropdown question="17. Explain the lifecycle of a thread in Java with a diagram. Differentiate between start() and run().">
      <div>
        <p><b>Lifecycle:</b> New → Runnable → Running → Blocked/Waiting → Dead</p>
        <p><b>start()</b> creates a new thread and calls <code>run()</code>. Calling <code>run()</code> directly does not start a new thread.</p>
        <CodeBlock code={`
Thread t = new Thread(() -> System.out.println("Hello"));
t.start(); // New thread
// t.run(); // Runs in current thread
`} />
      </div>
    </QuestionDropdown>

    {/* 18. Thread synchronization with synchronized keyword */}
    <QuestionDropdown question="18. How is thread synchronization implemented in Java? Explain with synchronized keyword.">
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
    </QuestionDropdown>

    {/* 19. Synchronized methods */}
    <QuestionDropdown question="19. What are synchronized methods and why are they important?">
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
    </QuestionDropdown>

    {/* 20. Program: extends Thread and print numbers */}
    <QuestionDropdown question="20. Create a Java program that extends the Thread class and prints numbers using multiple threads.">
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
    </QuestionDropdown>

    {/* String Handling */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 String Handling</h3>

    {/* 21. What is a String? Immutability */}
    <QuestionDropdown question="21. What is a String in Java? Explain the concept of immutability with code.">
      <div>
        <p>A <b>String</b> is a sequence of characters. Strings are <b>immutable</b>: once created, they cannot be changed.</p>
        <CodeBlock code={`
String s1 = "Hello";
s1.concat(" World"); // Does not change s1
System.out.println(s1); // Output: Hello
`} />
      </div>
    </QuestionDropdown>

    {/* 22. String operations: compareTo, substring, concat, replace */}
    <QuestionDropdown question="22. What are different types of string operations in Java? Demonstrate compareTo(), substring(), concat() and replace().">
      <div>
        <CodeBlock code={`
String s = "Java";
System.out.println(s.compareTo("Javb")); // -1
System.out.println(s.substring(1,3)); // av
System.out.println(s.concat(" Programming")); // Java Programming
System.out.println(s.replace('a','o')); // Jovo
`} />
      </div>
    </QuestionDropdown>

    {/* Collections Framework */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Collections Framework</h3>

    {/* 23. What is the Java Collection Framework? List vs Set vs Map */}
    <QuestionDropdown question="23. What is the Java Collection Framework? What are the differences between List, Set, and Map?">
      <div>
        <p>The <b>Java Collection Framework</b> provides classes and interfaces for storing groups of objects.</p>
        <ul className="list-disc ml-6">
          <li><b>List</b>: Ordered, allows duplicates (e.g., ArrayList).</li>
          <li><b>Set</b>: Unordered, no duplicates (e.g., HashSet).</li>
          <li><b>Map</b>: Key-value pairs (e.g., HashMap).</li>
        </ul>
      </div>
    </QuestionDropdown>

    {/* 24. ArrayList vs LinkedList */}
    <QuestionDropdown question="24. Explain the differences between ArrayList and LinkedList. When should each be used?">
      <div>
        <ul className="list-disc ml-6">
          <li><b>ArrayList</b>: Fast random access, slow insert/delete in middle. Use for frequent access.</li>
          <li><b>LinkedList</b>: Fast insert/delete, slow random access. Use for frequent insert/delete.</li>
        </ul>
      </div>
    </QuestionDropdown>

    {/* 25. HashSet vs TreeSet */}
    <QuestionDropdown question="25. Differentiate between HashSet and TreeSet with examples.">
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
    </QuestionDropdown>

    {/* 26. Map interface and HashMap example */}
    <QuestionDropdown question="26. Explain the Map interface with an example using HashMap.">
      <div>
        <CodeBlock code={`
import java.util.*;
HashMap<Integer, String> map = new HashMap<>();
map.put(1, "Alice");
map.put(2, "Bob");
System.out.println(map.get(1)); // Alice
`} />
      </div>
    </QuestionDropdown>

    {/* 27. HashMap for student records */}
    <QuestionDropdown question="27. Write a Java program using HashMap to store and retrieve student records.">
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
    </QuestionDropdown>

    {/* 28. Stack and queue with ArrayDeque */}
    <QuestionDropdown question="28. Write a program to demonstrate stack and queue operations using ArrayDeque.">
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
    </QuestionDropdown>

    {/* 29. Iterating over a List */}
    <QuestionDropdown question="29. How do you iterate over a List using different approaches?">
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
    </QuestionDropdown>

    {/* Generics and Packages */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Generics and Packages</h3>

    {/* 30. What are generics? Why used? */}
    <QuestionDropdown question="30. What are generics in Java? Why are they used?">
      <div>
        <p><b>Generics</b> allow classes and methods to operate on any data type. They provide type safety and code reusability.</p>
        <CodeBlock code={`
List<Integer> list = new ArrayList<>(); // Only Integer allowed
`} />
      </div>
    </QuestionDropdown>

    {/* 31. Generic class for pair */}
    <QuestionDropdown question="31. Create a generic class that stores a pair of values of any type and prints them.">
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
    </QuestionDropdown>

    {/* 32. Packages: user-defined */}
    <QuestionDropdown question="32. What are packages in Java? How are user-defined packages created and imported?">
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
    </QuestionDropdown>

    {/* 33. Six built-in packages */}
    <QuestionDropdown question="33. Name and explain any six built-in packages in Java.">
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
    </QuestionDropdown>

    {/* File Handling and Regular Expressions */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 File Handling and Regular Expressions</h3>

    {/* 34. What is file handling? Insert data */}
    <QuestionDropdown question="34. What is file handling in Java? How do you insert data into an existing file?">
      <div>
        <p>File handling is reading/writing files. Use <code>FileWriter</code> in append mode to insert data.</p>
        <CodeBlock code={`
FileWriter fw = new FileWriter("file.txt", true); // true = append
fw.write("New data\n");
fw.close();
`} />
      </div>
    </QuestionDropdown>

    {/* 35. Read/write text file with FileReader/FileWriter */}
    <QuestionDropdown question="35. Write a program to read from and write to a text file using FileReader and FileWriter.">
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
    </QuestionDropdown>

    {/* 36. Regex: validate email addresses */}
    <QuestionDropdown question="36. Develop a program using java.util.regex to validate email addresses from a list.">
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
    </QuestionDropdown>

    {/* Streams and I/O */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Streams and I/O</h3>

    {/* 37. Byte stream vs character stream */}
    <QuestionDropdown question="37. Differentiate between byte stream and character stream with examples.">
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
    </QuestionDropdown>

    {/* Maven and Build Tools */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Maven and Build Tools</h3>

    {/* 38. What is Maven? Purpose of pom.xml */}
    <QuestionDropdown question="38. What is Maven and what is the purpose of the pom.xml file?">
      <div>
        <p><b>Maven</b> is a build automation tool for Java projects. <code>pom.xml</code> manages project configuration, dependencies, and build settings.</p>
      </div>
    </QuestionDropdown>

    {/* 39. Key elements of pom.xml */}
    <QuestionDropdown question="39. Explain key elements of pom.xml and their roles in building a Java application.">
      <div>
        <ul className="list-disc ml-6">
          <li><b>groupId</b>: Project group (e.g., com.example)</li>
          <li><b>artifactId</b>: Project name</li>
          <li><b>version</b>: Project version</li>
          <li><b>dependencies</b>: External libraries</li>
          <li><b>build</b>: Build settings</li>
        </ul>
      </div>
    </QuestionDropdown>

    {/* 40. Maven build lifecycle, goals, plugins, dependencies */}
    <QuestionDropdown question="40. Describe Maven's build lifecycle. How do goals, plugins, and dependencies work?">
      <div>
        <p>Maven lifecycle: <b>validate → compile → test → package → verify → install → deploy</b>. <b>Goals</b> are tasks (e.g., compile). <b>Plugins</b> add features. <b>Dependencies</b> are external libraries.</p>
      </div>
    </QuestionDropdown>

    {/* 41. Common Maven issues and troubleshooting */}
    <QuestionDropdown question="41. What are common Maven issues and how do you troubleshoot them?">
      <div>
        <ul className="list-disc ml-6">
          <li>Dependency conflicts: Check <code>dependency:tree</code></li>
          <li>Build failures: Check error logs</li>
          <li>Missing plugins: Update repositories</li>
        </ul>
      </div>
    </QuestionDropdown>

    {/* 42. Basic Maven project and add Gson dependency */}
    <QuestionDropdown question="42. Set up a basic Maven project and add a dependency (e.g., Gson) in pom.xml.">
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
    </QuestionDropdown>

    {/* 43. Build Java app with Maven: user input to file */}
    <QuestionDropdown question="43. Build a Java application using Maven that takes user input and stores it in a file.">
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
    </QuestionDropdown>

    {/* Additional Coding Tasks */}
    <h3 className="text-xl font-semibold text-exam-900 mt-8">🔹 Additional Coding Tasks</h3>

    {/* 44. Bank account, multilevel inheritance, abstract/final */}
    <QuestionDropdown question="44. Create a Java class for a bank account and implement multilevel inheritance with abstract and final classes.">
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
    </QuestionDropdown>

    {/* 45. User-defined package and import */}
    <QuestionDropdown question="45. Create a user-defined package and import it into another class for execution.">
      <div>
        <CodeBlock code={`
// In file: mypack/Hello.java
package mypack;
public class Hello { public void sayHi() { System.out.println("Hi"); } }
// In another file
import mypack.Hello;
`} />
      </div>
    </QuestionDropdown>

    {/* 46. Multiple inheritance with interfaces */}
    <QuestionDropdown question="46. Write a program to demonstrate how multiple inheritance is achieved using interfaces.">
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
    </QuestionDropdown>

    {/* 47. Collection sorting with lambda */}
    <QuestionDropdown question="47. Write a program that demonstrates collection sorting using a lambda expression.">
      <div>
        <CodeBlock code={`
import java.util.*;
List<String> list = Arrays.asList("Banana", "Apple", "Mango");
list.sort((a, b) -> a.compareTo(b));
System.out.println(list);
`} />
      </div>
    </QuestionDropdown>

    {/* 48. Custom annotation and apply */}
    <QuestionDropdown question="48. Create a custom annotation and apply it to a class or method.">
      <div>
        <CodeBlock code={`
@interface Info { String author(); }
@Info(author = "Alice")
class Demo {}
`} />
      </div>
    </QuestionDropdown>

    {/* 49. Thread synchronization with synchronized blocks */}
    <QuestionDropdown question="49. Write a Java program to demonstrate the use of thread synchronization using synchronized blocks.">
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
    </QuestionDropdown>

    {/* 50. Java vs C++: memory management, platform independence */}
    <QuestionDropdown question="50. Describe differences between Java and C++ in terms of memory management and platform independence.">
      <div>
        <ul className="list-disc ml-6">
          <li><b>Memory management</b>: Java has automatic garbage collection; C++ requires manual memory management.</li>
          <li><b>Platform independence</b>: Java runs on JVM (write once, run anywhere); C++ is platform-dependent (compiled for each OS).</li>
        </ul>
      </div>
    </QuestionDropdown>

    <div className="mt-10 text-gray-500 text-center text-xs md:text-sm">All 50 questions are available above. Click any question to expand and view its detailed answer and code example.</div>
  </div>
);

export const subjectData = {
  id: "it201",
  code: "IT201",
  name: "Java Programming",
  credits: 4,
  color: "bg-rose-100 text-rose-700"
};

export default It201;
