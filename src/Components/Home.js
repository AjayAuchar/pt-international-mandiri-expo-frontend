import { makeStyles } from '@material-ui/core';
import React from 'react';
import shipIndustryDelivering from '../Images/shipIndustryDelivering.jpg';
import Services from './Services';
import DetailPage from './DetailPage';
import HomeContactForm from './HomeContactForm';
import BussinessLocationMap from './BussinessLocationMap';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    homeContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: -1, // Place the pseudo-element below the button's content
        },
    },
    homeBgImg: {
        width: "100%",
        height: 680,
        opacity: 0.5,
    },
    homeTitle: {
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        padding: "10px",
        "& h4": {
            color: '#fff',
            textTransform: 'uppercase',
            marginTop: '24px',
            marginBottom: '15px',
            fontSize: 30,
            fontFamily: "Roboto"

        },
        "& h1": {
            color: '#eb0028',
            fontSize: 42,
            textTransform: 'uppercase',
            marginTop: '0px',
            marginBottom: '15px',
            fontWeight: '600',
            fontFamily: "Roboto"
        },
        '& p': {
            width: 822,
            fontSize: '16px',
            color: '#fff',
            textAlign: 'justify',
            wordSpacing: 2,
            lineHeight: 1.3,
        }
    },
    contactBtn: {
        display: 'inline-block',
        color: '#fff',
        borderRadius: '4px',
        textTransform: 'uppercase',
        fontSize: '15px',
        backgroundColor: '#eb0028',
        padding: '15px 30px',
        border: '0px',
        fontWeight: 600,
        marginTop: 15,
        "&:hover": {
            textDecoration: 'none',
            backgroundColor: '#f5f5f5',
            color: '#eb0028',
            cursor: 'pointer',
        }
    }

}));

const Home = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { showMessage, setShowMessage } = props;

    return (
        <>
            <div className={classes.homeContainer}>
                <img className={classes.homeBgImg} src={shipIndustryDelivering} alt="homeShipBgImg2" />
                <div className={classes.homeTitle}>
                    <h4>INTERNATIONAL MANDIRI EXPO</h4>
                    <h1> PROFESSIONAL IMPORT EXPORT SERVICES  </h1>
                    <p>
                        Welcome to PT.International Mandiri Expo your gateway to global trade!
                        Established in 2020, we are your dedicated import-export partner, connecting businesses worldwide. With a commitment to excellence, we simplify international trade, offering tailored solutions and unbeatable service.
                        Discover endless possibilities with PT.International Mandiri Expo. Explore our services, and let's navigate the global marketplace together!
                    </p>
                    <button className={classes.contactBtn} onClick={() => navigate('contact')}> Contact with us </button>
                </div>
            </div>
            <Services />
            <DetailPage />
            <HomeContactForm showMessage={showMessage} setShowMessage={setShowMessage} />
            <BussinessLocationMap />
        </>
    )
}

export default Home
