import usePosts from "@/app/data/hooks/use-posts";

export default async function Post({ params }: { params: { slug: string } }) {
  const { posts } = usePosts();
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h1>Post não encontrado</h1>;
  }
  return (
    <>
      <h1>{post.title}</h1>
      <h1>{post.description}</h1>
    </>
  );
}
