import { useGlobalContext } from './context'
import styled from 'styled-components'

const CartItem = ({ id, img, title, price, amount }) => {
  const { decrease, toggleAmount } = useGlobalContext()

  return (
    <Wrapper>
      <div className='cart-item'>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className='item-price'>${price}</h4>
          {/* remove button */}
          <button className='remove-btn' onClick={() => toggleAmount(id)}>
            remove
          </button>
        </div>
        <div>
          {/* increase amount */}
          <button
            className='amount-btn'
            onClick={() => toggleAmount(id, 'inc')}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
            </svg>
          </button>
          {/* amount */}
          <p className='amount'>{amount}</p>
          {/* decrease amount */}
          <button className='amount-btn' onClick={() => decrease(id, 'dec')}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .cart-item {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1.5rem;
    margin: 1.5rem 0;
  }
  .cart-item img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  .cart-item h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .item-price {
    color: #617d98;
  }
  .remove-btn {
    color: #2680c0;
    letter-spacing: 0.25rem;
    cursor: pointer;
    font-size: 0.85rem;
    background: transparent;
    border: none;
    margin-top: 0.375rem;
    transition: all 0.3s linear;
  }
  .remove-btn:hover {
    color: hsl(205, 84%, 74%);
  }
  .amount-btn {
    width: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .amount-btn svg {
    fill: #2680c0;
  }
  .amount-btn:hover svg {
    fill: hsl(205, 84%, 74%);
  }
  .amount {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
  }
  hr {
    background: #617d98;
    border-color: transparent;
    border-width: 0.25px;
  }
`

export default CartItem
