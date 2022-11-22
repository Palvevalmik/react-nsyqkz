import React, { useState } from 'react';
import './common.css'

function Counter() {

  const [Count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className='card text-center my-5'>
         <div className='card-body bg-info'>
        <h1 className='text-white'>Counter React js Application</h1>
        <div className='my-4'>
          <h2 className='text-white'> Count: { Count} </h2>
          <button className='btn btn-success mx-3' onClick={()=> setCount (Count + 1)}>Increment</button>&nbsp;&nbsp;
          <button className='btn btn-danger mx-3' onClick={()=> setCount (Count - 1)} disabled = {Count === 0}>Decrement</button>&nbsp;&nbsp;
          <button className='btn btn-secondary mx-3' onClick={()=> setCount(0)} disabled = {Count === 0}>Reset</button>&nbsp;&nbsp;
        </div>
         </div>
      </div>
    </div>
  );
}

export default Counter;