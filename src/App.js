import React, { Component } from 'react'
import { Header, Main, Home, Footer } from './components/template'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  setIsLoggedIn = (status) => {
    this.setState({ isLoggedIn: status })
  }

  render() {
    const page = this.state.isLoggedIn ? <Home /> : <Main />
    return (
      <>
        <Header setIsLoggedIn={this.setIsLoggedIn} isLoggedIn={this.state.isLoggedIn} />
        {page}
        <Footer />
      </>
    );
  }
}