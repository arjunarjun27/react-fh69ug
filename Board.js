import React from "react";
import Square from "./Square";
export default class Board extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
          <Square value={3} />

        </div>
        <div>
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div>
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    );
  }
}
