import React from 'react'
import styles from '../../../styles/modules/Blog.module.scss'
import avatar from '../../../public/img/avatar.png'
import Image from 'next/image'

const Comment = () => {
  return (
    <>
      <section>
        <h4>Comments</h4>
        <hr />
        <div className={styles.comment_filter}>
          <p>Sort by</p>
        </div>
        <div className={styles.comment_field}>
          <div className={styles.comment_input}>
            <div className={styles.avatar}>
              <Image src={avatar} alt="avatar" fill />
            </div>
            <div className={styles.comment_area}>
              <label htmlFor="comment" className='mb-2'>Add your comment</label>
              <textarea className='w-100' name="comment" id="comment"></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comment
