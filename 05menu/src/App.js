import { useState } from 'react'
import styled from 'styled-components'
import items from './data'
import Categories from './Categories'
import Menu from './Menu'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <Wrapper>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .menu {
    padding: 5rem 0;
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--clr-gold);
    margin-left: auto;
    margin-right: auto;
  }
`

export default App
