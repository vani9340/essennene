import React from 'react'
import './Graph.css'
import Divider from '../images/Separator.png'
import ThreeDot from '../images/Button.png'
import Chart from '../images/ChartLine.svg'
import graph from '../images/Day.svg'
const Graph = () => {
  return (
    <>
    <div className='Main-box rounded-lg'>
    <div className='header'>
        <p style={{fontSize:'16px',fontWeight:'700',width:'132px',marginTop:'5%',marginLeft:'4%'}}>Item Sold</p>
        <button className='btn btn-outline-warning dropdown-toggle butn' style={{marginLeft:'60%',marginTop:'5%',marginBottom:'2%'}}>Best Seller</button>
        <span style={{marginTop:'5%'}}>
        <img src={ThreeDot} alt='icon' />
    </span>
    </div>
    <img src={Divider} alt='divideSection' class='w-[200%]'/>
    <div className='parentdiv'>
        <div className='div1'>
        <p style={{fontSize:'24px',fontWeight:'700',marginRight:'238px',marginBottom:'2%'}}>$50.000</p>
        <p style={{marginRight:'400px',width:'117px',height:'18px',fontSize:'14px',marginTop:'-18px'}}>Earning Overtime</p>
        </div>
        <div className='div2'>
            <p style={{fontSize:'24px',fontWeight:'700',marginLeft:'228px',marginBottom:'2%'}}>1050</p>
            <p style={{width:'117px',height:'18px',fontSize:'14px',marginTop:'-18px',marginLeft:'224px'}}>Total Order</p>
        </div>
    </div>
    <div className='parentChart'>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$50.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$45.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$40.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$35.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$20.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$10.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$5.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    <div className='listItems'>
        <p style={{fontSize:'14px',fontWeight:'700',marginRight:'7%',marginBottom:'3%',marginLeft:'1.5%'}}>$0.000</p>
        <span><img src={Chart} alt='line' /></span>
    </div>
    </div>
    <div className='imgDiv'>
      <img src={graph} className='graphimg' style={{marginLeft:'109px',marginTop:'585px'}}/>
    </div>
    
    {/* <div className='days'>
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p style={{fontSize:'14px',fontWeight:'700'}} className='highlight'>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
    </div> */}
    
    </div>
    </>
  )
}

export default Graph