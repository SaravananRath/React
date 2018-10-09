import React, { Component } from 'react';
// import logo from './logo.svg';

import styles from'./App.css';

import Table from './components/Table.js'
// import { BrowserRouter } from 'react-router-dom'


// import Table1 from './components/Table1'

var dataa = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];


var form;
var arr_ob;
// var obj4 = [{  }];
var obj1 = [{
    // name_ls:'Name',
    // age_ls:'Age',
    // nominee_ls:'Nominee',
    // relation_ls:'Raltion',
    // course_ls:'Course',
    // weeks_ls:'Weeks',
    // s1_ls:'Subject 1',
    // s2_ls:'Subject 2',
    // s3_ls:'Subject 3',
    // s4_ls:'Subject 4',
    // s5_ls:'Subject 5',
    // s6_ls:'Subject 6',
    // s7_ls:'Subject 7',
    // s8_ls:'Subject 8',
}];
var obj5 = [{
    // name_ls:'Name',
    // age_ls:'Age',
    // nominee_ls:'Nominee',
    // relation_ls:'Raltion',
    // course_ls:'Course',
    // weeks_ls:'Weeks',
    // s1_ls:'Subject 1',
    // s2_ls:'Subject 2',
    // s3_ls:'Subject 3',
    // s4_ls:'Subject 4',
    // s5_ls:'Subject 5',
    // s6_ls:'Subject 6',
    // s7_ls:'Subject 7',
    // s8_ls:'Subject 8',
}];


function validate(name, age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8) {

  return {
    name: name.length === 0 || !/^[A-Za-z\s]+$/.test(name),
    age: age.length === 0 || !/^[0-9]+$/.test(age)||age>30,
    nominee:nominee.length ===0 && age <= 18,
    relation:relation === '' && age <=18,
    course:course === '',
    weeks:weeks ==='',
    s1:s1 ==='',
    s2:s2 ==='',
    s3:s3 ==='',
    s4:s4 ==='',
    s5:s5 ==='',
    s6:s6 ==='',
    s7:s7 ==='' && weeks === 8,
    s8:s8 ==='' && weeks === 8,
  };
}

function move(name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8,i){ 

   var nom,rel,s7n,s8n;
   nom = nominee;
   rel = relation;
   s7n = s7;
   s8n = s8;

    if(nominee === ""){
      nom = 'Not Required';
      rel ='Not Required';
    }
    if(weeks ==="6"){
      s7n = 'Not Required';
      s8n = 'Not Required';
    }
  var arr_obj = { 
      id_ls:i,
      name_ls: name,
      age_ls: age,
      nominee_ls: nom,
      relation_ls:rel,
      course_ls:course,
      weeks_ls:weeks,
      s1_ls:s1,
      s2_ls:s2,
      s3_ls:s3,
      s4_ls:s4,
      s5_ls:s5,
      s6_ls:s6,
      s7_ls:s7n,
      s8_ls:s8n,
    }
    localStorage.setItem('Form'+i+'',JSON.stringify(arr_obj));



} 


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      nominee:'',
      relation:'',
      course:'',
      weeks:'',
      s1:'',
      s2:'',
      s3:'',
      s4:'',
      s5:'',
      s6:'',
      s7:'',
      s8:'',
      i:0,
      clicked:false,
      clicked5:false,
      updated:false,

      
      touched: {
        name: false,
        age: false,
        nominee:false,
        course:false,
        weeks:false,
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        s5:false,
        s6:false,
        s7:false,
        s8:false,

      },
    obj :[{
    name_ls:'Mark',
    age_ls:'25',
    nominee_ls:'Tony',
    relation_ls:'Father',
    course_ls:'B.E. ECE',
    weeks_ls:'6',
    s1_ls:'Science',
    s2_ls:'Maths',
    s3_ls:'English',
    s4_ls:'History',
    s5_ls:'Geograpgy',
    s6_ls:'Arts',
    s7_ls:'Politics',
    s8_ls:'Sports',
}],


    };
  }

    handleSubmit = (evt) => {
    evt.preventDefault();
    
    this.setState({i:this.state.i+1})
    const {name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8,i} = this.state;
    move(name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8,i);
  
  }
  
  handleChange = (evt) =>{
    const state = this.state
    state[evt.target.name]=evt.target.value;
    this.setState(state);
  }
  
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }


  
  canBeSubmitted() {
    const errors = validate(this.state.name, this.state.age);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  handleClick = (evt) => {
    
    this.setState({clicked:true})
    
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      obj1.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      } 
    //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            console.log(obj1);
} 
    
    dataFromChild = (val) => {
      // var data =[val];
      this.setState({
          i:val.id_ls,
          name: val.name_ls,
          age: val.age_ls,
          nominee:val.nominee_ls,
          relation:val.relation_ls,
          course:val.course_ls,
          weeks:val.weeks_ls,
          s1:val.s1_ls,
          s2:val.s2_ls,
          s3:val.s3_ls,
          s4:val.s4_ls,
          s5:val.s5_ls,
          s6:val.s6_ls,
          s7:val.s7_ls,
          s8:val.s8_ls,
        })
      this.setState({clicked5:true});
      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      obj5.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      } 
    }




  
  render() {
    const errors = validate(this.state.name, this.state.age,this.state.nominee,this.state.relation,this.state.course,this.state.weeks,this.state.s1,this.state.s2,this.state.s3,this.state.s4,this.state.s5,this.state.s6,this.state.s7,this.state.s8);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const checkAge= (this.state.age ==='' || this.state.age > 18) || !(/^[0-9]+$/.test(this.state.age))
    const val = parseInt(this.state.weeks);
    const weeeks = val === 8;
    const weaks = val === 6;
    
    const shouldMarkError = (field) => {
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
    var i=0;
    return hasError ? shouldShow : false;

    };

    


    
    return (

      <div>
      <form onSubmit={this.handleSubmit}>
        <input
          className={shouldMarkError('name') ? "error" : ""}
          type="text"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleChange}
          onBlur={this.handleBlur('name')}
          name='name'
        />
        <input
          className={shouldMarkError('age') ? "error" : ""}
          type="age"
          placeholder="Enter Age"
          value={this.state.age}
          onChange={this.handleChange}
          onBlur={this.handleBlur('age')}
          name='age'
        />
        <div className = {checkAge?"hidden":""}>
        <input
          className={shouldMarkError('nominee') ? "error" : ""}
          type="name"
          placeholder="Enter Nominee"
          value={this.state.nominee}
          onChange={this.handleChange}
          onBlur={this.handleBlur('nominee')}
          name='nominee'

        />
        <select
          className={shouldMarkError('relation') ? "error" : ""}
          value={this.state.relation}
          name='relation'
          onChange={this.handleChange}
          onBlur={this.handleBlur('relation')}
        ><option value="">Choose Relation</option>
          <option value="Father">Father</option>
          <option value="Mother">Mother</option>
          <option value="Guardian">Guardian</option>

        </select>

    </div>
    <br/>

        <select
          className={shouldMarkError('course') ? "error" : ""}
          value={this.state.course}
          name='course'
          onChange={this.handleChange}
          onBlur={this.handleBlur('course')}
        ><option value="">Choose Course</option>
          <option value="B.E. ECE">B.E. ECE</option>
          <option value="B.E. IT">B.E. IT</option>
          <option value="B.E. CSE">B.E. CSE</option>
          <option value="B.E. MECH">B.E. MECH</option>
          <option value="B.E. CIVIL">B.E. CIVIL</option>
        </select><br/><br/>
                
          <select
          className={shouldMarkError('weeks') ? "error" : ""}
          value={this.state.weeks}
          name='weeks'
          onChange={this.handleChange}
          onBlur={this.handleBlur('weeks')}
        ><option value="">Choose Weeks</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select><br/><br/>

         <div className ={weaks?"":"hidden"} >

        <input
        className={shouldMarkError('s1') ? "error" : ""}
        type = {"text"}
        name = {'s1'}
        value = {this.state.s1}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 1'}
        onBlur={this.handleBlur('s1')}
    /><br/>
        <input
        className={shouldMarkError('s2') ? "error" : ""}
        type = {"text"}
        name = {'s2'}
        value = {this.state.s2}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 2'}
        onBlur={this.handleBlur('s2')}
    /><br/>
           <input
       className={shouldMarkError('s3') ? "error" : ""}
        type = {"text"}
        name = {'s3'}
        value = {this.state.s3}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 3'}
        onBlur={this.handleBlur('s3')}
    /><br/>
           <input
        className={shouldMarkError('s4') ? "error" : ""}
        type = {"text"}
        name = {'s4'}
        value = {this.state.s4}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 4'}
        onBlur={this.handleBlur('s4')}
    /><br/>
               <input
        className={shouldMarkError('s5') ? "error" : ""}
        type = {"text"}
        name = {'s5'}
        value = {this.state.s5}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 5'}
        onBlur={this.handleBlur('s5')}
    /><br/>
               <input
        className={shouldMarkError('s6') ? "error" : ""}
        type = {"text"}
        name = {'s6'}
        value = {this.state.s6}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 6'}
        onBlur={this.handleBlur('s6')}
    /><br/>
    </div>
       <div className ={weeeks?"":"hidden"} >

                <input
        className={shouldMarkError('s1') ? "error" : ""}
        type = {"text"}
        name = {'s1'}
        value = {this.state.s1}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 1'}
        onBlur={this.handleBlur('s1')}
    /><br/>
        <input
        className={shouldMarkError('s2') ? "error" : ""}
        type = {"text"}
        name = {'s2'}
        value = {this.state.s2}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 2'}
        onBlur={this.handleBlur('s2')}
    /><br/>
           <input
       className={shouldMarkError('s3') ? "error" : ""}
        type = {"text"}
        name = {'s3'}
        value = {this.state.s3}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 3'}
        onBlur={this.handleBlur('s3')}
    /><br/>
           <input
        className={shouldMarkError('s4') ? "error" : ""}
        type = {"text"}
        name = {'s4'}
        value = {this.state.s4}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 4'}
        onBlur={this.handleBlur('s4')}
    /><br/>
               <input
        className={shouldMarkError('s5') ? "error" : ""}
        type = {"text"}
        name = {'s5'}
        value = {this.state.s5}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 5'}
        onBlur={this.handleBlur('s5')}
    /><br/>
               <input
        className={shouldMarkError('s6') ? "error" : ""}
        type = {"text"}
        name = {'s6'}
        value = {this.state.s6}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 6'}
        onBlur={this.handleBlur('s6')}
    /><br/>
               <input
        className={shouldMarkError('s7') ? "error" : ""}
        type = {"text"}
        name = {'s7'}
        value = {this.state.s7}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 7'}
        onBlur={this.handleBlur('s7')}
    /><br/>
               <input
        className={shouldMarkError('s8') ? "error" : ""}
        type = {"text"}
        name = {'s8'}
        value = {this.state.s8}
        onChange = {this.handleChange}
        placeholder = {'Enter Subject 8'}
        onBlur={this.handleBlur('s8')}
    /><br/>

   
    </div>

        <button disabled={isDisabled}>Sign up</button>

      </form>
      
       <button className='table_button' onClick={this.handleClick}>Show Table</button>
      
      {this.state.clicked ? <div><Table dataFromChild={this.dataFromChild} data = {obj1}/><div className="App">
     
      </div></div>:<div></div>}


      
   
      </div>

    )
  }
}

export default App;
         
          // <ul>{listItems}</ul>
    //         <div className ={this.state.status?"hidden":""} >
    
    // </div>
       // <p className="Table-header">Basic Table</p>
        // <Table1 data={obj1}/>
