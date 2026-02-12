import { IBlogPost } from "@/app/data/@types/blog-post-interface";
import Link from "next/link";
import "./post-lists.css"

export default function PostList({ posts }: { posts: IBlogPost[] }) {
  return (
    <ul className="postList">
      {posts.map((post) => {
        return <PostListItem key={post.id} post={post} />;
      })}
    </ul>
  );
}

export function PostListItem({ post }: { post: IBlogPost }) {
  return (
    <li className="postListItem">
      <Link href={`posts/${post.slug}`}>
        <h2 className="postTitle">{post.title}</h2>
      </Link>
      <p>{post.description}</p>
    </li>
  );
}
