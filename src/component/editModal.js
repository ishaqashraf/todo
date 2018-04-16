import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '../App.css';


class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    doSubmit(e) {
        e.preventDefault();
        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
        if (!task) {
            this.props.closeModal()
            return;
        }
        this.props.editNode(task);
        ReactDOM.findDOMNode(this.refs.task).value = '';
        this.props.closeModal()
        return;
    }



    render() {
        return (
            <div className="commentForm vert-offset-top-2">
                <hr />
                <div className="clearfix">
                    <form className="todoForm form-horizontal" onSubmit={this.doSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-2 control-label">Task</label>
                            <div className="col-md-10">
                                <input type="text" id="task" ref="task" className="form-control" placeholder={this.props.task} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-2 text-right">
                                <input type="submit" value="Update Task" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditModal;
