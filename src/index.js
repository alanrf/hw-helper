import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import Artifacts from './pages/menuOptions/Artifacts';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Page404 = () => (<div>Not Found</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/artifacts" component={Artifacts} exact/>
      <Route path="/" component={Home} exact/>
      <Route component={Page404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
