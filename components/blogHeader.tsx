import Image from "next/image";
import React from "react";
import { formatDate, formatDescription, readingTime } from "../utils";
import { getMediaById } from "../utils/wordpress";
import BlogDetails from "./blogDetails";

interface BlogHeaderProps {
  post: object;
}

function BlogHeader({ post }: BlogHeaderProps) {
  const readTime = readingTime(post.content.rendered);
  const formattedDate = formatDate(post.date);

  return (
    <header>
      <div className="post__header">
        <h1 className="post__header__title">
          {formatDescription(post.title.rendered)}
        </h1>
        <p className="post__header__excerpt">
          {formatDescription(post.excerpt.rendered.replace(/<[^>]+>/g, ""))}
        </p>
        <BlogDetails
          author={post.authorData}
          time={readTime}
          date={formattedDate}
        />
      </div>

      <figure className="post__featured__media">
        {post.featuredMedia.guid?.rendered && (
          <Image
            src={post.featuredMedia.guid?.rendered}
            alt={`${post.featuredMedia.alt_text ?? "featured image"}`}
            width={1000}
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
