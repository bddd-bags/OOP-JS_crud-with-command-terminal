const TodoController = require("./controllers/TodoController");

let argv = process.argv;
let command = argv[2];
let params = argv.splice(3);

console.log(!!null);

switch (command) {
	case "--help":
		TodoController.help();
		break;
	case "list":
		TodoController.list();
		break;
	case "show":
		TodoController.showDetailTodo(params[0]);
		break;
	case "add":
		TodoController.addTodo(params[0]);
		break;
	case "delete":
		TodoController.deleteTodo(params[0]);
		break;
	case "update":
		TodoController.updateTodo(params[0], params[1]);
		break;
	case "delete":
		TodoController.deleteTodo(params[0]);
		break;
	case "complete":
		TodoController.completeTodo(params[0]);
		break;
	case "uncomplete":
		TodoController.uncompleteTodo(params[0]);
		break;
	default:
		console.log(
			`Command is not found!\nto see the all command can use "<node index.js --help>"`,
		);
		break;
}

// console.log(new Date());
