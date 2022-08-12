import { useState } from 'react'
import people from './data'
import styled from 'styled-components'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  let [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (num) =>
    num > people.length - 1 ? 0 : num < 0 ? people.length - 1 : num

  const prevPerson = () => setIndex(checkNumber(--index))
  const nextPerson = () => setIndex(checkNumber(++index))
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <Wrapper>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .review {
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s linear;
    text-align: center;
  }
  .review:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: hsl(205, 78%, 60%);
    color: #fff;
  }
  .img-container::before {
    content: '';
    width: 100%;
    height: 100%;
    background: hsl(205, 78%, 60%);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
  .author {
    margin-bottom: 0.25rem;
  }
  .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: hsl(205, 78%, 60%);
    font-size: 0.85rem;
  }
  .info {
    margin-bottom: 0.75rem;
  }
  .prev-btn,
  .next-btn {
    color: hsl(205, 90%, 76%);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: hsl(205, 78%, 60%);
  }
  .random-btn {
    margin-top: 0.5rem;
    background: hsl(205, 100%, 96%);
    color: hsl(205, 78%, 60%);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: hsl(205, 78%, 60%);
    color: hsl(205, 86%, 17%);
  }
`

export default Review
