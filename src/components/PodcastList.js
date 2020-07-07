import React, { Component } from 'react';
import Podcast from './Podcast'


class PodcastList extends Component {
    
    render() {

        const podcastNodes = this.props.podcasts.map(podcast => {
            return (
                <Podcast classname='cards'
                    name={podcast.name}
                    artworkUrl100={podcast.artworkUrl100}
                    artistName={podcast.artistName}
                    genres={podcast.genres[0].name}
                    url={podcast.url}


                >
                </Podcast>
            )
        })

        return (

            <div className="cards">
                {podcastNodes}
            </div>
        );
    }
}

export default PodcastList;