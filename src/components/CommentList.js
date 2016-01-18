import React, { Component } from 'react';
import { Comment } from './Comment';

export class CommentList extends Component {

constructor() {
 super();
 this.render = this.render.bind(this);
 this.props = { data: {} };
}

  const { data } = this.props; 

  render() {
 
    console.log('CommentList', this.props.data);

    if (data === null)
    	return (
	 		<div className="commentList">
    	    </div>
    		);

    var obj = data;

//	let arr = Object.keys(obj).map((k) => obj[k]);
	let arr = Object.keys(obj).map((k) => {
		console.log('before k:', k, obj[k]);
		obj[k].id = k;
		console.log('after k:', k, obj[k]);
		return obj[k]
	});

    console.log('CommentList', arr);

  	var commentNodes = arr.map(comment => (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      ));

 	return (
 		<div className="commentList">
  			{commentNodes}
        </div>
 	);	
  }	
}

CommentList.propTypes = {
  data: PropTypes.Object
}
