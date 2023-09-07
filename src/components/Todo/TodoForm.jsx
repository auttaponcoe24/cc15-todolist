import {Button} from '../Common/Button/Button'
import styles from './TodoForm.module.scss';
import {useState} from 'react'
import { nanoid } from 'nanoid';
// import TodoCreate from './TodoCreate'

/*
  props = {
    textSubmit : string,
    setIsOpenForm : FN,
    oldTodo: {id, task, status, due_date},
    addTodo : Fn,
    editTodo : Fn,
  }
*/
/*
CC1 - Form Handle

- ใช้ Fn ไปผูกกับ Event ชื่อ onSubmit
- Fn จะถูก Browser เรียกใช้ (เมื่อไหร่ ?) โดยส่ง parameter มา 1 ตัว (event Object)
- โดย default ทุกปุ่มใน <form></form> จะทำหน้าที่ submit
- วิธีแก้ ต้องกำหนด type ของปุ่ม
  - type = "submit"
  - type = "button"
*/

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState(props.oldTodo?.task || '');

  // const [isShow, setIsShow] = useState(false)

  const handleChangeInput = (e) => {
    if(isError) setIsError(false)
    setTaskInput(e.target.value)
  } 

  // 2 Mode : Add or Edit
  const handleSubmit = (e) => {
    e.preventDefault()
    // FormValidation
    if ( taskInput.trim() === '') {
      setIsError(true)
      return;
    } else {
      //console.log('submit === create new Todo')
      // data = [{id:number, task:string, status:boolean, due_date:YYYY-MM-DD}]
      
      // const newTodo = 
      //   {
      //     // id: props.data.length + 1,
      //     id: nanoid(),
      //     task: taskInput,
      //     status: false,
      //     due_date : "2023-09-01",
      //   }

      // const newTodoLists = [newTodo, ...props.data]
      // props.setTodo(newTodoLists)

      // Update State
      // props.setTodo((prev) => [newTodo, ...prev])
      // send taskInput to addTodo
      if (props.addTodo) props.addTodo(taskInput)
      else if(props.editTodo && props.oldTodo) {
        props.editTodo(props.oldTodo.id, {task: taskInput})
      }

      props.setIsOpenForm(false)
    }
    // create NewTodo
    // 1 - ส่ง request ไปหลังบ้าน เพื่นอ save ลง Database
    // 2 - ทำการอัพเดท State ของ AllTodo == React ทำการ Rerender
  };

  const handleCancel = () => {
    //console.log('cancel')
    // correctName : setIsOpenForm(ture)
    // inCorrectName : undefined(ture) => บู้มเป็นโกโก้ครั้น
    props.setIsOpenForm(false)
  }

  return (

    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input 
        className={styles.todo__form__input} 
        placeholder='Task Name' 
        value={taskInput}
        onChange={handleChangeInput} />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>{props.message}</p>:null }
        <div className={styles.todo__form__buttons}>
          <Button text='Cancel' active={false} type='button' onClick={handleCancel} />
          <Button text={props.textSubmit} active={true} type='submit'/>
          {/* <button type='button'>button</button>
          <button type='submit'>submit</button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
