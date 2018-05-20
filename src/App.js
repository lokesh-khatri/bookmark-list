import React, { Component } from 'react';
import AddBookmark from './containers/AddBookmark';
import BookmarkListContainer from './containers/BookmarkListContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddBookmark/>
        <BookmarkListContainer/>
      </div>
    );
  }
}

export default App;