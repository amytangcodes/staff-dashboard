import React from "react";
import PeopleColumn from "./PeopleColumn";

const Dashboard = ({ staff }) => {
  return (
    <div id="dashboard" className="">
      <section>
        <h1 className="section-heading">Your company dashboard</h1>
        <p className="section-heading_subhead">
          Manage people, view history &amp; see how your projects are doing.
        </p>
      </section>
      <section className="section-content">
        <PeopleColumn staffData={staff} />
        <div className="column_invite-people"></div>
      </section>
    </div>
  );
};

export default Dashboard;
