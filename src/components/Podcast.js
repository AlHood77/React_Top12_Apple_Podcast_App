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
                        </ul>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Podcast;