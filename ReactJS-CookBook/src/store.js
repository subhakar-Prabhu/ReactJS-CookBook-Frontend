import * as redux from 'redux';

//Actions
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

const countInitialState = {
  count: 0
}

const countReducer = (state = countInitialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case COUNTER_DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
}

const testReducer = (state = [], action) => {
  switch (action.type) {
    case 'push': {
      const data = [...state];
      data.push(action.value);
      return [...data];
    }
    case 'pop': {
      const data = [...state];
      data.pop();
      return [...data];
    }
    default: {
      return state;
    }
  }
}

const dataReducer = (state = {data: null}, action) => {
  switch (action.type) {
    case 'setData': {
      return {data: action.data};
    }
    case 'removeData': {
      return {data: null};
    }
    default: {
      return state;
    }
  }
}

const rootReducer = redux.combineReducers({
  counter: countReducer,
  tester: testReducer,
  storage: dataReducer
});

const store = redux.createStore(rootReducer);
export default store;