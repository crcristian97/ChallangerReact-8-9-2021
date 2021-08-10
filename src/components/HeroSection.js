import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgHero from '../assets/Sin título-2.svg';


const useStyles = makeStyles((theme) => ({
    container:{
        position: 'relative',
        display: 'inline-block',
        textAlign: 'center',
        left: '12rem',
        width: ''
    },
    textoEncima: {
        position: 'absolute',
        top: '70px',
        left: '18rem',
        fontSize: '30px',
        color: 'white'
    },

  })
);

export default function FixedContainer() {
    const classes = useStyles();
    return (
      <React.Fragment>
          <div className={classes.container}>
              <img src={imgHero}></img>
            <div className={classes.textoEncima}>
              Limited Quantity Doorbusters
            </div>
          </div>
      </React.Fragment>
    );
}