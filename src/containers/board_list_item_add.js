/**
* @file 建立新的board
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Modal, Button } from 'react-bootstrap';
import { handleBoardModal, createBoard, fetchBoardLists } from '../actions/index';

class BoardListItemAddComponent extends Component {
    constructor(props) {
        super(props);
        this.handleModal = this.handleModal.bind(this);
    }

    componentWillMount() {
	    this.props.fetchBoardLists();
	  }


    /**
    * @function
    * 控制 board modal的開關
    */
    handleModal(){
        this.props.handleBoardModal(!this.props.show);
    }

    handleFormSubmit(formProps) {
        this.props.createBoard(formProps);
        this.handleModal();
    }


  render() {

    const { handleSubmit, fields: { title, team }} = this.props;

    return (
      <li
        className="boards-page-board-section-list-item">
        <a
          className="board-title mod-add"
          onClick={this.handleModal}>
          <span>
              Create new board
          </span>
          <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton onHide={this.handleModal} >
              Create Board
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                  <label>Title:</label>
                  <input className="form-control" {...title}/>
                </fieldset>
                <fieldset className="form-group">
                  <label>Team:</label>
                      <select className="form-control" {...team}>
                         <option value="none">(none)</option>
                         <option value="1">TeamA</option>
                         <option value="2">TeamB</option>
                      </select>
                </fieldset>

                <button action="submit" className="btn btn-success">Create</button>
              </form>
            </Modal.Body>
          </Modal>
        </a>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.boards.show
  };
}

export default reduxForm({
    form: 'cread_board',
    fields: ['title','team'],
}, mapStateToProps, {handleBoardModal, createBoard, fetchBoardLists})(BoardListItemAddComponent);
