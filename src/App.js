import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import Navbar from './components/navbar/navbar';
import store from './duck/store';

class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <HashRouter>
          <div className="App">
            <Navbar/>
            { routes }
          </div>
        </HashRouter>
      </Provider>
     
      
    );
  }
}

export default App;
