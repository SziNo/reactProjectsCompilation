import styled from 'styled-components'

const Categories = ({ categories, filterItems }) => {
  return (
    <Wrapper>
      {categories.map((category, idx) => {
        return (
          <button
            key={idx}
            type='button'
            className='filter-btn'
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;

  .filter-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: #c59d5f;
    cursor: pointer;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
  }
  .filter-btn:hover {
    background: #c59d5f;
    color: #fff;
  }
`

export default Categories
