
import styles from './TodoItem.module.scss';

// import { useState } from 'react';
import TodoItem from './TodoItem'

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

function TodoLists(props) {
// CRUD = Create-Read-Update-Delete
// const [allTodos, setAllTodos] = useState(mockData)


  return (
    <>
        <ul className={styles.todo__lists}>

          {props.data.map((todoObj, index) => (
            <div key={index}>
              <TodoItem 
                task={todoObj.task} 
                done={todoObj.status} 
                date={todoObj.due_date} 
                id={todoObj.id}
                index={todoObj.id}
                deleteTodo={props.deleteTodo}
                editTodo={props.editTodo}
              />
            </div>
          ))}

        </ul>
    </>    
  );
}

export default TodoLists;
