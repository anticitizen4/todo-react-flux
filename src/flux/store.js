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

	handleActions(action) {
		console.log(action);

		if (action.type === "ADD_TODO") {
			this.addTodo(action.text);
		}
	}
}

let store = new Store();

dispatcher.register(store.handleActions.bind(store));

export default store;
