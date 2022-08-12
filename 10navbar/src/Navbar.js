import { useState, useEffect, useRef } from 'react'
import { links, social } from './data'
import { FaBars, FaTwitter } from 'react-icons/fa'
import logo from './logo.svg'
import styled from 'styled-components'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linkHeight = linksRef.current.getBoundingClientRect().height
    showLinks
      ? (linksContainerRef.current.style.height = `${linkHeight}px`)
      : (linksContainerRef.current.style.height = '0px')
  }, [showLinks])

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
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

const Wrapper = styled.nav`
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .logo {
    height: 40px;
  }
  .nav-toggle {
    font-size: 1.5rem;
    color: hsl(205, 78%, 60%);
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: hsl(205, 86%, 17%);
    transform: rotate(90deg);
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-container {
    height: 10rem;
  }
  .links a {
    color: hsl(209, 34%, 30%);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    display: block;
    padding: 0.5rem 1rem;
    transition: all 0.3s linear;
  }
  .links a:hover {
    background: hsl(205, 86%, 81%);
    color: hsl(205, 78%, 60%);
    padding-left: 1.5rem;
  }
  .social-icons {
    display: none;
  }
  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
    }
    .links {
      display: flex;
    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: hsl(205, 78%, 60%);
      transition: all 0.3s linear;
    }
    .social-icons a:hover {
      color: hsl(205, 90%, 76%);
    }
  }
`

export default Navbar
