/**
* @file Component 框架管理
*/
import React from 'react';
import { Component } from 'react';
import Header from './header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeroActions from '../actions/index';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*{this.props.children}*/}
        {/* 傳變數進去 */}
        {React.cloneElement(this.props.children, { actions: this.props.actions , heroAppState: this.props.heroAppState })}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    heroAppState: state.heroAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HeroActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
