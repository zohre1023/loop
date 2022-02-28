import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const H1 = ({ className, children }) => {
  return <h1 className={classNames("general-h1", className)}>{children}</h1>;
};

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default H1;
