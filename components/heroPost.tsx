import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDate, readingTime } from "../utils";
import BlogDetails from "./blogDetails";
import { PostType } from "../types";

type HeroPostProps = {
  post: PostType;
};
function HeroPost({ post }: HeroPostProps) {
  const readTime = readingTime(post.content.rendered);
  const formattedDate = formatDate(post.date);

  return (
    <section>
      <div className="hero">
        <figure className="hero__media">
          <Image
            src={post.featuredMedia.source_url}
            alt={post.featuredMedia.alt_text}
            width={500}
            height={500}
            className="hero__media__image"
          />
        </figure>
        <div className="hero__content">
          <h1
            className="hero__title"
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />
          <div
            className="hero__excerpt"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />

          <Link
            href={`blog/${post.slug}`}
            className="btn btn--medium btn--primary"
          >
            Read the full story
          </Link>

          <BlogDetails
            author={post.authorData}
            time={readTime}
            date={formattedDate}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroPost;
