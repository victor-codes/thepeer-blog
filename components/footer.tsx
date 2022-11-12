import Link from "next/link";
import React from "react";
import Facebook from "../assets/svg/facebook.svg";
import Linkeldn from "../assets/svg/linkeldn.svg";
import Twitter from "../assets/svg/twitter.svg";
import Instagram from "../assets/svg/instagram.svg";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="footer__wrapper">
        <div>
          <div className="newsletter">
            <div>
              <h3 className="newsletter__title">Subscribe to our newsletter</h3>
              <p className="newsletter__desc">
                Be the first to know when we release a post, make announcements,
                organise an event and more
              </p>
              <form className="form">
                <label htmlFor="name">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Name"
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    className="form__input"
                    id="email"
                    placeholder="Email address"
                  />
                </label>
                <button className="form__btn">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="onboard">
            <h3 className="onboard__title">
              Sign up as a business today, for free
            </h3>
            <p className="onboard__desc">
              Click on the button below to get started as a business on Thepeer
            </p>
            <a
              className="onboard__link"
              href="https://dashboard.thepeer.co/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create an account for free
            </a>
          </div>
          <footer>
            <div className="footer">
              <div>
                <h2 className="footer__title">Thepeer</h2>
                <p className="footer__desc">
                  ©2021. Peerstack Technologies Inc. All rights reserved
                </p>
                <div className="footer__social">
                  <Link href="/" className="footer__social-item">
                    <Image src={Facebook} alt="facebook's logo" />
                  </Link>
                  <Link href="/" className="footer__social-item">
                    <Image src={Instagram} alt="Instagram's logo" />
                  </Link>
                  <Link href="/" className="footer__social-item">
                    <Image src={Linkeldn} alt="Linkeldn's logo" />
                  </Link>
                  <Link href="/" className="footer__social-item">
                    <Image src={Twitter} alt="Twitter's logo" />
                  </Link>
                </div>
                <a href="mailto:support@thepeer.co" className="footer__link">
                  support@thepeer.co
                </a>
              </div>
              <nav aria-label="Secondary Navigation" className="footer__nav">
                <div className="footer__nav__col">
                  <p className="footer__nav__sub-header">Products</p>
                  <ul>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Insights
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Transactions
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Direct charge
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__nav__col">
                  <p className="footer__nav__sub-header">Company</p>
                  <ul>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        About us
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Careers
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__nav__col">
                  <p className="footer__nav__sub-header">Developers</p>
                  <ul>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Documentation
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        qwerjh
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Status
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer__nav__col">
                  <p className="footer__nav__sub-header">Legal</p>
                  <ul>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Terms of service
                      </Link>
                    </li>

                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Privacy policy
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="/" rel="noopener noreferrer">
                        Cookie policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
