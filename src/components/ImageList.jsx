import React from 'react'
import ImageCard from './ImageCard'

const ImageList = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-5'>
      <ImageCard data={data} />
    </div>
  )
}

export default ImageList