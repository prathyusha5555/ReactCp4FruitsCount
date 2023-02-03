import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  incrementMangoes = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
      bananasCount: prevState.bananasCount,
    }))
  }

  incrementBananas = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount,
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount} </span> mangoes
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="images-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.incrementMangoes}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="button"
                type="button"
                onClick={this.incrementBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
