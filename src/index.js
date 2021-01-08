import React from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/svgs/logo.svg';
import './index.css';
import ControlPanel from './containers/ControlPanel';
import 'antd/dist/antd.css';

ReactDOM.render(  
  <React.StrictMode>
    <div className="App" onselectstart="return false" unselectable="on">
      <img src={logo} className="App-logo" alt="logo" />
      <ControlPanel />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
