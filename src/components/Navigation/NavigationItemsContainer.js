import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/user";
import NavigationItems from './NavigationItems';

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(NavigationItems);