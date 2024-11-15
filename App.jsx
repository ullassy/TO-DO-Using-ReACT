import React,{useState} from "react"

function App(){
    const[title,setTitle]=useState('')
    const[des,setDes]=useState('')
    const[todo,setTodo]=useState([])

    const addTodo = (e) =>{
        e.preventDefault()

        const newTodos={
            id:Date.now(),
            title:title,
            description:des
        }

        setTitle('')
        setDes('')
        setTodo([...todo,newTodos])
    }
    return(
        <>
            {
                <form onSubmit={addTodo}>
                     <input  value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="enter title"/>
                    <input  value={des} onChange={(e)=>setDes(e.target.value)} placeholder="enter description"/>
                    <button type='submit'>Add TO-DO</button>
                </form>
            }
             
             <ul>
  {todo.map((value) => (
    <li key={value.id}>
      <h1>{value.title}</h1>
      <h3>{value.description}</h3>
    </li>
  ))}
</ul>

            
        </>
    )
