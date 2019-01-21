import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: Object.values(state.errors.session),
    formType: "login",
    ownProps: ownProps
  };
};

const mdp = (dispatch) =>  {
  return {
    processForm: (user) => dispatch(login(user))
  }
}

export default connect(msp, mdp)(SessionForm);
