import React from 'react'

const Collections = (props) => {
  const{title,image1,image2,image3,image4,image5,image6}=props.gentsFachion
  return (
    <div className='collectionsec'>
      <h2>{title}</h2>
      <div className='menimages'>
        {/* <img src='assests/MenFashion/1.jpg' alt={title}/>
        <img src='assests/MenFashion/2.jpg' alt={title}/>
        <img src='assests/MenFashion/3.jpg' alt={title}/>
        <img src='assests/MenFashion/4.jpg'alt={title}/>
        <img src='assests/MenFashion/5.jpg' alt={title}/>
        <img src='assests/MenFashion/6.avif' alt={title}/> */}
        <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>
        <img src={image6} alt={title}/>
      </div>
    </div>
   
  )
}

export default Collections;