import React from 'react';
// import './Table.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = (e) => {
      console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
      console.log('e: ');
      console.log(e.target);
      console.log('|------------------------------------------------------------------------------------------------|')

      this.props.clickHandler(this.props.name);
    };

    this.generateHeaders = ()=> {
      let cells = this.props.cols.map(function(col) {
        return <th key={col.id}> {col.label} </th>;
      });

      return <tr> {cells} </tr>;
    };

    this.generateRows = ()=> {
      let cols = this.props.cols;
      let data = this.props.data;
      var that = this;

      return data.map(item=> {
        let cells = cols.map((col, index) =>{
          return (
            <td
              key     ={col.id}
              name    ="testname"
              onClick ={this.handleClick}
            >
              {item[col.id]}
            </td>
          );

        });

        return <tr key={item.id}> {cells} </tr>;
      });
    };

  }

  render() {
    return (
        <table className="matt-table">
            <thead> {this.generateHeaders()} </thead>
            <tbody> {this.generateRows()} </tbody>
        </table>
    );
  }

}

export default Table;