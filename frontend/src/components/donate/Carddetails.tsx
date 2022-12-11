import React from 'react'

const Carddetails = () => {
  return (
    <>
      <h2 className='ff-lora fw-bold text-center'>Payment</h2>
      <span className="text-center text-muted">We do not share your information</span>
      <hr />
      <form action=''>
        <div className='mb-3'>
          <label
            htmlFor='cardnum'
            className='mb-2'
          >
            Card Number
          </label>
          <input
            type='number'
            name='cardnum'
            id='cardnum'
            placeholder='00000000000000016'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='date'
            className='mb-2'
          >
            Expiry Date
          </label>
          <input
            type='date'
            name='date'
            id='date'
            placeholder='example@email.com'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='cvc'
            className='mb-2'
          >
            CVC Code
          </label>
          <input
            type='number'
            name='cvc'
            id='cvc'
            placeholder='1111'
          />
        </div>
        {/* <button
          type='submit'
          className='my-Btn w-100'
        >
          Submit
        </button> */}
      </form>
    </>
  )
}

export default Carddetails
