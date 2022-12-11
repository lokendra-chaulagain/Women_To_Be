import React from 'react'
import styles from '../../../styles/modules/Nav.module.scss'
import { CgFacebook, CgInstagram } from 'react-icons/cg'

const Strip = () => {
  return (
    <>
      <section>
        <div className={styles.strip}>
          <div className={styles.strip_icons}>
            <CgFacebook
              className={styles.icon}
              color='#fff'
              size={22}
            />
            <CgInstagram
              className={styles.icon}
              color='#fff'
              size={20}
            />
          </div>
          <button
            type='button'
            className={styles.strip_button}
          >
            9863692780
          </button>
          <button
            type='button'
            className={`${styles.email_button}`}
          >
            info@women2be.com
          </button>
        </div>
      </section>
    </>
  )
}

export default Strip
