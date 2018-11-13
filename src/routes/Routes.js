import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'

const Routes = () => (
  <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    {/* <Route
      path={`${process.env.PUBLIC_URL}/rotinas/recebimento-faturado`}
      component={ReceiptBilled}
    /> */}
  </Switch>
)
export default Routes
