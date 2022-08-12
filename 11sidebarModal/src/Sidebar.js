import styled from 'styled-components'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <Wrapper>
      <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className='social-icons'>
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: hsl(360, 67%, 44%);
    transition: all 0.3s linear;
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
  }
  @media screen and (min-width: 676px) {
    .sidebar {
      width: 400px;
    }
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .logo {
    justify-self: center;
    height: 40px;
  }
  .close-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    cursor: pointer;
    color: hsl(360, 67%, 44%);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: hsl(360, 71%, 66%);
  }
  .links a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: hsl(209, 34%, 30%);
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  }

  .links a:hover {
    background: hsl(210, 36%, 96%);
    color: hsl(211, 39%, 23%);
  }
  .links a svg {
    font-size: 1.5rem;
    color: hsl(210, 22%, 49%);
    margin-right: 1rem;
    transition: all 0.3s linear;
  }
  .links a:hover svg {
    color: hsl(209, 28%, 39%);
  }
  .social-icons {
    justify-self: center;
    display: flex;
    padding-bottom: 2rem;
  }
  .social-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
  }
  .social-icons a:hover {
    color: hsl(205, 86%, 17%);
  }
`

export default Sidebar
