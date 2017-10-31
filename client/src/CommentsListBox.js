import React from 'react';
import CommentForm from './CommentForm';
import CommentBox from './CommentBox';

class CommentsListBox extends React.Component {
  constructor(props) {
        super(props);
        //bind this to functions
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        //Declare local state
        this.state = {
            comments: props.comments
        }
    }
    addComment(str){
        this.setState(prevState => ({
            comments: prevState
                .comments
                .concat(str)
        }));
    };
    
    deleteComment(str){
        const newState = this.state.comments;
        if (newState.indexOf(str) > -1) {
            newState.splice(newState.indexOf(str), 1);
            this.setState({comments: newState})
        }
    };

  render() {
    const comments = this
      .state
      .comments
      .map((item, index) => <CommentBox
        item={item}
        deleteComment={this.deleteComment}
        {...item}
        key={index}/>)
    return (
      <div>
        <CommentForm addComment={this.addComment}/> {comments}
      </div>
    )
  }
}

export default CommentsListBox;