import React, { Component } from 'react';
import TableRow from './TabelRow.js';
import TableHead from './TableHead.js';

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
      
        <TableHead/>
      
        
        <TableRow dataFromChild={this.props.dataFromChild} data={this.props.data} />
         
      </table>
    );
  }
}

export default Table