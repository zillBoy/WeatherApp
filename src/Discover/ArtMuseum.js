import React from 'react';
import './ArtMuseum.css';

const ArtMuseum = porps => {
    return(
        <div id="art-museum-div">
            <div id="reviewDiv">
                <img id="foundationofwealthImg" src={require('../Image/foundationofwealth1.png')} alt="artMuseum"/>
            </div>
            <div id="artandcultureImgDiv">
                <img id="artandcultureImg" src={require('../Image/artandculture1.png')} alt="artandculture"/>    
            </div>
        </div>
    );
}

export default ArtMuseum;