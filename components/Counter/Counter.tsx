import { decrement, increment, incrementAsync } from '@/redux/counter/counterSlice';
import { AppDispatch, RootState } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const loading = useSelector((state: RootState) => state.counter.loading);
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='flex flex-col gap-6 items-center'>
      <p className='text-3xl font-semibold'>Counter</p>
      <p className='text-[100px] font-semibold'>{counter}</p>
      <div className='flex gap-4'>
        <button onClick={() => dispatch(increment())} className='p-4 rounded-lg font-semibold bg-blue-700'>Increment</button>
        <button 
          onClick={() => !loading && dispatch(incrementAsync())} 
          className={`p-4 rounded-lg font-semibold ${loading ? 'bg-blue-500' : 'bg-blue-700'}`}
        >
          Async Increment
        </button>
        <button onClick={() => dispatch(decrement())} className='p-4 rounded-lg font-semibold bg-blue-700'>Decrement</button>
      </div>
    </div>
  )
}

export default Counter