import React, { Component } from "react";
import { List, Checkbox, Button } from "semantic-ui-react";

class TodoList extends Component {
	handleButtonClick = (_, { id }) => {
		this.props.removeTodo(id);
	};

	handleCheckboxChange = (_, { id }) => {
		this.props.toggleTodo(id);
	};

	render() {
		let todos = this.props.items;

		return (
			<List celled>
				{todos.map(({ id, text, completed }) => {
					return (
						<List.Item
							className={completed ? "completed" : ""}
							key={id}
						>
							<Checkbox
								id={id}
								checked={completed}
								onChange={this.handleCheckboxChange}
							/>
							<p>{text}</p>
							<Button
								id={id}
								onClick={this.handleButtonClick}
								content="del"
								basic
								compact
							/>
						</List.Item>
					);
				})}
			</List>
		);
	}
}

export default TodoList;
