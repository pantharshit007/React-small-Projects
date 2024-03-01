import './App.css';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/slices/CounterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  // Memoize the count to prevent unnecessary re-renders
  const memoizedCount = useMemo(() => count, [count]);
  return (
    <div>
      <div>Count: {memoizedCount}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* re-render here is inevitable since whenever we dispatch a action it rerender whole UI get re-render to facilate the changes*/}
      <p>hey</p>

    </div>
  );
}

export default App;