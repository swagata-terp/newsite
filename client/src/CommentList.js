import React, {Component} from 'react'
import { connect } from 'react-redux'
import {fetchComments, fetchUser, deleteComment} from './actions'
class CommentList extends Component {



    componentDidMount() {
        this.props.fetchComments()
    }

    //got this from stack overflow
    //https://stackoverflow.com/questions/13459866/javascript-change-date-into-format-of-dd-mm-yyyy/13460045
     convertDate(inputFormat) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(inputFormat)
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
      }
      renderDelete(comment) {
        //   console.log("my id " + this.props.auth._id )
        //   console.log("comment id " + user )
          if(this.props.auth._id === comment._user ) {
            return <button className="secondary-content" onClick = {() => this.props.deleteComment(comment._id)}><i class="material-icons">delete</i></button>
          } 
      }

    renderComments() {
        const comments = this.props.comments
        console.log(comments)
        return comments.map(comment => {
            return (
                <li className = "collection-item avatar" style = {{margin: '0 0 0 10px'}}>
                <img src={comment.icon} alt ="" className = "circle valign"></img>
                <span className = "title" >{comment.name}</span>
                <p>{this.convertDate(comment.date)}</p> <br/>
                <p>{comment.text}</p>
                {this.renderDelete(comment)}
            </li>
            )
        })
    }

    render() {
        return (

                <div>
                    <ul className = "collection">
                    {this.renderComments()}
                    </ul>
                </div>
            
        )
    }
}


function mapStateToProps({ comments, auth }) {

    return { comments, auth }
}

export default connect(mapStateToProps, { fetchComments, fetchUser, deleteComment })(CommentList)