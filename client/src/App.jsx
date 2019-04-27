import React, { Component } from "react";
import "./App.css";

import Water from './water';
// import NavFooter from './NavFooter'
import Navbar from './components/toolbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div className="app" style={{height: '100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <p>this is the page content</p>
        </main>
        <Water />
      </div>
    );
  }
}

export default App;