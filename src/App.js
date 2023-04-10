import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from './todoSlice'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react'


const StyledButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    border-radius: 5px;
    padding: 10px 20px;
    &:hover {
      background-color: ${theme.palette.primary.dark};
    }
  `
);

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
       <StyledButton>Click me!</StyledButton>
       
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