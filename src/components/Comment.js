import React, { Component, PropTypes } from 'react';

export class Comment extends Component {
  render() {
  	
  	const {author, children} = this.props;

 	return (
 		<div className="comment">
			<h2 className="commentAuthor">
		       { author }
		    </h2>
		    { children } 		
	     </div>
 	);	
  }	
}

Comment.propTypes = {
	author: PropTypes.string.isRequired,
	children: PropTypes.array.isRequired
}
