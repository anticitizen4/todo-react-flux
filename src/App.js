import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import store from "./flux/store";
import * as actions from "./flux/actions";

class App extends Component {
	constructor() {
		super();
		this.state = { inputVal: "", todos: store.getTodos() };
	}

	componentDidMount() {
		store.addListener("change", this.update);
	}

	update = _ => {
		this.setState({ todos: store.getTodos() });
	};

	// handleAddTodo() {
	// 	actions.addTodo(val);
	// }

	handleInputChange = event => {
		let val = event.target.value.trim();
		this.setState({ inputVal: val });
	};

	render() {
		return (
			<div className="App">
				<Input
					value={this.state.inputVal}
					onChange={this.handleInputChange}
				/>
				{/* <Button onClick={this.handleAddTodo}>Add</Button> */}
				{this.state.todos.map(todo => {
					return <p>123</p>;
				})}
			</div>
		);
	}
}

export default App;
