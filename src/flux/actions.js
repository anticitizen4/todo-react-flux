import dispatcher from "./dispatcher";
import actionNames from "./actionNames";

let actions = {
	addTodo(text) {
		dispatcher.dispatch({
			type: actionNames.ADD_TODO,
			text,
		});
	},

	removeTodo(id) {
		dispatcher.dispatch({
			type: actionNames.REMOVE_TODO,
			id,
		});
	},

	toggleTodo(id) {
		dispatcher.dispatch({
			type: actionNames.TOGGLE_TODO,
			id,
		});
	},

	switchTab(tab) {
		dispatcher.dispatch({
			type: actionNames.SWITCH_TAB,
			tab,
		});
	},

	clearCompleted() {
		dispatcher.dispatch({
			type: actionNames.CLEAR_COMPLETED,
		});
	},
};

export default actions;
