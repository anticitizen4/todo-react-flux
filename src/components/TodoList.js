import React, { Component } from "react";
import { List } from "semantic-ui-react";

class TodoList extends Component {
	handleItemClick = (_, { id }) => {
		this.props.removeTodo(id);
	};

	render() {
		let items = this.props.items.map(todo => {
			return {
				key: todo.id,
				id: todo.id,
				content: todo.text,
				onClick: this.handleItemClick,
			};
		});

		return (
			<List celled>
				{items.map(item => {
					return <List.Item {...item} />;
				})}
			</List>
		);
	}
}

export default TodoList;
