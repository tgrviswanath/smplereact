import { createStore } from 'redux';

// very 1st redux state container 
//arg of creatstore is a func that called once right aways ad returns value . state value 

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
