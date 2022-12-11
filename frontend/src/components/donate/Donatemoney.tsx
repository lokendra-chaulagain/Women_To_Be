import React from 'react'
import styles from '../../../styles/modules/Donate.module.scss'

const Donatemoney = () => {
  return (
    <>
      <h2 className='ff-lora fw-bold text-center'>Join Us</h2>
      <p className='text-center'>A small amount can change someones life for good.</p>
      <hr />
      <form action=''>
        <div>
          <label
            htmlFor='amount'
            className='mb-2'
          >
            Your Amount
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            placeholder='Custom Amount'
            min='0'
            max='100'
          />
        </div>
        <p className={styles.divider}>OR</p>
        <div className={styles.btnGroup}>
          <div>
            <input
              type='radio'
              name='money'
              className={styles.radio}
              id='$5'
            />
            <label
              className={styles.btnlbl}
              htmlFor='$5'
            >
              $5
            </label>
          </div>
          <div>
            <input
              type='radio'
              name='money'
              className={styles.radio}
              id='$50'
            />
            <label
              className={styles.btnlbl}
              htmlFor='$50'
            >
              $50
            </label>
          </div>
          <div>
            <input
              type='radio'
              name='money'
              className={styles.radio}
              id='$100'
            />
            <label
              className={styles.btnlbl}
              htmlFor='$100'
            >
              $100
            </label>
          </div>
        </div>
        {/* <button
          type='submit'
          className='my-Btn mt-4 w-100'
        >
          Next
        </button> */}
      </form>
    </>
  )
}

export default Donatemoney
