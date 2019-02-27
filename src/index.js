import React, { Component } from 'react';
import Routes from './Routes';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store/store';
import { Provider } from "react-redux";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

