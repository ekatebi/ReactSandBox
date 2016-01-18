import React, { Component, PropTypes } from 'react';

export class CommentForm extends Component {

constructor() {
 super();
 this.render = this.render.bind(this);
 this.handleAuthorChange = this.handleAuthorChange.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 this.state = { author: '', text: '' };
}
  
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});

    // TODO: send request to the server
    this.setState({author: '', text: ''});
  }

  render() {

  	const { value, onChange, options } = this.props

 	return (
 	  <div className="commentForm">
		<form className="commentForm" onSubmit={this.handleSubmit}>
           <input type="text" onChange={this.handleAuthorChange} placeholder="Your name" />
           <input type="text" onChange={this.handleTextChange} placeholder="Say something..." />
           <input type="submit" value="Post" />
        </form> 		
      </div>
 	);	
  }	

}

CommentForm.propTypes = {
  posts: PropTypes.array.isRequired
}
