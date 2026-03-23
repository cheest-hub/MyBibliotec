import { createContext, useState, useEffect, type ReactNode } from 'react';

export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  status: 'quero ler' | 'lendo' | 'concluído';
  avaliacao: number;
}

interface LivrosContextData {
  livros: Livro[];
  adicionarLivro: (livro: Livro) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const LivrosContext = createContext<LivrosContextData>({} as LivrosContextData);

export function LivrosProvider({ children }: { children: ReactNode }) {
  // 2. LER DO DISCO: Carregamos a lista de livros do localStorage quando o componente é montado
  const [livros, setLivros] = useState<Livro[]>(() => {
    const livrosGuardados = localStorage.getItem('@MyBibliotec:livros');
    
    // Se encontrou dados antigos, transforma de texto para código (JSON.parse)
    if (livrosGuardados) {
      return JSON.parse(livrosGuardados);
    }
    
    // Se for a primeira vez do utilizador, começa com uma lista vazia
    return [];
  });

  // 3. GRAVAR NO DISCO: Salvamos sempre que a lista for alterada
  useEffect(() => {
    // O localStorage só aceita texto, então transformamos a lista em texto (JSON.stringify)
    localStorage.setItem('@MyBibliotec:livros', JSON.stringify(livros));
  }, [livros]); // <- Este array diz ao React: "Só executa isto quando a variável 'livros' mudar"

  const adicionarLivro = (novoLivro: Livro) => {
    setLivros((livrosAnteriores) => [...livrosAnteriores, novoLivro]);
  };

  return (
    <LivrosContext.Provider value={{ livros, adicionarLivro }}>
      {children}
    </LivrosContext.Provider>
  );
}