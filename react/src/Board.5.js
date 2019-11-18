// TAKE TURNS!!!
// Every click makes an X ... what about the Os?!?!?!
// 1) Add `isXNext` to state
// 2) Update `handleClick` to use the `isXNext` to determine who to mark
// 3) Toggle `isXNext`
// 4) Add status message to the board, so we know who is up next!
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      // 1
      isXNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    // 2
    squares[i] = this.state.isXNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      //3
      isXNext: !this.state.isXNext
    })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    // 4
    let status = `Next Player: ${this.state.isXNext ? 'X' : '0'}`

    return (
      <div>
        <div className="status">{status}</div>
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