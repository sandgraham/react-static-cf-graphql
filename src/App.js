import React from 'react'
import { Router, Link, getSiteProps } from 'react-static'
//
import Routes from 'react-static-routes'

const Header = getSiteProps(({ header }) =>
  <div className="Header">
    <div>Features:</div>
    {header.map(feature => (
      <div style={{marginLeft: '1rem'}} key={feature.path}>
        <Link to={`/features${feature.path}`}>{feature.path}</Link>
      </div>
    ))}
  </div>
)

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
