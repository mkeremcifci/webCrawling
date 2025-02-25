import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyForm from './components/MyForm.jsx'

import './App.css'
import 'antd/dist/reset.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyForm />
  </StrictMode>,
)
