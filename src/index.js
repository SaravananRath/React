import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// ReactDOM.render((
// 	<Router>
// 		<div>
// 			<Route exact path ='/' component={App}/>
// 			<Route path ='/table' component ={Table}/>
// 		</div>
// 	</Router>


// 	),document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
