// A Board - Contains 9 squares - 3 rows of 3
class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>
        <div className="board-row">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="board-row">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </div>
    )
  }
}

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

// Visulize the data - we don't want to put the number of the square in the square - we want the players mark!
// [0,1,2,3,4,5,6,7,8] - index of the array (0 based)
// ReactJS gives components `state` - lets use that!
//---------
// 1) add constructor and state
// 2) grab the value of the square from `squares[i]`
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

// use the onClick to set the `squares[i] to a value
// write handleClick()
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({
      squares: squares
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

// DO NOT STEAL
// If you click an already occupied box, it overwrites, stop that!
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


// WINNING!!!
// Ask class about how we can determine a winner...
// Lead them to think about what makes a win...
// Draw the lines on the board
// Arrange the winners in groups of square indexes
// 8 possible ways .... - | / \ 
/*
        * 3 in a row, how in our array can we come up with 3 in a row?
          * 0,1,2
          * 3,4,5
          * 6,7,8
          * 0,3,6
          * 1,4,7
          * 2,5,8
          * 0,4,8
          * 2,4,6
        * if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          * this is a bit of shorthand, but it is saying, for each of those square #s in our `WINNERS`, check that
          * if square[a] IS TRUTHY
          * AND
          * if square[a] IS EQUAL TO square[b]
          * AND
          * if square[a] IS EQUAL TO square[c]
*/

// 1) make `calculateWinner`
// 2) check for winner in Board render, if winner, change the status
// 3) But the game can still be played??? Check calculateWinner in handleClick to stop
class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        squares: Array(9).fill(null),
        isXNext: true
      }
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice()
      // 3
      if (calculateWinner(squares) || squares[i]) {
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
        // 2  
      const winner = calculateWinner(this.state.squares)
      let status
      if (winner) {
        status = `${winner} WINS`
      } else {
        status = 'Next Player: ' + (this.state.isXNext ? 'X' : 'O')
      }
  
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

  // 1
  const calculateWinner = squares => {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    for (let i = 0; i < winners.length; i++) {
      const [a, b, c] = winners[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }