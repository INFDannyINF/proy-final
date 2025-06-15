import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import Principal from './Principal.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal></Principal>

  </BrowserRouter>,
)
