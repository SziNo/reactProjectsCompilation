import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <Wrapper>
        <div className='section loading'>
          <h1>loading...</h1>
        </div>
      </Wrapper>
    )
  }

  const { company, dates, duties, title } = jobs[value]

  return (
    <Wrapper>
      <section className='section'>
        <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
        </div>
        <div className='job-center'>
          <div className='btn-container'>
            {jobs.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  className={`job-btn ${idx === value && 'active-btn'}`}
                  onClick={() => setValue(idx)}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, idx) => {
              return (
                <div key={idx} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .loading {
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: #2caeba;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-bottom: 4rem;
    text-align: center;
  }
  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: hsl(186, 100%, 94%);
  }
  .job-btn:hover {
    color: #2caeba;
    box-shadow: 0 2px #2caeba;
  }
  .active-btn {
    color: #2caeba;
    box-shadow: 0 2px #2caeba;
  }

  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: hsl(210, 22%, 49%);
    background: hsl(212, 33%, 89%);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
  }
  .job-date {
    letter-spacing: 0.1rem;
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: hsl(209, 34%, 30%);
  }
  .job-icon {
    color: #2caeba;
  }
  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
    .job-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 #2caeba;
    }
    .job-btn:hover {
      box-shadow: -2px 0 #2caeba;
    }
  }
  .btn {
    text-transform: uppercase;
    background: #2caeba;
    color: hsl(185, 94%, 87%);
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  .btn:hover {
    color: hsl(184, 91%, 17%);
    background: hsl(184, 80%, 74%);
  }
  .center-btn {
  }
`

export default App
