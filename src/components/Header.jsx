import React from 'react'

const Header = ({setInputData}) => {

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  return (
    <div className='mb-5 flex w-full justify-center items-center gap-3 pb-3'>
      <h1 className='text-xl md:text-3xl font-semibold mb-3'>Image Search App</h1>
      
      <input
        className='w-[50%] md:w-[30%] outline-none border border-blue-600 py-3 px-2 rounded-md'
        type="text" placeholder='Search your image here...'
        onChange={handleInputChange} />
    </div>
  )
}

export default Header