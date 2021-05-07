import { connect } from 'react-redux';
import PostEdit from './PostEdit';
import { EditPostRequest } from '../../../redux/postsRedux';

const mapDispatchToProps = dispatch => ({
  editPost: (post) => dispatch(EditPostRequest(post)),
});

export default connect(null, mapDispatchToProps)(PostEdit);
