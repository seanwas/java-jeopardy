var questiondata = [{
        categoryName: "Hot Cup of Java",
        questions: ["Eclipse, NetBeans & IntelliJ are examples of these", "This is a web-based hosting service used for version control among other things", "A library mangament tool that is configured with a pom file?", "An ORM framework that simplifies Java development by interacting with the database", "Spring and Hibernate can be added to Maven as these"],
        answers: ["What is an IDE (Integrated Development Environment)?", "What is Git Hub?", "What is Maven?", "What is Hibernate?", "What are dependencies?"]
    },
    {
        categoryName: "OOPs, I did it again",
        questions: ["This is what OOP stands for", "The blueprint of an object", "An object is created when you do this to a class", "The Java concept of bundling data and methods within one unit", "The Java concept that makes it a lot easier to handle complexity by splitting them into smaller parts"],
        answers: ["What is Object-Orientated Programing", "What is a Class?", "What is Instantiate (Create an instance of)", "What is Encapsulation?", "What is Abstraction?"]
    },

    {
        categoryName: "Just my Type",
        questions: ["This is where you need to declare the data type in advance when writing the code", "byte, short, int, long, float, double, char, or boolean are all examples of this data type", "This common data type is not a primtive data type but actually a it's a class", "The integer data type that can hold the largest number", "The maximum length of a char data type?"],
        answers: ["What is Static Typing?", "What are primative data types", "What is String?", "What is a long?", "What is 1?"]
    },
    {
        categoryName: "Initial Commit",
        questions: ["IDE", "JDK", "JVM", "JRE", "JAR"],
        answers: ["What is Integrated Development Environment?", "What is Java Development Kit?", "What is Java Virtual Machine?", "What is Java Runtime Environment?", "What is Java ARchive?"]
    },
    {
        categoryName: "Java BASIC",
        questions: ["The year Java was created", "The languages Java was based on", "This means to write one set of code which can then be run on different platforms", "This is needed by an operating system to compile and run Java", "The programming language, the runtime environment, and the standards library(ies)"],
        answers: ["What is 1995?", "What is C and C++?", "What is Platform Independent?", "What is the JVM (Java Virtual Machine)?", "What is the JDK (Java Development Kit)"]
    },
    {
        categoryName: "Your Package has Arrived",
        questions: ["question 1", "question 2", "Question 3", "Question 4", "Question 5"],
        answers: ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5"]
    },
    {
        categoryName: "Polymorphism Vs Inheritence",
        questions: ["The Java concept that allows us to calls methods on a superclass that might be overridden by the subclass", "question 2", "Question 3", "Question 4", "Question 5"],
        answers: ["What is Polymorphism?", "answer 2", "answer 3", "answer 4", "answer 5"]
    }
]

var players = {
    number: 0,
    name: [],
    avatar: [],
    score: [0, 0, 0],
    current: 1,
    currentAmount: 0,
    buttons: []
}