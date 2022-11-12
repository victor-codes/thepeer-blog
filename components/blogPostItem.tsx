import Link from "next/link";
import React from "react";
import BlogDetails from "./blogDetails";

function BlogPostItem() {
  return (
    <Link href="/">
      <article>
        <figure className="post__card__media">
          <img src="" alt="" className="post__card__media__image" />
        </figure>

        <div className="post__card__details">
          <h3 className="post__card__title">
            7 Ways To Retain Your Customers and Boost Retention
          </h3>
          <p className="post__card__excerpt">
            Customer retention is crucial to a business's success and lasting
            sustainability. When done right, it can also increase a company's
            profits. We've devised eight ways to retain customers and build the
            business of your dreams.
          </p>
        </div>

        <BlogDetails />
      </article>
    </Link>
  );
}

export default BlogPostItem;
