
const questions = [
    {
        question: "What is the correct syntax to declare a variable in Java?",
        answers: [
            { text: "variable = value;", correct: false },
            { text: "int variable;", correct: true },
            { text: "variable = 5;", correct: false },
            { text: "int = variable;", correct: false },
        ]
    },
    {
        question: "Which keyword is used to create a constant variable in Java?",
        answers: [
            { text: "static", correct: false },
            { text: "final", correct: true },
            { text: "constant", correct: false },
            { text: "const", correct: false },
        ]
    },
    {
        question: "What is the output of the following code snippet?\n\npublic class Test {\n   public static void main(String[] args) {\n       int x = 5;\n       System.out.println(x++);\n   }\n}",
        answers: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "The code will not compile.", correct: false },
        ]
    },
    {
        question: "Which data type is used to store a single character in Java?",
        answers: [
            { text: "char", correct: true },
            { text: "Character", correct: false },
            { text: "string", correct: false },
            { text: "chr", correct: false },
        ]
    },
    {
        question: "What is the correct way to initialize an array in Java?",
        answers: [
            { text: "int arr[] = new int[5];", correct: true },
            { text: "int arr[5];", correct: false },
            { text: "int arr() = new int[5];", correct: false },
            { text: "int[] arr = new int(5);", correct: false },
        ]
    },
    {
        question: "Which loop is guaranteed to execute at least once in Java?",
        answers: [
            { text: "while loop", correct: false },
            { text: "do-while loop", correct: true },
            { text: "for loop", correct: false },
            { text: "repeat loop", correct: false },
        ]
    },
    {
        question: "What is the access modifier for a method that should be accessible only within its own class and subclasses?",
        answers: [
            { text: "public", correct: false },
            { text: "private", correct: false },
            { text: "protected", correct: true },
            { text: "static", correct: false },
        ]
    },
    {
        question: "Which keyword is used to create a new instance of a class in Java?",
        answers: [
            { text: "new", correct: true },
            { text: "instanceof", correct: false },
            { text: "class", correct: false },
            { text: "create", correct: false },
        ]
    },
    {
        question: "What is the correct way to write a comment in Java?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "/* This is a comment */", correct: false },
            { text: "# This is a comment", correct: false },
            { text: "' This is a comment", correct: false },
        ]
    },
    {
        question: "Which method is called when an object is garbage collected in Java?",
        answers: [
            { text: "finalize()", correct: true },
            { text: "garbageCollect()", correct: false },
            { text: "delete()", correct: false },
            { text: "free()", correct: false },
        ]
    },
];

export default questions;


