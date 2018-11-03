let storage = {
	read() {
		let data = localStorage.todos;
		return (data && JSON.parse(data)) || [];
	},

	write(todos) {
		localStorage.todos = JSON.stringify(todos);
	},
};

export default storage;
