import React from "react";
import PeopleColumn from "./PeopleColumn";
import InvitePeopleColumn from "./InvitePeopleColumn";
import IsLoading from "./IsLoading";

const Dashboard = (props) => {
  const { isLoading, staff } = props;

  const StaffLoading = IsLoading(PeopleColumn);

  return (
    <div id="dashboard" className="">
      <section>
        <h1 className="section-heading">Your company dashboard</h1>
        <p className="section-heading_subhead">
          Manage people, view history &amp; see how your projects are doing.
        </p>
      </section>
      <section className="section-content">
        <StaffLoading staffData={staff} isLoading={isLoading} />
        <InvitePeopleColumn />
      </section>
    </div>
  );
};

export default Dashboard;
