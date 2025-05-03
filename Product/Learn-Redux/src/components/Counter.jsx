import React from 'react'
import {connect} from 'react-redux'
import { increment,decrement,reset } from '../action/counterAction'

const Counter = ({count,increment,decrement,reset}) => {
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
});


const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


