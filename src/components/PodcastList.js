import React, { Component } from 'react';
import Podcast from './Podcast'


class PodcastList extends Component {
    
    render() {

        const podcastNodes = this.props.podcasts.map(podcast => {
            return (
                <Podcast classname='cards'
                    key={podcast.id}
                    name={podcast.name}
                    artworkUrl100={podcast.artworkUrl100}
                    artistName={podcast.artistName}
                    genres={podcast.genres[0]}
                    url={podcast.url}
                    // artistUrl={podcast.artistUrl}


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