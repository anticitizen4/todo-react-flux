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
				{todos.map(todo => {
					return (
						<List.Item key={todo.id}>
							<Checkbox
								checked={todo.completed}
								id={todo.id}
								onChange={this.handleCheckboxChange}
							/>
							<p>{todo.text}</p>
							<Button
								content="del"
								basic
								compact
								id={todo.id}
								onClick={this.handleButtonClick}
							/>
						</List.Item>
					);
				})}
			</List>
		);
	}
}

export default TodoList;
