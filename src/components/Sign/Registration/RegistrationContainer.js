import { connect } from "react-redux";
import { logoutUser } from "../../../store/actions/user";
import Registrations from './Registration'

const mapStateToProps = (state) => ({
    isAuth: !!state.user.token
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Registrations);