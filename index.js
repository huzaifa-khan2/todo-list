import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log(chalk.magenta.bold("\n \t  Welcome to CodeWithHuzaifa - Todo List Application\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green.bold("Enter your new Task:"),
        },
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task Added In Todo List Successfully`);
    let addmoretask = await inquirer.prompt([
        {
            name: "AddMore",
            type: "confirm",
            message: "Do you want to ADD more Task?",
            default: "false",
        },
    ]);
    condition = addmoretask.AddMore;
}
console.log("Your updated todo list: ", todolist);
