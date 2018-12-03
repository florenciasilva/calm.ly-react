import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import LoginCard from './Landing/LoginCard'
import RegisterCard from './Landing/RegisterCard'
import NewsFeed from './NewsFeed/NewsFeed';
import SideNav from './Sidenav';

const News = () => (
    <div>
        <NewsFeed />
    </div>
)

const Login = () => (
    <div>
        <LoginCard />
    </div>
);

const Register = () => (
    <div>
        <RegisterCard />
    </div>
);

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Navbar>
                <NavItem ><SideNav className='show-on-large' /></NavItem>
                <NavItem><Link to="/login">Login</Link></NavItem>
                <NavItem><Link to="/register">Register</Link></NavItem>
            </Navbar>

            <Switch>
                <Route exact strict path="/" />
                <Route exact strict path="/news-feed" component={News} />
                <Route exact strict path="/login" component={Login} />
                <Route exact strict path="/register" component={Register} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes
