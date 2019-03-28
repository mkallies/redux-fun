import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// redux
import { createStore /* combineReducers, applyMiddleware */ } from "redux"
import { Provider } from "react-redux"
// import thunk from 'redux-thunk'

function reducer(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer /* applyMiddware(thunk) */)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
