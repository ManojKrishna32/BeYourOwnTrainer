import React from 'react';

import { Link } from 'react-router';

const Footer = (props) => {
    return(
        <div style={styles.footer}>
            <div style={styles.columns}>
                <p><Link to='/'> Home </Link></p>
                <p><Link to='diet'>  Diet </Link></p>
            </div>
            <div style={styles.columns}>
                <p><Link to='contact'> Contact </Link></p>
                <p><Link to='aboutUs'>  About Us </Link></p>
            </div>
            <div style={styles.columns}>
                <p>Please note i'm neither a nutritionist nor a fitness trainer. I have listed what had best worked out for me. Please take this workouts and diet as reference only.</p>
            </div>
        </div>
    )
}

const styles= {
    footer: {
        display: 'flex',
        backgroundColor: '#101010',
        color: '#337ab7',
    },
    columns:{
        flexGrow: 1,
        flexBasis: 0,
        padding: '2%'
    }
}

export default Footer;