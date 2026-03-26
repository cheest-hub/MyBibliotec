import { useContext } from 'react';
import { LivrosContext } from '../contexts/LivrosContext';
import { FormNovoLivro } from '../components/FormNovoLivro';
import { LivroCard } from '../components/LivroCard';

export function PaginaInicio() {
  const { livros } = useContext(LivrosContext);

  // Lógica do Resumo: Filtramos a lista e contamos quantos sobram
  const qtdQueroLer = livros.filter(livro => livro.status === 'quero ler').length;
  const qtdLendo = livros.filter(livro => livro.status === 'lendo').length;
  const qtdConcluido = livros.filter(livro => livro.status === 'concluído').length;

  return (
    <div className="main-content">
      <header>
        <h1>Dashboard Principal</h1>
      </header>

      {/* 1. SEÇÃO DE ESTATÍSTICAS (Cards de cima) */}
      <section className="stats-grid">
        <div className="stat-card">
          <h3>Quero Ler</h3>
          <p>{qtdQueroLer}</p>
        </div>
        <div className="stat-card">
          <h3>A Ler</h3>
          <p>{qtdLendo}</p>
        </div>
        <div className="stat-card">
          <h3>Concluídos</h3>
          <p>{qtdConcluido}</p>
        </div>
      </section>
      <div>
        <h2>Livros Adicionados</h2>
      </div>
      {/* 2. LAYOUT DE COLUNAS (Sidebar + Lista) */}
      <div className="dashboard-layout" style={{ margin: '0', padding: '0' }}>
        {/* COLUNA DA ESQUERDA: FORMULÁRIO */}
        <aside className="sidebar">
          <FormNovoLivro />
        </aside>

        {/* COLUNA DA DIREITA: LISTA DE LIVROS */}
        <main className="main-content" style={{ gap: '10px' }}>
          <div className="books-grid">
            {livros.length === 0 ? (
              <p className="empty-state">Comece adicionando um livro ao lado!</p>
            ) : (
              livros.map(livro => (
                <LivroCard
                  key={livro.id}
                  id={livro.id}
                  titulo={livro.titulo}
                  autor={livro.autor}
                  status={livro.status}
                  avaliacao={livro.avaliacao}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}