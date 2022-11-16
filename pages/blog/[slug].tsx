import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import BlogHeader from "../../components/blogHeader";
import Layout from "../../components/layout";
import { getAllPosts, getSinglePost } from "../../utils/wordpress";
import { formatDescription } from "../../utils";

interface BlogPostProps {
  post: object;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{formatDescription(post.parselyMeta["parsely-title"])}</title>
      </Head>
      <Layout>
        <article className="post">
          <BlogHeader post={post} />
          <div
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </article>
      </Layout>
    </>
  );
}

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug;
  const post = await getSinglePost(slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const posts = await getAllPosts().then((res) => res.data);

  return {
    paths: posts.map((post: object) => {
      return {
        params: {
          slug: `${post.slug}`,
        },
      };
    }),
    fallback: false,
  };
};
