import React from "react";

function BlogDetails() {
  return (
    <div className="post__details">
      <figure className="post__author__media">
        <img src="" alt="" className="post__author__media__image" />
      </figure>
      <div className="post__details__info">
        <h4 className="post__author__name">Obiageli Unoka</h4>
        <div className="post__details__detail">
          <p>Aug 26, 2022</p>
          <span>•</span>
          <p>5 min read</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
