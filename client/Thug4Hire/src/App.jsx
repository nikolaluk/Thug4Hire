import './App.css'

import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'

import Header from './components/core/Header/Header'
import Login from './components/user/Login/Login'
import Register from './components/user/Register/Register'
import Logout from './components/user/Logout/Logout'
import Create from './components/main/Create/Create'
import Catalog from './components/main/Catalog/Catalog'

function App() {

  return (
    <AuthProvider>
      <div>
        <Header></Header>

        <div className='body'>
          <Routes>
            <Route path='/' />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />

            <Route path='/create' element={<Create />} />
            <Route path='/catalog' element={<Catalog />} />

            <Route></Route>
          </Routes>
        </div>

      </div>
    </AuthProvider>
  )
}

export default App