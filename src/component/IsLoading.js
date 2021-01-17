import React from "react";

const IsLoading = (Component) => {
  return function ListLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="loading-page">
        <div className="lds-dual-ring"></div>
      </div>
    );
  };
};

export default IsLoading;
