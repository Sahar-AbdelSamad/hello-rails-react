import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../redux/configureStore';
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
        <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={ <h1> Welcome </h1> } />
            <Route path="/greeting" element={ <Greeting /> } />
          </Routes>
      </Provider>
        </BrowserRouter>
    );
  }
}

export default App