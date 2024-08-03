import logo from './logo.svg';
import './App.css';
import UserCrudWrapper from './Components/UserCrud/UserCrudWrapper';
import Counter from './Components/Counter/Counter';
import CreateUser from './Components/CrudOperation/CreateUser';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import { Link, Route, Routes } from 'react-router-dom';
import Flag from './Components/Flag/Flag';
import ImageCaresoul from './Components/ImageCarsoul/ImageCaresoul';
import { ContextExample } from './Components/Context/ContextExample';
import UseEffectExample from './Components/UseEffect/UseEffectExample';
import { useState } from 'react';
import { Button } from '@mui/material';
import TodoList from './Components/Todos/TodoList';
import UserProfile from './Components/UserProfile/UserProfile';
import UserList from './Components/UserProfile/UserList';
import FormExample from './Components/FormEx/FormExample';
import FormikExample from './Components/Formik/FormikExample';
import ReduxExample from './Components/Redux/ReduxExample';
import Customhookexample from './Components/Custom-hook/Customhookexample';
import { AuthenticatedComponenet } from './Components/HOCEXample/Hoc';
import Greeting from './Greeting';


function App() {
  const [name,setName]=useState("Shlok")
  return (
    <div className="App">
      <div className='header'>React Navigation</div>
      <div className='container-body'>
        <div className='sidebar'>
        <Link className='link' to={"/counter"}>Counter</Link><br/><br/>
        <Link className='link' to={"/greeting"}>Greeting</Link><br/><br/>
        <Link className='link' to={"/todoslist"}>Todos List</Link><br/><br/>
        <Link className='link' to={"/tic-tac-toe"}>Tic-Tac Game</Link><br/><br/>
        <Link className='link' to={"/usercrud/list"}>Users Crud</Link><br/><br/>
        <Link className='link' to={"/flag"}>Flag</Link><br/><br/>
        <Link className='link' to={"/context"}>Context Example</Link><br/><br/>
        <Link className='link' to={"/useeffect"}>UseEffect</Link><br/><br/>
        <Link className='link' to={"/userlist"}>User Profile</Link><br/><br/>
        <Link className='link' to={"/user-form"}>User Form</Link><br/><br/>
        <Link className='link' to={"/formik"}>Formik Example</Link><br/><br/>
        <Link className='link' to={"/redux-example"}>Redux Example</Link><br/><br/>
        <Link className='link' to={"/custom-hook-example"}>Custom-hook</Link><br/><br/>
        <Link className='link' to={"/hoc"}>HOC-Example</Link><br/><br/>
        </div>

       
        <div className='content'>
          <Routes>
            <Route path='/counter' element={<Counter/>}></Route>
            <Route path='/greeting' element={<Greeting name="Sonali" greeting="Hello"/>}></Route>
            <Route path='/todoslist' element={<TodoList/>}></Route>
            <Route path='/tic-tac-toe' element={<TicTacToe/>}></Route>
            <Route path='/usercrud/*' element={<UserCrudWrapper/>}></Route>
            <Route path='/flag' element={<Flag/>}></Route>
            <Route path='/imagecaresoul' element={<ImageCaresoul/>}></Route>
            <Route path='/context' element={<ContextExample/>}></Route>
            <Route path='/useeffect' element={<UseEffectExample/>}></Route>
            <Route path='/userlist' element={<UserList/>}></Route>
            <Route path='/user-form' element={<FormExample/>}></Route>
            <Route path='/formik' element={<FormikExample/>}></Route>
            <Route path='/redux-example' element={<ReduxExample/>}></Route>
            <Route path='/custom-hook-example' element={<Customhookexample/>}></Route>
            {/* <Route path='/hoc' element={<AuthenticatedComponenet/>}></Route> */}
            <Route path='*' element={<div>This Url is not matched</div>}></Route>
          </Routes>
        </div>
      </div>
      
     {/* <UserCrudWrapper/> */}
     {/* <ReduxStoreExample/> */}
     {/* <Counter/> */}
     {/* <CreateUser/> */}
     {/* <TicTacToe/> */}
     {/* <ImageCaresoul/> */}
   {/* <ContextExample/> */}
   {/* <Greeting name="Sonali" greeting="Hello"/> */}
   
   {/* <UseEffectExample name={name}></UseEffectExample><br/> */}
   {/* <Button  variant="contained" onClick={()=>setName(name+Math.random()*10)}>Change Prop</Button> */}
   {/* <FormExample/> */}
   {/* <FormikExample/> */}

    </div>
  );
}

export default App;
