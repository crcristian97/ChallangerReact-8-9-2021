import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgLenovo from '../assets/imgNavbar/NotebookLenovo.jpg'
import imgLaptop from '../assets/imgNavbar/HomeLaptop.jpg';
import imgThinkPad from '../assets/imgNavbar/ThinkPad Laptops.jpg';
import imgDesktops from '../assets/imgNavbar/Desktops.jpg';
import imgMonitor from '../assets/imgNavbar/monitor.jpg';
import imgDiscHard from '../assets/imgNavbar/DiscDur.png';
import imgTicket from '../assets/imgNavbar/ticket-576228_1280.png';
import imgBox from '../assets/imgNavbar/box-2071537_1280.png';


const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: '#dad7e5',
        padding: '1px'
    },
    containerdiv:{
        border: '1px',
        display: 'inline-block',
        width: 'auto',
        margin: '20px',
        padding: 'auto',
        paddingLeft: '20px',
        textAlign: 'justify',
        fontSize: '12px',
        listStyle: 'none',
    },
    img: {
         width: '40px'
    }
  })
);

export default function HeroProduct() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgLenovo}></img> 2 en 1</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgLaptop}></img> Home Laptop</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgThinkPad}></img> ThinkPad Laptops</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgDesktops}></img> Desktops</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgMonitor}></img> Monitors</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgDiscHard}></img> Accesories</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgTicket}></img> Clearence</li>                  
            </div>
            <div className={classes.containerdiv}>
                <li><img className={classes.img} src={imgBox}></img> Outlet</li>                  
            </div>
        </div>
    )
}
