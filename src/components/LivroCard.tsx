import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LivrosContext } from '../contexts/LivrosContext';

interface LivroProps {
  id: number;
  titulo: string;
  autor: string;
  status: string;
  avaliacao: number;
}

export function LivroCard({ id, titulo, autor, status, avaliacao }: LivroProps) {
  // 1. Puxamos a função de excluir do contexto
  const { excluirLivro } = useContext(LivrosContext);

  const estrelasVisuais = '★'.repeat(avaliacao) + '☆'.repeat(5 - avaliacao);

  // 2. Criamos uma função simples para confirmar antes de apagar
  const confirmarExclusao = () => {
    if (window.confirm(`Tem certeza que deseja excluir o livro "${titulo}"?`)) {
      excluirLivro(id);
    }
  };

  return (
    <div className="livro-card" style={{ position: 'relative' }}>
      {/* 3. Botão de Eliminar (X) */}
      <button
        className="btn-excluir"
        onClick={confirmarExclusao}
        title="Eliminar livro"
      >
        ×
      </button>

      <h3>{titulo}</h3>
      <p className="autor-text"><strong>Autor:</strong> {autor}</p>

      <div className="status-badge">
        <p><strong>Status:</strong></p>
        <span className={`status-text ${status.replace(/\s+/g, '-')}`}>
          {status}
        </span>
      </div>

      <div className="stars-container">
        {estrelasVisuais}
      </div>

      <Link to={`/livro/${id}`} className="btn-detalhes">
        Ver Detalhes
      </Link>
    </div>
  );
}