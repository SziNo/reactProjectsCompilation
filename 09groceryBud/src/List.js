import styled from 'styled-components'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items, removeItem, editItem }) => {
  return (
    <Wrapper>
      <div className='grocery-list'>
        {items.map((item) => {
          const { id, title } = item
          return (
            <article key={id} className='grocery-item'>
              <p className='title'>{title}</p>
              <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .grocery-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: all 0.3s linear;
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
  }
  .grocery-item:hover {
    color: hsl(210, 22%, 49%);
    background: hsl(210, 36%, 96%);
  }
  .grocery-item:hover .title {
    color: hsl(210, 22%, 49%);
  }
  .title {
    margin-bottom: 0;
    color: hsl(209, 61%, 16%);
    letter-spacing: 2px;
    transition: all 0.3s linear;
  }
  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: all 0.3s linear;
  }
  .edit-btn {
    color: hsl(125, 71%, 66%);
  }
  .edit-btn:hover {
    color: hsl(125, 67%, 44%);
  }
  .delete-btn {
    color: hsl(360, 71%, 66%);
  }
  .delete-btn:hover {
    color: hsl(360, 67%, 44%);
  }
`

export default List
