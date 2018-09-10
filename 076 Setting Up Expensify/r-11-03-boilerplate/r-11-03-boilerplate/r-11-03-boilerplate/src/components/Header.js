import React from 'react';
import { NavLink } from 'react-router-dom';
// having multiple link side by side , identital to link  but it takes some extra props
//activeClassName : wiill provide as to allow a classs only to that page when we are in that page
///exact={true} : same reason as we used for 

// deleting the navlink because 
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>

    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
