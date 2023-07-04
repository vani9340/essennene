import React from 'react'
import './ItemsList.css'
import Divider from '../images/Divider.png'
import one from '../images/Item.png'
import two from '../images/Item1.png'
import three from '../images/Item2.png'
import four from '../images/Item3.png'
import five from '../images/Item4.png'
import six from '../images/Item5.png'

const ItemsList = () => { 
  return (
    <>
    <div className='box' class='rounded-lg'>
    <div className='header p-3'>
        <p style={{fontSize:'16px',fontWeight:'700'}} class='pt-2'>Item Sold</p>
        <button className='btn btn-outline-warning dropdown-toggle'>Best Seller</button>
    </div>
    <img src={Divider} alt='divideSection'/>
    <div className='items-section'>
        <div className='item'>
            <img src={one} alt='item1'  style={{height:'64px',width:'64px'}}/>
            <p className='name'>Headphone joss</p>
            <p className='price'>430 Items</p>
            
        </div>
        <div className='item'>
            <img src={two} alt='item1'  style={{height:'64px',width:'64px'}}/>
            <p className='name'>OnePlus 7t</p>
            <p className='price'>200 Items</p>
            
        </div>
        <div className='item'>
            <img src={three} alt='item1'  style={{height:'64px',width:'64px'}}/>
            <p className='name'>iPhone 13</p>
            <p className='price'>180 Items</p>
            
        </div>
        <div className='item'>
            <img src={four} alt='item1'  style={{height:'64px',width:'64px'}}/>
            <p className='name'>Onigiri - Rice Balls</p>
            <p className='price'>120 Items</p>
            
        </div>
        <div className='item'>
            <img src={five} alt='item1'  style={{height:'64px',width:'64px'}}/>
            <p className='name'>Yakitori - Grilled Chicken</p>
            <p className='price'>80 Items</p>
            
        </div>
        <div className='item'>
            <img src={six} alt='item1' style={{height:'64px',width:'64px'}}/>
            <p className='name'>Royal Milk Tea</p>
            <p className='price'>70 Items</p> 
            
        </div>

    </div>
    </div>
   
    
    </>
    
  )
}

export default ItemsList