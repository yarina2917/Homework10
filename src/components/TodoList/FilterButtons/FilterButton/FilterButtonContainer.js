import { connect } from "react-redux";
import { setVisibilityFilter } from "../../../../store/actions/todos";
import FilterButton from './FilterButton';

const mapStateToProps = (state) => ({
    activeFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
    filterTodo: (filter) => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);