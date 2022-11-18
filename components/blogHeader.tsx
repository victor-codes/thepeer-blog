import Image from "next/image";
import React from "react";
import { formatDate } from "../utils";
import BlogDetails from "./blogDetails";

type BlogHeaderProps = {
  post?: any;
  readTime: string;
};

function BlogHeader({ post, readTime }: BlogHeaderProps) {
  const formattedDate = formatDate(post.date);

  return (
    <header>
      <div className="post__header">
        <h1
          className="post__header__title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p
          className="post__header__excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <BlogDetails
          author={post.authorData}
          time={readTime}
          date={formattedDate}
        />
      </div>

      <figure className="post__featured__media">
        {post.featuredMedia.source_url && (
          <Image
            src={post.featuredMedia.source_url}
            alt={`${post.featuredMedia.alt_text ?? "featured image"}`}
            width={1500}
            height={1000}
            className="post__featured__media__image"
          />
        )}
        <figcaption className="post__featured__media__caption">
          {post.featuredMedia.alt_text}
        </figcaption>
      </figure>
    </header>
  );
}

export default BlogHeader;
