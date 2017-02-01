import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC003XUydPr0cJmLkuLXWq4fiD3_z7v3MI';

// Create New React Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
     };

    YTSearch({ key: API_KEY, term: 'hello' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Render Component to put it's HTML into a DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
