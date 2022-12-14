import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const toggleHandler = () => setShowInfo(!showInfo)

  return (
    <Wrapper>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={toggleHandler}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .question {
    padding: 1rem 1.5rem;
    border: 2px solid #eae6eb;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .question h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: #eae6eb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #b4345c;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
`

export default Question
