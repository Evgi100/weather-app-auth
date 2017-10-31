import React from 'react';
const CommentBox = (props) => {
  //Calling a props function via inner function
  return (
    <div className="panel panel-default">
      <div className="panel-body">Written by:{props.user} - {props.text}
        <span
          className="glyphicon glyphicon-trash pull-right" onClick={()=>{props.deleteComment(props.item)}}></span>
      </div>
    </div>
  );
};
export default CommentBox;