import dispatcher from "./dispatcher";

function addTodo(text) {
	dispatcher.dispatch({
		type: "ADD_TODO",
		text,
	});
}

function removeTodo(id) {
	dispatcher.dispatch({
		type: "REMOVE_TODO",
		id,
	});
}

export { addTodo, removeTodo };
