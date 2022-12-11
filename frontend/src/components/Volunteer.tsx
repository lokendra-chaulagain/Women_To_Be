import Image from 'next/image'
import React from 'react'
import { volunteer } from '../data/volunteer'

const Volunteer = () => {
  return (
    <>
      <section className='margin'>
        <div className="container">
          <h2 className='ff-lora mb-4 fw-bold text-center'>Our Team</h2>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4'>
            {volunteer.map((items, index) => (
              <>
                <div key={index}>
                  <div className='card mb-3 rounded-0 border-0'>
                    <div className='next_img_wrapper rounded-0'>
                      <Image
                        className='overflow-hidden vol_img'
                        src={items.photo}
                        alt={items.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  <div className='card-body mb-3'>
                    <h3 className='fw-bold ff-lora text-center m-0 h4'>{items.name}</h3>
                    <p className='text-center'>{items.post}</p>
                  </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Volunteer
