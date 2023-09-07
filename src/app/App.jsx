// Dependencies
import {useState ,useEffect} from 'react';
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { nanoid } from 'nanoid';
import dayjs from "dayjs";
// import { Button } from '../components/Common/Button/Button';

// data
// const mockData = [
//   { "id": 1, "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
//   {
//       "id": 2,
//       "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
//       "status": false,
//       "due_date": "2023-05-08"
//   },
//   {
//       "id": 3,
//       "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//       "status": false,
//       "due_date": "2023-04-30"
//   },
// ]

const END_POINT = 'http://localhost:8080/api/todos';

function App() {
  const [allTodos, setAllTodos] = useState([])



  useEffect(() => {
    // fetchAllTodo
    async function fetchAllTodo () {
      try {
        let res = await fetch('http://localhost:8080/api/todos', {method: 'GET'});
        let todoData = await res.json();
        console.log(todoData);
        
        const newTodoLists = todoData.todos.map((todo) => {
          const newTodo = {...todo, due_date: todo.date};
          delete todo.date;
          return newTodo;
        })

        setAllTodos(newTodoLists)
      }catch (err) {
        console.log(err);
      }
    }

    fetchAllTodo()
  }, [])

  // add : CreateTodo
  const addTodo = async (taskName) => {
    const newTodo = {
      // id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format('YYYY-MM-DD'),
    };
    try {
      // SEND REQUEST : POST
      const options = { method:"POST", headers : {"Content-type" : "application/json"} , body: JSON.stringify(newTodo) }
      let res = await fetch(END_POINT, options)
      let data = await res.json()
      console.log(data)
      // WAIT RESPONSW
      // Update STATE
      setAllTodos((p) => [data.todo, ...p])
    } catch (err) {
      console.log(err)
    }

    // setAllTodos((p) => [newTodo, ...p])
  }

  // delete
  const deleteTodo = async (todoId) => {
    // console.log(todoId)
    try {
      const options = { method:"DELETE" };
      let res = await fetch(`${END_POINT}/${todoId}`, options);
      console.log(res);
      
      // let data = await res.json()
      if(res.status === 204) {
        setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));
      }
    } catch (err) {
      console.log(err)
    }
    // allTodos.splice(todoId, 1)
    // setAllTodos([...allTodos])

    // #1
    // let foundedIndex = allTodos.findIndex((todo) => todo.id === todoIndex)
    // if (foundedIndex !== -1){
    //   const newTodoLists = [...allTodos];
    //   newTodoLists.splice(foundedIndex, 1)
    //   setAllTodos(newTodoLists)
    // }
    // #2
    // const newTodoLists = allTodos.filter((todo) => todo.id !== todoId);
    // setAllTodos(newTodoLists);
    // #3
    // setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  }

  // edit : UpdateTodo
  const editTodo = async (todoId, updateTodoObj) => {

    // FindTodo
    try {
      let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
      if(foundedIndex !== -1) {
        // updateTodo
        const updateTodo = { ...allTodos[foundedIndex], ...updateTodoObj };
        const options = { method:"PUT", headers: { 'Content-type': 'application/json'}, body: JSON.stringify(updateTodo)}
        const res = await fetch(`${END_POINT}/${todoId}`, options)
        const data = await res.json()
        console.log(data)

        // UpdateState
        const newTodoLists = [...allTodos]
        newTodoLists[foundedIndex] = data.todo;
        setAllTodos(newTodoLists)
      }
    } catch (err) {
      console.log(err)
    }

    // #1
    // let foundedTodo = allTodos.find((todo) => todo.id === todoId)
    // if (!foundedTodo) return;
    // const newTodo = Object.assign({}, foundedTodo, newTodoObj)

    // let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId)
    // if(foundedIndex === -1) return

    // const newTodoLists = [...allTodos]
    // newTodoLists.splice(foundedIndex, 1, newTodo)
    // setAllTodos(newTodoLists)

    // #2
    // const newTodoLists = allTodos.map(function(todo) {
    //   if(todo.id !== todoId) 
    //     return todo;
    //   else {
    //     const newTodo = {...todo, ...newTodoObj}
    //     return newTodo;
    //   }
    // })
    // setAllTodos(newTodoLists)

    // #3
    // const editTodo = (todoId, updateTodo)
    // const newTodoLists = allTodos.reduce((acc, todo) => {
    //   if(todo.id !== todoId) acc.push(todo)
    //   else acc.push({...todo, ...updateTodoObj})
    //   return acc;
    // }, [])
    // setAllTodos(newTodoLists)

  }

  
  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate 
            // setTodo={setAllTodos} 
            // data={allTodos} 
            addTodo={addTodo}
          />
          <TodoLists data={allTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </main>
      </div>
    </div>
  );
}

export default App;
