import events from "events";
import dispatcher from "./dispatcher";

class Store extends events.EventEmitter {
	constructor() {
		super();

		this.todos = [
			{
				id: 1000,
				text: "AAAA",
			},
			{
				id: 1001,
				text: "BBBB",
			},
			{
				id: 1002,
				text: "CCCC",
			},
		];
	}

	getTodos() {
		return this.todos;
	}

	addTodo(text) {
		this.todos.push({
			id: Date.now(),
			text,
		});

		this.emit("change");
	}

	removeTodo(idToRemove) {
		this.todos = this.todos.filter(({ id }) => id !== idToRemove);

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
		}
	}
}

let store = new Store();

dispatcher.register(store.handleActions.bind(store));

export default store;
