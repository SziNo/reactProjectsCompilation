import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import classes from './App.module.css'

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')

  return (
    <main>
      <section className={classes.markdown}>
        <textarea
          className={classes.input}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className={classes.result}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
