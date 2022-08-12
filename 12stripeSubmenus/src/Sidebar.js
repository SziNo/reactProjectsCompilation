import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
        }`}
      >
        <div className='sidebar'>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
          <div className='sidebar-links'>
            {sublinks.map((item, idx) => {
              const { links, page } = item
              return (
                <article key={idx}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {links.map((link, idx) => {
                      const { url, icon, label } = link
                      return (
                        <a key={idx} href={url}>
                          {icon}
                          {label}
                        </a>
                      )
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: all 0.3s linear;
    transform: scale(0);
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar-wrapper.show {
    visibility: visible;
    z-index: 2;
    transform: scale(1);
  }
  .sidebar {
    width: 90vw;
    height: 95vh;
    max-width: 620px;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 4rem 2rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(210, 22%, 49%);
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  .sidebar article {
    margin-bottom: 2rem;
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: hsl(209, 61%, 16%);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .sidebar-sublinks svg {
    color: hsl(210, 22%, 49%);
    margin-right: 1rem;
  }

  @media screen and (min-width: 800px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`

export default Sidebar
