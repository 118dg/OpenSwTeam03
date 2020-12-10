import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "routes/Auth";
import Search from "routes/Search";
import Release from"routes/Release";
import Roommates from "routes/Roommates";
import Community from "routes/Community";
import Notice from "routes/Notice";
import MyProfile from "routes/MyProfile";
import LogOut from "routes/LogOut";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path = "/">
                        <Search />
                    </Route> 
                    <Route exact path = "/Release">
                        <Release />
                    </Route> 
                    <Route exact path = "/Roommates">
                        <Roommates />
                    </Route> 
                    <Route exact path = "/Community">
                        <Community />
                    </Route> 
                    <Route exact path = "/Notice">
                        <Notice />
                    </Route> 
                    <Route exact path = "/MyProfile">
                        <MyProfile />
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
