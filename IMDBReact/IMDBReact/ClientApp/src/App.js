import React, { Component } from 'react';
import { Route } from 'react-router';
import Test  from './components/Test';
import { Layout } from './components/Layout';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/Test' component={Test} />
      </Layout>
    );
  }
}
