class TodoView {
	static help = () => {
		console.log("List command :");
		console.log("node index.js --help");
		console.log("node index.js list");
		console.log("node index.js show <id>");
		console.log("node index.js add <task>");
		console.log("node index.js delete <id>");
		console.log("node index.js update <id> <task>");
		console.log("node index.js complete <id>");
		console.log("node index.js uncomplete <id>");
	};

	static list = (todos) => {
		console.log(`LIST TASK :`);
		return todos.forEach((element, index) => {
			const { id, task, status } = element;
			console.log(`${++index}. [${status ? "X" : " "}] ${task}, id: <${id}>`);
		});
	};

	static showDetail = (todo) => {
		console.log(`Detail Task ${todo[0].task} :`);
		return console.log(
			`- Task name : ${todo[0].task}\n- Status : ${
				todo[0].status ? "Finish" : "Progress"
			}\n- Created at : ${todo[0].created_at}${
				!todo[0].completed_at
					? null
					: `\n- Completed at : ${todo[0].completed_at}`
			} `,
		);
	};
}

module.exports = TodoView;
