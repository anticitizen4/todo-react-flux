import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";

class AddTodo extends Component {
	constructor() {
		super();
		this.state = { val: "" };
		this.input = React.createRef();
	}

	handleChange = event => {
		let val = event.target.value;
		this.setState({ val });
	};

	handleSubmit = _ => {
		let val = this.state.val.trim();
		if (!val) return;

		this.props.addTodo(val);
		this.setState({ val: "" });

		this.input.current.focus();
	};

	render() {
		return (
			<div className="add-todo">
				<Form onSubmit={this.handleSubmit}>
					<Input
						value={this.state.val}
						onChange={this.handleChange}
						ref={this.input}
						action={<Button content="+" />}
						fluid
					/>
				</Form>
			</div>
		);
	}
}

export default AddTodo;
