// Build a Square Component

class Square extends React.Component {
  render() {
    return <button className="square">X</button>
  }
}
ReactDOM.render(<Square />, document.getElementById('root'))
