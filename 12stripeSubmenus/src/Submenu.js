import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) setColumns('col-3')
    if (links.length > 4) setColumns('col-4')
  }, [location, links])

  return (
    <Wrapper>
      <div
        className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, idx) => {
            const { label, icon, url } = link
            return (
              <a key={idx} href={url}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .submenu {
    background: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: none;
    padding: 2rem;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
  }
  .submenu::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  .submenu.show {
    display: block;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
  }
  .col-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .col-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .submenu h4 {
    margin-bottom: 1.5rem;
  }
  .submenu-center a {
    width: 10rem;
    display: block;
    color: hsl(209, 61%, 16%);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .submenu-center svg {
    color: hsl(210, 22%, 49%);
    margin-right: 1rem;
  }
`

export default Submenu
