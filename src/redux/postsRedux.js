import axios from 'axios';

/* selectors */
export const getAll = ({posts}) => posts.data;
export const getPostById = ({ posts }, postId) => posts.data.filter(post => post.id === postId)[0]; 

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const POST_ADD = createActionName('POST_ADD');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addPost = payload => ({ payload, type: POST_ADD });

/* thunk creators */

export const addPostRequest = (post) => {
  return(dispatch) => {
    axios.post('http://localhost:3000/', { post })
    .then(response => {
      console.log(response);
      dispatch({
        type: 'POST_ADD',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
  }
}

/* export const addPostRequest = (post) => {
  return async dispatch => {

    dispatch(fet)
  }
} */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case POST_ADD: {
      const posts = statePart.posts.concat(action.payload);
      return {
        ...statePart, posts
      } 
    }
    default:
      return statePart;
  }
};
