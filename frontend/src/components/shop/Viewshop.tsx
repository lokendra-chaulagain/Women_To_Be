import React, { useState } from 'react'
import styles from '../../../styles/modules/Shop.module.scss'
import Productcar from './Productcar'

const Viewshop = () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <>
      <section className={`${styles.shop_wrapper} pt-5`}>
        <div className='container'>
          <div className={`${styles.product_wrapper} row row-cols-1 row-cols-md-2 row-cols-lg-2`}>
            <div className={styles.product_left}>
              <Productcar />
            </div>
            <div className={styles.product_right}>
              <h1 className={`${styles.shop_title} ff-lora fw-bold mb-3`}>Reusable Pad</h1>

              <div className={`${styles.price} mb-3`}>
                <h5>Nrs. {count * 100} / pck.</h5>
              </div>

              <div className={styles.detail}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, ducimus! Dolorem praesentium repudiandae veritatis
                  necessitatibus expedita, provident iusto sunt quae animi accusantium saepe possimus, maiores adipisci nemo officiis voluptatum
                  earum!
                </p>
              </div>

              <div className={`${styles.more_detail} mb-3`}>
                <ul>
                  <li>Dimension: 40 X 20</li>
                  <li>Weignt: 10 gm</li>
                  <li>Material: Cotton 100%</li>
                </ul>
              </div>

              <div className={styles.button_group}>
                <div className={styles.counter}>
                  <button
                    disabled={count <= 1 ? true : false}
                    onClick={decrement}
                    type='button'
                    className={`${styles.count_btn}`}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    onClick={increment}
                    type='button'
                    className={`${styles.count_btn}`}
                  >
                    +
                  </button>
                </div>
              </div>
              {/* <br /> <br /> */}
              <button
                className='my-Btn'
                type='submit'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Viewshop
