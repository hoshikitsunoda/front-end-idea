import React from 'react';

import classes from './Info.css'

const Info = (props) => {
    console.log(props.loggedIn)
    return (
        <div className={classes.Info}>
            <a href='http://localhost:8888'> Login to Spotify </a>
            <div>
                Now Playing: { props.name }
            </div>
            <div>
                <img src={props.albumArt} style={{ height: 150 }}/>
            </div>
            { props.loggedIn &&
                <button clicked={props.getNowPlaying}>
                  Check Now Playing
                </button>
            }
        </div>
    )
}

export default Info
