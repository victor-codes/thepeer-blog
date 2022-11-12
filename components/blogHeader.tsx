import React from "react";
import BlogDetails from "./blogDetails";

function BlogHeader() {
  return (
    <header>
      <div className="post__header">
        <h1 className="post__header__title">
          Introducing Thepeer, the technology company enabling free
          Business-to-Business transactions
        </h1>
        <p className="post__header__excerpt">
          Thepeer is launching its API infrastructure with the mission to fasten
          the adoption of free transfers between apps and businesses across the
          world
        </p>
        <BlogDetails />
      </div>

      <figure className="post__featured__media">
        <img src="/" alt="" className="post__featured__media__image" />
        <figcaption className="post__featured__media__caption">
          L-R: Trojan Okoh (CTO & Co-Founder) & Chike Ononye (CEO & Co-Founder)
        </figcaption>
      </figure>
    </header>
  );
}

export default BlogHeader;
