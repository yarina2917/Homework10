import { connect } from "react-redux";
import userProfile from './UserProfile';
import { changeUserInfo } from "../../store/actions/user";

const mapStateToProps = (state) => ({
    token: state.user.token,
    userInfo: state.user.userInfo
});

const mapDispatchToProps = (dispatch) => ({
    changeUserInfo: (userInfo) => dispatch(changeUserInfo(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);