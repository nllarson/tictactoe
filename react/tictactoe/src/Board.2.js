// Let's add an onClick method to each...
// This is going to get a bit long winded....
// Lets make those squares easier to build! - Extract a method
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} onClick={() => alert('You Clicked Square ' + i)} />
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    )
  }
}