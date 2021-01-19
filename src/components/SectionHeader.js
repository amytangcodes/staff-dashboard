import React from "react";

const SectionHeader = ({ header, description }) => {
  return (
    <section className="section-header">
      <h1 className="header">{header}</h1>
      <p className="subhead">{description}</p>
    </section>
  );
};

export default SectionHeader;
