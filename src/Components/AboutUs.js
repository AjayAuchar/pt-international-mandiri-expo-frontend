import { makeStyles } from '@material-ui/core';
import React from 'react';
import homepageSeaImg from "../Images/homepageSeaImg.jpg";

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
      height: 500,
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
      <img src={homepageSeaImg} alt="homepageSeaImg" />
      <div className={classes.aboutDetail}>
        <h2>About US</h2>
        <p>
          Welcome to PT.International Mandiri Expo, your trusted partner in the world of international trade. Founded in 2020, we are a dynamic and forward-thinking import-export company with a passion for connecting businesses across borders and facilitating global commerce.
          Our journey began with a vision to simplify and streamline the complex world of international trade. Over the years, we have grown into a reputable and reliable partner for businesses of all sizes, providing comprehensive import and export solutions that cater to their unique needs.
          Our values of integrity, transparency, and customer-centricity drive everything we do. We prioritize building lasting relationships with our clients, suppliers, and partners, built on trust and mutual success.
          Whether you are looking to source quality products from overseas markets or expand your market reach internationally, we have the expertise and resources to make it happen.
          As we continue to grow and evolve, our commitment to innovation remains unwavering. We stay at the forefront of industry trends and technology, allowing us to provide innovative solutions that enhance the efficiency and competitiveness of your business.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
