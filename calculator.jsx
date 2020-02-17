import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: '0'
    }
  }
  add = () => {
    const { count } = this.state
    if (count.indexOf('.') === -1) {
      this.setState({


        count: count + '.'

      })
    }
  }
  Handle = (digit) => {
    const { count } = this.state
    this.setState({
      count: count === '0' ? String(digit) : count + digit
    })
  }
  reset = () => {

    this.setState({
      count: '0'
    })
  }
  calci = () => {
    const { count } = this.state
    this.setState({
      count: eval(count)
    })
  }
  render() {
    return (
      <div className="overall">
        <h1 id="inp" >{this.state.count}</h1>
        <div className="btn">
          <button className="jj" onClick={() => this.Handle(1)}>1</button>
          <button  className="jj" onClick={() => this.Handle(2)}>2</button>
          <button  className="jj" onClick={() => this.Handle(3)}>3</button>
        </div>
        <div className="btn">
          <button  className="jj" onClick={() => this.Handle(4)}>4</button>


          <button  className="jj" onClick={() => this.Handle(5)}>5</button>
          <button  className="jj" onClick={() => this.Handle(6)}>6</button>
        </div>
        <div className="btn">
          <button className="jj" onClick={() => this.Handle(7)}>7</button>
          <button className="jj" onClick={() => this.Handle(8)}>8</button>

          <button className="jj" onClick={() => this.Handle(9)}>9</button>
        </div>
        <div className="btn">
          <button className="jj" onClick={() => this.Handle(0)}>0</button>
          <button className="jj" onClick={() => this.Handle('+')}>+</button>
          <button className="jj" onClick={() => this.Handle('-')}>-</button>
        </div>
        <div className="btn">
          <button className="jj" onClick={() => this.Handle('*')}>*</button>
          <button className="jj" onClick={() => this.Handle('/')}>/</button>
          <button className="jj" onClick={() => this.reset(1)}>c</button>
        </div>
        <div className="btn">
          <button className="jj" onClick={() => this.add()}>.</button>
          <button className="jj" onClick={() => this.calci()}>Calculate</button>
        </div>
      </div>
    )
  }
}

export default App
