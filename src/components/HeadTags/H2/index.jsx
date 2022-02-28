import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const H2 = ({ className, children }) => {
  return <h2 className={classNames("general-h2", className)}>{children}</h2>;
};

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default H2;
