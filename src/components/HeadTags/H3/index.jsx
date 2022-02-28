import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const H3 = ({ className, children }) => {
  return <h3 className={classNames("general-h3", className)}>{children}</h3>;
};

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default H3;
