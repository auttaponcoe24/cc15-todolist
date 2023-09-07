import React, {useState} from "react";
import styles from './TodoItem.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import TodoForm from './TodoForm'

// function TodoItem({task, done, date}) {
function TodoItem(props) {

    const [isOpenForm, setIsOpenForm] = useState(false);

    // Obj Destucturing (props)
    const {task, done, date, id, deleteTodo, editTodo} = props;
    //console.log(id)
  
    function handleClick () {
      setIsOpenForm(!isOpenForm)
    }

    const toggleStatus = () => {
      const newTodoObj = {id, task, date, status: !done}
      console.log(newTodoObj)
      editTodo(id, newTodoObj)
      
      // props.editTodo(id, newTodoObj)
    }
  return (
    <>
        {isOpenForm ? (
          <TodoForm 
            textSubmit='Edit Task' 
            massage='Please update' 
            setIsOpenForm={setIsOpenForm} 
            editTodo={editTodo} 
            oldTodo={{id, task, done, date}}
          />
        ) : (
          <li className={styles.todo}>
              <div className={`${styles.todo__checkbox} ${done ? styles.todo__checkbox__done : ''}`}>
                  <HiOutlineCheck 
                    className={styles.todo__checkbox__icon} 
                    onClick={toggleStatus}
                  />
              </div>
              <p className={`${styles.todo__task} ${done ? styles.todo__task__done : ''}`}>{task}</p>
              <span className={styles.todo__date}>{date}</span>
              <div className={styles.todo__action}>
                  <span onClick={handleClick}>
                      <FaPen className={styles.todo__edit} />
                  </span>
                  <span>
                      <FaTrashAlt className={styles.todo__delete} onClick={() => deleteTodo(props.index)} />
                  </span>
              </div>
          </li>
          )
        }
    </>
  )
}

export default TodoItem;
