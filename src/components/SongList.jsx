import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends Component {
  //Helper render songs
  renderList() {
    return this.props.songs.map((song) => {
      //create new array songs
      return (
        //Return some jsx
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Songs List</h1>
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Take State object inside Redux Store and run some computation
  return {
    songs: state.songs,
  };
};
export default connect(mapStateToProps, { selectSong })(SongList); //First function returns the function and 2nd invoke the
//function that returns
