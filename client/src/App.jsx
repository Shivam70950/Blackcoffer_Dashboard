import { useEffect, useState } from 'react'
import './App.css'
import Left from './components/leftpane/Left'
import Right from './components/rightpane/RightD'
import axios from 'axios'


function App() {
  const [title,setTitle] = useState()
  const[loading,setLoading] = useState(false)
  const setName = async() => {
    setLoading(true)
    const data1 = await axios.get(`${import.meta.env.VITE_SERVER_URL}/getAllData`)
    setTitle(data1?.data?.data[0]?.title)
    setLoading(false)
  }

  useEffect(() => {
    setName()
  },[])
  return (
    <div className='container'>
   <Left/>
   <Right title={title} loading={loading}/>
    </div>
  )
}

export default App
