import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'
import Title from './Title'
import { useNavigate } from 'react-router'

const FeaturedDestination = () => {

  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

      <Title title='FeaturedDestintion' subTitle='Discover our handPicked selection of our exceptional Properties around the world 
      ,offer Unparalleled luxury and unforgettable experiences.'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20 '>
          {roomsDummyData.slice(0,4).map((room , index)=>(
            <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}}
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
          View All Destination
        </button>
    </div>
  )
}

export default FeaturedDestination