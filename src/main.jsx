import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RecipePageApp } from './RecipePageApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipePageApp />
  </StrictMode>,
)
