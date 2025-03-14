import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route, Routes } from "react-router-dom";


import './App.css'
import 'antd/dist/reset.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import MainLayout from './pages/Layout';
import About from './pages/About';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/search-results' element={<SearchResults />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
