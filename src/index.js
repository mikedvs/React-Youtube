import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAvwCKvOSYt1Jx2iXlYc_tRmW5Ikj0UYYQ';

// Create a new decodeURIComponent. 
// This component should produce some HTML

class App extends Component  {
    constructor(props) {

        YTSearch({key: API_KEY, term: 'Andy Irons'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });

        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }
    render () {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

// Take this component's generated HTML and
// put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));