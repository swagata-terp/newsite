import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import { submitComment, fetchComments } from './actions/index'

//component that renders textbox based on login
//component that lists pervious comments

class Comments extends Component {

    state = { comment: "" }

    componentWillMount() {
        this.props.fetchComments()
    }

    handleInputComment() {
        this.props.submitComment(this.state.comment, this.props.auth)
        this.setState({comment: ""})
        this.props.fetchComments()

    }

    handleLogIn() {
        if (this.props.auth) {
            return (

                <div className="row">
                    <div className="input_field">
                        <textarea placeholder="Thoughts?" 
                            id="comments" type="text" value = {this.state.comment} 
                            className="materialize-textarea" 
                            onChange={e => this.setState({ comment: e.target.value })}
                            >
                        </textarea>
                        <label for= "comments"></label>

                    </div>
                    <div className="row">
                        <div className="center-align">
                            <button className="col s12 waves-effect waves-light btn-large " onClick={() => this.handleInputComment()} >Submit Comment </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <div className="row">
                        <div className="input_field">
                            <textarea placeholder="Log in to make comments!" id="first_name" type="text" disabled className="materialize-textarea" onChange={e => this.setState({ comment: e.target.value })}></textarea>

                        </div>
                    </div>
                </div>
            )

        }
    }

    render() {
        return (
            <div>
                {this.handleLogIn()}
                <CommentList />
            </div>
        )
    }

}




function mapStateToProps({ auth, comments }) {

    return { auth, comments }
}

export default connect(mapStateToProps, { submitComment, fetchComments })(Comments)