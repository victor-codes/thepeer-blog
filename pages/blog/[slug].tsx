import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import BlogHeader from "../../components/blogHeader";
import Layout from "../../components/layout";
import { getAllPosts, getSinglePost } from "../../utils/wordpress";
import { formatDescription, readingTime } from "../../utils";

interface BlogPostProps {
  post: any;
}

function BlogPost({ post }: BlogPostProps) {
  const readTime = readingTime(post?.content?.rendered);
  const fullTitle = `${formatDescription(
    post.parselyMeta["parsely-title"]
  )} | Thepeer's Blog`;

  const canonicalLink = `https://thepeer-blog.netlify.app/${post.slug}`;
  const description = formatDescription(post.excerpt.rendered);

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="image" content={post.featuredMedia.source_url} />
        <link rel="canonical" href={canonicalLink} />
        <meta name="og:type" property="og:type" content="article" />

        <meta property="og:title" content={fullTitle} />
        <meta name="og:image" content={post.featuredMedia.source_url} />
        <meta name="og:description" content={description} />
        <meta
          name="twitter:label1"
          property="twitter:label1"
          content="Written by"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={post.featuredMedia.source_url} />
        <meta
          name="twitter:data1"
          property="twitter:data1"
          content={post.authorData.name}
        />
        <meta
          name="twitter:label2"
          property="twitter:label2"
          content="Est. reading time"
        />
        <meta
          name="twitter:data2"
          property="twitter:data2"
          content={readTime}
        />
      </Head>
      <Layout>
        <article className="post">
          <BlogHeader post={post} readTime={readTime} />
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
  const slug = params?.slug as string;
  const post = await getSinglePost(slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const posts = await getAllPosts({ per_page: 100 }).then((res) => res.data);

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: `${post?.slug}`,
        },
      };
    }),
    fallback: false,
  };
};
