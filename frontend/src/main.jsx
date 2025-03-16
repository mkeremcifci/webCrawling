import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route, Routes } from "react-router-dom";


import './App.css'
import 'antd/dist/reset.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import MainLayout from './pages/Layout';
import About from './pages/About';
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/search-results' element={<SearchResults />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
