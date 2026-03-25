interface BarraPesquisaProps {
  termoPesquisa: string;
  setTermoPesquisa: (texto: string) => void; 
}

export function BarraPesquisa({ termoPesquisa, setTermoPesquisa }: BarraPesquisaProps) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite o nome do livro..." 
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
      />
    </div>
  );
}