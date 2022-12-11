import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/modules/Shop.module.scss'
import { shop } from '../../data/shopSource'

const Shopcard = () => {
  return (
    <>
      <section className='mt-5 pt-3'>
        <div className='container'>
          <div className='row row-cols-2 row-cols-md-4'>
            {shop.map((item, index) => (
              <>
                <div key={index}>
                  <div className={`${styles.shop_card} card rounded-0 mb-5 hover border-0`}>
                    <div className='col'>
                      <div className={`${styles.shop_card_img} text-center mb-3`}>
                        <Image
                          src={item.thumbnail}
                          alt=''
                          height={200}
                          width={200}
                        />
                      </div>
                      <div className='text-center'>
                        <h3 className='h5 fw-bold text-center'>{item.name}</h3>
                        <span>Nrs. {item.price}</span>
                      </div>
                      <div className='text-center mt-3'>
                        <button
                          type='button'
                          className='my-Btn'
                        >
                          Shop Now
                        </button>
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

export default Shopcard
