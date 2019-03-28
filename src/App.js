import React, { Component } from "react"
import { connect } from "react-redux"
import "./App.css"

function mapStateToProps(state) {
  return {
    reduxState: state
  }
}

class App extends Component {
  render() {
    console.log("App props: ", this.props)
    return <div>Redux!</div>
  }
}

export default connect(mapStateToProps)(App)
