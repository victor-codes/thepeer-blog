import { ChangeEvent, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import ReactPaginate from "react-paginate";
// import { useQuery, useQueryClient } from "react-query";
import BlogPostItem from "../components/blogPostItem";
import Layout from "../components/layout";
import { getAllFilledPosts } from "../utils/wordpress";
import HeroPost from "../components/heroPost";
import { PostType } from "../types";
// import { useLocalStorage } from "../utils/hooks/uselocalstorage";

type HomeProps = {
  posts: PostType[];
};

export default function Home({ posts: data }: HomeProps) {
  const stickyPost = data && data[0];
  const nonStickyPosts = data && data.slice(1);

  const [startOffset, setStartOffset] = useState(0);
  const [entries, setEntries] = useState(3);

  // const [storedPage, setStoredPage] = useLocalStorage("currentPageNumber", 1);

  // pagination
  const pageCount = Math.ceil(nonStickyPosts.length / entries);
  const endOffset = entries + startOffset;

  const currentData = nonStickyPosts.slice(startOffset, endOffset);

  // Events
  type PaginateProps = {
    selected: number;
  };
  function handlePaginationClick(event: PaginateProps) {
    const offset = (event.selected * entries) % nonStickyPosts.length;
    setStartOffset(offset);
    // setStoredPage(offset);
  }

  function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
    const value = parseInt(event.target.value);
    setEntries(value);
  }

  return (
    <Layout>
      <Head>
        <title>Thepeer&#39;s Blog</title>
        <meta name="description" content="ThePeer's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog">
        <HeroPost post={stickyPost as PostType} />
        <section aria-labelledby="articles">
          <div className="blog__articles">
            <h2 id="articles" className="blog__articles__header">
              See more articles
            </h2>

            <div className="blog__articles__grid">
              {currentData &&
                currentData.map((post: object, index: number) => (
                  <BlogPostItem key={index} data={post as PostType} />
                ))}
            </div>

            <div className="pagination">
              <div className="pagination__entries">
                <p>Entries per page</p>
                <select
                  name="entries"
                  id="entries"
                  value={entries}
                  onChange={handleSelect}
                >
                  <option value="3">3</option>
                  <option value="6">6</option>
                  <option value="9">9</option>
                </select>
              </div>
              <ReactPaginate
                className="pagination__list"
                pageCount={pageCount}
                previousAriaLabel="Previous"
                nextAriaLabel="Next"
                previousLabel="<"
                nextLabel=">"
                onPageChange={handlePaginationClick}
                containerClassName="pagination__list_container"
                activeLinkClassName="pagination__list__item--active"
                pageLinkClassName="pagination__list__item"
                disabledClassName="pagination__list__disabled"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getAllFilledPosts({
    page: 1,
    per_page: 100,
  });

  return {
    props: {
      posts,
    },
  };
};
