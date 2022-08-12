import { useGlobalContext } from './context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import styled from 'styled-components'

function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <Wrapper>
      <Navbar />
      <CartContainer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .loading {
    text-align: center;
    margin-top: 5rem;
  }
`

export default App
