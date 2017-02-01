import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC003XUydPr0cJmLkuLXWq4fiD3_z7v3MI';

// Create New React Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos : [] };

    YTSearch({ key: API_KEY, term: 'hello' }, (videos) => {
      this.setState({ videos });
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Render Component to put it's HTML into a DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
