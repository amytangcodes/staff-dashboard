import React from "react";
import { Card } from "semantic-ui-react";

const StaffCard = (props) => {
  const { staff } = props;

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
      </Card.Content>
      <div className="card_stat">
        <p className="stat">
          <span className="icon clock-icon"></span>Pending: $7.00
        </p>
        <p className="stat">
          <span className="icon clipboard-icon"></span>Approved: $62.12
        </p>
        <p className="stat">
          <span className="icon expense-icon"></span>Paid: $0.00
        </p>
      </div>
      <div className="card_status">
        <p className="status">
          <span className="icon status-icon"></span>
          Account created
        </p>
        <p className="status">
          <span className="icon status-icon"></span>
          Onboarded
        </p>
      </div>
    </div>
  );
};

export default StaffCard;
