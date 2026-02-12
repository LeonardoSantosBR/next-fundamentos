import { IBlogPost } from "../@types/blog-post-interface";

export default function usePosts() {
  const posts: IBlogPost[] = [
    {
      id: "2",
      title: "Comandos do Git que você precisa conhecer - Parte 1",
      slug: "comandos-git",
      description:
        "Domine o Git ao conhecer comandos e truques que facilitarão o seu trabalho.",
    },
    {
      id: "1",
      title: "10 Truques do NPM | Você conhece todos?",
      slug: "truques-npm",
      description: "Conheça simples truques que você pode fazer com o NPM.",
    },
  ];
  return { posts };
}
