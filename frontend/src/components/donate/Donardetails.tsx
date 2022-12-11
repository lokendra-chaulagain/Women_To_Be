import React from 'react'

const Donardetails = () => {
  return (
    <>
      <h2 className='ff-lora fw-bold text-center'>Your Details</h2>
      <hr />
      <form action=''>
        <div className='mb-3'>
          <label
            htmlFor='name'
            className='mb-2'
          >
            Full Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Sagar Khadka'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='email'
            className='mb-2'
          >
            Your Email
          </label>
          <input
            type='email'
            name='name'
            id='email'
            placeholder='example@email.com'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='phone'
            className='mb-2'
          >
            Phone Number
          </label>
          <input
            type='number'
            name='phone'
            id='phone'
            placeholder='+977 9863692780'
            min='0'
            max='10'
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='message'
            className='mb-2'
          >
            Your Message
          </label>
          <textarea
            name='message'
            id='message'
          ></textarea>
        </div>
        {/* <button
          type='submit'
          className='my-Btn w-100'
        >
          Next
        </button> */}
      </form>
    </>
  )
}

export default Donardetails
