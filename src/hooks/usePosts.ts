import { useMemo } from "react";

export const useSortedPosts = (posts: object[], selectedSort: string) => {
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a: any, b: any) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);
  return sortedPosts;
};

export const usePosts = (
  posts: object[],
  selectedSort: string,
  searchQuery: string
) => {
  const sortedPosts = useSortedPosts(posts, selectedSort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post: any) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  return sortedAndSearchedPosts
};
