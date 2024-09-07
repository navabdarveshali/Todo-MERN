import { useEffect, useState } from "react";
import axios from "axios";
export function Todos() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/todos", {
                headers: {
                    "Content-Type": "application/json",
                },
               
                
            });
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error.response ? error.response.data : error.message);
        }
        fetchTodos();
        
        
    };

    useEffect(() => {
        fetchTodos();
        
    }, []);
    
    async function markTodoAsCompleted(id) {
        try {
            const response = await axios.put("http://localhost:3000/completed", 
                { id }, // Data to be sent in the body
                {
                    headers: {
                        "Content-Type": "application/json", // Ensure correct Content-Type
                    },
                }
            );
            // console.log(id);
            
            fetchTodos(); // Refresh the todos after marking as completed
        } catch (error) {
            console.error("Error marking todo as completed:", error.response ? error.response.data : error.message);
        }
    }
    
    

    async function deletetodo(id) {
        try {
            const response = await axios.delete("http://localhost:3000/delete", {
                
                headers: {
                    "Content-Type": "application/json",

                },
                data: {
                    id,
                },
            });
    
            // console.log(response.data.msg);
            fetchTodos();
        } catch (error) {
            console.error("Error marking todo is deleted:", error.response ? error.response.data : error.message);
        }
    }

    return (
        <>
    <div className="container my-3">
        <div className="container">
            <h2>Your Todo's</h2>
        </div>
        <div className="row">
            {todos.length > 0 && todos.map((Todo) => (
                <div className="col-md-4" key={Todo._id}>
                    <div className="card text-bg-dark mb-4" style={{ width: "100%" }}>
                        <div className="card-body">
                            <h1 className="card-header">{Todo.title}</h1>
                            <p className="card-text">{Todo.description}</p>
                            {/* <p className="card-text"> {format(new Date(Todo.datetime), "EEEE, MMMM do, yyyy, h:mm:ss a")}</p> */}
                            <button 
                                className="btn btn-light m-2" 
                                onClick={() => markTodoAsCompleted(Todo._id)}
                            >
                                {Todo.completed ? "Completed" : "Mark as Complete"}
                            </button>
                            <button 
                                className="btn btn-light m-2" 
                                onClick={() => deletetodo(Todo._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</>


    
    );
}
{/* <>
<div className="container">
<div className="card" style="width: 18rem;">
    {todos.length > 0 && todos.map((Todo) => (
        <div className="card-body"key={Todo._id}>
            <h1 className="card-title">{Todo.title}</h1>
            <h2 className="card-text">{Todo.description}</h2>
            <button onClick={()=>markTodoAsCompleted(Todo._id)}>{Todo.completed ? "Completed" : "Mark as Complete"}</button>
            <button onClick={()=>deletetodo(Todo._id)}>delete</button>
        </div>
    ))}
</div>
</div>
</> */}