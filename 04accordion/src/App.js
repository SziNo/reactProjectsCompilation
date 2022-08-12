import { useState } from 'react'
import styled from 'styled-components'
import data from './data'
import SingleQuestion from './Question'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <Wrapper>
      <div className='container'>
        <h3>questions and answers about the login</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  /* using flex because of better browser support */
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 90vw;
    margin: 5rem auto;
    background: #fff;
    border-radius: 0.25rem;
    padding: 2.5rem 2rem;
    max-width: 920px;
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 500;
  }
`

export default App
