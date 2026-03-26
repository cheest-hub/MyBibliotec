import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LivrosContext } from '../contexts/LivrosContext';

export function PaginaDetalhes() {
  const { id } = useParams();
  const { livros } = useContext(LivrosContext);

  // Procuramos o livro na lista global
  const livroEncontrado = livros.find((livro) => livro.id === Number(id));

  // Caso o ID não exista (ex: o usuário digitou errado na URL)
  if (!livroEncontrado) {
    return (
      <div className="empty-state">
        <h2>Livro não encontrado! 🕵️‍♂️</h2>
        <Link to="/livros" className="btn-detalhes">Voltar para a biblioteca</Link>
      </div>
    );
  }

  const estrelasVisuais = '★'.repeat(livroEncontrado.avaliacao) + '☆'.repeat(5 - livroEncontrado.avaliacao);

  return (
    <div className="main-content">
      <div className="detalhes-container">
        <Link to="/livros" className="back-link">← Voltar para a lista</Link>

        <header className="detalhes-header">
          <h1>{livroEncontrado.titulo}</h1>
          <p className="autor-nome">Por <strong>{livroEncontrado.autor}</strong></p>
        </header>

        <div className="detalhes-info-card">
          <div className="info-item">
            <strong>Status Atual:</strong>
            <span className={`status-badge ${livroEncontrado.status.replace(/\s+/g, '-')}`}>
              {livroEncontrado.status}
            </span>
          </div>

          <div className="info-item">
            <strong>Avaliação:</strong>
            <p className="stars-display">{estrelasVisuais}</p>
          </div>

          <div className="info-item footer-info">
            <small>ID de Registro: #{livroEncontrado.id}</small>
          </div>
        </div>
      </div>
    </div>
  );
}