// Build a Square Component

class Square extends React.Component {
  render() {
    return <button className="square">X</button>
  }
}
ReactDOM.render(<Square />, document.getElementById('root'))

// Pass data to it
class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>
  }
}
ReactDOM.render(<Square value="O" />, document.getElementById('root'))

// Handle a click
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert('HELLO!')}>
        {this.props.value}
      </button>
    )
  }
}
ReactDOM.render(<Square value="0"/>, document.getElementById('root'))

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
