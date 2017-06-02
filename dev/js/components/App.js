import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Table from '../containers/Table/Table';

require('../../scss/style.scss');
// require('../../scss/Table.css');



 function handleClick(buttonName) {

  console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
  console.log('buttonName: ');
  console.log(buttonName);
  console.log('|------------------------------------------------------------------------------------------------|')
  
  
  // this.setState(calculate(this.state, buttonName));
}



let cols = [
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' }
];

let data = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Bob', lastName: 'Marley' }
];

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    <Table cols={cols} data={data} name="table-1" xxx-clickHandler={handleClick} />    
    </div>
);

export default App;
