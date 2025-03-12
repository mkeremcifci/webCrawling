import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route, Routes } from "react-router-dom";


import './App.css'
import 'antd/dist/reset.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Develop from './pages/Develop';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-results' element={<SearchResults />} />
        <Route path='/develop' element={<Develop />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
