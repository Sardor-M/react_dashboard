import React from "react";
import { hot } from "react-hot-loader";
import { BrowseRouter as Router } from "react-router-dom";
import { RoutedContent } from "./routes";
import AppLayout from "./layout/default";

const basePath = process.env.BASE_PATH || "/";
const Appclient = () => {
  return (
    <Router basename={basePath}>
      <Applayout>
        <RoutedContent />
      </Applayout>
    </Router>
  );
};

export default hot(module)(AppClient);
