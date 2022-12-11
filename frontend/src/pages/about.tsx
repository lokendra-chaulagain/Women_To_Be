import Head from 'next/head'
import React from 'react'
import Aboutthero from '../components/Abouthero'
import Video from '../components/Aboutvideo'
import Details from '../components/Details'
import Impact from '../components/Impact'
import Ourinfo from '../components/Ourinfo'
import Vision from '../components/Vision'
import Volunteer from '../components/Volunteer'
import Welcome from '../components/Welcome'
import Wherewework from '../components/Wherewework'

const about = () => {
  return (
    <>
      <Head>
        <title>About Womens To Be</title>
      </Head>
      <main>
        <Aboutthero title='About Us' />
        <Welcome />
        <Details />
        <Vision />
        <Video />
        <Impact />
        <Wherewework />
        <Ourinfo />
        <Volunteer />
      </main>
    </>
  )
}

export default about
