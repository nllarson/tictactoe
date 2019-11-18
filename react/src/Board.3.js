// Visulize the data - we don't want to put the number of the square in the square - we want the players mark!
// [0,1,2,3,4,5,6,7,8] - index of the array (0 based)
// ReactJS gives components `state` - lets use that!
//---------
// 1) add constructor and state
// 2) grab the value of the square from `squares[i]`
// 3) change the renderSquare #s to 0 based
class Board extends React.Component {
  //1
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  //2
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => alert('You Clicked Square ' + i)}
      />
    )
  }

  render() {
    // 3
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}