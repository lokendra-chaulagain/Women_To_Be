import React from 'react'
import styles from '../../../styles/modules/Blog.module.scss'
import Image from 'next/image'
import image from '../../../public/img/about.webp'
import Sidebar from './Sidebar'
import Comment from './Comment'

const Singleblog = () => {
  return (
    <>
      <section className={styles.singleblog_wrapper}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 overflow-hidden me-3 pb-3'>
              <div className={styles.blog_img}>
                <Image
                  src={image}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt=''
                />
              </div>
              <div className={styles.blog_body}>
                <h1 className='ff-lora fw-bold my-4'>Hello</h1>
                <p>
                  My practice began many years ago after a training in Transcendental Medication. I meditated for 2 decades 5 days a week for 20
                  minutes. Then, I began running and felt that it was creating the same sense of peace and creativity, although I know that does not
                  totally replace meditation. At the time, I had to choose which to do in the morning before work and I chose running. More recently, I
                  have returned to it. We all know that meditation can be difficult to attempt at first and we feel like we fail nearly every time. It
                  does get better and often peace and relaxation are a great gift we give ourselves everyday.
                  <br />
                  <br />
                  Now as a more practiced meditator, I share with you here my own experience as best I can. Like meditation itself, words are difficult
                  to describe the experience.
                  <br />
                  <br />
                  First, of course, we find a quiet and comfortable place to sit and begin to feel present to our breath. When in doubt or in thought,
                  that’s where we should go. Back to basics. Back to breath.
                  <br />
                  <br />
                  I close my eyes and become aware of a dark blankness before me. But most of the time, it contains thought. I have even thought about
                  what to write in this blog as a try not to think. Quickly, I refocus on breath and what is in front of me in the vastness of the
                  blankness. I allow myself to slip into it, always returning to the vastness when I find myself thinking/planning/conversing/working in
                  my head.
                  <br />
                  <br />
                  Then, I allow my eyes to become slack- really slack- , then my face, often allowing my jaw to slacken and mouth to open. This brings
                  me a deeper vastness. And vastness is an inadequate word to use, but I can think of no other except one that I will discuss later. Use
                  blankness or deepness or vastness or which ever word you think best allows you into the place you want to go or the place that invites
                  you. But if I call this place a word during meditation, it means I am thinking again.
                  <br />
                  <br />
                  Thinking is the distractor of meditation. It’s the place we spend most of our day and it’s easy to allow it to interfere. However, I
                  go to breath and ‘see’ the vastness of the blackness and go there, my face and eyes relaxed and somehow it seems that I flow more
                  deeply and it seems to me that I am looking further downward into something darker and quieter and more meaningful.
                  <br />
                  <br />
                  Sometimes, I repeat the word ‘love’ or ‘peace’ or ‘gratitude’ (although ‘gratitude’ means something different for me than most people,
                  I think. I rarely give thanks or conjure gratitude. For me, it’s a way of being all the time. Again words limit. Let’s discuss that in
                  another blog). If I do imagine love or peace, the surroundings of the vastness often engulf me. I’m settled in, but my mind wants to
                  work and I catch myself thinking about the things I need to do that day. I return to love or peace or breath and often, the vastness
                  returns and offers.
                  <br />
                  <br />
                  I try not to use phrases like “I seek love’ or ‘peace surrounds me’ or ‘I am a part of nature’. I try not to see the love or peace as
                  out there. I see myself as indistinguishable from it or in it seamlessly. Pronouns especially the one that refers to self takes me out
                  of the vastness because it means that I am separate from it. There is me and there is it. How can I be an ‘I’ if I’m trying to feel
                  one with the vastness of peace. It causes separation and what I seek in meditation is oneness, flow, connection to all there is.
                  <br />
                  <br />
                  There is one short phrase I prefer to describe this phenomenon. Once I found it, my meditation and understanding changed.
                  <br />
                  <br />
                  Read Part 2 of this blog to find out the phrase that connects and removes barriers. The phrase that invites.
                </p>
              </div>
              {/* <div className='mt-5'>
                <Comment />
              </div> */}
            </div>

            <div className='col'>
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Singleblog
