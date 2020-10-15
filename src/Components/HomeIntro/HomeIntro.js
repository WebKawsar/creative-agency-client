import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';


import img from "../../creative-agency-resources/images/logos/Frame.png";
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient( #fbd062, #fbd062)',
        clipPath: "polygon(0 100%, 100% 72%, 100% 0, 0 0)",
        height: "600px"
    },
    imageSection: {
        textAlign: "center"
    },
    image: {
        maxWidth: "100%",
        height: "450px"
    },
    mainButton: {
        padding: "13px 60px",
        border: "none",
        backgroundColor: "black",
        borderRadius: "5px",
        color: "white",
        fontWeight: "600",
        cursor: "pointer"
    }
     
    
 
 }));

const HomeIntro = () => {

    const classes = useStyles();

    return (
        <>
            
            <Box className={classes.root}>
                <Container>
                    <Header></Header>
                    <Grid container>
                        <Grid item sm={4}>
                            <h1>Lets's Grow Your <br/> Brand To The <br/> Next Level </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aspernatur ipsam distinctio aperiam laudantium voluptatum iste incidunt excepturisint?</p>
                            <button className={classes.mainButton}>Hire Us</button>
                        </Grid>
                        <Grid item sm={8}>
                            <Box className={classes.imageSection}>
                                <img className={classes.image} src="https://i.ibb.co/XsSsHJ9/Frame.png" alt=""/>
                            </Box>
                        </Grid>
                    </Grid>
                    
                </Container>
            </Box>
        </>
    );
};

export default HomeIntro;