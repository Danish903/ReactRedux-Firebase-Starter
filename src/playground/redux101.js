import { createStore } from "redux";
//Action generators that reutrns action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) =>({
  type: "DECREMENT",
  decrementBy
});
const reset = () =>({
  type:"RESET"
});

const setCount =({count}) =>({
  type: "SET",
  count
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        const incrementBy =
          typeof action.incrementBy === "number" ? action.incrementBy : 1;
        return { count: state.count + incrementBy };
      case "DECREMENT":
        const decrementBy =
          typeof action.decrementBy === "number" ? action.decrementBy : 1;
        return { count: state.count - decrementBy };
      case "RESET":
        return { count: 0 };
        case "SET":
          return { count: action.count};
      default:
        return state;
    }
};
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});
//Actions
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
  type: "RESET"
});

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({count: 101}));
