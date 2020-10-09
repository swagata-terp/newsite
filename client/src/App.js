import React, {Component} from 'react';
import {connect } from 'react-redux'
import * as actions from './actions'
import Header from './Header'
import Newspage from './Newspage';
import Comments from './Comments'
class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  state = {toggledComments: false}

  handleComments() {
    const comments = true
    this.setState({toggledComments: comments})

  }

  render() {
    let comment;
    if(this.state.toggledComments) {
      comment = <Comments/>
    } else {
      comment = null
    }
    return (

      <div className="container">
          <Header/>
          <Newspage/>
          <div className = "container">
            <div className = "row">
                <div className = "center-align">
                  <div className ="col s12 waves-effect waves-light btn-large " onClick ={() => this.setState({toggledComments: true})} >Comments </div>
                </div>
              {comment}
            </div>
          </div>
         
      </div>
  
    );
  }
}
//

export default connect(null, actions) (App);
