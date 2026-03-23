import { Routes, Route, Link } from 'react-router-dom'
import { PaginaInicio } from './pages/PaginaInicio'
import { PaginaLivros } from './pages/PaginaLivros'
import { PaginaDetalhes } from './pages/PaginaDetalhes'
import { PaginaNaoEncontrada } from './pages/PaginaNaoEncontrada'
import './App.css'

function App() {
  return (
    <>
      {/* Menu de Navegação Global */}
      <nav style={{ padding: '16px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '16px' }}>Dashboard</Link>
        <Link to="/livros">Meus Livros</Link>
      </nav>

      {/* Controlador de Tráfego (Rotas) */}
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/livros" element={<PaginaLivros />} />
        <Route path="/livro/:id" element={<PaginaDetalhes />} />
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </>
  )
}

export default App