#! /usr/bin/env node 
import inquirer from "inquirer";
const questions = [
    {
        type: "list",
        name: "q1",
        message: "What (\n) do in typescript?:",
        choices: ["Line break", "Takes to next line", "Takes input", "Others"]
    },
    {
        type: "list",
        name: "q2",
        message: "What is the keyword use to declare a variable in typescript?:",
        choices: ["var", "let", "const", "type"]
    },
    {
        type: "list",
        name: "q3",
        message: "How do you define a function with parameters in typescript?:",
        choices: ["function()", "function(parameters)", "function => parameters", "function(parameters: type)"]
    }
];
const answers = {
    q1: "Line break",
    q2: "let",
    q3: "function(parameters: type)"
};
function startQuiz() {
    inquirer.prompt(questions).then(responses => {
        const score = calculateScore(responses, questions, answers);
        console.log(`\n Your Quiz Result: ${score} out of ${questions.length}`);
    });
}
function calculateScore(responses, questions, answers) {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        const userResponse = responses[currentQuestion.name];
        if (userResponse === answers[currentQuestion.name]) {
            score++;
        }
    }
    return score;
}
startQuiz();
