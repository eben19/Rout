import React from 'react';
import './Hero.css'
import Suit from '../components/Friction-image/suit-lady.png';


const Heropage = () => {
    return(
        <div className='hero'>
            <div className='delight'>
                <h1>Delight made <br></br>easy</h1>
                
            
                <p>We make it fast and easy for your business to delight<br></br>customers and employees.</p>

                <div className='free'>
        <button className='try'>FREE TRIALS</button>
        <button className='sale'>CONTACT SALES</button>
        </div>
            </div>

            <img src={Suit} alt='eben' style={{height:"65%"}}/>

            

        </div>
    )
}

export default Heropage