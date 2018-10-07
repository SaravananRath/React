import React, { Component } from "react";

class TableHead extends Component {
  render() {
    const head = (
      <tr>
        <th id="Name">Name</th>
        <th>Age</th>
        <th>Nominee</th>
        <th>Relation</th>
        <th>Course</th>
        <th>Weeks</th>
        <th>Subject 1</th>
        <th>Subject 2</th>
        <th>Subject 3</th>
        <th>Subject 4</th>
        <th>Subject 5</th>
        <th>Subject 6</th>
        <th>Subject 7</th>
        <th>Subject 8</th>
        <th>Delete</th>
        <th>Update/Refresh</th>
      </tr>
    );
    return <thead>{head}</thead>;
  }
}

export default TableHead;
