import React, { Component } from 'react';
import PodcastList from '../components/PodcastList';
 

class PodcastContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            podcasts: []
         };
    }

    componentDidMount() {
        const url = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/gb/podcasts/top-podcasts/all/12/non-explicit.json'

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({podcasts: data.feed.results}))
    }

    render() {
        return (
            <>
            <h1>Top 12 &#x1F1EC;&#x1F1E7; Podcasts </h1>
            <div>
                <PodcastList podcasts={this.state.podcasts}></PodcastList>    
                </div>
            </>
        );
    }
}

export default PodcastContainer;