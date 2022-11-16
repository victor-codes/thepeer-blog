import axios from "axios";

const BASE_URL = "https://techcrunch.com/wp-json/wp/v2";

const $axios = axios.create({
  baseURL: BASE_URL,
});

export async function getAllPosts() {
  return await $axios.get("/posts?&page=1&per_page=15");
}

export async function getAllFilledPosts() {
  const { data: allPosts, headers } = await getAllPosts();

  const filledPost = [];

  for (const post of allPosts) {
    const { data: media } = await getMediaById(post.featured_media);
    const { data: author } = await getAuthorDetails(post.author);

    console.log(post);

    filledPost.push({
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

  return { filledPost, headers: JSON.stringify(headers) };
}

export async function getMediaById(id: string) {
  return $axios.get(`/media/${id}`);
}

export async function getAuthorDetails(id: string) {
  return $axios.get(`/users/${id}`);
}

export async function getSinglePost(slug: string) {
  const { data: allPosts } = await getAllPosts();
  const filledPost = [];

  for (const post of allPosts) {
    const { data: media } = await getMediaById(post.featured_media);
    const { data: author } = await getAuthorDetails(post.author);

    filledPost.push({ ...post, featuredMedia: media, authorData: author });
  }

  const post = filledPost.filter((post) => {
    if (post.slug === slug) return post;
  });

  return post[0];
}

// https://techcrunch.com/wp-json/wp/v2/posts?&page=2&per_page=3
