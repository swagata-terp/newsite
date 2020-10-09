import React, {Component} from 'react'
import { connect } from 'react-redux'

import {Link} from 'react-router-dom'


class Header extends Component {

    googleOAuth() {
        console.log(this.props.auth)
        switch(this.props.auth) {
            case null:
                return <li>Youre not Welcome Swagata</li>;
            case false:
                return <li><a href = '/auth/google'>Login With Google</a></li>
            default: return [
                 <li key = "1" style = {{margin: '0 10px'}}>Welcome {this.props.auth.firstName}</li>,
                 <li key = "2" style ={{margin: '0 10px'}}><a href = '/api/logout'>Logout</a></li>

            ]
        }
    }

    render() {
        return (
            <nav>
                <div className = "nav-wrapper">
                    <a className="left brand-logo">
                        Swagata's Blog
                    </a>
                    {/* <Link to ={this.props.auth ? '/': '/'} className = "left brand-logo" >Swagata's Blog</Link> */}
                    <ul className = "right">
                        {this.googleOAuth()}
                    </ul>

                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {

    return { auth}
}

export default connect (mapStateToProps) (Header)