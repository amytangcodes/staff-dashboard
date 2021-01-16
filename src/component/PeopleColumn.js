import React from "react";
import StaffCard from "./StaffCard";

const PeopleColumn = (props) => {
  const { staffData } = props;

  if (!staffData || staffData.length === 0) return <p>No staffData, sorry</p>;

  return (
    <div className="column_people">
      <div>
        {staffData.collection.map((staff) => (
          <StaffCard staff={staff} key={staff.id} />
        ))}
      </div>
    </div>
  );
};

export default PeopleColumn;
