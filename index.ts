// Simple Calculator Using Inquirer Library

import inquirer from "inquirer";

async function performOperation() {
    const ans: {
        number1: number,
        number2: number,
        operator: string
    } = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Please enter your first number",
        },
        {
            type: "number",
            name: "number2",
            message: "Please enter your second number",
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            message: "Please select your operator",
        },
    ]);

    const { number1, number2, operator } = ans;

    if (number1 && number2 && operator) {
        let result: number = 0;
        if (operator === "Addition") {
            result = number1 + number2;
        } else if (operator === "Subtraction") {
            result = number1 - number2;
        } else if (operator === "Multiplication") {
            result = number1 * number2;
        } else if (operator === "Division") {
            result = number1 / number2;
        }

        console.log(`Your answer is ${result}`);

        const answer = await inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Do you want to perform another operation?",
                default: true,
            },
        ]);

        if (answer.continue) {
            await performOperation();
        } else {
            console.log("Exiting the program.");
        }

    } else {
        console.log("Kindly enter valid input");
    }
}
performOperation();

export{};