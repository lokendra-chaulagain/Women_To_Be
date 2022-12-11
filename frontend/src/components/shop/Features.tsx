import React from 'react'
import { BiBuildingHouse } from 'react-icons/bi'
import { TiArrowRepeat } from 'react-icons/ti'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import styles from '../../../styles/modules/Shop.module.scss'

const data = [
  {
    icon: (
      <BiBuildingHouse
        size={50}
        color='#501a6c'
      />
    ),
    title: 'Locally Made',
    description: 'We produce all our products and raw materials from local level.',
  },

  {
    icon: (
      <TiArrowRepeat
        size={50}
        color='#501a6c'
      />
    ),
    title: 'Reusable',
    description: `Our products and materials are reusable. It doesn't affect the user.`,
  },

  {
    icon: (
      <MdOutlineHealthAndSafety
        size={50}
        color='#501a6c'
      />
    ),
    title: 'Safety First',
    description: `All of our products are made with safety first and distributed to all customers.`,
  },
]

const Features = () => {
  return (
    <>
      <section className='mt-5 pt-3'>
        <div className='container'>
          <div>
            <h1 className='ff-lora fw-bold text-center'>Our Speciality</h1>
          </div>

          <div className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 mt-5 pt-3'>
            {data.map((item, index) => (
              <>
                <div key={index}>
                  <div className='card-group h-100'>
                    <div className={`${styles.my_card} card hover px-4 mb-3 py-5 rounded-0`}>
                      <div className={`col text-center`}>
                        {item.icon}
                        <h3 className='fw-bold h4 my-3'>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
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

export default Features
