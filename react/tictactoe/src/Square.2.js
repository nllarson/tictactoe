// Pass data to it
class Square extends React.Component {
  render() {
    return <button className="square">{this.props.value}</button>
  }
}
ReactDOM.render(<Square value="O" />, document.getElementById('root'))
