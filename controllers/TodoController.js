const Todo = require("../models/Todo");
const TodoView = require("../views/TodoView");

class TodoController {
	static help = () => {
		return TodoView.help();
	};

	static list = () => {
		return TodoView.list(Todo.getData());
	};

	static showDetailTodo = (id) => {
		return TodoView.showDetail(Todo.showDetailTodo(id));
	};

	static addTodo = (task) => {
		return Todo.addTodo(task, `${task} success to added!`);
	};

	static deleteTodo = (id) => {
		return Todo.deleteTodo(id, `${id} success to deleted!`);
	};

	static updateTodo = (id, task) => {
		return Todo.updateTodo(id, task, `task updated!`);
	};

	static deleteTodo = (id) => {
		return Todo.deleteTodo(id, `Success deleted Task!`);
	};

	static completeTodo = (id) => {
		return Todo.completeTodo(id, `Task change to Completed!`);
	};

	static uncompleteTodo = (id) => {
		return Todo.uncompleteTodo(id, `Task change to unCompleted!`);
	};
}

module.exports = TodoController;
