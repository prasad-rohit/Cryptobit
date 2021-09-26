import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  Exchanges,
  News,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/exchanges" exact>
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies" exact>
                <Cryptocurrencies />
              </Route>
              {/* <Route path="/" exact>
                <HomePage />
              </Route> */}
              <Route path="/news" exact>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CrypotVerse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
