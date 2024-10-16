import './App.css'
import TodoList from './components/TodoList'
 
function App() {

  return (
    <>
      <TodoProvider>

        <TodoList />
      </TodoProvider>
    </>
  )
}

export default App
