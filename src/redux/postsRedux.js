//import axios from 'axios';

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
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const DELETE_POST = createActionName('DELETE_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addPost = payload => ({ payload, type: ADD_POST });
export const editPost = payload => ({ payload, type: EDIT_POST });
export const deletePost = payload => ({ payload, type: DELETE_POST });

/* thunk creators */

export const addPostRequest = (post) => {
  return (dispatch) => {
   /*  axios.post('http://localhost:3000/', { post })
    .then(response => {
      console.log(response);
      dispatch({
        type: 'ADD_POST',
        payload: response.data
      })
    })
    .catch(error => {
      console.log(error);
    }); */
    dispatch(addPost(post));
  }
}

export const EditPostRequest = (post) => {
  return (dispatch) => {

    dispatch(editPost(post));
  }
}

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
    case ADD_POST: {
      /* const posts = statePart.posts.concat(action.payload);
      return {
        ...statePart, posts
      }  */
      return {
        ...statePart,
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
      //return [...statePart, action.payload]
    }
    case EDIT_POST: {
      return statePart.data.map(element => {
        if (element.id !== action.payload.id) {
          return element;
        }

        const {...statePart} = action.payload;

        return ({...statePart})
      });
    }
    default:
      return statePart;
  }
};
