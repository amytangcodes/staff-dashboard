import React from "react";
import StaffCard from "./StaffCard";

const PeopleColumn = (props) => {
  const { staffData } = props;

  if (!staffData || staffData.length === 0)
    return (
      <div className="loading-page">
        <div className="lds-dual-ring"></div>
      </div>
    );

  return (
    <div className="column_people">
      {staffData.collection.map((staff) => (
        <StaffCard staff={staff} key={staff.id} />
      ))}
    </div>
  );
};

export default PeopleColumn;
