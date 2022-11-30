const fs = require("fs");

class Todo {
	constructor(id, task, status, created_at, completed_at) {
		(this.id = id),
			(this.task = task),
			(this.status = status || false),
			(this.created_at = created_at || new Date()),
			(this.completed_at = completed_at || null);
	}

	static getData = () => {
		let todos = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
		return todos.map((element) => {
			const { id, task, status, created_at, completed_at } = element;

			return new Todo(id, task, status, created_at, completed_at);
		});
	};

	static showDetailTodo = (id) => {
		let todos = this.getData();
		return todos.filter((e) => e.id === +id);

		// console.log(todo);
	};

	static addTodo = (task, message) => {
		let todos = this.getData();
		let id = todos[this.getData().length - 1].id + 1;

		todos.push(new Todo(id, task, false, new Date()));

		this.save(todos);

		return console.log(message);
	};

	static deleteTodo = (id) => {
		let todos = this.getData();
		todos = todos.filter((element) => element.id !== +id);
		console.log(todos);
	};

	static updateTodo = (id, task, message) => {
		let todos = this.getData();
		todos = todos.filter((e) => {
			if (e.id !== +id) {
				return e;
			}
			e.task = task;
			return e;
		});

		this.save(todos);
		return console.log(message);
	};

	static deleteTodo = (id, message) => {
		let todos = this.getData();
		todos = todos.filter((e) => {
			if (e.id !== +id) {
				return e;
			}
		});

		this.save(todos);
		return console.log(message);
	};

	static completeTodo = (id, message) => {
		let todos = this.getData();
		todos = todos.filter((e) => {
			if (e.id !== +id) {
				return e;
			} else {
				e.status = true;
				e.completed_at = new Date();
				return e;
			}
		});

		this.save(todos);

		return console.log(message);
	};

	static uncompleteTodo = (id, message) => {
		let todos = this.getData();
		todos = todos.map((e) => {
			if (e.id !== +id) {
				return e;
			}
			[e.status, e.completed_at] = [false, null];
			return e;
		});
		this.save(todos);
		return console.log(message);
	};

	static save(todos) {
		return fs.writeFileSync("./data.json", JSON.stringify(todos, null, 2));
	}
}

module.exports = Todo;
