// import React from 'react'
// import "../../css/porfolioSlide/webProjects.css";

// export default function WebProjects() {
//     return (
//         <div className="webProjects">
            // <img src= {require("./porfolioGallery/web/covide19.jpg")} />
            // <img src= {require("./porfolioGallery/web/expense.jpg")} />
            // <img src= {require("./porfolioGallery/web/shoe-store.jpg")} />
            // <img src= {require("./porfolioGallery/web/webflex.jpg")} />
//         </div>
//     )
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import "../../css/porfolioSlide/webProjects.css";

const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 180,
//   },
//   container: {
//     display: 'flex',
//   },
//   paper: {
//     margin: theme.spacing(1),
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
//   polygon: {
//     fill: theme.palette.common.white,
//     stroke: theme.palette.divider,
//     strokeWidth: 1,
//   },
}));

export default function SimpleGrow(props) {
  const classes = useStyles();

var checked = props.condition;

  return (
    <div className="webProjects">
    <div className={classes.root}>
      <div className={classes.container}>
    <Grow 
              in={checked}
    >

    <img src= {require("./porfolioGallery/web/covide19.jpg")} />
          
    </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1500 } : {})}
        >
          
          <img src= {require("./porfolioGallery/web/expense.jpg")} />

    </Grow>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 4500 } : {})}
        >
          
          <img src= {require("./porfolioGallery/web/shoe-store.jpg")} />


    </Grow>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 6500 } : {})}
        >
          
          <img src= {require("./porfolioGallery/web/webflex.jpg")} />


    </Grow>
      </div>
    </div>
    </div>
  );
}
