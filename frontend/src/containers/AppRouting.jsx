import React, { Component } from 'react';
import CustomLayout from "./Layout.4"
import { BrowserRouter as Router , withRouter} from "react-router-dom";
import AppRouter from "../AppRouter"

class AppRoute extends Component {
    state = {  }
    redirect=()=>{
        this.props.history.push("/")
    }
    render() { 
        return (
            <div> 
                <Router>
                    <CustomLayout loginPage={this.redirect}>
                        <AppRouter/>
                    </CustomLayout>
                </Router>
            </div>
         );
    }
}
export default withRouter(AppRoute);