import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import NewsList from "./containers/NewsList/NewsList";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage}/>
            <Route path="/newslist" component={NewsList}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
