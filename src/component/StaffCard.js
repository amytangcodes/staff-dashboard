import React from "react";
import { Card } from "semantic-ui-react";
import { stats, status } from "../api/api";
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
      <Card.Content className="card_header">
        <img
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
          alt={staff.name}
          className="avatar"
        />
        <div className="card_container">
          <Card.Header>{staff.name}</Card.Header>
          <Card.Description>
            Employee • Human Manufacturing Planner
          </Card.Description>
        </div>
        <a href="/" className="link_arrow">
          <span className="icon icon_chevron-right"></span>
        </a>
      </Card.Content>
      <div className="card_stat">{cardStatItems}</div>
      <div className="card_status">{cardStatusItems}</div>
    </div>
  );
};

export default StaffCard;
