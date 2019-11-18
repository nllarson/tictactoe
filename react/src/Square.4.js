// Pass the onclick in!
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}
ReactDOM.render(<Square  value="0" onClick={() => alert("Hello From Outside")}/>, document.getElementById('root'))

/*

So now we have a Square (a building block) that we can use over and over again to make our game!

So to build the next step, we will build a Board object.  This Board will handle putting all the Squares of a TicTacToe Board
together, and setting the square value.

We will take the same incremental process we used in building the Square to build the Board to complete our game!

*/
