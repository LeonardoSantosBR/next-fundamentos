import { IBlogPost } from "../@types/blog-post-interface";

export default function usePosts() {
  const posts: IBlogPost[] = [
    {
      id: "1",
      title: "10 Truques do NPM | Você conhece todos?",
      slug: "truques-npm",
      description: "Conheça simples truques que você pode fazer com o NPM.",
    },
    {
      id: "2",
      title: "Comandos do Git que você precisa conhecer - Parte 1",
      slug: "comandos-git",
      description:
        "Domine o Git ao conhecer comandos e truques que facilitarão o seu trabalho.",
    },
    {
      id: "3",
      title: "Flexbox vs Grid: Quando usar cada um?",
      slug: "flexbox-vs-grid",
      description: "Entenda definitivamente as diferenças e os melhores casos de uso para cada sistema de layout.",
    },
    {
      id: "4",
      title: "Clean Code: Escrevendo código para humanos",
      slug: "clean-code-dicas",
      description: "Dicas práticas de como manter seu código legível, sustentável e profissional.",
    },
    {
      id: "5",
      title: "TypeScript: Por que você deveria começar hoje",
      slug: "vantagens-typescript",
      description: "Veja como a tipagem estática pode salvar horas de debugging em projetos JavaScript.",
    },
    {
      id: "6",
      title: "O Guia Completo das Arrow Functions",
      slug: "guia-arrow-functions",
      description: "Descubra como o 'this' se comporta e como encurtar sua sintaxe no dia a dia.",
    },
    {
      id: "7",
      title: "Manipulação de Arrays: Map, Filter e Reduce",
      slug: "arrays-javascript",
      description: "Aprenda a manipular dados de forma funcional e elegante sem usar loops for.",
    },
    {
      id: "8",
      title: "Dark Mode em 5 minutos com CSS",
      slug: "dark-mode-css",
      description: "Aprenda a usar variáveis CSS e prefers-color-scheme para criar temas dinâmicos.",
    },
    {
      id: "9",
      title: "React Hooks: Além do useState",
      slug: "react-hooks-avancado",
      description: "Explore o useEffect, useContext e saiba quando criar seus próprios hooks customizados.",
    },
    {
      id: "10",
      title: "SQL vs NoSQL: Qual banco escolher?",
      slug: "sql-vs-nosql",
      description: "Uma comparação detalhada entre bancos relacionais e baseados em documentos.",
    },
    {
      id: "11",
      title: "Docker para Iniciantes: O que são containers?",
      slug: "docker-iniciantes",
      description: "Entenda o conceito de containerização e como ele resolve o famoso 'na minha máquina funciona'.",
    },
    {
      id: "12",
      title: "API RESTful: Melhores Práticas de Design",
      slug: "design-api-rest",
      description: "Como estruturar endpoints, usar verbos HTTP corretamente e retornar status codes adequados.",
    }
  ];
  return { posts };
}
