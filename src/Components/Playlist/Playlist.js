import React from 'react';
import {TrackList} from './TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component{
constructor(){
  super(props);
  this.onNameChange = this.onNameChange.bind(this);
}

handleNameChange(){
  return onNameChange();
}

  render(){
    return(
      <div className="Playlist">
  <input defaultValue="{'New Playlist'}" onChange={this.handleNameChange}/>
  <TrackList Tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
    )
  }
}
export default Playlist;
