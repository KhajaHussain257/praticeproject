import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
        <div className='left'>
            <div className='title'>
                <h2>Online Shopping</h2>
            </div>
        </div>
        
        <div className='center'>
            <ul>
                <li>Men</li>
                <li>WoMan</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className='Search'>
            <input type='text' placeholder='search...'/>
        </div>
        <div className='right'>
            <div className='Signin'>SignIn / SignUp</div>
            <div className='cart'>Cart</div>
        </div>
    </div>
  )
}

export default Header