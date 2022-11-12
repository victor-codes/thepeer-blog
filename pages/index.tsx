import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BlogDetails from "../components/blogDetails";
import BlogPostItem from "../components/blogPostItem";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Thepeer | One integration, access to all businesses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog">
        <section>
          <div className="hero">
            <figure className="hero__media">
              <img src="" alt="" className="hero__media__image" />
            </figure>
            <div className="hero__content">
              <h1 className="hero__title">Introducing invoice</h1>
              <p className="hero__excerpt">
                Thepeer And GetEquity team up to further democratize the venture
                capital space by making decentralized startup investments even
                more accessible.
              </p>

              <Link href="/" className="btn btn--medium btn--primary">
                Read the full story
              </Link>

              <BlogDetails />
            </div>
          </div>
        </section>
        <section aria-labelledby="articles">
          <div className="blog__articles">
            <h2 id="articles" className="blog__articles__header">
              See more articles
            </h2>
            <div className="blog__articles__grid">
              <BlogPostItem />
              <BlogPostItem />
              <BlogPostItem />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
