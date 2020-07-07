import React, { Component } from 'react';

class Podcast extends Component {
    
    render() {
        return (
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={this.props.artworkUrl100} alt=""/>
                    </div>
                    <div className="card-back">
                        <h1>{this.props.name}</h1>
                        <ul>
                            <li>{this.props.artistName}</li>
                            <li>{this.props.genres[0].name}</li>
                            <li><a target="_blank" href={this.props.url}>Podcast Link</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Podcast;