interface AvaliacaoProps {
  nota: number;
  setNota: (nota: number) => void;
}

export function AvaliacaoEstrelas({ nota, setNota }: AvaliacaoProps) {
  const valoresEstrelas = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'flex', gap: '1px', alignItems: 'center' }}>
      <label>Avaliação:</label>
      {valoresEstrelas.map((valor) => (
        <button
          key={valor}
          type="button"
          onClick={() => setNota(valor)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}
        >
          {valor <= nota ? '★' : '☆'}
        </button>
      ))}
    </div>
  );
}