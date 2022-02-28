import React from "react";
import PropTypes from "prop-types";
import MenuComponent from "components/Menu/index";
import { HELMSMAN, SHOW_ALL, TACTIC, TRIM } from "helper/constants";

const FilterMenu = ({ handleFilter, activeKey }) => {
  const items = [
    { key: "1", label: SHOW_ALL, onClick: () => handleFilter("all", "1") },
    { key: "2", label: TRIM, onClick: () => handleFilter("trim", "2") },
    { key: "3", label: TACTIC, onClick: () => handleFilter("tactic", "3") },
    { key: "4", label: HELMSMAN, onClick: () => handleFilter("helmsman", "4") },
  ];
  return (
    <div className="team-member-menu">
      <MenuComponent items={items} selectedKeys={[activeKey]} />
    </div>
  );
};

FilterMenu.propTypes = {
  handleFilter: PropTypes.func,
  activeKey: PropTypes.string,
};
export default FilterMenu;
