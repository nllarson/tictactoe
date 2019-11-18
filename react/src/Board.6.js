// DO NOT STEAL
// If you click an already occupied box, it overwrites, stop that!
// Any ideas on how to stop this?
// 1) Check if the square has a value, if it does, don't do the update in `handleClick`
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
    if (squares[i]) {
      return
    }
    squares[i] = this.state.isXNext ? 'X' : 'O'
    this.setState({
      squares: squares,
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