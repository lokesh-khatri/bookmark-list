import { connect } from 'react-redux';
import BookmarkList from '../components/BookmarkList';
import { editingBookmark, deleteBookmark, updateBookmark} from "../actions";

const mapStateToProps = state => ({
  bookmarks: state
});

const mapDispatchToProps = dispatch => ({
  onEdit: index => dispatch(editingBookmark(index)),
  onUpdate: (url, index) => dispatch(updateBookmark(url, index)),
  onRemove: index => dispatch(deleteBookmark(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList);
