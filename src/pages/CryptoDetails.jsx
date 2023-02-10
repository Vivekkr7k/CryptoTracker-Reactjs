import React from 'react'
// import BtcHalvingTimer from '../Component/BtcHalvingTimer'
import CoinDetail from '../Component/CoinDetail'
import Footer from '../Component/Footer'
import History from '../Component/History'

const CryptoDetails = () => {
  return (
    <div className='wrapper-container max-w-7xl'>
     {/* <BtcHalvingTimer/> */}
     <History/>
     <CoinDetail/>
     <Footer/>
    </div>
  )
}

export default CryptoDetails
