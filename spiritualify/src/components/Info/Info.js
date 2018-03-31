import React from 'react';

import classes from './Info.css'

const Info = (props) => {
    console.log(props)
    return (
        <div className={classes.Info}>
            <a href='http://localhost:8888'> Login to Spotify </a>
            <div className={classes.Playing}>
                <div className={classes.Artist}>Now Playing: { props.playing.name }</div>
            </div>
            { props.loggedIn &&
                <button onClick={props.getInfo} className={props.playing.active ? classes.CheckPlayingActive : classes.CheckPlaying}>
                  {props.playing.active ? "Check Again" : "Check Now Playing"}
                </button>
            }
            <div>
                <img src={props.playing.albumArt} className={classes.Image}/>
            </div>
        </div>
    )
}

export default Info
