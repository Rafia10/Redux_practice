import React from "react";
import { connect } from "react-redux";

const songDetail = ({ song }) => {
  if (!song) {
    return <h3>Select a song</h3>;
  }
  console.log(song.title);
  return (
    <div>
      <h3>Details For:</h3>
      <b>Title:{song.title}</b>
      <br></br>
      <b>Duration:{song.duration}</b>
    </div>
  );
};
const mapToStateProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapToStateProps)(songDetail);
