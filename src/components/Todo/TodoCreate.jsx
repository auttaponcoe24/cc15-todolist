import styles from './TodoCreate.module.scss';
import TodoForm from './TodoForm'
// import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

import { useState } from 'react';


/*
CC1 - Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm

Concept : true ? <AddTask/> : <TodoForm/>
*/

/*
CC2 - Event handling
- เอาฟังก์ชันไปผูกติดกัล UI เพื่อนให้ USER เป็นคนเรียกใช้ฟังก์ชันเอง
- onClick : ต้อง Click ก่อน , Fn ถึงจะรัน
  -   User ทำการคลิก
  -   Browser จะป็นคนเรียนกใช้ฟังก์ชัน โดยส่ง parameter มา 1 ตัว handleClick(eventObject)
*/

/*
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้
*/

/*
CC-4 Array Destructuring
function myUseState() {
  return [5, 9]
}

let [a, b] = myUseState()
a == 5
b == 9
*/

/*
CC5 - React State (1 ในฟังก์ชันของกลุ่ม React Hook)
  const [state, setState] = useState(initialState:any)
    / element 1 : curreunt Statue
    / element 2 : Fn สำหรับ SetState
    / เมื่อ State เปลี่ยน Function Component จะ Rerender
    / Rerender 1 ครั้ง == code ทั้งหมดใน FC จะถูกรันใหม่ 1 ครั้ง
*/
// #1 : FC = Function Component
function TodoCreate(props) {

  // HOOK Fn
  const [isOpenForm, setIsOpenForm] = useState(false)

  // #2 : JS Function (Logic)
  const handleClick = (e) => {
    // console.log('clicked, e')
    setIsOpenForm(!isOpenForm)
  }
  return (
    <>
      {isOpenForm ? (
        <TodoForm 
          textSubmit='Add Task' 
          setIsOpenForm={setIsOpenForm} 
          message='Title is required' 
          // setTodo={props.setTodo}
          // data={props.data}
          addTodo={props.addTodo}
        />
      ) : (
         <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
