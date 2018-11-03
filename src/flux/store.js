import events from "events";
import dispatcher from "./dispatcher";
import storage from "./storage";

class Store extends events.EventEmitter {
	constructor() {
		super();

		this.todos = storage.read();
	}

	getTodos() {
		return this.todos;
	}

	addTodo(text) {
		this.todos.push({
			id: Date.now(),
			text,
			completed: false,
		});

		storage.write(this.todos);
		this.emit("change");
	}

	removeTodo(idToRemove) {
		this.todos = this.todos.filter(({ id }) => id !== idToRemove);

		storage.write(this.todos);
		this.emit("change");
	}

	toggleTodo(idToToggle) {
		let todo = this.todos.find(({ id }) => id === idToToggle);
		todo.completed = !todo.completed;

		storage.write(this.todos);
		this.emit("change");
	}

	handleActions(action) {
		switch (action.type) {
			case "ADD_TODO":
				this.addTodo(action.text);
				break;
			case "REMOVE_TODO":
				this.removeTodo(action.id);
				break;
			case "TOGGLE_TODO":
				this.toggleTodo(action.id);
				break;
		}
	}
}

let store = new Store();

dispatcher.register(store.handleActions.bind(store));

export default store;
