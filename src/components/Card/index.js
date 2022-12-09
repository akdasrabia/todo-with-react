import {useState} from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTodo, changeStatus, close } from '../../redux/todo/todoSlice'

function Card({ title, color, button, items }) {
  const dispatch = useDispatch()

  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    if(!task) return
    e.preventDefault();
    dispatch(addTodo({id: nanoid(), task: task, status: "todo"}))
    setTask('')
  }

  const handleClick = (item) => {
    let newStatus;
    if (item.status == "todo"){
      newStatus = "doing"
      dispatch(changeStatus({ id: item.id, newStatus: newStatus }))
    }
    else if(item.status == "doing"){
      newStatus = "done"
      dispatch(changeStatus({ id: item.id, newStatus: newStatus }))
    }else if(item.status == "done"){
      dispatch(close({id: item.id}))
    }
  }


  return (
    <div className={styles.card}>
      <p className={styles.header}>{title}</p>
      {
        title == "Todo" &&
        <div className={styles.box}>
          <form onSubmit={handleSubmit}>
            <input className={styles.input} placeholder="Add todo" value={task}  onChange={(e) => setTask(e.target.value)}>
            </input>
          </form>
        </div>
      }
      {
        items.map((item) => (
          <div className={styles.box} key={item.id}>
            <p>{item.task}</p>
            <button style={{ background: color }} onClick={() => handleClick(item)}>{button}</button>
          </div>
        ))
      }






    </div>
  )
}

export default Card