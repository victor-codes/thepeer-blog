import React from "react";
import BlogHeader from "../../components/blogHeader";
import Layout from "../../components/layout";

function BlogPost() {
  return (
    <Layout>
      <article className="post">
        <BlogHeader />
        <div className="post__content">
          Lagos, Nigeria August 12th, 2021: Thepeer, a technology company
          creating the infrastructure enabling businesses to support fast,
          direct and efficient transactions across other business platforms
          launches today. The technology platform is helping businesses change
          the way transactions are done, while giving customers a better
          experience. With Thepeer, customers can carry out direct debits,
          recurring billings, transactions and more from any business platform
          integrating the API, easily. Thepeer supports businesses who want to
          enable their customers transfer value from one app to the other. This
          affords users improved access to the rest of the financial ecosystem,
          hence helping people unlock, create value and build wealth. Thepeer
          supports insight-driven approaches to building technological solutions
          for customers. Thepeer’s comparative advantage for end-users is
          enabling transactions from one business app to another free of charge.
          Commenting on the launch Chike Ononye, CEO and Co-Founder of Thepeer
          commenting on the launch said, “As Thepeer launches today, the team is
          looking at two things; convenience for customers and growth for
          businesses. In this digital age, people have at least 2 apps on their
          phones. They have numerous online accounts holding value. How do these
          users move value around easily? Thepeer is providing the
          infrastructure enabling these businesses to create a better experience
          for their customers. We build the technology enabling transfer of
          value from one business to another, and app to another. ” Trojan Okoh,
          CTO and Co-Founder of Thepeer added, “We’re redefining customer
          experience and online transfers and we need the support of the
          business and Developer communities. Developers everywhere can easily
          integrate our smart API in record time to help businesses leverage our
          technology to improve customer transfer experience. We’re happy to be
          on this journey with our partners, customers and Developer Community.”
          Thepeer launches on Flutterwave, a payments technology company helping
          businesses and Startups launch and grow in record time.
        </div>
      </article>
    </Layout>
  );
}

export default BlogPost;
