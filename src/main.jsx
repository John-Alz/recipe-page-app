import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RecipePageApp } from './RecipePageApp.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecipePageApp />
    </BrowserRouter>
  </StrictMode>,
)
