import React from 'react';
import './header.css';
import Logo from '../components/Friction-image/logo-pi.png'
import { borderRadius } from '@mui/system';
import USA from '../components/Friction-image/usa.png';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom';



const Header = () => {
    return(
        <div className='head'>
            <div className='logo'> <img src={Logo} style={{width:"30px", height:"30px"}} />&nbsp;freshworks</div>
            <div className='nav'>
                <Link to='/' className='nav'> <HomeIcon style={{fontSize:"medium"}} /> Home</Link>
                <Link to='/contact' className='nav'> <ContactsIcon style={{fontSize:"medium"}}/> Contact</Link>
                <Link to='/about' className='nav'> <InfoIcon style={{fontSize:"medium"}}/> About</Link>
                <Link to='/pricing' className='nav'> <MonetizationOnIcon style={{fontSize:"medium"}}/> Pricing</Link>
                

                <div className='nav'> <img src={USA} style={{width:"30px", height:"30px", borderRadius:"50px", border:"2px solid white"}} /> </div>
            </div>

            

        </div>
    )
}

export default Header