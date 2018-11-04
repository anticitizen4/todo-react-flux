import React, { Component } from "react";
import store from "../flux/store";
import actions from "../flux/actions";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Controls from "./Controls";
import { Segment } from "semantic-ui-react";

import "./main.scss";

class App extends Component {
	constructor() {
		super();
		this.state = store.getState();
	}

	componentDidMount() {
		store.addListener("change", this.update);
	}

	update = _ => {
		this.setState(store.getState());
	};

	handleAddTodo(val) {
		actions.addTodo(val);
	}

	handleRemoveTodo(id) {
		actions.removeTodo(id);
	}

	handleToggleTodo(id) {
		actions.toggleTodo(id);
	}

	handleSwitchTab(tab) {
		actions.switchTab(tab);
	}

	render() {
		let { todos, tab, count } = this.state;

		return (
			<div className="container">
				<Segment.Group>
					<Segment className="seg-add">
						<AddTodo addTodo={this.handleAddTodo} />
					</Segment>

					{!!todos.length && (
						<Segment className="seg-list">
							<TodoList
								items={todos}
								removeTodo={this.handleRemoveTodo}
								toggleTodo={this.handleToggleTodo}
							/>
						</Segment>
					)}

					{!!count && (
						<Segment className="seg-controls">
							<Controls
								tab={tab}
								count={count}
								switchTab={this.handleSwitchTab}
							/>
						</Segment>
					)}
				</Segment.Group>
			</div>
		);
	}
}

export default App;
