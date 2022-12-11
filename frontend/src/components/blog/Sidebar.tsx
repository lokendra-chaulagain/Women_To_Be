import React from 'react'
import styles from '../../../styles/modules/Blog.module.scss'
import { TbSearch } from 'react-icons/tb'

const Sidebar = () => {
  return (
    <>
      <aside className={styles.sidebar_sticky}>
        <h3 className='ff-lora fw-bold mb-4'>Latest Blog</h3>
        <div className={styles.input_field}>
          <input
            className={styles.search_input}
            placeholder='Search'
            type='text'
            name='search'
            id='search'
            autoComplete='off'
          />
          <div className={styles.search_icon}>
            <TbSearch
              size={24}
              color='#501a6c'
            />
          </div>
        </div>
        <div className={styles.latest_post}>
          <div className={`${styles.post_wrapper}`}>
            <div className={`${styles.post_card}`}>
              <div className={styles.time}>
                <span className='text-muted'>2022 Feb 23</span>
              </div>
              <div className={`${styles.heading} mt-2`}>
                <h4 className='h4 ff-lora fw-bold'>Art & Life?</h4>
              </div>
            </div>

            <div className={`${styles.post_card}`}>
              <div className={styles.time}>
                <span className='text-muted'>2022 Feb 23</span>
              </div>
              <div className={`${styles.heading} mt-2`}>
                <h1 className='h3 ff-lora fw-bold'>Art & Life?</h1>
              </div>
            </div>

            <div className={`${styles.post_card}`}>
              <div className={styles.time}>
                <span className='text-muted'>2022 Feb 23</span>
              </div>
              <div className={`${styles.heading} mt-2`}>
                <h1 className='h3 ff-lora fw-bold'>Art & Life?</h1>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
