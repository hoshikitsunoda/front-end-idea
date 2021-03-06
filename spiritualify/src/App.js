import React, { Component } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

import Title from './components/Title/Title'
import Info from './components/Info/Info'
import Player from './components/Player/Player'

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      active: false
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying = () => {
    const currentState = this.state.active
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.album.artists[0].name, 
              albumArt: response.item.album.images[0].url,
              active: !currentState
            }
        });
      })
    
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Info
          playing={this.state.nowPlaying}
          loggedIn={this.state.loggedIn}
          getInfo={this.getNowPlaying} />
      </div>
    );
  }
}

export default App;
