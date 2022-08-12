import React from 'react'
import Tour from './Tour'
import styled from 'styled-components'

const Tours = ({ tours, removeTour }) => {
  return (
    <Wrapper>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: hsl(205, 78%, 60%);
    margin-left: auto;
    margin-right: auto;
  }
`

export default Tours
