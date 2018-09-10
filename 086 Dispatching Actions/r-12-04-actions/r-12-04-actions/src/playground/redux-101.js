import { createStore } from 'redux';

// we combining action with state
const store = createStore((state = { count: 0 }, action) => {
// this action.type is coming from dispatches,
// here according to that action.type we returning state 
  console.log("action.type",action.type)
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - than an object that gets sent to the store
// changes the store over time// action type name shld be upper case charter
// dispatch - actually allow as to send action obj to store ,, by using this action we can chage the state.
// this dispatch is passsing as 2nd arg  
// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

// I'd like to reset the count to zero


console.log(store.getState());
