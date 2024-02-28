import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React, { useMemo } from 'react';
import { decrement, increment } from './redux/slices/CounterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  // Memoize the JSX elements to prevent unnecessary renders
  const memoizedElements = useMemo(() => (
    <>
      <div>
        count: {count}
      </div>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>hello</p>
    </>
    
  ), [count]);

  return (
    <>
      {memoizedElements}
      {console.log("re-render")}
    </>
  );
}

export default App;
