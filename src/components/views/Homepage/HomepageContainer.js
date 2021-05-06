import { connect } from 'react-redux';
import Homepage from './Homepage';
import { getAll } from '../../../redux/postsRedux';

const mapStateToProps = (state) => ({
  posts: getAll(state),
  //...getPostById(state, props.match.params.id),
  //trips: getFilteredTrips(state),
});

export default connect(mapStateToProps)(Homepage);