import { Link } from 'react-router-dom';

interface LivroProps {
  id: number;
  titulo: string;
  autor: string;
  status: string;
  avaliacao: number;
}

export function LivroCard({ id, titulo, autor, status, avaliacao }: LivroProps) {
  const estrelasVisuais = '★'.repeat(avaliacao) + '☆'.repeat(5 - avaliacao);

  return (
    <div className="livro-card">
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