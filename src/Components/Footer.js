import { makeStyles } from '@material-ui/core';
import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import bussinessLogo from '../Images/bussinessLogo.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    footerContainer: {
        width: '100%',
        // height : 200,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        // justifyContent : 'space-between',
        padding: '30px 35px',
        boxSizing: 'border-box',
        marginTop: 50
    },
    footerCompanyDetail: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        '& img': {
            width: 120,
            height: 100,
            borderRadius : '50%'
        },
        '& span': {
            marginTop: 10,
            fontSize: 16,
            fontWeight: 600,
            color: '#eb0028'
        }
    },
    footerNavLink: {
        display: 'flex',
        marginTop: 15,
        '& ul': {
            padding: 0,
        },
        '& ul li': {
            display: 'inline-block',
            padding: 5,
            fontSize: 15,
            color: '#0000008a',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    },
    footerLeftSection: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        '& h4': {
            fontSize: 20,
            textAlign: 'start',
            color: '#eb0028',
            fontWeight: 700,
            fontFamily: 'Roboto',
            margin: '0px 0 20px 5px',
        }
    },
    footerDetail: {
        display: 'flex',
        marginBottom: 25,
        '& span': {
            fontSize: 15,
            // fontWeight : 700,
            fontFamily: 'Roboto',
            marginLeft: 15,
            textAlign: 'justify',
            color: '#0000008a'
        }
    },
    footerRightSection: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h4': {
            fontSize: 20,
            textAlign: 'start',
            color: '#eb0028',
            fontWeight: 700,
            fontFamily: 'Roboto',
            margin: 0,
        },
        '& p': {
            fontSize: 16,
            fontFamily: 'Roboto',
            textAlign: 'justify',
            padding: '0 30px',
            color: '#0000008a'
        }
    },
    socialMediaIcons: {
        display: 'flex',
        gap: 20,
        '& img': {
            width: 50,
            height: 50,
        }
    },
    socialIcons: {
        width: 35,
        height: 35,
        color : '#000000',
        '&:hover' : {
            color : '#eb0028'
        }
    },

}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerCompanyDetail}>
                <img src={bussinessLogo} alt="bussinessLogo" />
                <span>PT.International Mandiri Expo</span>
                <div className={classes.footerNavLink}>
                    <ul>
                        <li> Home </li> |
                        <li> About </li> |
                        <li> Contact </li> |
                        <li> Services </li>
                    </ul>
                </div>
            </div>
            <div className={classes.footerLeftSection}>
                <h4> Contact us </h4>
                <div className={classes.footerDetail}>
                    <LocationOnIcon />
                    <span> Address : SOHO CAPITAL LT.32 UNIT 7 JL. LETJEN PARMAN KAV 28 TANJUNG DUREN SELATAN GROGOL PETAMBURAN JAKARTA BARAT DKI JAKARTA, 11470 </span>

                </div>
                <div className={classes.footerDetail}>
                    <PhoneIcon />
                    <span> Telephone No : +62878-1788-3677 </span>
                </div>
                <div className={classes.footerDetail}>
                    <EmailIcon />
                    <span> Email : Pt.mandiriexpo@gmail.com </span>
                </div>
            </div>
            <div className={classes.footerRightSection}>
                <h4>
                    About my company
                </h4>
                <p>
                    Welcome to PT.International Mandiri Expo your gateway to global trade!
                    Established in 2020, we are your dedicated import-export partner, connecting businesses worldwide. With a commitment to excellence, we simplify international trade, offering tailored solutions and unbeatable service.
                    Discover endless possibilities with PT.International Mandiri Expo. Explore our services, and let's navigate the global marketplace together!
                </p>
                <div className={classes.socialMediaIcons}>
                <Link to="https://www.facebook.com/people/Ptime-Cro/pfbid0WS4sfd7GURwVR1RFMXzUthAqdCWm4MNY939ABdDTZ69wVGZPt8r1vKUJdwYcbrrUl/?mibextid=7cd5pb"> <FacebookIcon className={classes.socialIcons} /></Link>
                <Link to="https://api.whatsapp.com/send/?phone=6281311932441&text&type=phone_number&app_absent=0"> <WhatsAppIcon className={classes.socialIcons} /></Link>
                <Link to="https://www.instagram.com/ptime91/?igshid=NGVhN2U2NjQ0Yg%3D%3D"> <InstagramIcon className={classes.socialIcons} /> </Link>
                <Link to="https://www.linkedin.com/in/pt-ime-350b34290"> <LinkedInIcon className={classes.socialIcons} /> </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
