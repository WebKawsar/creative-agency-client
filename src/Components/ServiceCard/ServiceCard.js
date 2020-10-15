import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
  root: {
    textAlign: "center",
    
  },
  card: {
      padding: "40px 0 20px",
      borderRadius: "6px",
      boxShadow: "none",
    "&:hover": {
        boxShadow: "10px 10px 40px grey"
    }
  },
  title: {
    fontSize: "18px",
    marginBottom: "15px",
    fontWeight: "bold"
  },
  serviceImage: {
    width: "100px"
  },
  CardContent: {
    textAlign: 'center'
  },    
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    }
  },
  paragraph: {
    fontSize: "16px",
  }





});

const ServiceCard = (props) => {
    const {_id, title, description, image} = props.service;
    const classes = useStyles();
    return (
        <>
        <Grid className={classes.root} item md={4}>
          <Link className={classes.link} to={`/dashboard/order/${_id}`}>
            <Card className={classes.card}>
                    <img className={classes.serviceImage} src={`data:image/jpeg;base64,${image.img}`} alt=""/>
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h4">
                            {title}
                        </Typography>
                        <Typography className={classes.paragraph} variant="body2" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
                
              </Link>
        </Grid>
        </>
    );
};

export default ServiceCard;