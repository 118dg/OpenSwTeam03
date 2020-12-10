import React from "react";
import {Link} from "react-router-dom"

const Navigation = () => <nav>
    <ul>
        <li>
            <Link to="/">Search</Link>
        </li>
        <li>
            <Link to="/Release">Release</Link>
        </li>
        <li>
            <Link to="/Roommates">Roommates</Link>
        </li>
        <li>
            <Link to="/Community">Community</Link>
        </li>
        <li>
            <Link to="/Notice">Notice</Link>
        </li>
        <li>
            <Link to="/MyProfile">My Profile</Link>
        </li>
        <li>
            <Link to="/LogOut">Log Out</Link>
        </li>
    </ul>
</nav>
export default Navigation;
