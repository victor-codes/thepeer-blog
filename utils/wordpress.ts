import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_API;
const BASE_URL = "https://techcrunch.com/wp-json/wp/v2";

const $axios = axios.create({
  baseURL: BASE_URL,
});

export async function getAllPosts({ page = 1, per_page = 10 }) {
  return await $axios.get(`/posts?&page=${page}&per_page=${per_page}`);
}

export async function getAllFilledPosts({ page = 1, per_page = 10 }) {
  const { data: allPosts } = await getAllPosts({ page, per_page });

  const parsedPost = [];

  for (const post of allPosts) {
    const { data: media } = await getMediaById(post.featured_media);
    const { data: author } = await getAuthorDetails(post.author);

    parsedPost.push({
      title: post?.title,
      slug: post?.slug,
      date: post?.date,
      excerpt: post?.excerpt,
      content: post?.content,
      parselyMeta: post?.parselyMeta,
      featuredMedia: { alt_text: media.alt_text, source_url: media.source_url },
      authorData: author,
    });
  }

  return parsedPost;
}

export async function getMediaById(id: string) {
  return $axios.get(`/media/${id}`);
}

export async function getAuthorDetails(id: string) {
  return $axios.get(`/users/${id}`);
}

export async function getSinglePost(slug: string) {
  const { data: allPosts } = await getAllPosts({ per_page: 100 });

  const parsedPost = [];

  const filteredPost = allPosts.filter((post: any) => {
    if (post.slug === slug) return post;
  });

  const { data: media } = await getMediaById(filteredPost[0].featured_media);
  const { data: author } = await getAuthorDetails(filteredPost[0].author);

  parsedPost.push({
    title: filteredPost[0]?.title,
    slug: filteredPost[0]?.slug,
    date: filteredPost[0]?.date,
    excerpt: filteredPost[0]?.excerpt,
    content: filteredPost[0]?.content,
    parselyMeta: filteredPost[0]?.parselyMeta,
    featuredMedia: { alt_text: media?.alt_text, source_url: media?.source_url },
    authorData: author,
  });

  return parsedPost[0];
}
