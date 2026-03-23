import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LivrosProvider } from './contexts/LivrosContext' // 1. Importamos o Provider
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* 2. Colocamos o LivrosProvider a envolver a nossa App */}
      <LivrosProvider> 
        <App />
      </LivrosProvider>
    </BrowserRouter>
  </StrictMode>,
)