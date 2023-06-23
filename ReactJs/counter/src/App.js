import "./App.css";
import { useReducer } from "react";

function App() {
  const initialState = {
    counter: 0,
  };
  const reducer = (state = initialState, action) => {
    const type = action.type;
    switch (type) {
      case "increment":
        return {
          ...state,
          counter: state.counter + 1,
        };

      case "decrement":
        return {
          ...state,
          counter: state.counter - 1,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      Count : {state.counter}
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
