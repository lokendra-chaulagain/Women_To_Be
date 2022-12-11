import React, { useState } from 'react'
import styles from '../../../styles/modules/Donate.module.scss'
import Carddetails from './Carddetails'
import Donardetails from './Donardetails'
import Donatemoney from './Donatemoney'

const Donateform = () => {
  const [form, setForm] = useState(0)

  const donateForm = () => {
    switch (form) {
      case 0:
        return <Donatemoney />
      case 1:
        return <Donardetails />
      case 2:
        return <Carddetails />
      default:
        return <Donatemoney />
    }
  }

  const handleClick = () => {
    setForm(form + 1)
  }
  return (
    <>
      <section className='card py-5 px-4 border-0 shadow'>
        {donateForm()}
        <button
          type='submit'
          className='my-Btn mt-3 w-100'
          onClick={handleClick}
        >
          Next
        </button>
      </section>
    </>
  )
}

export default Donateform
