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
        this.state = {}
    }

    determineImage(status) {
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
            case "Available":
                imageSrc = Grass
                break;
            default:
        }
        return imageSrc

    }

    render() {
        return (
            <td className="image-container" onClick={() => this.props.updateTileMethod(this.props.xCoord, this.props.yCoord, this.props.status)}>
                <img className="tile" src={this.determineImage(this.props.status)} />
            </td>
        )
    }
}

export default Tile;