import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "routes/Auth";
import Main from "routes/Main";
import Community from "routes/Community";
import LogOut from "routes/LogOut";
import Navigation from "components/Navigation";


const AppRouter = ({isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path = "/">
                        <Main />
                    </Route> 
                    <Route exact path = "/Community">
                        <Community userObj={userObj}/>
                    </Route> 
                    <Route exact path = "/LogOut">
                        <LogOut />
                    </Route>
                    </> 
                ) : (
                    <Route exact path = "/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
}

export default AppRouter;
