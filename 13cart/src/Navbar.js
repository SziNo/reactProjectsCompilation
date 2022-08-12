import { useGlobalContext } from './context'
import styled from 'styled-components'

const Navbar = () => {
  const { amount } = useGlobalContext()

  return (
    <Wrapper>
      <div className='nav-center'>
        <h3>useReducer</h3>
        <div className='nav-container'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background: #2680c0;
  padding: 1.25rem 2rem;

  .nav-center {
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-container {
    display: block;
    position: relative;
  }
  nav h3 {
    margin-bottom: 0;
    color: #fff;
  }
  nav svg {
    width: 2rem;
    fill: #fff;
  }
  .amount-container {
    position: absolute;
    top: -0.85rem;
    right: -0.85rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: hsl(205, 84%, 74%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .total-amount {
    color: #fff;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
`

export default Navbar
