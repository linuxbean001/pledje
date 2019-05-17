import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            images1:'images/1.png',
            images2:'images/2.png',
            images3:'images/3.png',
            images4:'images/4.png',
            images5:'images/5.png',
            images6:'images/6.png',
        }
    }
    
    openNavMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        })
    }

    handleCheck = (e) => {
        console.log('xxxxxxxx xxxxxxxxxx xxxxxxxxx ', e.currentTarget.dataset.id);
        if(e.currentTarget.dataset.id==1){
            this.setState({ 
                images1: 'images/1-green.png',
                images2:'images/2.png',
                images3:'images/3.png',
                images4:'images/4.png',
                images5:'images/5.png',
                images6:'images/6.png', 
            });
        }else if(e.currentTarget.dataset.id==2){
            this.setState({ 
                images1: 'images/1.png',
                images2:'images/2-green.png',
                images3:'images/3.png',
                images4:'images/4.png',
                images5:'images/5.png',
                images6:'images/6.png', 
            });
        }else if(e.currentTarget.dataset.id==3){
            this.setState({ 
                images1: 'images/1.png',
                images2:'images/2.png',
                images3:'images/3-green.png',
                images4:'images/4.png',
                images5:'images/5.png',
                images6:'images/6.png', 
            });
        }else if(e.currentTarget.dataset.id==4){
            this.setState({ 
                images1: 'images/1.png',
                images2:'images/2.png',
                images3:'images/3.png',
                images4:'images/4-green.png',
                images5:'images/5.png',
                images6:'images/6.png', 
            });
        }else if(e.currentTarget.dataset.id==5){
            this.setState({ 
                images1: 'images/1.png',
                images2:'images/2.png',
                images3:'images/3.png',
                images4:'images/4.png',
                images5:'images/5-green.png',
                images6:'images/6.png', 
            });
        }else if(e.currentTarget.dataset.id==6){
            this.setState({ 
                images1: 'images/1.png',
                images2:'images/2.png',
                images3:'images/3.png',
                images4:'images/4.png',
                images5:'images/5.png',
                images6:'images/6-green.png', 
            });
        }
       
    }
   


    render() {
        return (
            <div>
                <header id="header" className="headset">
                    <nav className="navbar navbar-inverse  p15" data-spy="affix" data-offset-top="30">
                        <div className="container-fluid" >
                            <div className="navbar-header">
                                <div className="menu-opener">
                                    <div className={this.state.openMenu ? "menu-opener-inner open_menu" : "menu-opener-inner"} onClick={this.openNavMenu}></div>
                                </div>
                               <NavLink className="navbar-brand" to="/" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="1"><img src="images/logo.png" className="main-logo" /> </NavLink>
                            </div>

                            <div className={this.state.openMenu ? "collapse navbar-collapse open_menu" : "collapse navbar-collapse"} id="myNavbar">
                                <a href="#" className="btn btn-success btn-round pull-right">Schedule A FREE Meeting  <img src="images/arrow09.png" /></a>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><NavLink exact={true} to="/" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="1"><img src={this.state.images1} /> Why Pledje </NavLink></li>
                                    <li>  <NavLink to="/services" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="2"><img src={this.state.images2} /> Services </NavLink></li>
                                    <li><NavLink to="/special-offers" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="3"><img src={this.state.images3} /> Special Offers </NavLink></li>
                                    <li><NavLink to="/contact" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="4"><img src={this.state.images4} /> Contact </NavLink></li>
                                    <li><NavLink to="/login" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="5"><img src={this.state.images5} /> Login</NavLink></li>
                                    <li><NavLink to="/dashboard" activeClassName="active" onClick={this.handleCheck.bind(this)} data-id="6"><img src={this.state.images6} /> Dashboard</NavLink></li>
                                </ul>
                            </div>
                        </div>

                    </nav>

                </header>
            </div>
        );
    }
}

export default Header;
