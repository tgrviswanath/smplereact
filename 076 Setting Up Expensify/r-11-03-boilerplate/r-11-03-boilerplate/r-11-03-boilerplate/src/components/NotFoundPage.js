import React from 'react';
import { Link } from 'react-router-dom';
// link api will refer to the link '/'
//<a href ='/' > Go home </a> it makke full page refresh, (server side routing), then we implement clicnt side routing

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
