import './App.css'
import Left from './components/leftpane/Left'
import Right from './components/rightpane/RightD'
import axios from 'axios'


function App() {
  const data1 = axios.get(`${import.meta.env.VITE_SERVER_URL}`).then((data)=>{
    console.log(data)
  })


  return (
    <div className='container'>
   <Left/>
   <Right/>
    </div>
  )
}

export default App
