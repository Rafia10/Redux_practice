import React from "react";
import SongDetail from "./songDetail";
import SongList from "./SongList";
import Counter from "./counter";
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
        <div className="column eight wide">
          <Counter />
        </div>
      </div>
    </div>
  );
};
export default App;
