import React from 'react'

const Womancollection = (props) => {

const{ title, Image1,Image2,Image3,Image4,Image5,Image6}=props.ladiesFashion
  return (
    <div className='womancollection'>
        <div className='bannersection'>
        <div className='banner-box'>
            <img src='assests/Banners/LadiesBanner.gif' alt='Banner'/>
        </div>
        </div>
        <h2>{title}</h2>
        <div className='womanimages'>
            <img src={Image1} alt={title}/>
            <img src={Image2} alt={title}/>
            <img src={Image3} alt={title}/>
            <img src={Image4} alt={title}/>
            <img src={Image5} alt={title}/>
            <img src={Image6} alt={title}/>
        </div>
    </div>
  )
}

export default Womancollection