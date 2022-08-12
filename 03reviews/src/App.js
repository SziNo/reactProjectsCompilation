import Review from './Review'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 80vw;
    max-width: 620px;
  }
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: hsl(205, 78%, 60%);
    margin-left: auto;
    margin-right: auto;
  }
`

export default App
