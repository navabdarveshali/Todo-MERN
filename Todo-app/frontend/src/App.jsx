import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import NavBar from './components/NavBar'

// useEffect hook
function App() {
  

  // fetch("http://localhost:3000/todos")
  //   .then(async function(res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })

  return (
    <div>
      <NavBar/>
      <CreateTodo></CreateTodo>
      <br></br>
      <Todos/>
    </div>
  )
}

export default App