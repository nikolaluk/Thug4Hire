import './App.css'

import { Routes, Route } from 'react-router-dom'

import Header from './components/core/Header/Header'
import Login from './components/user/Login/Login'
import Register from './components/user/Register/Register'

function App() {

  return (
    <div>
      <Header></Header>

      <div className='body'>
        <Routes>
          <Route path='/'/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App