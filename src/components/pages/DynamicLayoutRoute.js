import React from "react";
import { Route } from "react-router-dom";

import LoggedInLayout from "../layouts/LoggedInLayout";
import LoggedOutLayout from "../layouts/LoggedOutLayout";

const DynamicLayoutRoute = (props) => {
  const { render: RoutedComponent, layout, ...rest } = props;

  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  );

  switch (layout) {
    case "NAV": {
      return <LoggedOutLayout>{actualRouteComponent}</LoggedOutLayout>;
    }
    case "DASH_BOARD_NAV": {
      return <LoggedInLayout>{actualRouteComponent}</LoggedInLayout>;
    }
    default: {
      return <LoggedOutLayout>{actualRouteComponent}</LoggedOutLayout>;
    }
  }
};

export default DynamicLayoutRoute;
