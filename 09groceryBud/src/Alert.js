import { useEffect } from 'react'
import styled from 'styled-components'

const Alert = ({ type, msg, onClickEvent, items }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClickEvent()
    }, 3000)
  }, [items])

  return (
    <Wrapper>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .alert {
    margin-bottom: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
  }
  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }
  .alert-success {
    color: #155724;
    background: #d4edda;
  }
`

export default Alert
