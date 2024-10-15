import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,reset,incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="IncBy12 value"
          onClick={() => dispatch(incrementByAmount(12))}
        >
          Increment par 12
        </button>
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
        <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}