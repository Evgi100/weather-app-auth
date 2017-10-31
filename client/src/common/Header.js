import React from 'react';
import {Link} from 'react-router-dom'; //Calling link to bind with router

class App extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to='/'>React weather project</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default App;