import React from 'react'
import styles from './styles.module.css'
import Card from '../Card'

import { useSelector, useDispatch } from 'react-redux'
import { selectTodos } from '../../redux/todo/todoSlice'



let todo = [];
let doing = [];
let done = [];

function Cards() {
  const items = useSelector(selectTodos)
  todo = items.filter((item) => item.status == "todo")
  doing = items.filter((item) => item.status == "doing")
  done = items.filter((item) => item.status == "done")



  return (
    <div className={styles.cards}>
      <Card title="Todo" color="#D97676" button="Doing" items={todo}></Card>
      <Card title="Doing" color="#FBC02D" button="Done" items={doing}></Card>
      <Card title="Done" color="#388E3C" button="Close" items={done}></Card>
    </div>
  )
}

export default Cards