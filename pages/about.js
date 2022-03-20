import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPage from '../components/AboutPage'
import Sidebar from '../components/Sidebar';
import { useState } from 'react'

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      <Head>
        <title>Nemanja Grujić | About</title>
        <meta name="description" content="The official portfolio page of Nemanja Grujić" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <AboutPage />
        <Footer />
    </div>
  )
}