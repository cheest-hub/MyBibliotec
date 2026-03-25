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
    <div className="main-content">
      <header className="page-header">
        <h1>A Minha Biblioteca</h1>
        <p>Explore sua coleção de livros</p>
      </header>

      {/* 4. Os Botões de Aba (Navegação dos Filtros) */}
      <div className="filter-tabs">
        <button
          className={filtroAtual === 'todos' ? 'active' : ''}
          onClick={() => setFiltroAtual('todos')}
        >
          Todos
        </button>
        <button
          className={filtroAtual === 'quero ler' ? 'active' : ''}
          onClick={() => setFiltroAtual('quero ler')}
        >
          Quero Ler
        </button>
        <button
          className={filtroAtual === 'lendo' ? 'active' : ''}
          onClick={() => setFiltroAtual('lendo')}
        >
          A Ler
        </button>
        <button
          className={filtroAtual === 'concluído' ? 'active' : ''}
          onClick={() => setFiltroAtual('concluído')}
        >
          Concluído
        </button>
      </div>

      {/* 5. Renderizamos apenas a lista filtrada */}
      <div className="books-grid">
        {livrosFiltrados.length === 0 ? (
          <p>Nenhum livro encontrado nesta categoria.</p>
        ) : (
          livrosFiltrados.map(livro => (
            <LivroCard
              key={livro.id}
              id={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              status={livro.status}
              avaliacao={livro.avaliacao} />
          ))
        )}
      </div>
    </div>
  );
}