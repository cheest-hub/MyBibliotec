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
    <div style={{ border: '1px solid var(--border)', padding: '16px', borderRadius: '8px', minWidth: '200px', display: 'flex', flexDirection: 'column' }}>
      <h3>{titulo}</h3>
      <p><strong>Autor:</strong> {autor}</p>
      <p><strong>Status:</strong> <span style={{ textTransform: 'capitalize' }}>{status}</span></p>
      <p style={{ color: '#f5c518', fontSize: '24px', margin: '8px 0' }}>{estrelasVisuais}</p>
      
      <Link 
        to={`/livro/${id}`} 
        style={{ marginTop: 'auto', textAlign: 'center', padding: '8px', backgroundColor: '#eee', borderRadius: '4px', textDecoration: 'none', color: '#333' }}
      >
        Ver Detalhes
      </Link>
    </div>
  );
}