import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from './todoSlice'


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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button type="submit" color="danger">Add Item</button>
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