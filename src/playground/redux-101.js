import {createStore} from 'redux';

// Actions
// ------------

// const incrementCount = (payload = {}) => {
//   return {
//       type: 'INCREMENT',
//       incrementBy: typeof payload.incrementBy === number ? payload.incrementBy : 1
//   }
// };

const incrementCount = ({incrementBy = 1} = {}) => {
  return {
      type: 'INCREMENT',
      incrementBy
  }
};

const decrementCount = ({decrementBy = 1} = {}) => {
  return {
      type: 'DECREMENT',
      decrementBy
  }
};

const setCount = ({count} = {}) => {
    return {
        type: 'SET',
        count
    };
};

const resetCount = () => {
    return {
        type: 'RESET',
        count: 0
    }
};

// Reducer
// ------------

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy};
        case 'DECREMENT':
            return { count: state.count - action.decrementBy};
        case 'SET':
            return { count: action.count};
        case 'RESET':
            return { count: 0};
        default:
            return state;
    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101}));