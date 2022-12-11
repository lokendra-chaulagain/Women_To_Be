import React from 'react'
import styles from '../../../styles/modules/Shop.module.scss'
import image from '../../../public/img/pad.png'
import Image from 'next/image'
import Link from 'next/link'

const Productdisplay = () => {
  return (
    <>
      <section className='mt-5 pt-3'>
        <div className={`${styles.display_wrapper}`}>
          <div className='container'>
            <div className={`${styles.product_container}`}>
              <div className={styles.product_description}>
                <h1 className='ff-lora fw-bold'>Reusable Pad</h1>
                <p className='mt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique repudiandae obcaecati veritatis voluptatum provident commodi harum velit ullam, fuga quisquam sint iste incidunt natus cum vitae sunt! Voluptates, perspiciatis.
                </p>
                <div className='d-flex gap-3 align-items-center mt-3'>
                  <Link href={`/shop/${`23kdjk*djdh$fgf`}`}>
                    <button
                      className='my-Btn'
                      type='button'
                    >
                      Buy Now
                    </button>
                  </Link>
                  <span className='m-0'>Nrs. 100 /packet</span> <br />
                </div>
              </div>
              <div className={styles.product_image}>
                <Image
                  alt=''
                  height={300}
                  width={200}
                  src={image}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.display2_wrapper} mt-5`}>
          <div className='container'>
            <div className={`${styles.product2_container}`}>
              <div className={styles.product2_image}>
                <Image
                  alt=''
                  height={300}
                  width={200}
                  src={image}
                />
              </div>
              <div className={styles.product2_description}>
                <h1 className='ff-lora fw-bold'>Reusable Pad</h1>
                <p className='mt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique repudiandae obcaecati veritatis voluptatum provident commodi harum velit ullam, fuga quisquam sint iste incidunt natus cum vitae sunt! Voluptates, perspiciatis.
                </p>
                <div className='d-flex gap-3 align-items-center mt-3'>
                  <button
                    className='my-Btn'
                    type='button'
                  >
                    Buy Now
                  </button>
                  <span className='m-0'>Nrs. 100 /packet</span> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Productdisplay
