import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyCNL23nsKQ6Q4RcULZ9nXdi_J_wqVq_324";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        YTSearch({key: API_KEY, term: 'Messi'}, (videos) => {
            //ES6 Syntatic Sugar
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            }); 
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));