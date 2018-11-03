import React, { Component } from "react";
import store from "../flux/store";
import actions from "../flux/actions";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Segment, Menu } from "semantic-ui-react";

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

	handleTabClick(_, { name: tab }) {
		actions.switchTab(tab);
	}

	render() {
		let { todos, tab } = this.state;

		let menuItems = [
			{
				name: "ALL",
				key: "ALL",
			},
			{
				name: "ACTIVE",
				key: "ACTIVE",
			},
			{
				name: "COMPLETED",
				key: "COMPLETED",
			},
		];

		let menuIndex = menuItems.findIndex(({ name }) => name === tab);

		return (
			<div className="container">
				<Segment.Group>
					<Segment>
						<AddTodo addTodo={this.handleAddTodo} />
					</Segment>

					{!!todos.length && (
						<>
							<Segment>
								<TodoList
									items={todos}
									removeTodo={this.handleRemoveTodo}
									toggleTodo={this.handleToggleTodo}
								/>
							</Segment>

							<Menu
								items={menuItems}
								activeIndex={menuIndex}
								onItemClick={this.handleTabClick}
							/>
						</>
					)}
				</Segment.Group>
			</div>
		);
	}
}

export default App;
