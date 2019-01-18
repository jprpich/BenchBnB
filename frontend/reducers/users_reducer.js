import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = {
        [action.user.id]: action.user
      };
      return merge({}, state, newUser)
  
    default:
      return state;
  }
};

export default usersReducer;