import React from "react";
import {Link} from "react-router-dom"

const Navigation = () => <nav>
    <ul>
        <li>
            <Link to="/">Main</Link>
        </li>
        <li>
            <Link to="/Community">Community</Link>
        </li>
        <li>
            <Link to="/LogOut">Log Out</Link>
        </li>
    </ul>
</nav>
export default Navigation;
