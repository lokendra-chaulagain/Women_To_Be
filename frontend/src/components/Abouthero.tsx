import React from 'react'
import styles from '../../styles/modules/About.module.scss'

const Abouthero = ({ title }: any) => {
  return (
    <>
      <section className={styles.about_hero}>
        <div>
          <h1>{title}</h1>
        </div>
      </section>
    </>
  )
}

export default Abouthero
// hi