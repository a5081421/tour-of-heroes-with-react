/**
* @file 產生Board列表
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import BoardListItemAddComponent from '../containers/board_list_item_add';

class BoardList extends Component {

  renderList() {
      // 接API的錯誤暫時用 console.log() 呈現
      if(this.props.error){
          console.error("[WJ]Error from board list :", this.props.error )
      }
    return this.props.board_list.map((board) => {
      return (
        <li
          key={board.title}
          className="boards-page-board-section-list-item">
          <Link to= {`b/${board.id}`}  className="board-title" style={{backgroundColor:board.color}}>
            <span className="board-title-details-name" >
                {board.title}
            </span>
          </Link>
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="boards-page-board-section-list">
        {this.renderList()}
        <BoardListItemAddComponent />
      </ul>
    );
  }
}

/**
* @function mapStateToProps
* @param state {Object} 狀態
* @type Object
*/
function mapStateToProps(state) {
  return {
    board_list: state.boards.board_list,
    error: state.boards.error
  };
}

export default connect(mapStateToProps)(BoardList);
