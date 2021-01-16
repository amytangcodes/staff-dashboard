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
        <div className="stat">Pending</div>
        <div className="stat">Approved</div>
        <div className="stat">Paid</div>
      </div>
      <div className="card_status">
        <div className="status">Account created</div>
        <div className="status">Onboarded</div>
      </div>
    </div>
  );
};

export default StaffCard;
