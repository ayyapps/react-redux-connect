import * as redux from 'redux';

export const COUNTER_INCREMENT='counter/increment';
export const COUNTER_DECREMENT='counter/decrement';

const countIntialState = {
  count:0
}

const countReducer = (state=countIntialState,action) =>
{
  switch(action.type){
    case COUNTER_INCREMENT:{
      return{...state, count: state.count + 1};
      break;
    }
    case COUNTER_DECREMENT:{
      return{...state, count: state.count - 1};
      break;
    }
    default:{
      return state;
    }
  }
}

const testReducer = (state=[],action) =>
{
  switch(action.type){
    case 'push':{
      const data = [...state];
      data.push(action.value);
      return [...data];
      break;
    }
    case 'pop':{
      const data = [...state];
      data.pop();
      return [...data];
      break;
    }
    default:{
      return state;
    }
  }
}

const rootReducer = (state={}, action) =>
{
  return{
    counter: countReducer(state.counter,action),
    tester: testReducer(state.tester,action)
  }
}

const store = redux.createStore(rootReducer);
export default store;