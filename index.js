#! usr/bin/cnv node
import inquirer from "inquirer";
let todos = ["reading", "writing", "play games"];
async function createTodo(todos) {
    let newtodo = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "Select option you want to do?",
        choices: ["Add", "Update", "Delete", "View"]
    });
    if (newtodo.todo == "Add") {
        let Addtodo = await inquirer.prompt({
            name: "Addition",
            type: "input",
            message: "What do you want to add?"
        });
        todos.push(Addtodo.Addition);
        console.log(todos);
    }
    ;
    if (newtodo.todo == "Update") {
        let Updatetodo = await inquirer.prompt({
            name: "Update",
            type: "list",
            message: "Select an item to update?",
            choices: todos.map(item => item)
        });
        let newUpdate = await inquirer.prompt({
            name: "updateItem",
            type: "input",
            message: "What do you want to update?"
        });
        todos.push(newUpdate.updateItem);
        console.log(todos.filter(val => val !== Updatetodo.Update));
    }
    if (newtodo.todo == "Delete") {
        let deletetodo = await inquirer.prompt({
            name: "delete",
            type: "list",
            message: "Select that you want to delete!!",
            choices: todos.map(ele => ele)
        });
        console.log(todos.filter(array => array !== deletetodo.delete));
    }
    if (newtodo.todo == "View") {
        console.log(todos);
    }
}
createTodo(todos);
