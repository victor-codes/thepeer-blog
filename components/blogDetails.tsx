import Image from "next/image";
import React from "react";

interface BlogDetailsProps {
  author: object;
  time: string;
  date: string;
}

function BlogDetails({ author, time, date }: BlogDetailsProps) {

  return (
    <div className="post__details">
      <figure className="post__author__media">
        {author && (
          <Image
            src={author.avatar_urls[48]}
            alt={author.name}
            width={40}
            height={40}
            className="post__author__media__image"
          />
        )}
      </figure>
      <div className="post__details__info">
        <h4 className="post__author__name">{author.name}</h4>
        <div className="post__details__detail">
          <p>{date}</p>
          <span>•</span>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

// export async function getStaticProps(context) {
//   return {
//     props: {
//       context,
//     },
//   };
// }
