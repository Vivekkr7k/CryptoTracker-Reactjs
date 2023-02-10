import React from 'react'
import { useState, useEffect} from 'react';
import axios from 'axios';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';
import Skleton from './Skleton';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const History = () => {
  const {id} =useParams()
   
  const [data , setData] =useState(null);

 const url= `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=7`

 
  

 useEffect(()=>{
  axios.get(url).then((data)=>{
    setData(data.data)
    // console.log(data.data)
  }).catch((error)=>{
    console.log(error)
 })
},[])

if (!data) {
  return( 
    <div>Loading...
    
<div className='wrapper-container'> 
  
   <Skleton className='h-8 w-32'/>
   <Skleton className='h-8'/>
   <Skleton className='h-8 w-full mt-2'/>
   <Skleton className='h-8 w-full mt-2'/>
   <Skleton className='h-8 w-full mt-2'/>
</div>
</div>

 
  )
}



const coinChartData = data.prices.map(value => ({x: value[1], y: new Date(value[0])}));
console.log(coinChartData);

// const coinChartData = data.prices.map((value,index) => ({x: value[1] + index , y: new Date(value[0])}));
// console.log(coinChartData);

const options ={
  responsive : true,
}

const chart ={
  labels : coinChartData.map(value => moment(value.y).format("MMM DD")),
  datasets: [
    {
      fill:true,
      label:id,
      data: coinChartData.map(val =>val.x),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235 , 0.4)'
    }
  ]
}

  return (
    <div >
      <Line options={options} data={chart}/>
     
    </div>
  )
}

export default History
