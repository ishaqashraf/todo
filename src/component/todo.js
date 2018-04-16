import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoList from './todoList.js';
import TodoForm from './todoForm.js';


class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	generateId() {
		return Math.floor(Math.random() * 90000) + 10000;
	}

	handleNodeRemoval(nodeId) {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== nodeId;
		});
		this.setState({ data });
		return;
	}

	handleNodeEdit(nodeId, task, newValue) {
		var data = this.state.data
		var index = data.findIndex(i => i.task === task);
		data[index].task = newValue
		this.setState({ data });

	}

	handleSubmit(task) {
		var data = this.state.data;
		var id = this.generateId().toString();
		var complete = 'false';
		data = data.concat([{ id, task, complete }]);
		this.setState({ data });
	}
	handleToggleComplete(nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id == nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({ data });
		return;
	}

	render() {
		return (
			<div className="well">
				<TodoList
					data={this.state.data}
					removeNode={this.handleNodeRemoval.bind(this)}
					editNode={this.handleNodeEdit.bind(this)}
					toggleComplete={this.handleToggleComplete.bind(this)}
				/>
				<TodoForm
					onTaskSubmit={this.handleSubmit.bind(this)}
				/>
			</div>
		);
	}
}

export default Todo;
