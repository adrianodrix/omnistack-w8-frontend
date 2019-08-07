import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/login'
import Main from './pages/main'

export default () => (
  <BrowserRouter>
    <Route path="/" component={Login} exact />
    <Route path="/dev/:id" component={Main} />
  </BrowserRouter>
)
