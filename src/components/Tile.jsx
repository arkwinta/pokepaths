import React from 'react';
import Start from '../images/bulbasaur.png'
import Finish from '../images/finishtile.png'
import Grass from '../images/grasstile.png'
import Rock from '../images/rocktile.png'

// has a status prop to determine what is rendered
// available - A
// obstructed - X
// start - S
// path - line calculation? based on the API response
// end 
class Tile extends React.Component {
    constructor(props) {
        super(props)
    }

    determineState(status) {
        let imageSrc
        switch (status) {
            case "Obstructed":
                imageSrc = Rock
                break;
            case "Start":
                imageSrc = Start
                break;
            case "Finish":
                imageSrc = Finish
                break;
            default:
                imageSrc = Grass
        }
        return imageSrc

    }

    render() {
        return (
            <td className="image-container">
                <img className="tile" src={this.determineState(this.props.status)} />
            </td>
        )
    }
}

export default Tile;