import React, { useEffect, useState } from "react";

import ButtonComponent from "components/Button/index";
import { LARGE, LOAD_MORE } from "helper/constants";
import { getMembers } from "../../../services/teamService";
import FilterMenu from "./FilterMenu";
import Item from "./Item";
import Title from "./Title";

const Team = () => {
  const [teamInformation, setTeamInformation] = useState([]);
  const [filteredTeam, setFilteredTeam] = useState([]);
  const [numberOfDisplay, setNumberOfDisplay] = useState(10);
  const [activeKey, setActiveKey] = useState("1");

  /* get member information */
  async function fetchMyAPI() {
    let response = await getMembers(numberOfDisplay);
    setTeamInformation(response);
    setFilteredTeam(response);
  }
  useEffect(() => {
    fetchMyAPI();
  }, [numberOfDisplay]);

   /* filter list */
  const handleFilter = (filterItem, key) => {
    setActiveKey(key);
    if (filterItem === "all") return setFilteredTeam(teamInformation);
    const list = teamInformation?.filter((member) =>
      member.duty_slugs.includes(filterItem)
    );

    return setFilteredTeam(list);
  };

   /* load more function */
  const handleClick = () => {
    setNumberOfDisplay(numberOfDisplay + 10);
    setActiveKey("1");
  };

  return (
    <div className="team-component color-white">
      <div className="slope-border" />
      <Title />
      <FilterMenu handleFilter={handleFilter} activeKey={activeKey} />
      <div id="team-member" className="team-content">
        {filteredTeam?.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <div className="button-area">
        <ButtonComponent onClick={handleClick} size={LARGE} label={LOAD_MORE} />
      </div>
    </div>
  );
};

export default Team;
