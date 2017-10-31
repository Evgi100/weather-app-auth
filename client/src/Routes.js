import React from 'react';
import WeatherApp from './WeatherApp';
import About from './weatherApp/common/About';
import Page404 from './weatherApp/common/404';
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
