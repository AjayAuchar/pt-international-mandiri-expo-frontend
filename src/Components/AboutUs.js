import { makeStyles } from '@material-ui/core';
import React from 'react';
import AboutCoconutImg from "../Images/AboutCoconutImg.jpeg";
import coconutCoal from '../Images/coconutCoal.jpg';

const useStyles = makeStyles(() => ({
  aboutContainer: {
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    '& img': {
      width: "65%",
      height: 550,
      marginTop: 25
    },
  },
  aboutDetail: {
    width: "65%",
    '& h2': {
      fontFamily: 'Roboto',
      fontSize: 25,
      marginTop: 35,
      textTransform: 'uppercase',
      color: '#eb0028'
    },
    "& p": {
      fontSize: 16,
      fontFamily: 'Roboto',
      textAlign: 'justify',
      wordSpacing: 2,
      lineHeight: 1.3,
      color: '#0000008a'
    }
  }
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <img src={AboutCoconutImg} alt="AboutCoconutImg" />
      <div className={classes.aboutDetail}>
        <h2>About US</h2>
        <p>
          Welcome to PT.International Mandiri Expo your gateway to global trade!
          Our commitment to sustainability and innovation drives us to produce high-quality coal briquettes that provide an efficient and eco-friendly alternative to traditional coal consumption. With a dedicated team of experts and state-of-the-art manufacturing processes, we aim to meet the growing global demand for clean and reliable energy sources. At our core, we are driven by a passion for environmental responsibility and a desire to contribute to a greener future for generations to come.
          As a coal briquette company founded in 2020, we have embarked on a mission to transform the energy landscape. Committed to addressing the challenges of environmental sustainability, we have harnessed cutting-edge technology and innovation to produce coal briquettes that offer a cleaner and more efficient alternative to traditional coal. Our dedicated team brings together expertise and passion, striving to meet the increasing global demand for eco-conscious energy solutions. We take pride in being at the forefront of the transition towards greener energy sources, firmly believing in our role in shaping a more sustainable future. With each briquette we produce, we are making a significant stride towards a cleaner, brighter tomorrow.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
