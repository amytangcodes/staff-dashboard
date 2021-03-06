import React from "react";
import InviteImage from "images/invite.png";
import InviteLink from "./InviteLink";

const InvitePeopleColumn = () => {
  return (
    <div className="column_invite-people">
      <div className="card desktop">
        <div className="image-container">
          <img
            src={InviteImage}
            alt="Invite people to the project"
            className="image"
          />
        </div>
        <div className="content">
          <h3 className="header">Invite people to this project</h3>
          <p className="subhead">
            Share the following link with your team to have them sign up and
            send you their invoices.
          </p>
          <InviteLink />
        </div>
      </div>
      <div className="footer mobile">
        <a href="/" className="invite-link">
          Invite someone to Staffbook
        </a>
      </div>
    </div>
  );
};

export default InvitePeopleColumn;
