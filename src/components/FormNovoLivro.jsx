import { useState, useContext } from "react";
import { LivroContext } from "../contexts/LivroContext";

export default function FormNovoLivro() {
    const { adicionarLivro } = useContext(LivroContext);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [status, setStatus] = useState('');
    const [avaliacao, setAvaliacao] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        adicionarLivro({ titulo, autor, status, avaliacao });
        setTitulo("");
        setAutor("");
        setStatus("");
        setAvaliacao(0);

        const handleStatusChange = (e) => {
            e.preventDefault();

            const novoLivo = {
                id: Date.now(), // gera um id único para cada livro 
                titulo,
                autor,
                status,
                avaliacao: Number(avaliacao) // converte a avaliação para número

            };

            adicionarLivro(novoLivo);
            setTitulo("");
            setAutor("");
            setStatus("");
            setAvaliacao(1);
        };
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <input type="text" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
            <input type="text" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} />
            <input type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
            <input type="text" placeholder="Capa" value={capa} onChange={(e) => setCapa(e.target.value)} />
            <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            <input type="number" placeholder="Avaliação" value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    );
}