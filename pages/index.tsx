import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useQuery, useQueryClient } from "react-query";
import BlogPostItem from "../components/blogPostItem";
import Layout from "../components/layout";
import { getAllFilledPosts } from "../utils/wordpress";
import HeroPost from "../components/heroPost";
import { HomeType, PostType } from "../types";

type HomeProps = {
  posts: HomeType[];
};

export default function Home({ posts }: HomeProps) {
  const [page, setPage] = useState(1);

  const queryClient = useQueryClient();

  const { isLoading, data, isFetching } = useQuery(
    ["posts", page],
    ({}) => fetchData(page),
    {
      keepPreviousData: true,
      initialData: posts,
    }
  );

  async function fetchData(page = 1) {
    return await getAllFilledPosts({
      page: Number(page),
      per_page: 10,
    });
  }

  const stickyPost = data && data[0];
  const nonStickyPosts = data && data.slice(1);

  // Events
  function handleLoadMore() {
    if (isFetching) {
      queryClient.cancelQueries("posts");
    }
    if (page <= 10) {
      setPage((page) => page + 1);
    }
  }
  function handleLoadPrevious() {
    if (isFetching) {
      queryClient.cancelQueries("posts");
    }
    if (page > 1) {
      setPage((page) => page - 1);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Thepeer&#39;s Blog</title>
        <meta name="description" content="ThePeer's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog">
        {isLoading ? (
          <div className="blog__articles__loading loading__hero">
            Fetching article
          </div>
        ) : (
          <HeroPost post={stickyPost as PostType} />
        )}
        <section aria-labelledby="articles">
          <div className="blog__articles">
            <h2 id="articles" className="blog__articles__header">
              See more articles
            </h2>

            {isLoading ? (
              <div className="blog__articles__loading">
                Fetching articles...
              </div>
            ) : (
              <div
                className={`blog__articles__grid ${
                  isFetching && "blog__articles__grid--loading"
                }`}
              >
                {nonStickyPosts &&
                  nonStickyPosts.map((post: object, index: number) => (
                    <BlogPostItem key={index} data={post as PostType} />
                  ))}
              </div>
            )}

            <div className="pagination">
              <div className="pagination__entries">
                <button
                  aria-label="load previous posts"
                  disabled={page === 1}
                  onClick={handleLoadPrevious}
                >
                  Previous
                </button>
                <button aria-label="load next posts" onClick={handleLoadMore}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilledPosts({ per_page: 10 });

  return {
    props: {
      posts,
    },
  };
};
