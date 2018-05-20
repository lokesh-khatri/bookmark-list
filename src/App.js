import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import AddBookmark from './containers/AddBookmark';
import BookmarkListContainer from './containers/BookmarkListContainer';


const styles = StyleSheet.create({
  app: {
    width: '80%',
    margin: '0 auto'
  }
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <AddBookmark/>
        <BookmarkListContainer/>
      </div>
    );
  }
}

export default App;