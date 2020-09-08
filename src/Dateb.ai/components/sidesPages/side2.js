import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "../css/slidestyle.css"

{/* <style>svg#freepik_stories-company:not(.animated) .animable {opacity: 0;}svg#freepik_stories-company.animated #freepik--Shadows--inject-29 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;animation-delay: 0s;}svg#freepik_stories-company.animated #freepik--meeting-room--inject-29 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomIn;animation-delay: 0s;}svg#freepik_stories-company.animated #freepik--office-2--inject-29 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomIn;animation-delay: 0s;}svg#freepik_stories-company.animated #freepik--office-1--inject-29 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;animation-delay: 0s;}svg#freepik_stories-company.animated #freepik--room-for-printing--inject-29 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomOut;animation-delay: 0s;}svg#freepik_stories-company.animated #freepik--Plaque--inject-29 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) lightSpeedLeft;animation-delay: 0s;}            @keyframes slideRight {                0% {                    opacity: 0;                    transform: translateX(30px);                }                100% {                    opacity: 1;                    transform: translateX(0);                }            }                    @keyframes zoomIn {                0% {                    opacity: 0;                    transform: scale(0.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }                    @keyframes zoomOut {                0% {                    opacity: 0;                    transform: scale(1.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }                    @keyframes lightSpeedLeft {              from {                transform: translate3d(-50%, 0, 0) skewX(20deg);                opacity: 0;              }              60% {                transform: skewX(-10deg);                opacity: 1;              }              80% {                transform: skewX(2deg);              }              to {                opacity: 1;                transform: translate3d(0, 0, 0);              }            }        .animator-hidden { display: none; }</style> */}


export default function Side2() {
    return (
<div style={{
    backgroundColor: "#24272c",
}}>
        <Grid className="main-grid2" container id="TEgrid1">
        
        <Grid item xs={12} sm={6} className="grid1"
          data-aos="fade-right"
          data-aos-offset="200"
          // data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
                <img className="slide-img" src={require('../images/image2.png')} alt="pic2"/>
                        </Grid>    


        <Grid item xs={12} sm={6} className="grid2"
          data-aos="fade-left"
          data-aos-offset="200"
          // data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
            <div>
                <h1>Talk to our experts about your requirements</h1>
                <p className="slide-para">
                Contact us and know more about how our experts can help your business grow.
                </p>
                <Button variant="outlined" color="primary">Enquire Now</Button>
            </div>
        </Grid> 
    </Grid>
  </div>
  )
}
