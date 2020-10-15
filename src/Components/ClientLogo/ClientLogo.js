import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px 0 100px",
    },
    clientLogo: {
        width: "150px",
        height: "auto"
    }
    
   

}));

const ClientLogo = ({logo}) => {
    const classes = useStyles();

    return (
        <>
           <Box><Link to="/home"><img className={classes.clientLogo} src={logo.img} alt=""/></Link></Box>
        </>
    );
};

export default ClientLogo;