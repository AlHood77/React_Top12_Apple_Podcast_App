import React from 'react';

const Podcast = ({ artworkUrl100, name, artistName, genres, url }) => (
    
    
        
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={artworkUrl100} alt=""/>
                    </div>
                    <div className="card-back">
                        <h2>{name}</h2>
                        <ul>
                            <li>{artistName}</li>
                            <li>{genres.name}</li>
                            <li><a target="_blank" href={url}>Get Episodes Here</a></li>
                        </ul>
                            
                        
                    </div>
                </div>
            </div>
            
       
    
)

export default Podcast;