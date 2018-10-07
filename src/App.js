import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table.js";

var obj1 = [{}];
var obj5 = [{}];

function validate(name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8) {
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

function move(name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8,i) {
  var nom, rel, s7n, s8n;
  nom = nominee;
  rel = relation;
  s7n = s7;
  s8n = s8;

  if (nominee === "") {
    nom = "Not Required";
    rel = "Not Required";
  }
  if (weeks === "6") {
    s7n = "Not Required";
    s8n = "Not Required";
  }
  var arr_obj = {
    id_ls: i,
    name_ls: name,
    age_ls: age,
    nominee_ls: nom,
    relation_ls: rel,
    course_ls: course,
    weeks_ls: weeks,
    s1_ls: s1,
    s2_ls: s2,
    s3_ls: s3,
    s4_ls: s4,
    s5_ls: s5,
    s6_ls: s6,
    s7_ls: s7n,
    s8_ls: s8n
  };
  localStorage.setItem("Form" + i + "", JSON.stringify(arr_obj));
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      nominee: "",
      relation: "",
      course: "",
      weeks: "",
      s1: "",
      s2: "",
      s3: "",
      s4: "",
      s5: "",
      s6: "",
      s7: "",
      s8: "",
      i: 0,
      clicked: false,
      clicked5: false,
      updated: false,
      touched: {
        name: false,
        age: false,
        nominee: false,
        course: false,
        weeks: false,
        s1: false,
        s2: false,
        s3: false,
        s4: false,
        s5: false,
        s6: false,
        s7: false,
        s8: false,
        subjects:[]
      }
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ i: this.state.i + 1 });
    const { name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8,i } = this.state;
    move( name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8,i );
  };

  handleChange = evt => {
    this.setState({[evt.target.name]:evt.target.value});
  };

  handleBlur = field => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleClick = () => {
    this.setState({ clicked: true });
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      obj1.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  };

  dataFromChild = val => {
    this.setState({
      i: val.id_ls,
      name: val.name_ls,
      age: val.age_ls,
      nominee: val.nominee_ls,
      relation: val.relation_ls,
      course: val.course_ls,
      weeks: val.weeks_ls,
      s1: val.s1_ls,
      s2: val.s2_ls,
      s3: val.s3_ls,
      s4: val.s4_ls,
      s5: val.s5_ls,
      s6: val.s6_ls,
      s7: val.s7_ls,
      s8: val.s8_ls
    });
    this.setState({ clicked5: true });
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      obj5.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  };

  shouldMarkError = (field) => {
    const { name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8 } = this.state
    const errors = validate( name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8);
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
    return hasError ? shouldShow : false;
  };

  renderInputField = (field,type) => 
    <input
      className={this.shouldMarkError(`${field}`) ? "error" : ""}
      type={`${type}`}
      placeholder={`Enter ${field}`}
      value={this.state[field]}
      onChange={this.handleChange}
      onBlur={this.handleBlur(`${field}`)}
      name={`${field}`}
    />
   renderSubjectFields = () => {
      const { weeks } = this.state;
      let arr = []
      for(var i=0; i<weeks; i++){
        arr[i] = `s${i+1}`
      }
      return arr.map((s,i)=>
            <div key={i}>
              {this.renderInputField(s,"text")}
              <br/>
            </div>
            )
      }

  render() {
    const { name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8 } = this.state
    const errors = validate( name,age,nominee,relation,course,weeks,s1,s2,s3,s4,s5,s6,s7,s8)
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const checkAge =  age != "" && age < 18;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField('name','text')}
          {this.renderInputField('age','text')}
          {
            checkAge  &&  <div>
             {this.renderInputField('nominee','text')}
              <select
                className={this.shouldMarkError("relation") ? "error" : ""}
                value={this.state.relation}
                name="relation"
                onChange={this.handleChange}
                onBlur={this.handleBlur("relation")}
              >
                <option value="">Choose Relation</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Guardian">Guardian</option>
              </select>
            </div>
          }
          <br />
          <select
            className={this.shouldMarkError("course") ? "error" : ""}
            value={this.state.course}
            name="course"
            onChange={this.handleChange}
            onBlur={this.handleBlur("course")}
          >
            <option value="">Choose Course</option>
            <option value="B.E. ECE">B.E. ECE</option>
            <option value="B.E. IT">B.E. IT</option>
            <option value="B.E. CSE">B.E. CSE</option>
            <option value="B.E. MECH">B.E. MECH</option>
            <option value="B.E. CIVIL">B.E. CIVIL</option>
          </select>
          <br />
          <br />

          <select
            className={this.shouldMarkError("weeks") ? "error" : ""}
            value={this.state.weeks}
            name="weeks"
            onChange={this.handleChange}
            onBlur={this.handleBlur("weeks")}
          >
            <option value="">Choose Weeks</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
          <br />
          <br />
          {this.renderSubjectFields()}
          <button disabled={isDisabled}>Sign up</button>
        </form>

        <button className="table_button" onClick={this.handleClick}>
          Show Table
        </button>

        {this.state.clicked ? (
          <div>
            <Table dataFromChild={this.dataFromChild} data={obj1} />
            <div className="App" />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
