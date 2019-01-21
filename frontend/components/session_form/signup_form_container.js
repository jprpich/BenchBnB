import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {

    errors: Object.values(state.errors.session),
    formType: "signup",
    ownProps: ownProps
  };
};

const mdp = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  }
}

export default connect(msp, mdp)(SessionForm);
