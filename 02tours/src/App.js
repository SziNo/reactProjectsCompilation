import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import styled from 'styled-components'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const items = await response.json()
      setLoading(false)
      setTours(items)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  if (tours.length === 0) {
    return (
      <Wrapper>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Tours tours={tours} removeTour={removeTour} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 90vw;
  max-width: 620px;
  margin: 5rem auto;

  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .btn {
    background: hsl(205, 78%, 60%);
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
    color: #fff;
    letter-spacing: 0.1rem;
    border-color: transparent;
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`

export default App
