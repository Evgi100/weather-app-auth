import React from 'react';
import WeatherApp from './';
import About from './common/About';
import Page404 from './common/404';
import {Switch, Route} from 'react-router-dom';

const Routes = () => (
    <div className="container">
         <Switch>
            <Route name="home" exact path='/' component={WeatherApp} />
            <Route name="about" exact path='/about' component={About} />
            <Route path="*" component={Page404}/>
        </Switch>
    </div>
)

export default Routes;
