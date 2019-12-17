import React from 'react';
import {connect} from 'react-redux';

let Hello = (props) =>
{
  return <h1>Hello {props.name}! {props.count}</h1>;
}
const mapStateToProps = (state) =>
{
  return{
    count:state.counter.count
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return{
    count:state.counter.count
  }
}

export default connect(mapStateToProps,null)(Hello);