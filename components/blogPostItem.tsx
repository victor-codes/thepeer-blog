import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate, readingTime } from "../utils";
import BlogDetails from "./blogDetails";

type BlogPostItemProps = {
  data?: any;
};

function BlogPostItem({ data }: BlogPostItemProps) {
  const readTime = readingTime(data.content.rendered);
  const formattedDate = formatDate(data.date);

  return (
    <Link href={`/blog/${data.slug}`} passHref className="post__card">
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
          <h3
            className="post__card__title"
            dangerouslySetInnerHTML={{ __html: data.title.rendered }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
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
