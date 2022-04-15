//Action Creator
export const selectSong = (song) => {
  //Action to return
  return {
    //Every action has type and payload
    type: "SONG_SELECTED",
    payload: song,
    //what song trying to select
  };
};
export const increment = () => {
  return {
    type: "increment",
  };
};
export const decrement = () => {
  return {
    type: "decrement",
  };
};
