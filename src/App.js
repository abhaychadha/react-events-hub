import React, { Component } from 'react';
import './App.css';
import Welcome from './containers/welcome';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n.js";

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <div className="App">                          
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
          <Welcome />
          </I18nextProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
