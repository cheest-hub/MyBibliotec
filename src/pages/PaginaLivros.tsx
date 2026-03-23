import { useState, useContext } from 'react';
import { LivrosContext } from '../contexts/LivrosContext';
import { LivroCard } from '../components/LivroCard';

export function PaginaLivros() {
  // 1. Puxamos a lista completa do nosso cofre global
  const { livros } = useContext(LivrosContext);
  
  // 2. Criamos uma "memória local" para saber qual aba está ativa neste momento
  const [filtroAtual, setFiltroAtual] = useState<string>('todos');

  // 3. A Mágica do Filtro: Criamos uma nova lista baseada na aba selecionada
  const livrosFiltrados = livros.filter((livro) => {
    if (filtroAtual === 'todos') {
      return true; // Se for 'todos', mantém o livro na lista
    }
    return livro.status === filtroAtual; // Senão, só mantém se o status bater com o filtro
  });

  return (
    <div>
      <h1>A Minha Biblioteca</h1>

      {/* 4. Os Botões de Aba (Navegação dos Filtros) */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button 
          onClick={() => setFiltroAtual('todos')}
          style={{ fontWeight: filtroAtual === 'todos' ? 'bold' : 'normal' }}
        >
          Todos
        </button>
        <button 
          onClick={() => setFiltroAtual('quero ler')}
          style={{ fontWeight: filtroAtual === 'quero ler' ? 'bold' : 'normal' }}
        >
          Quero Ler
        </button>
        <button 
          onClick={() => setFiltroAtual('lendo')}
          style={{ fontWeight: filtroAtual === 'lendo' ? 'bold' : 'normal' }}
        >
          A Ler
        </button>
        <button 
          onClick={() => setFiltroAtual('concluído')}
          style={{ fontWeight: filtroAtual === 'concluído' ? 'bold' : 'normal' }}
        >
          Concluído
        </button>
      </div>

      {/* 5. Renderizamos apenas a lista filtrada */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {livrosFiltrados.length === 0 ? (
          <p>Nenhum livro encontrado nesta categoria.</p>
        ) : (
          livrosFiltrados.map(livro => (
            <LivroCard 
              key={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              status={livro.status}
              avaliacao={livro.avaliacao} id={0}            />
          ))
        )}
      </div>
    </div>
  );
}