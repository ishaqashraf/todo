import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    doSubmit(e) {
        e.preventDefault();
        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
        if (!task) {
            return;
        }
        this.props.onTaskSubmit(task);
        ReactDOM.findDOMNode(this.refs.task).value = '';
        return;
    }

    render() {
        return (
            <div className="commentForm vert-offset-top-4">
                <hr />
                <div className="clearfix">
                    <form className="todoForm form-horizontal" onSubmit={this.doSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-4 control-label">Task</label>
                            <div className="col-md-4">
                                <input type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-2 text-right">
                                <input type="submit" value="Add Task" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoForm;
