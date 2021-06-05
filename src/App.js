// import Home from './Home';
// import './App.css';
// import  from "./pages/Register"
// function App() {
//   return (
//    <>
//     <Home/>
//    </>
//   );
// }

// export default App;
import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import Register from "./pages/Register"
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from "./pages/login"
import moment from "moment"
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logedIn: false
    }
  }

    componentWillMount() {
      this.checkOpt()
   }
   checkOpt() {
    const token = localStorage.getItem("projectToken");
    if (token) {
         return <Redirect to='/' />
    }
    else {
      return <Redirect to='/home' />
    }
    
   }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
                <Route exact path="/" component={login} />
                <Route checkOpt={this.checkOpt} exact path="/home" component={Home} exact />
                <Route exact path="/register" component={Register} />
           </Switch>
        </BrowserRouter>
      </>
    );
  }
}


