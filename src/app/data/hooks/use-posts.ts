import { IBlogPost } from "../@types/blog-post-interface";

export default function usePosts() {
  const posts: IBlogPost[] = [];
  return { posts };
}
