import React from 'react'
import {useEffect} from 'react'
import ScrollToTop from '../../components/Frontends/ScrollToTop'
import scrollreveal from 'scrollreveal'
import MainPage from '../../components/Frontends/MainPage'
import Testmonial from '../../components/Frontends/Testmonial'
import Recomment from '../../components/Frontends/Recomment'
import Footer from '../../components/Frontends/Footer'

const HomePage = () => {

    useEffect(() => {
        const sr = scrollreveal({
          origin: "top",
          distance: "5px",
          duration: 2000,
          reset: true,
        });
        sr.reveal(
          `
            nav,
            #hero,
            #services,
            #recommend,
            #testimonials,
            footer
            `,
          {
            opacity: 0,
            interval: 300,
          }
        );
      }, []);

  return (
    <>
        <ScrollToTop />
        <MainPage />
        <Recomment />
        <Testmonial />
        <Footer />
    </>
  )
}

export default HomePage
