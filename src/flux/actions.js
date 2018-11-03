import dispatcher from "./dispatcher";

let actions = {
	addTodo(text) {
		dispatcher.dispatch({
			type: "ADD_TODO",
			text,
		});
	},

	removeTodo(id) {
		dispatcher.dispatch({
			type: "REMOVE_TODO",
			id,
		});
	},

	toggleTodo(id) {
		dispatcher.dispatch({
			type: "TOGGLE_TODO",
			id,
		});
	},

	switchTab(tab) {
		dispatcher.dispatch({
			type: "SWITCH_TAB",
			tab,
		});
	},
};

export default actions;
