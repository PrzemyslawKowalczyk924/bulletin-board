import { connect } from 'react-redux';
import Post from './Post';
import { getPostById } from '../../../redux/postsRedux';
import { getUserInfo } from '../../../redux/userRedux';

const mapStateToProps = (state, props) => ({
  user: getUserInfo(state),
  ...getPostById(state, props.match.params.id),
});

export default connect(mapStateToProps)(Post);