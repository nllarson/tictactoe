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
