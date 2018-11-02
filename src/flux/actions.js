import dispatcher from "./dispatcher";

function addTodo(text) {
	dispatcher.dispatch({
		type: "ADD_TODO",
		text,
	});
}

export { addTodo };
