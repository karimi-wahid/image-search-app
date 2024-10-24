import React from 'react'

const ImageCard = ({ data }) => {
  return (
    <>
      {
        data.map((curImage, index) => (
          <div key={index} className='w-full lg:w-[250px] h-[350px] relative hover:scale-105 hover:shadow-md shadow-slate-700'>
            <img src={curImage.urls.regular} className='w-full h-full object-cover rounded-md mb-2' alt={curImage.description} />
            <a
              href={curImage.urls.raw}
              className='px-3 py-2 bg-[#55c2da] rounded-md text-white font-semibold absolute right-1 bottom-1 z-50'
              target='_blank'
            >DownLoad</a>
          </div>
        ))}
    </>
  )
}

export default ImageCard