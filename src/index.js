import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import Router, {Route} from 'react-router';
import { Router, Route, Link, browserHistory } from 'react-router'
import { App, AppRed, AppBlue } from './App';
import { CommentBox } from './components/CommentBox';

/*
 var data = [
 	{id: 0, author: "Pete Hunt", text: "This is one comment"},
  	{id: 1, author: "Jordan Walke", text: "This is *another* comment"}
  ];
*/

var baseUrl = 'https://burning-heat-1478.firebaseio.com/comments';

export class CommentBoxEx extends Component {
	constructor() {
 		super();
 		this.render = this.render.bind(this);
	}
  
  	render() {
 		return (
			<CommentBox url={ baseUrl } subject='blog-a' />
 		);
  	}
}

/*
<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
*/

const routes = (
<Route path="/">
  <Route path="red" component={AppRed} />
  <Route path="cb" component={CommentBoxEx} />
  <Route path="blue" component={AppBlue} />
  <Route path="pink" component={App} />
  <Route path="app" component={App} />
  <Route path="*" component={AppBlue}/>
</Route>);

//  <DefaultRoute name="home" handler={AppBlue} />

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,  
//<CommentBox url={ baseUrl } subject='blog-a' />,
  document.getElementById('root')
);

