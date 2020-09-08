import React from 'react'
import Appbar from './components/appbar'
import Header from './components/header'
import Side1 from './components/sidesPages/side1'
import Side2 from './components/sidesPages/side2'
import Side3 from './components/sidesPages/side3'
// import OurServe from './components/sidesPages/ourServe'
import Projects from './components/sidesPages/porfolioSlide/projects'
import JoinUS from './components/sidesPages/joinUS'
import WhyChooseUs from './components/sidesPages/whyChooseUs'
import Footer from './components/footer'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App1() {
    React.useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Appbar />
            <Header />
            <Side1 />
            <WhyChooseUs />
            <Projects />
            <Side3 />
            <Side2 />
            <JoinUS />
            <Footer />

            {/* <OurServe /> */}
        </div>
    )
}
