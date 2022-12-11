import Head from 'next/head'
import Blogcard from '../components/blog/Blogcard'
import Change from '../components/Change'
import Endoursment from '../components/Endoursment'
import Help from '../components/Help'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Quote from '../components/Quote'
import Situation from '../components/Situation'

export default function Home() {
  return (
    <>
      <Head>
        <title>We are Women&#39;s to be</title>
      </Head>

      <Hero />
      <Info />
      <Situation />
      <Change />
      <Help />
      <section className='margin'>
        <h1 className='ff-lora fw-bold text-center mb-5'>Latest Blog</h1>
        <Blogcard />
      </section>
      <Quote />
      <Endoursment />
    </>
  )
}
