import React from 'react';
import './Friction.css';
import Dollar from '../components/Friction-image/dollars.jpg';
import Half from '../components/Friction-image/half.png';
import Layer from '../components/Friction-image/Layers.png';
import Yellow from  '../components/Friction-image/yellow.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Friction = () => {
    return(
        <div className='fri1'>
            <div className='main'>
            <div className='Fri2'>
                <h2 className='fri-t'>Frictionless,simple,easy</h2>
                <h4 className='fri-p'>Freshworks makes it fast and easy for businesses to delight their customers and employees.</h4>
                <h4 className='fri-h'>We take a fresh approach to how businesses discover, engage with, and realize values from software throughout thier journey.</h4>
                
            </div>

            <div className='fri3'>
                <div className='yellow'>
                    <div className='fri-pix'> <img src={Yellow} />  </div>
                    <div className='fritext'>
                        <h3>Get up and running with no barriers</h3>
                        <h4>Try or purchase our software directly from our website,</h4>
                        <h4>and onboard in a matter of days, not months.</h4>
                    
                    <a href='#'>Start free trial < ArrowForwardIcon style={{fontSize:"small"}}/> </a>
                    </div>
                </div>

                <div className='dollar'>
                    <div className='fri-pix'> <img src={Dollar} />  </div>
                    <div className='fritext'>
                        <h3>Choose your pricing plan</h3>
                        <h4>Our pricing plan are designed for modern business use</h4>
                        <h4>cases and affordable for organizations of all sizes.</h4>
                    
                    <a href='#'>See pricing < ArrowForwardIcon style={{fontSize:"small"}}/> </a>
                    </div>
                </div>
                
            </div>

            <div className='fri3'>
                <div className='layers'>
                    <div className='fri-pix'> <img src={Layer} /> </div>
                    <div className='fritext'>
                        <h3>Build and customize as you go</h3>
                        <h4>Extend and tailor experiences to meet your unique</h4>
                        <h4>business needs, with low-code development and over 1,100</h4>
                        <h4>custom apps made available on our marketplace.</h4>
                    
                    <a href='#'>Visit marketplace < ArrowForwardIcon style={{fontSize:"small"}}/> </a>
                    </div>
                </div>

                <div className='meter'>
                    <div className='fri-pix'> <img src={Half} />  </div>
                    <div className='fritext'>
                        <h3>Create value, fast</h3>
                        <h4>Accelerate your team's productivity and efficiency with</h4>
                        <h4>modern automation and collaboration tools, to get tangible</h4>
                        <h4>results in no time</h4>
                    
                    <a href='#'>Learn how < ArrowForwardIcon style={{fontSize:"small"}}/> </a>
                    </div>
                </div>
                
            </div>

            </div>
            
        </div>
    )
}
export default Friction