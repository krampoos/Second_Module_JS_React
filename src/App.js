import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
