import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Header from './common/header';
import Login from './pages/login';
import store from './store';
import Write from './pages/write';


class App extends Component {
  render() {

    return (

      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/home' exact component = {Home}></Route>
            <Route path='/' exact component = {Login}></Route>
            <Route path='/write' exact component = {Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
      
    );

  }
}

export default App;
