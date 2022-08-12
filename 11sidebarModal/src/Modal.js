import styled from 'styled-components'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          <h3>modal content</h3>
          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: #fff;
    border-radius: 0.25rem;
    width: 90vw;
    height: 30vh;
    max-width: 620px;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: hsl(360, 67%, 44%);
    cursor: pointer;
  }
`

export default Modal
