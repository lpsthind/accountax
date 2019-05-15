import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import BaseRouter from "./LayoutRouter";
import "antd/dist/antd.css";
import "./components/clientDrawer.css";
import "./components/addClientDrawer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdbreact/dist/css/mdb.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import * as actions from "./store/actions/auth";
// import CustomLayout from "./containers/Layout.jsx";
// import { connect } from "react-redux";

class App extends Component {
  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }

  render() {
    console.log("App Render called");
    return (
      <div>
        <Router>
          <BaseRouter />
        </Router>
      </div>
    );
  }
}
export default App;

//////////// CREATING STATE AND CONVERTING IT TO PROPS ////////////////
// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
