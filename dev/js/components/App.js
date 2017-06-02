import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Table from '../containers/Table/Table';

require('../../scss/style.scss');
// require('../../scss/Table.css');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
