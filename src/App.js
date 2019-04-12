import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import NewsList from "./containers/NewsList/NewsList";
import AddNews from "./containers/AddNews/AddNews";
import Contacts from "./components/Contacts/Contacts";
import MoreInfo from "./components/MoreInfo/MoreInfo";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/news/:id" component={MoreInfo}/>
            <Route path="/NewsList" component={NewsList}/>
            <Route path="/AddNews" component={AddNews}/>
            <Route path="/Contacts" component={Contacts}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
