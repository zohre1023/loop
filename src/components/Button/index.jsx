import { Button } from "antd";
import PropTypes from "prop-types";
import React from "react";

const ButtonComponent = ({ onClick, size, label }) => {
  return (
    <Button onClick={onClick} size={size}>
      {label}
    </Button>
  );
};
ButtonComponent.propTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};
export default ButtonComponent;
