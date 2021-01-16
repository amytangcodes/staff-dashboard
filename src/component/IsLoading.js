import React from "react";

const IsLoading = (Component) => {
  return function ListLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching your people!</p>;
  };
};

export default IsLoading;

