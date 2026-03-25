import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LivrosContext } from '../contexts/LivrosContext';

export function PaginaDetalhes() {
  // 1. useParams extrai o ":id" que definimos lá no App.tsx nas nossas Rotas
  const { id } = useParams(); 
  const { livros } = useContext(LivrosContext);

  // 2. Procurar o livro. 
  // Nota importante: O URL é sempre texto (string), mas o nosso ID foi guardado como número. 
  // Por isso, usamos o Number(id) para garantir que a comparação funciona.
  const livroEncontrado = livros.find((livro) => livro.id === Number(id));

  // 3. Se o utilizador digitar um ID falso no navegador, mostramos um erro amigável
  if (!livroEncontrado) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Livro não encontrado! 🕵️‍♂️</h2>
        <Link to="/livros">Voltar para a biblioteca</Link>
      </div>
    );
  }

  // 4. Se encontrou, desenhamos a página com os detalhes
  const estrelasVisuais = '★'.repeat(livroEncontrado.avaliacao) + '☆'.repeat(5 - livroEncontrado.avaliacao);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Link to="/livros" style={{ textDecoration: 'none', color: '#007BFF' }}>← Voltar</Link>
      
      <h1 style={{ marginTop: '16px' }}>{livroEncontrado.titulo}</h1>
      <h3 style={{ color: '#666' }}>Por {livroEncontrado.autor}</h3>
      
      <div style={{ margin: '24px 0', padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '4px', color: '#333' }}>
        <p><strong>Status Atual:</strong> <span style={{ textTransform: 'capitalize' }}>{livroEncontrado.status}</span></p>
        <p style={{ fontSize: '24px', color: '#f5c518', margin: '8px 0' }}>{estrelasVisuais}</p>
        <p><strong>ID de Registo:</strong> {livroEncontrado.id}</p>
      </div>
    </div>
  );
}