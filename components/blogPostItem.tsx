import Image from "next/image";
import Link from "next/link";
import { GetStaticProps } from "next";
import React from "react";
import { formatDate, formatDescription, readingTime } from "../utils";
import BlogDetails from "./blogDetails";

interface BlogPostItemProps {
  data?: object;
}

function BlogPostItem({ data }: BlogPostItemProps) {
  const readTime = readingTime(data.content.rendered);
  const formattedDate = formatDate(data.date);

  console.log(data);

  return (
    <Link href={`/blog/${data.slug}`}>
      <article>
        <figure className="post__card__media">
          <Image
            src={data.featuredMedia.source_url}
            alt={data.featuredMedia.alt_text}
            width={500}
            height={500}
            className="post__card__media__image"
          />
        </figure>

        <div className="post__card__details">
          <h3 className="post__card__title">
            {formatDescription(data?.title?.rendered)}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered }}
            className="post__card__excerpt"
          />
        </div>

        <BlogDetails
          author={data.authorData}
          time={readTime}
          date={formattedDate}
        />
      </article>
    </Link>
  );
}

export default BlogPostItem;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = params.data;

  return {
    props: {
      title: post.title.rendered,
      post,
    },
  };
};
