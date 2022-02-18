import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: "1.45rem",
      textAlign: "center",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem 0 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <span
            style={{
              color: "red",
              textDecoration: "underline",
            }}
          >
            nie
          </span>
          <span
            style={{
              color: "black",
            }}
          >
            dzwoncie.pl
          </span>
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
