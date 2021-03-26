import React from 'react';
import Board from '../containers/Board'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            length: 0,
        }

    }

    handleDimensionUpdate = (event) => {
        const intput = parseInt(event.target.value)
        if (intput) {
            this.setState({
                length: intput
            })
        }
    }

    render() {
        return (
            <div>
                <h1> Welcome to Pokepaths! </h1>
                <h3> let's get you home </h3>
                <p>
                    What are the dimensions of your map?
                </p>
                <input
                    value={this.state.length}
                    onChange={event => this.handleDimensionUpdate(event)}
                    className="length-input"
                    type="number"
                    min="1"
                    max="100"
                />
                <Board length={this.state.length} />
            </div>
        )
    }
}