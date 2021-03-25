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
                <p>
                    What are the dimensions of your map?
                </p>
                <input value={this.state.length} onChange={event => this.handleDimensionUpdate(event)} className="length-input" />
                <Board length={this.state.length} />
            </div>
        )
    }
}