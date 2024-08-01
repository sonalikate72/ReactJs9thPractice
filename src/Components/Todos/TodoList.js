import { Button } from "@mui/material";
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      taskId: 1,
      name: "Task1"},
      {taskId: 2,
      name: "Task2"},
      {taskId: 3,
      name: "Task3"},
      {taskId: 4,
      name: "Task4"},
      {taskId: 5,
      name: "Task5 "},
   
  ]);

  const [data,setData] = useState("");
  const OnInputChange = (e) =>{
    console.log("Input Changed",e.target.value);
    setData(e.target.value);
  }
  return <div>Todo-List &nbsp;&nbsp;
    <input className="Form-control" placeholder="Enter Todos"  value={data} onChange={OnInputChange}></input> &nbsp;&nbsp;
    <Button variant="contained" onClick={()=>{
        // todos.push();
        // console.log(todos);
        // const updatedTodos = [...todos];
        // updatedTodos.push({name:data ,taskId:todos.length+1})
        // setTodos(updatedTodos)
        if(data.length>=1){
            setTodos([...todos,{name:data ,taskId:todos.length+1}])
        }
   

    }}>Add Todo</Button>
    {todos.map((todo)=>{
        return <p key={todo.taskId}>{todo.name}</p>
    })}
  </div>;
};

export default TodoList;
