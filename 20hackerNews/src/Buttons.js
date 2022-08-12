import { useGlobalContext } from './context'
import './Buttons.css'

const Buttons = () => {
  const { handlePage, isLoading, nbPages, page } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  )
}

export default Buttons
