import React from 'react'
import Trending from '../Component/Trending'
import Markets from '../Component/Markets'
import Footer from '../Component/Footer'




const CryptoHome = () => {
  return (
    <div className='wrapper-container bg-gradient-to-r from-gray-400 to-orange-300 rounded-full'>
      
      <Trending />
      <Markets />
      <Footer/>
    </div>
  )
}

export default CryptoHome
