import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, Navbar } from './components';
import './App.css';
import PredictPrices from './components/PredictPrices';
// Would Probably have to use <HashRouter> insted of BrowerSertver router to manage user history on client side
const App = () => (
  <div className="app">
    <div className="navvbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/prediction">
              <PredictPrices />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
            CryptoPredict
          </Link> <br />
          Cryptocurrencies are subjected to market risks
          <br />Invest at your Own Risk
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
          <Link to="/prediction">Predict</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
