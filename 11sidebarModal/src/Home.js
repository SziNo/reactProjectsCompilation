import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <Wrapper>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .sidebar-toggle {
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(205, 78%, 60%);
    transition: all 0.3s linear;
    cursor: pointer;
    animation: bounce 2s ease-in-out infinite;
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .btn {
    text-transform: uppercase;
    background: #222;
    color: #fff;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid #222;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    margin: 0.5rem;
  }
  .btn:hover {
    color: #222;
    background: transparent;
  }
`

export default Home
