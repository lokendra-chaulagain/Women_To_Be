import React from 'react'
import Abouthero from '../../components/Abouthero'
import Blogcard from '../../components/blog/Blogcard'

const index = () => {
  return (
    <>
      <Abouthero title='Read Blog' />
      <div className='mt-5 pt-3'>
        <Blogcard />
      </div>
    </>
  )
}

export default index
