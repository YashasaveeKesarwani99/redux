const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  sum: 0
};
//Reducers
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNT") {
    state = {
      ...state,
      sum: state.sum + action.payload
    };
  }
  if (action.type === "TEN_COUNT") {
    state = {
      ...state,
      sum: state.sum + action.payload
    };
  }
  return state;
};
//Store
const store = createStore(rootReducer);
//Dispatching actions
store.dispatch({ type: "INC_COUNT", payload: 1 });
store.dispatch({ type: "TEN_COUNT", payload: 10 });
//Subscription
store.subscription(() => console.log(store.getState()));
