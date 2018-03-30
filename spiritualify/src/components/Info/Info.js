import React from 'react';

import classes from './Info.css'

const Info = (props) => {
    console.log(props)
    return (
        <div className={classes.Info}>
            <a href='http://localhost:8888'> Login to Spotify </a>
            <div>
                Now Playing: { props.playing.name }
            </div>
            <div>
                <img src={props.playing.albumArt} style={{ height: 150 }}/>
            </div>
            { props.loggedIn &&
                <button onClick={props.getInfo}>
                  Check Now Playing
                </button>
            }
        </div>
    )
}

export default Info
