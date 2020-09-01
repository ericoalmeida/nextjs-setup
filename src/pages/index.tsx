import React from 'react'
import Head from 'next/head'

import nextjsLogo from '../assets/Nextjs.png'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>
      <h1>Next.js/React Structure</h1>

      <p>A Next.js + React structure made by Erico Almeida</p>

      <img src={nextjsLogo} alt="Nextjs" />
    </Container>
  )
}

export default Home
