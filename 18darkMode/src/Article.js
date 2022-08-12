import moment from 'moment'
import './Article.css'

const Article = ({ title, snippet, date, length }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{moment(date).format('dddd, MMM Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
