import React, { Component } from "react";
import store from "../flux/store";
import * as actions from "../flux/actions";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Segment } from "semantic-ui-react";

import "./main.scss";

class App extends Component {
	constructor() {
		super();
		this.state = { todos: store.getTodos() };
	}

	componentDidMount() {
		store.addListener("change", this.update);
	}

	update = _ => {
		this.setState({ todos: store.getTodos() });
	};

	handleAddTodo(val) {
		actions.addTodo(val);
	}

	handleRemoveTodo(id) {
		actions.removeTodo(id);
	}

	render() {
		let todos = this.state.todos;
		return (
			<div className="container">
				<Segment.Group>
					<Segment>
						<AddTodo addTodo={this.handleAddTodo} />
					</Segment>

					{!!todos.length && (
						<Segment>
							<TodoList
								items={todos}
								removeTodo={this.handleRemoveTodo}
							/>
						</Segment>
					)}
				</Segment.Group>
			</div>
		);
	}
}

export default App;
