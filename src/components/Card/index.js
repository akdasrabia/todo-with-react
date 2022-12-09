import {useState} from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTodo } from '../../redux/todo/todoSlice'

function Card({ title, color, button, items }) {
  const dispatch = useDispatch()

  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    if(!task) return
    e.preventDefault();
    dispatch(addTodo({id: nanoid(), task: task, status: "todo"}))
    setTask('')
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
          <button style={{ background: color }}>{button}</button>
        </div>
      }
      {
        items.map((item) => (
          <div className={styles.box}>
            <p>{item.task}</p>
            <button style={{ background: color }}>{button}</button>
          </div>
        ))
      }






    </div>
  )
}

export default Card