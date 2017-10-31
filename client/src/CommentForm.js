import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
        super(props);
        this.formSubmitFnc = this.formSubmitFnc.bind(this);
        //Create local CommentForm state
        this.state = {
            formInputuser: 'Visitor',
            formInputcomment: ''
        }
    }
    formSubmitFnc(event){
        event.preventDefault();
        this.props.addComment({text: this.state.formInputcomment, user: this.state.formInputuser});
        this.setState({ formInputcomment: ''});
    }
  render() {
    return (
      //Here we call the props function in arrow function so we wont evoke them. 
      //we can also use a function formSubmitFnc
      <form action="#" className="comment_form" onSubmit={this.formSubmitFnc}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter user"
            value={this.state.formInputuser}
            onChange={(event) => this.setState({formInputuser: event.target.value})}
            required/>
          <input
            type="text"
            className="form-control"
            placeholder="Enter comment"
            value={this.state.formInputcomment}
            onChange={(event) => this.setState({formInputcomment: event.target.value})}
            required/>
        </div>
        <button type="submit" className="btn btn-primary commentSend">Submit</button>
      </form>
    )
  }
}

export default CommentForm;
