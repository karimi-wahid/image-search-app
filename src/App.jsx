import React, { useEffect, useState } from 'react'
import ImageList from './components/ImageList'
import axios from 'axios';
import Pagination from './components/Pagination';
import Header from './components/Header';


function App() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [inputData, setInputData] = useState('nature')

  const Api = `https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputData.toLowerCase()}&client_id=${import.meta.env.VITE_API_KEY}`;

  const getImages = async () => {
    const res = await axios.get(Api);
    setData(res.data.results)
  }

  useEffect(() => {
    getImages()
  }, [inputData, pageNo])

  return (
    <div className='w-full grid place-items-center p-5'>
      <Header setInputData={setInputData} />
      <ImageList data={data} />
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  )
}

export default App
