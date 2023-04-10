import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from './todoSlice'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react'


const App = () => {
  const items = useSelector(state => state.todo.items)
  const dispatch = useDispatch()
  const [newItem, setNewItem] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addItem(newItem))
    setNewItem('')
  }

  return (
    <div>
      <h3>TO DO LIST</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button type="submit">Add Items</button>
   
      </form>
      <ul>
        {items.map((item, index)=> (
          <li key={index}>
            {item}
            <button onClick={()=> dispatch(removeItem(index))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App