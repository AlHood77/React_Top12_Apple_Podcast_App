import React from 'react';

const Podcast = ({artworkUrl100, name, artistName, url }) => (
    
    
        
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={artworkUrl100} alt=""/>
                    </div>
                    <div className="card-back">
                        <h1>{name}</h1>
                        <ul>
                            <li>{artistName}</li>
                            <li><a target="_blank" href={url}>Podcast Link</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            
       
    
)

export default Podcast;