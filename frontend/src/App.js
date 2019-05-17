import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';
import HeaderContainer from './containers/Base/HeaderContainer';
import FooterContainer from './containers/Base/FooterContainer';

import storage from './lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as userActions from './redux/modules/user';
import './responsive.scss';

class App extends Component {


    initializeUserInfo = async () => {
        const loggedInfo = storage.get('loggedInfo'); 
        if(!loggedInfo) return; 

        const { UserActions } = this.props;
        UserActions.setLoggedInfo(loggedInfo);
        try {
            await UserActions.checkStatus();
        } catch (e) {
            storage.remove('loggedInfo');
            window.location.href = '/auth/login?expired';
        }
    }

    enableAnimation = () => {
        AOS.init({
            duration: 1000
        });
    }

    componentDidMount() {
        this.initializeUserInfo();
        this.enableAnimation();
    }

    render() {
        return (
            <div>
                <HeaderContainer/>
                <Route exact path="/" component={Home}/>
                <FooterContainer/>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(App);