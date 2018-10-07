import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';

import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
 function onDeleteRow(rowKeys) {
  alert('You deleted: ' + rowKeys)
}
const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  unselectable: [2],
  selected: [1],
  // onSelect: onSelectRow,
  bgColor: 'gold'
};



class Table1 extends Component {
  render() {
      const cellEditProp = {
      mode: 'click', // 'dbclick' for trigger by double-click
      // nonEditableRows: function() {
      //   return [15];
      // }
    }
    return (
      <div>
        <BootstrapTable data={this.props.data}
        selectRow={selectRowProp}
        deleteRow={true}
        cellEdit={cellEditProp}
          >
          <TableHeaderColumn isKey dataField='name_ls'>
            Name
          </TableHeaderColumn>

          <TableHeaderColumn dataField='age_ls'>
            Age
          </TableHeaderColumn>
          <TableHeaderColumn dataField='nominee_ls'>
            Nominee
          </TableHeaderColumn>
          <TableHeaderColumn dataField='relation_ls'>
            Relation
          </TableHeaderColumn>
          <TableHeaderColumn dataField='course_ls'>
            Course
          </TableHeaderColumn>
          <TableHeaderColumn dataField='weeks_ls'>
            Weeks
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s1_ls'>
            Subject 1
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s2_ls'>
            Subject 2
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s3_ls'>
            Subject 3
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s4_ls'>
            Subject 4
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s5_ls'>
            Subject 5
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s6_ls'>
            Subject 6
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s7_ls'>
            Subject 7
          </TableHeaderColumn>
          <TableHeaderColumn dataField='s8_ls'>
            Subject 8
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;