import React from 'react'
import { Router, Link, getSiteProps } from 'react-static'
//
import Routes from 'react-static-routes'

import Header from './components/Header'

export default () => (
  <Router>
    <div>
      <Header />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
