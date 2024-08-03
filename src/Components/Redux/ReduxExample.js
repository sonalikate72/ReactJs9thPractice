import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { Button } from '@mui/material'
import { decrement, decrementByAmount, increment, incrementByAmount } from './CounterSlice'
import { addUser, deleteUser } from './UsersSlice'

const ReduxExample = () => {
  return (
    <Provider store={store}>
    <div><h2><strong>Redux Example</strong></h2></div>
  <ReduxCounterExample/><br/><br/>
  <ReduxUsersExample/>
    </Provider>
  )
}

export default ReduxExample

function ReduxCounterExample (){
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch()
  return <div>
    <h3>count:{count}</h3>
    <br/><br/>
    <Button variant='contained' onClick={()=>{
      dispatch(increment());
    }}>Increment</Button>&nbsp;&nbsp;
       <Button variant='contained' onClick={()=>{
      dispatch(decrement());
    }}>Decrement</Button><br/><br/>
     <Button variant='contained' onClick={()=>{
      dispatch(incrementByAmount(5));
    }}>Increment By</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={()=>{
      dispatch(decrementByAmount(5));
    }}>Decrement By</Button>
  </div>
}



function ReduxUsersExample(){
  const dispatch = useDispatch()
  const userData = useSelector((state)=>state.userData)
  return <div>
   <h2> Total users:{userData.length}</h2>
    {userData.map(userData=>{
      return <div key={userData.id}>{userData.name}</div>
    })}
    <br/><br/>
    <Button variant='contained' onClick={()=>{
      dispatch(addUser({
        id:userData.length+1,
        name:"Purva" + userData.length
      }))
    }}>Add User</Button>
    {/* <Button variant='contained' onClick={()=>{
      dispatch(deleteUser({
        id:userData.length - 1,
      }))
    }}>Delete User</Button> */}
  </div>
}