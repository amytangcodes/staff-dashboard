import React from "react";
import { stats, status } from "../../api/api";
import StatLabel from "./StatLabel";

const StaffCard = (props) => {
  const { staff } = props;

  const cardStatItems = stats.map((statItem, i) => (
    <StatLabel data={statItem} key={i} />
  ));

  const cardStatusItems = status.map((statusItem, i) => (
    <StatLabel data={statusItem} key={i} />
  ));

  return (
    <div className="staff-card">
      <div className="card_header">
        <img
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
          alt={staff.name}
          className="avatar"
        />
        <div className="card_container">
          <div className="header">{staff.name}</div>
          <div className="description">
            Employee • Human Manufacturing Planner
          </div>
        </div>
        <a href="/" className="link_arrow">
          <span className="icon icon_chevron-right"></span>
        </a>
      </div>
      <div className="card_stat">{cardStatItems}</div>
      <div className="card_status">{cardStatusItems}</div>
    </div>
  );
};

export default StaffCard;
