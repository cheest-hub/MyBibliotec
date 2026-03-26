import { useState, useContext } from 'react';
import { LivrosContext, type Livro } from '../contexts/LivrosContext';
import { AvaliacaoEstrelas } from './AvaliacaoEstrelas';

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

    // Resetar campos após o envio
    setTitulo('');
    setAutor('');
    setStatus('quero ler');
    setAvaliacao(0); // Importante resetar as estrelas também!
  };

  return (
    /* Trocamos o style manual pela classe 'sidebar-form' ou apenas usamos o seletor da sidebar */
    <form onSubmit={handleSubmit} className="sidebar-form">
      <h3>Adicionar Novo Livro</h3>

      <div className="input-group">
        <label>Título</label>
        <input
          type="text"
          placeholder="Ex: O Alquimista"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label>Autor</label>
        <input
          type="text"
          placeholder="Ex: Paulo Coelho"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as Livro['status'])}>
          <option value="quero ler">Quero Ler</option>
          <option value="lendo">A Ler</option>
          <option value="concluído">Concluído</option>
        </select>
      </div>

      <div className="rating-container">
        <label>Sua Avaliação:</label>
        <AvaliacaoEstrelas nota={avaliacao} setNota={setAvaliacao} />
      </div>

      <button type="submit" className="btn-guardar">
        Guardar Livro
      </button>
    </form>
  );
}