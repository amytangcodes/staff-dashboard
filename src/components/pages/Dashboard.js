import React from "react";
import PeopleColumn from "../Dashboard/PeopleColumn";
import InvitePeopleColumn from "../Dashboard/InvitePeopleColumn";
// import IsLoading from "../IsLoading";

const Dashboard = (props) => {
  const { staff } = props;

  // const StaffLoading = IsLoading(PeopleColumn);

  return (
    <div className="page-container">
      <div id="dashboard">
        <section className="section-header">
          <h1 className="header">Your company dashboard</h1>
          <p className="subhead">
            Manage people, view history &amp; see how your projects are doing.
          </p>
        </section>
        <section className="section-content">
          {/* <StaffLoading staffData={staff} isLoading={isLoading} /> */}
          <PeopleColumn staffData={staff} />
          <InvitePeopleColumn />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
