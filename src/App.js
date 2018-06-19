import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Child from './child/Child';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/react-router'>React Router</Link></li>
            <li><Link to='/leoashin'>LeoAshin</Link></li>
            <li><Link to='/justjavec'>justjavac</Link></li>
            <li><Link to='/reacttraining'>React Training</Link></li>
          </ul>
          <hr />
          <Route path='/:id' component={Child}></Route>
        </div>
      </Router>
    )
  }
}
export default App;