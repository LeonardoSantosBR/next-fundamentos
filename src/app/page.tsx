import usePosts from "./data/hooks/use-posts";

export default function Home() {
  const { posts } = usePosts();
  return (
    <>
      <h1>Lista de posts</h1>
      {posts.map((post) => {
        return { post };
      })}
    </>
  );
}
