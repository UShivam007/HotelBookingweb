import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'

const AddRoom = () => {

  const [images,setImages] = useState({
    1:null,
    2:null,
    3:null,
    4:null
  })

  const [input,setInput] = useState({
    roomType:'',
    pricePerNight:0,
    amenities:{
      'Free Wifi':false,
      'Free Breakfast':false,
      'Room Service':false,
      'Mountain View':false,
      'Pool Access':false,
    }
  })
  return (
    <form >
      <Title align='left' font='Outfit' title='Add Room' subTitle='Fill in the Details Carefully and accurate room details, pricing, and amenities to enhance
      the user booking experience'/>
      {/* Upload area for Images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key)=>(
          <label htmlFor={`roomImages ${key}`} key={key}>
            <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt=''
            className='max-h-13 cursor-pointer opacity-80' />
            <input type="file" accept='image/*' id={`roomImages ${key}`} hidden
            onChange={(e)=>(setImages({...images,[key]: e.target.files[0]}))}/>
          </label>
        ))}
      </div>

      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
          <div className='flex-1 max-w-48'>
            <p className='text-gray-800 mt-4'>Room Type</p>
            <select onChange={(e)=> (setInput({...input , roomType: e.target.value}))} 
            className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full ' value={input.roomType}>
              <option value="">Select Room Type</option>
              <option value="">Single Bed</option>
              <option value="">Double Bed</option>
              <option value="">Luxury Room</option>
              <option value="">Family Suite</option>
            </select>
          </div>

          <div className='mt-4 text-gray-800'>
            <p>Price <span className='text-xs'>/night</span></p>
              <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' 
              value={input.pricePerNight} onChange={(e)=>(setInput({...input , pricePerNight:e.target.value}))}/>
          </div>
      </div>
      <p className='text-gray-800 mt-4'>Amenities</p>
      <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
        {Object.keys(input.amenities).map((amenity,index)=>(
          <div key={index}>
            <input type="checkbox" id={`amenities${index+1}`} checked={input.amenities[amenity]}
            onChange={()=> setInput({...input, amenities:{...input.amenities,[amenity]: !input.amenities[amenity]}})}/>
            <label htmlFor={`amenities${index+1}`}>{amenity}</label>
          </div>
        ))}
      </div>
    </form>
  )
}

export default AddRoom