/* import { connect } from 'react-redux';
import Post from './Post'
import { getPostById } from '../../../redux/postsRedux';

const mapStateToProps = (state, props) => ({
  ...getPostById(state, props.match.params.id)
});

export default connect(mapStateToProps)(Post); */