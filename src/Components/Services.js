import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import boatServiceImg from "../Images/boatServiceImg.jpg";
import truckTransportImg from "../Images/truckTransportImg.jpeg";
import airServiceImg from "../Images/airServiceImg.jpg";

const useStyles = makeStyles(() => ({
    serviceContainer: {
        marginTop: 30,
        '& h1': {
            color: '#eb0028'
        },
        '& img': {
            width: "100%",
            height: 800,
            backgroundSize: 'cover',
        },
        '& p': {
            color: '#0000008a'
        }
    },
    serviceCardContainer: {
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 35,
        marginTop: 50,
        fontFamily: 'Roboto'
    }
}));

const Service = () => {
    const classes = useStyles();
    // state
    const [servicesData, setServicesData] = useState([
        {
            imgSrc: boatServiceImg,
            title: 'Ocean Freight Shipping',
            detail: "We provide our clients with time saving economical solution at extremely affordable rates. At PT.International Mandiri Expo, we pride ourselves on delivering not just cargo but also peace of mind. Trust us to navigate the complexities of ocean freight shipping, ensuring your cargo arrives at its destination securely and in a timely manner. Partner with us for a seamless global shipping experience."
        },
        {
            imgSrc: airServiceImg,
            title: 'Air Freight Shipping',
            detail: "We provide affordable solution for express, consolidation and regular types of PT.International Mandiri Expo service. With our global network of partners and access to major airports worldwide, we ensure that your cargo reaches its destination quickly and efficiently. Our dedicated team of experts handles everything from documentation and customs clearance to cargo tracking and delivery coordination, providing you with peace of mind every step of the way."
        },
        {
            imgSrc: truckTransportImg,
            title: 'Truck Transport Shipping',
            detail: "Our dedicated trucking solutions ensure your goods reach their destination safely and on time. Whether you have a local or long-distance shipment, our experienced team and well-maintained fleet are here to provide seamless transportation services tailored to your specific needs. Trust us to deliver excellence on the road, so you can focus on what matters most – your business."
        }
    ])

    return (
        <div className={classes.serviceContainer}>
            <h1> OUR SERVICES </h1>
            <p> Explore our comprehensive import-export solutions, designed to streamline your global trade operations and boost your business's success. </p>
            <div className={classes.serviceCardContainer}>
                {servicesData.map(serviceData => (
                    <ServiceCard serviceData={serviceData} />
                ))}
            </div>
        </div>
    )
}

export default Service
