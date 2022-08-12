import { useState, useEffect } from 'react'
import styled from 'styled-components'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const formHandler = (e) => {
    e.preventDefault()
    // display alert
    if (!name) {
      showAlert(true, 'danger', 'please eneter a valid value!')
      // deal with edit
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
      // show alert
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') =>
    setAlert({ show, type, msg })

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <Wrapper>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={formHandler}>
          {alert.show && (
            <Alert items={list} {...alert} onClickEvent={showAlert} />
          )}
          <h3>grocery list</h3>
          <div className='form-control'>
            <input
              type='text'
              className='grocery'
              placeholder='e.g. eggs'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .section-center {
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    padding: 2rem;
  }
  .section-center:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .grocery-form h3 {
    color: hsl(205, 86%, 17%);
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .form-control {
    display: flex;
    justify-content: center;
  }
  .grocery {
    padding: 0.25rem;
    padding-left: 1rem;
    background: hsl(210, 36%, 96%);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-color: transparent;
    font-size: 1rem;
    flex: 1 0 auto;
    color: hsl(210, 22%, 49%);
  }
  .grocery::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    color: hsl(210, 22%, 49%);
  }
  .submit-btn {
    background: hsl(205, 86%, 81%);
    border-color: transparent;
    flex: 0 0 5rem;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    cursor: pointer;
    content: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    font-size: 0.85rem;
  }
  .submit-btn:hover {
    background: hsl(205, 78%, 60%);
    color: #fff;
  }

  .grocery-container {
    margin-top: 2rem;
  }
  .clear-btn {
    text-transform: capitalize;
    width: 10rem;
    height: 1.5rem;
    display: grid;
    align-items: center;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 71%, 66%);
    margin: 0 auto;
    font-size: 0.85rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s linear;
    margin-top: 1.25rem;
  }
  .clear-btn:hover {
    color: hsl(360, 67%, 44%);
  }
`

export default App
