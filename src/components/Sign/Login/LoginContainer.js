import { connect } from "react-redux";
import { loginUser } from "../../../store/actions/user";
import Login from './Login'

const mapStateToProps = (state) => ({
    isAuth: !!state.user.token
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: (token, userInfo) => dispatch(loginUser(token, userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);