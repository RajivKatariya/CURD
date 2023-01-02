import React from 'react';
import { increment, decrement } from './Myslide';
import { useSelector, useDispatch } from 'react-redux';




export function Order1() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }

export default Order1