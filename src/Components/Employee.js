import React from 'react'
import './Employee.css'
import Divi from '../Components/Images/emplydivi.png'
import one from '../Components/Images/Rectangle.png'
import two from '../Components/Images/Rectangle1.png'
import three from '../Components/Images/Rectangle2.png'
import four from '../Components/Images/Rectangle3.png'
import five from '../Components/Images/Rectangle4.png'

const Employee = () => {
  return (
    <div className='main-div'>
        <div className='header'>
            <div>
            <p className='header1'>Top Performer</p>
            </div>
            <div className='btnDiv'>
            <button className="btn btn-outline-warning dropdown-toggle butn">Weekly</button>
            </div>
        </div>
        <img src={Divi} alt='divider'/>
        <div className='parentDiv'>
            <div className='imgDiv'><img src={one} alt='img1'/></div>
            <div className='Data1'>
                <p style={{marginLeft:'-40%',fontWeight:'700',fontSize:'14px'}}>Suraj Tiwari</p>
                <p style={{fontSize:'12px',color:'#9A9AB0',marginLeft:'-1%'}}>C&F Manager | Uttar pradesh</p>
            </div>
            <div className='Data2'>
                <p className='data2order'>Order Total</p>
                <p style={{color:'orange',fontSize:'14px',fontWeight:'700'}}>$434332.00</p>
            </div>
        </div>
        <div className='parentDiv'>
            <div className='imgDiv'><img src={two} alt='img1'/></div>
            <div className='Data1'>
                <p style={{marginLeft:'-40%',fontWeight:'700',fontSize:'14px'}}>Suraj Tiwari</p>
                <p style={{fontSize:'12px',color:'#9A9AB0',marginLeft:'-1%'}}>C&F Manager | Uttar pradesh</p>
            </div>
            <div className='Data2'>
                <p className='data2order'>Order Total</p>
                <p style={{color:'orange',fontSize:'14px',fontWeight:'700'}}>$434332.00</p>
            </div>
        </div>
        <div className='parentDiv'>
            <div className='imgDiv'><img src={three} alt='img1'/></div>
            <div className='Data1'>
                <p style={{marginLeft:'-40%',fontWeight:'700',fontSize:'14px'}}>Suraj Tiwari</p>
                <p style={{fontSize:'12px',color:'#9A9AB0',marginLeft:'-1%'}}>C&F Manager | Uttar pradesh</p>
            </div>
            <div className='Data2'>
                <p className='data2order'>Order Total</p>
                <p style={{color:'orange',fontSize:'14px',fontWeight:'700'}}>$434332.00</p>
            </div>
        </div>
        <div className='parentDiv'>
            <div className='imgDiv'><img src={four} alt='img1'/></div>
            <div className='Data1'>
                <p style={{marginLeft:'-40%',fontWeight:'700',fontSize:'14px'}}>Suraj Tiwari</p>
                <p style={{fontSize:'12px',color:'#9A9AB0',marginLeft:'-1%'}}>C&F Manager | Uttar pradesh</p>
            </div>
            <div className='Data2'>
                <p className='data2order'>Order Total</p>
                <p style={{color:'orange',fontSize:'14px',fontWeight:'700'}}>$434332.00</p>
            </div>
        </div>
        <div className='parentDiv'>
            <div className='imgDiv'><img src={five} alt='img1'/></div>
            <div className='Data1'>
                <p style={{marginLeft:'-40%',fontWeight:'700',fontSize:'14px'}}>Suraj Tiwari</p>
                <p style={{fontSize:'12px',color:'#9A9AB0',marginLeft:'-1%'}}>C&F Manager | Uttar pradesh</p>
            </div>
            <div className='Data2'>
                <p className='data2order'>Order Total</p>
                <p style={{color:'orange',fontSize:'14px',fontWeight:'700'}}>$434332.00</p>
            </div>
        </div>
        <div className='parentDiv'>
            <div className='imgDiv'><img src={one} alt='img1'/></div>
            <div className='Data1'>
                <p style={{marginLeft:'-40%',fontWeight:'700',fontSize:'14px'}}>Suraj Tiwari</p>
                <p style={{fontSize:'12px',color:'#9A9AB0',marginLeft:'-1%'}}>C&F Manager | Uttar pradesh</p>
            </div>
            <div className='Data2'>
                <p className='data2order'>Order Total</p>
                <p style={{color:'orange',fontSize:'14px',fontWeight:'700'}}>$434332.00</p>
            </div>
        </div>
    </div>
  )
}

export default Employee