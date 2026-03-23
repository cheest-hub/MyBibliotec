import { createContext, useState, useEffect } from "react";

export const LivroContext = createContext();

export const LivrosProvider = ({ children }) => {
    //inicializamos o estado tentando buscar no localstorage, se não existir começa com array vazio
    const [livros, setLivros] = useState(() => {
        const dados = localStorage.getItem('livros');
        return dados ? JSON.parse(dados) : [];
    });

    //usseEfect para salvar os livros no localstorage sempre que o estado mudar
    useEffect(() => {
        localStorage.setItem('livros', JSON.stringify(livros));
    }, [livros]);

    // finção para adicionar livros 
    const adcionarLivros = (livro) => {
        setLivros(prevLivros => [...prevLivros, livro]);
    };

    //funçao para atualizar o status (o "Diferencial" do projeto)
    const atualizarStatus = (id, novoStatus) => {
        const ListaAtualizada = livros.map(livro =>
            livro.id === id ? { ...livro, status: novoStatus } : livro
        );
        setLivros(ListaAtualizada);
    };

    return (
        <LivroContext.Provider value={{ livros, adcionarLivros, atualizarStatus }}>
            {children}
        </LivroContext.Provider>
    );

};