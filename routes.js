import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// Store
import AppStore from './stores/AppStore'


// Main Component
import App from './components/App'

// Pages
import Blog from './components/Pages/Blog'
import Default from './components/Pages/Default'
import Work from './components/Pages/Work'
import NoMatch from './components/Pages/NoMatch'

export default (
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contact" component={Default}/>
          <Route path="work" component={Work}/>
          <Route path="/work/:slug" component={Work}/>
          <Route path="/blog/:slug" component={Blog}/>
          <Route path="*" component={NoMatch}/>
        </Route>
)


