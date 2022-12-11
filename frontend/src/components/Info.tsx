import React from 'react'
import { info } from '../data/infoSource'
import styles from '../../styles/modules/Info.module.scss'

const Info = () => {
  return (
    <section className={styles.info_wrapper}>
      {info.map((data, index) => (
        <div key={index} className={`${styles.infoCard} card border-0 shadow-none rounded-0 d-flex flex-row gap-3 p-md-4 p-5 p-lg-5`}>
          <div>{data.icon}</div>
          <div>
            <h4>{data.title}</h4>
            <p className='m-0'>{data.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Info
