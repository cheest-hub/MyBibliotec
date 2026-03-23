import { AvaliacaoEstrelas } from './AvaliacaoEstrelas';
import { useState, useContext } from 'react';
import { LivrosContext, type Livro } from '../contexts/LivrosContext';

export function FormNovoLivro() {
  const { adicionarLivro } = useContext(LivrosContext);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [status, setStatus] = useState<Livro['status']>('quero ler');
  
  const [avaliacao, setAvaliacao] = useState(0);

  const handleSubmit = (evento: React.FormEvent) => {
    evento.preventDefault();

    if (titulo.trim() === '' || autor.trim() === '') return;

    adicionarLivro({
      id: Date.now(),
      titulo,
      autor,
      status,
      avaliacao
    });

    setTitulo('');
    setAutor('');
    setStatus('quero ler');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px', margin: '20px 0', padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Adicionar Novo Livro</h3>
      
      <input 
        type="text" 
        placeholder="Título do livro" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        required
      />
      
      <input 
        type="text" 
        placeholder="Autor" 
        value={autor} 
        onChange={(e) => setAutor(e.target.value)} 
        required
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value as Livro['status'])}>
        <option value="quero ler">Quero Ler</option>
        <option value="lendo">A Ler</option>
        <option value="concluído">Concluído</option>
      </select>

<select value={status} onChange={(e) => setStatus(e.target.value as Livro['status'])}>
        <option value="quero ler">Quero Ler</option>
        <option value="lendo">A Ler</option>
        <option value="concluído">Concluído</option>
      </select>

      <AvaliacaoEstrelas nota={avaliacao} setNota={setAvaliacao} />

      <button type="submit">Guardar Livro</button>
    </form>
  );
}