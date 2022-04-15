import { combineReducers } from "redux";

//Static list of song reducer
const songListReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "2:30",
    },
    {
      title: "All Star",
      duration: "3:30",
    },
    {
      title: "I want it that way",
      duration: "1:45",
    },
  ];
};

//Selected Song Reducer
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
const counterReducer = (count = 0, action) => {
  if (action.type === "increment") {
    return count + 1;
  } else if (action.type === "decrement") {
    return count - 1;
  }
  return count;
};
//Combine reducers
export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
  count: counterReducer,
});
