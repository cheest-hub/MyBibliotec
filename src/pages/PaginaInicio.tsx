import { useContext } from 'react';
import { LivrosContext } from '../contexts/LivrosContext';
import { FormNovoLivro } from '../components/FormNovoLivro';
import { LivroCard } from '../components/LivroCard';

export function PaginaInicio() {
  const { livros } = useContext(LivrosContext);

  // Lógica do Resumo: Filtramos a lista e contamos quantos sobram (.length)
  const qtdQueroLer = livros.filter(livro => livro.status === 'quero ler').length;
  const qtdLendo = livros.filter(livro => livro.status === 'lendo').length;
  const qtdConcluido = livros.filter(livro => livro.status === 'concluído').length;

  return (
    <div>
      <h1>Dashboard Principal</h1>
      
      {/* --- INÍCIO DO COMPONENTE DE RESUMO --- */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        <div style={{ padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px', flex: 1, textAlign: 'center', color: '#0d47a1' }}>
          <h2>{qtdQueroLer}</h2>
          <p>Quero Ler</p>
        </div>
        <div style={{ padding: '16px', backgroundColor: '#fff3e0', borderRadius: '8px', flex: 1, textAlign: 'center', color: '#e65100' }}>
          <h2>{qtdLendo}</h2>
          <p>A Ler</p>
        </div>
        <div style={{ padding: '16px', backgroundColor: '#e8f5e9', borderRadius: '8px', flex: 1, textAlign: 'center', color: '#1b5e20' }}>
          <h2>{qtdConcluido}</h2>
          <p>Concluídos</p>
        </div>
      </div>
      {/* --- FIM DO COMPONENTE DE RESUMO --- */}

      <FormNovoLivro />

      <div style={{ marginTop: '32px' }}>
        <h3>Adicionados Recentemente</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {livros.map(livro => (
            <LivroCard 
              key={livro.id}
              id={livro.id} // <- Adicionámos o ID aqui para o botão do cartão funcionar!
              titulo={livro.titulo}
              autor={livro.autor}
              status={livro.status}
              avaliacao={livro.avaliacao}
            />
          ))}
        </div>
      </div>
    </div>
  );
}