
const questions = [
    {
        question: "What is the correct way to declare a variable in Python?",
        answers: [
            { text: "variable = value", correct: true },
            { text: "int variable", correct: false },
            { text: "variable: value", correct: false },
            { text: "value = variable", correct: false },
        ]
    },
    {
        question: "Which data type is used to store a sequence of characters in Python?",
        answers: [
            { text: "int", correct: false },
            { text: "string", correct: true },
            { text: "char", correct: false },
            { text: "list", correct: false },
        ]
    },
    {
        question: "What will the following code print?\n\nx = 5\ny = 2\nprint(x / y)",
        answers: [
            { text: "7", correct: false },
            { text: "2.5", correct: true },
            { text: "2", correct: false },
            { text: "2.0", correct: false },
        ]
    },
    {
        question: "In Python, what is the result of the expression: 3 + 2 * 4?",
        answers: [
            { text: "20", correct: false },
            { text: "14", correct: false },
            { text: "11", correct: true },
            { text: "9", correct: false },
        ]
    },
    {
        question: "What is the correct way to write a single-line comment in Python?",
        answers: [
            { text: "// This is a comment", correct: false },
            { text: "# This is a comment", correct: true },
            { text: "/* This is a comment */", correct: false },
            { text: "' This is a comment", correct: false },
        ]
    },
    {
        question: "Which loop is used to iterate over a sequence (such as a list or string) in Python?",
        answers: [
            { text: "while loop", correct: false },
            { text: "do-while loop", correct: false },
            { text: "for loop", correct: true },
            { text: "repeat loop", correct: false },
        ]
    },
    {
        question: "In Python, how do you check the number of elements in a list?",
        answers: [
            { text: "list.size()", correct: false },
            { text: "list.length()", correct: false },
            { text: "len(list)", correct: true },
            { text: "list.count()", correct: false },
        ]
    },
    {
        question: "Which method is used to remove an element from a list in Python?",
        answers: [
            { text: "remove()", correct: true },
            { text: "delete()", correct: false },
            { text: "pop()", correct: false },
            { text: "discard()", correct: false },
        ]
    },
    {
        question: "What is the output of the following code snippet?\n\nx = [1, 2, 3]\nprint(x[1])",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "[1, 2, 3]", correct: false },
        ]
    },
    {
        question: "In Python, what is the keyword used to define a function?",
        answers: [
            { text: "method", correct: false },
            { text: "define", correct: false },
            { text: "def", correct: true },
            { text: "function", correct: false },
        ]
    },
];

export default questions;