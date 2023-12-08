import './App.css'

import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'

import Header from './components/core/Header/Header'
import Login from './components/user/Login/Login'
import Register from './components/user/Register/Register'
import Logout from './components/user/Logout/Logout'
import Create from './components/main/Create/Create'
import Catalog from './components/main/Catalog/Catalog'
import Details from './components/main/Details/Details'
import Profile from './components/user/Profile/Profile'
import Edit from './components/gig/Edit/Edit'
import Delete from './components/gig/Delete/Delete'
import Picture from './components/user/Picture/Picture'
import Email from './components/user/Email/Email'
import Home from './components/main/Home/Home'

function App() {

  return (
    <AuthProvider>
      <div>
        <Header></Header>

        <div className='body'>
          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />

            <Route path='/picture/:userId' element={<Picture />}/>
            <Route path='/email/:userId' element={<Email/>} />

            <Route path='/create' element={<Create />} />
            <Route path='/catalog' element={<Catalog />} />

            <Route path='/gig/:gigId' element={<Details/>}/>
            <Route path='/edit/:gigId' element={<Edit/>} />
            <Route path='/delete/:gigId' element={<Delete/>} />
          </Routes>
        </div>

      </div>
    </AuthProvider>
  )
}

export default App