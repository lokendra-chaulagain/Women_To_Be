import React from 'react'
import Donateform from './Donateform'

const Donate = () => {
  return (
    <>
      <section className='padding-top'>
        <div className='container'>
          <div className="row">
            <div className="col-md-8">
              <h1 className="ff-lora fw-bold">
                <div className='ff-lora fw-bold h1'>Be a part of the change</div>
                <div className='ff-lora fw-bold h1'>Make an Impact today</div>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, tempore cumque? Dicta suscipit maxime tenetur minima officia facilis, velit natus ab porro ex odio dignissimos quaerat hic esse voluptatibus voluptate?</p>
            </div>

            <div className="col">
              <Donateform />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
