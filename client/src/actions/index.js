import axios from 'axios'
import {FETCH_USER, FETCH_COMMENTS} from './types'

export const fetchUser = () => async dispatch => {
    
    const res = await axios.get('/api/current_user')
  
    dispatch({ type: FETCH_USER, payload: res.data })
 }

 export const submitComment = (comment,auth) => async dispatch => {
     
     const res = await axios.post('/api/newcomment', {comment, auth}).catch(error => {
        console.log("ERRRR:: ",error.response.data);
        
        });
     dispatch({type: null, payload: res.data})
 }

 export const fetchComments = () => async dispatch => {
    const res = await axios.get('/api/comments').catch(error => {
        console.log("ERRRR:: ",error.response.data);
        
        });
    dispatch({type: FETCH_COMMENTS, payload: res.data})
}

export const deleteComment = (id) => async dispatch => {
    
    const res = await axios.get(`/api/comments/delete/${id}`).catch(error => {
        console.log("ERRRR:: ",error.response.data);
        
        });
    dispatch({type: FETCH_COMMENTS, payload: res.data})
}
