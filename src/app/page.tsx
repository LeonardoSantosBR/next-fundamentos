import usePosts from "./data/hooks/use-posts";
import PostList from "./ui/components/post-lists/post-lists";

export default function Home() {
  const { posts } = usePosts();
  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}
