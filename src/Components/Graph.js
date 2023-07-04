import React from 'react'
import './Graph.css'
import Divider from '../images/Separator.png'
import ThreeDot from '../images/Button.png'
 
const Graph = () => {
  return (
    <div className='box'>
        <div>
        <div className='header'>
        <p style={{fontSize:'16px',fontWeight:'700',marginTop:'5%',marginLeft:'2%'}}>Earning</p>
        <button style={{marginLeft:'195px'}} className='btn btn-outline-warning dropdown-toggle butn'>Weekly</button><span className='imgdot'><img  src={ThreeDot} alt='button'/></span>
    </div>
    <img src={Divider} alt='divideSection'/>
        </div>
    </div>
  )
}

export default Graph