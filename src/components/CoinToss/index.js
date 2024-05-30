// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, isHeads: true}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const isHeadsResult = tossResult === 0
    const headsResult = tossResult === 0 ? 1 : 0
    const tailsResult = tossResult === 0 ? 0 : 1
    this.setState(prevState => ({
      total: prevState.total + 1,
      heads: prevState.heads + headsResult,
      tails: prevState.tails + tailsResult,
      isHeads: isHeadsResult,
    }))
  }

  render() {
    const {total, heads, tails, isHeads} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            className="image"
            alt="toss result"
            src={
              isHeads
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
