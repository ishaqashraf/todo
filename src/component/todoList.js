import React, { Component } from 'react';
import '../App.css';
import TodoItem from './todoItem.js';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    removeNode(nodeId) {
        this.props.removeNode(nodeId);
        return;
    }
    editNode(nodeId, task, newValue) {
        this.props.editNode(nodeId, task, newValue);
        return;
    }
    toggleComplete(nodeId) {
        this.props.toggleComplete(nodeId);
        return;
    }

    render() {
        var listNodes = this.props.data.map(function (listItem) {
            return (
                <TodoItem
                    key={listItem.id}
                    nodeId={listItem.id}
                    task={listItem.task}
                    complete={listItem.complete}
                    removeNode={this.removeNode.bind(this)}
                    editNode={this.editNode.bind(this)}
                    toggleComplete={this.toggleComplete.bind(this)} />
            );
        }, this);
        return (
            <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
                {listNodes}
            </ul>
            </div>
        );
    }
}

export default TodoList;
