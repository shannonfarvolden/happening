import "antd/dist/antd.css";
import React from "react";
import Header from "./components/Header";
import ListCategories from "./components/ListCategories";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Event from "./components/Events";
import { Layout } from "antd";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
        <Layout>
          <ListCategories />
          <Layout>
            <Route path="/:category/:sport" component={Event} />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
