import { useState } from 'react'
import styled from 'styled-components'

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <Wrapper>
      <div className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.slice(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'read less' : 'read more'}
            </button>
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .single-tour {
    background: #fff;
    border-radius: 0.25rem;
    margin: 2rem 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
  }
  .single-tour:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .single-tour img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  .single-tour button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: hsl(205, 78%, 60%);
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
  }
  .single-tour footer {
    padding: 1.5rem 2rem;
  }
  .tour-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .tour-info h4 {
    margin-bottom: 0;
  }
  .tour-price {
    color: hsl(205, 78%, 60%);
    background: hsl(205, 100%, 96%);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  .delete-btn {
    display: block;
    width: 200px;
    margin: 1rem auto 0 auto;
    color: hsl(360, 67%, 44%);
    letter-spacing: 0.1rem;
    background: transparent;
    border: 1px solid hsl(360, 67%, 44%);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`

export default Tour
