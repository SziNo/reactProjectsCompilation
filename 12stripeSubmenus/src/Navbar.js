import styled from 'styled-components'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext()

  const displaySubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubMenu(page, { center, bottom })
  }
  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) closeSubMenu()
  }

  return (
    <Wrapper>
      <nav className='nav' onMouseOver={handleSubMenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} alt='stripe' className='nav-logo' />
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displaySubMenu}>
                products
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubMenu}>
                developers
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubMenu}>
                company
              </button>
            </li>
          </ul>
          <button className='btn signin-btn'>sign in</button>
        </div>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .nav {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    position: relative;
    z-index: 1;
  }
  .nav-center {
    width: 90vw;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: white;
    background: #222;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .btn:hover {
    background: hsl(210, 22%, 49%);
  }
  .nav-links {
    display: none;
  }
  .signin-btn {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      display: block;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      height: 100%;
      display: grid;
      align-items: center;
    }
    .nav-links li {
      height: 100%;
    }
    .link-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: hsl(209, 28%, 39%);
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
    }
  }
`

export default Navbar
