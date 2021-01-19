import React from "react";
import SectionHeader from "../SectionHeader";
import PeopleColumn from "../Dashboard/PeopleColumn";
import InvitePeopleColumn from "../Dashboard/InvitePeopleColumn";
import IsLoading from "../IsLoading";

const Dashboard = (props) => {
  const { isLoading, staff } = props;

  const StaffLoading = IsLoading(PeopleColumn);

  return (
    <div className="page-container">
      <div id="dashboard">
        <SectionHeader
          header="Your company dashboard"
          description="Manage people, view history &amp; see how your projects are doing."
        />
        <section className="section-content">
          <StaffLoading staffData={staff} isLoading={isLoading} />
          <InvitePeopleColumn />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
