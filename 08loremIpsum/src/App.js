import { useState } from 'react'
import styled from 'styled-components'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = +count

    if (count <= 0) {
      amount = 1
    }
    if (count > 9) {
      amount = 9
    }

    setText(data.slice(0, amount))
  }

  return (
    <Wrapper>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            id='amount'
            name='amount'
            valur={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
        <article className='lorem-text'>
          {text.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </article>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .btn {
    text-transform: uppercase;
    background: hsl(205, 78%, 60%);
    color: hsl(205, 86%, 17%);
    padding: 0.375rem 0.75rem;
    letter-spacing: 1px;
    display: inline-block;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid hsl(205, 78%, 60%);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }
  .btn:hover {
    color: hsl(205, 78%, 60%);
    background: hsl(205, 86%, 81%);
    border-color: hsl(205, 86%, 81%);
  }
  /* section */
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 40rem;
    margin-top: 5rem;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  /*
=============== 
Lorem Ipsum
===============
*/
  h3 {
    text-transform: uppercase;
    color: hsl(205, 86%, 17%);
  }
  .lorem-form {
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  label {
    font-size: 1.25rem;
    color: hsl(205, 86%, 17%);
  }
  input {
    padding: 0.25rem 0.5rem;
    width: 4rem;
    border-radius: 0.25rem;
    border: none;
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }
  button {
    background: hsl(205, 100%, 96%);
  }
  .result {
    margin-bottom: 2rem;
  }
`

export default App
