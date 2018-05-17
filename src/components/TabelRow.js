import React, { Component } from 'react';

var obj = [];
class TableRow extends Component {
  constructor(){
    super();
    this.state = {
      // array_tbl:[],                                                                                                                                  
      results:[],
      index:'',
    
    }
  }
  handleCLick = (evt) => {
    // const state = this.state;
    var index = evt.target.name;
    var index_ls = evt.target.id;
    // console.log(index);

    this.setState(this.state.results.splice(index,1));
    localStorage.removeItem('Form'+index_ls);

    // console.log(this.setState(this.state.results.splice(index,1)))
  }

  handleUpdate = (evt) => {
    var index = evt.target.name;
    var index_ls = evt.target.id;
    console.log(this.state.results[index]);
    console.log(this.props.dataFromChild);
    this.props.dataFromChild(this.state.results[index]);
  }
  handleRefresh = (evt) => {

    // var index_ls = evt.target.id;
    obj = [];
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      obj.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }

    this.setState({results:obj})
    // localStorage.getItem('Form'+index_ls);
  }

  componentWillMount() {
 const {data} = this.props;
 data.splice(0,1);
 this.setState({results:data});
 console.log(this.state.results);

}

  render() {

  // console.log(this.state.results);
  const row =  this.state.results.map((data,i) =>                                                                                                                                                                                                                                                                                                                                                                                                                         
   
  
    <tr>
	  <td onClick ={this.handleChange} key ={data.id_ls} >{data.name_ls}</td>
      <td >{data.age_ls}</td>
     	<td >{data.nominee_ls}</td>
     	<td >{data.relation_ls}</td>
      <td >{data.course_ls}</td>
     	<td >{data.weeks_ls}</td>
     	<td >{data.s1_ls}</td>
      <td >{data.s2_ls}</td>
     	<td >{data.s3_ls}</td>
     	<td >{data.s4_ls}</td>
      <td >{data.s5_ls}</td>
     	<td >{data.s6_ls}</td>
     	<td >{data.s7_ls}</td>
		  <td >{data.s8_ls}</td>

     	<td><button onClick = {this.handleCLick} name = {i} id ={data.id_ls}>Remove</button></td>
     	<td><button onClick = {this.handleUpdate} name = {i} id={data.id_ls}>Update</button> <button onClick = {this.handleRefresh} id={data.id_ls}>Refresh</button> </td>
    </tr>

    );
    return (
      <tbody >{row}</tbody>
    );
  }
}

export default TableRow