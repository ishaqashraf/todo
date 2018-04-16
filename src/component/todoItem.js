import React, { Component } from 'react';
import '../App.css';
import Modal from 'react-modal';
import ReactDOM from 'react-dom'
import EditModal from './editModal';


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  removeNode(e) {
    e.preventDefault();
    this.props.removeNode(this.props.nodeId);
    return;
  }
  toggleComplete(e) {
    e.preventDefault();
    this.props.toggleComplete(this.props.nodeId);
    return;
  }
  editNode(task) {
    this.props.editNode(this.props.nodeId, this.props.task, task);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  render() {
    var classes = 'list-group-item clearfix';
    if (this.props.complete === 'true') {
      classes = classes + ' list-group-item-success';
    }
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <EditModal
            closeModal={this.closeModal}
            editNode={this.editNode.bind(this)}
            nodeId={this.props.nodeId}
            task={this.props.task}
          />
        </Modal>
        <li className={classes}>
          {this.props.task}
          <div className="pull-right" role="group">
            <button type="button" className="btn btn-xs btn-success img-circle"
              onClick={this.toggleComplete.bind(this)}>
              &#x2713;
          </button>
            <button type="button" className="btn btn-xs btn-info img-circle"
              onClick={this.openModal}>
              &#x2756;
          </button>
            <button type="button" className="btn btn-xs btn-danger img-circle"
              onClick={this.removeNode.bind(this)}>
              &#xff38;
          </button>
          </div>
        </li>
      </div>

    );
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default TodoItem;
