import { connect } from 'react-redux';
import PostEdit from './PostEdit';
import { getPostById, EditPostRequest } from '../../../redux/postsRedux';

const mapStateToProps = (state, props) => ({
  ...getPostById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editPost: (post) => dispatch(EditPostRequest(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
