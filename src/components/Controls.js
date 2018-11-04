import React, { Component } from "react";
import { Label, Menu, Button } from "semantic-ui-react";

class Controls extends Component {
	handleItemClick = (_, { name }) => {
		this.props.switchTab(name);
	};

	render() {
		let { tab, count, clearCompleted } = this.props;

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
			<div>
				<Label basic>
					{count} item
					{count > 1 && "s"}
				</Label>
				<Menu
					items={menuItems}
					activeIndex={menuIndex}
					onItemClick={this.handleItemClick}
					secondary
				/>
				<Button
					onClick={clearCompleted}
					content="clear"
					basic
					compact
				/>
			</div>
		);
	}
}

export default Controls;
