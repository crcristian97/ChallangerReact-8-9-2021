import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import accounting from 'accounting';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  title:{
    textAlign: 'center',
    fontSize: '15px',
    padding: '10px',
    backgroundColor: '#6DD5EA',
    margin: '50px',
    color: 'white'
  },
  media: {
    height: '70px',
    width: '',
    paddingTop: '56.25%', // 16:9
  },
  descTitle:{
    color: '#07a5c7',
    fontSize: '26px',
    textAlign: 'center',
    marginTop: '10px',
    fontFamily: 'Times New Roman'
  },
  descsubtitle:{
    fontSize: '16px',
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Times New Roman'
  },
  descriptionprice:{
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '12px',
  },
  action:{
    fontSize: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  descriptionsubprice:{
    fontSize: '16px',
    textAlign: 'center',
    color: '#84989c',
  },
  descriptioncuppon:{
    fontSize: '15px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  descriptionshipping:{
    color:'#e58829',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '13px'
  },
  start:{
    color: 'orange',
    paddingLeft: '90px',
    fontSize: '10px',
  },
  textstart:{
    fontSize: '15px',
    color: 'black',
    fontWeight: 'bold',
  },
  subtextstart:{
    color: 'black',
    fontSize: '12px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  bntstyle:{
      backgroundColor: '#093658',
      borderRadius: '3%',
      width: '70%',
      margin: '55px',
      padding: '1px' 
  },
  bnttext:{
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '12px'

  },
  titleDesc:{
    fontSize: '12px',
    color: 'gray',
    marginBottom: '1px'
  },
  subtitleDesc:{
    fontSize: '15px',
    color: 'black',
    borderBottom: '1px solid gray'
  },
  lasttext:{
    fontSize: '15px',
    color: '#27879a',
    cursor: 'pointer'
  }, 
}));

export default function Product(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
          <Typography variant="h4" className={classes.title} >
            DOORBUSTER
          </Typography>
          <CardMedia
            className={classes.media}
            image={props.image}
            title=""
          />
          <Typography  variant="h4" className={classes.descTitle}>
              {props.title}
          </Typography>
          <Typography  variant="h6" className={classes.descsubtitle} >
              {props.description}
          </Typography>
          <Typography  variant="h6" className={classes.descriptionprice} >
              Sale price starting at:
          </Typography>
          <Typography
              className={classes.action}
              variant='h5'
              >
              {accounting.formatMoney(729.99, "$")}
          </Typography>
      <Typography  variant="h6" className={classes.descriptionsubprice} >
        You save: $200
        </Typography>
        <Typography  variant="h6" className={classes.descriptioncuppon} >
        Use eCoupon: DEALS
        </Typography>
        <Typography  variant="h6" className={classes.descriptionshipping} >
        Free Shipping!
        </Typography>
        <CardActions  className={classes.start}>
          {Array(5)
          .fill()
          .map((_, i) =>(
              <p >&#11088;</p>
              
          ))}
            <p className={classes.textstart}>5.0 </p>
            <p className={classes.subtextstart}> (120)</p>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <IconButton className={classes.bntstyle} >
          <Button className={classes.bnttext}>Show now</Button>
        </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.titleDesc}>Processor:</Typography>
          <Typography paragraph className={classes.subtitleDesc}>
            Intel Core i3
          </Typography>
          <Typography paragraph className={classes.titleDesc}>Operating System:</Typography>
          <Typography paragraph className={classes.subtitleDesc}>
            Windows 10 Profesional
          </Typography>
          <Typography paragraph className={classes.titleDesc}>Memory</Typography>
          <Typography paragraph className={classes.subtitleDesc}>
            16 GB RAM
          </Typography>
          <Typography paragraph className={classes.titleDesc}>Graphics</Typography>
          <Typography paragraph className={classes.subtitleDesc}>
            NVIDIA Graphics 4
          </Typography>
          <Typography paragraph className={classes.lasttext}>
            See Full Specs >
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
