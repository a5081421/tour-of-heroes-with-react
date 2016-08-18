import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/app';
import Dashboard from './components/dashboard';
import Heroes from './components/heroes';
import HeroDetail from './components/hero_detail';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="/dashboard"/>
        {/*<IndexRoute component={Dashboard} />*/}
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/heroes" component={Heroes}/>
        <Route path="/heroes/:id" component={HeroDetail}/>
     </Route>
);
