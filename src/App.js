
import React, { Component } from 'react';
// { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import { BrowserRouter,Route }from'react-router-dom';
import Header from './common/header/index.js';
import store from './store/index.js';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <BrowserRouter>
              <div>
              <Header />
                <Route path ='/' exact component={Home}></Route>
                <Route path ='/login' exact component={Login}></Route>
                <Route path ='/write' exact component={Write}></Route>
                <Route path ='/detail/:id' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
