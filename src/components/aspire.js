import React from 'react';
import './aspire.css';
import Man from '../components/Friction-image/man.jpg';
import Three from  '../components/Friction-image/three.jpg';
import Lady from '../components/Friction-image/lady.jpg';
import Two from '../components/Friction-image/two.jpg';



const Aspire = () => {
  return (
    <div className='aspire'>
        <div className='txt'>We aspire to be one of the most loved companies in the world</div>

        <div className='culpix'>
          <img src={Man} alt='eben' /> 
        <img src={Three} alt='eben' /> 
        <img src={Lady} alt='eben' /> 
         <img src={Two} alt='eben' />

        </div>

        <div className='pic'>
            
            <div className='cul'>
                <h3>Culture</h3>
                <h4>A culture that supports high-<br></br>quality work, joy and pride in that<br></br>work, speed to execution, and<br></br>intense customer focus.</h4>
            </div>
        

            
           
            <div className='cul'>
                <h3>Diversity</h3>
                <h4>Full-spectrum diversity, equity<br></br>and inclusion are key priorities for<br></br>us.</h4>
            </div>
            

            
            <div className='cul'>
                <h3>Experience</h3>
                <h4>Focus on enhancing the team<br></br>experience by strengthening our<br></br>managers' leadership capabilities.</h4>
            </div>
            

            
            <div className='cul'>
                <h3>Team</h3>
                <h4>4,000 employees and growing in<br></br>offices across India, US, Europe,<br></br>and Australia.</h4>
            </div>
           
        </div>

<div className='but'>
        <button className='see'>SEE LIFE AT FRESHWORKS</button>
        </div>

    </div>
  )
}

export default Aspire;