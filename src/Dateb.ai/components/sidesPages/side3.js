import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';

import Styles from '../css/scss/animate.scss';


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default  function Side3(){
return(
        <div className="side3-parent-div">
          <div className="side3-main-div"
            data-aos="zoom-in"
            data-aos-offset="200"
        //     data-aos-delay=""
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"          
          >
          <AutoplaySlider
        //     organicArrows="false"
        //     buttons="true"
            animation="scaleOutAnimation"
            play={true}
            transitionDelay="700"
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
                buttons={false}
        //     bullets="true"
                // fillParent="true"
        >
        
             <div>
                     <div>
                     <div className="slide1 img">

                    <h2>So, are you Ready to Innovate and Grow</h2>
                     </div>
                </div>
             </div>
            <div>
                    <div>
                    <div className="slide2 img">

                    <h2>So, are you Ready to Innovate and Grow</h2>
                    </div>
                </div>
            </div>
            <div>
                    <div>
                    <div className="slide3 img">

                    <h2>So, are you Ready to Innovate and Grow</h2>
                    </div>
                </div>
            </div>


{/* src={require("../images/slidePics/pic4.jpg")}
src={require("../images/slidePics/pic2.jpg")}
src={require("../images/slidePics/pic3.png")} */}
             {/* <div className="slide1">
                    <h2>Are you Ready to Innovate and Grow</h2>
             </div>
            <div className="slide2">
                    <h2>Are you Ready to Innovate and Grow</h2>
            </div>
            <div className="slide3">
                    <h2>Are you Ready to Innovate and Grow</h2>
            </div> */}
           
          </AutoplaySlider>
          </div>
        </div>
        )
};






