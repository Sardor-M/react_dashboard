import React from "react";
import { BrowseRouter as Router } from "react-router-dom";
import { RoutedContent } from "./routes";

const basePath = process.env.BASE_PATH || "/";
const App = () => {
  return (
    <Router basename={basePath}>
      <Applayout>
        <RoutedContent />
      </Applayout>
    </Router>
  );
};

export default App;
