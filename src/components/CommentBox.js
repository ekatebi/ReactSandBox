import $ from 'jquery';
import React, { Component } from 'react';
import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';

export class CommentBox extends Component {

constructor() {
 super();
 this.render = this.render.bind(this);
 this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
 this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
 this.componentDidMount = this.componentDidMount.bind(this);
 this.state = { data: [] };
}

loadCommentsFromServer() {

	var url = this.props.url + '/' + this.props.subject + '.json'; 

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
      	if (data !== undefined) {
        	this.setState({data: data});
    	}
        console.log('loadCommentsFromServer:', data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });

}

handleCommentSubmit(comment) {

	console.log('post:', comment);
	var url = this.props.url + '/' + this.props.subject + '.json'; 

    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify(comment),
      success: function(data) {
      	/*
      	if (data !== undefined) {
        	this.setState({data: data});
    	}
    	*/
        console.log('handleCommentSubmit:', data);

        this.loadCommentsFromServer();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });

  }

  componentDidMount() {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
 	return (
 		<div className="commentBox">
			<h1>Comments</h1>
			<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			<CommentList data={this.state.data} />
 		</div>
 	);
  }

}
