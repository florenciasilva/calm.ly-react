import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize';
import Firebase from './Firebase/FirebaseCredentials';
import { Link } from 'react-router-dom';
import './Sidenav.css'

class sidenav extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        Firebase.auth().signOut();
    }
    render() {
        return (
            <SideNav
                trigger={<Button><Icon>menu</Icon></Button>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{
                    }}
                />/
    <SideNavItem divider />
                <SideNavItem waves>
                    <Link to='/login' onClick={this.logout}>Logout</Link>
                </SideNavItem>
            </SideNav>
        );
    }
}

export default sidenav