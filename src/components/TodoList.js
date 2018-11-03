import React, { Component } from "react";
import { List, Checkbox, Button } from "semantic-ui-react";

class TodoList extends Component {
	handleItemClick = (_, { id }) => {
		this.props.removeTodo(id);
	};

	render() {
		let todos = this.props.items;

		return (
			<List celled>
				{todos.map(todo => {
					return (
						<List.Item key={todo.id}>
							<Checkbox />
							<p>{todo.text}</p>
							<Button
								content="del"
								basic
								compact
								id={todo.id}
								onClick={this.handleItemClick}
							/>
						</List.Item>
					);
				})}
			</List>
		);
	}
}

export default TodoList;
