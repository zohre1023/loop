import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const P = ({ className, children }) => {
  return <p className={classNames("general-p", className)}>{children}</p>;
};
P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default P;
