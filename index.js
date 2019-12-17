import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Provider} from 'react-redux';
import store, {COUNTER_INCREMENT,COUNTER_DECREMENT} from './store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      count: 0
    };
  }

  increment = () =>
  {
    store.dispatch({type:COUNTER_INCREMENT});
    console.log(store.getState());
  }
  decrement = () =>
  {
    store.dispatch({type:COUNTER_DECREMENT});
    console.log(store.getState());
  }
  push = () =>
  {
    store.dispatch({type:'push', value: Math.random()});
    console.log(store.getState());
  }
  pop = () =>
  {
    store.dispatch({type:'pop'});
    console.log(store.getState());
  }

  render() {
    return (
      <Provider store={store}>
      <div>
        <Hello name={this.state.name} count={this.state.count} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.push}>Push</button>
        <button onClick={this.pop}>Pop</button>
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
