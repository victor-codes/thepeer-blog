import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../assets/svg/logo.svg";

function Navigation() {
  return (
    <div className="nav">
      <Link href="/">
        <Image className="nav__logo" src={Logo} alt={""} />
      </Link>
      <div className="nav__link__container">
        <Link href="/pricing" className="nav__link">
          {" "}
          Products
        </Link>
        <Link href="/pricing" className="nav__link">
          {" "}
          Pricing
        </Link>
        <Link href="/docs" className="nav__link">
          {" "}
          docs
        </Link>
        <Link href="/company" className="nav__link">
          {" "}
          Company
        </Link>
      </div>
      <div className="nav__btn__container">
        <a
          href="https://dashboard.thepeer.co/login"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__btn"
        >
          Login
        </a>

        <a
          href="https://dashboard.thepeer.co/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__btn nav__btn--primary"
        >
          Sign up
        </a>
      </div>
    </div>
  );
}

export default Navigation;
