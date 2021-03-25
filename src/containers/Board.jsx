import React from 'react';
import Tile from '../components/Tile'
import { getDirections } from '../services/submit'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: [],
        }
    }

    handleNextState(state) {
        // the pattern for cycling through tile states when clicked
        let nextState
        switch (state) {
            case "Available":
                nextState = "Obstructed"
                break;
            case "Obstructed":
                nextState = "Start"
                break;
            case "Start":
                nextState = "Finish"
                break;
            case "Finish":
            default:
                nextState = "Available"
        }
        return nextState
    }
    // this function is passed to the tiles to easily manage the state
    updateTile = (x, y, state) => {
        this.setState(prevState => {
            const newGrid = [...prevState.grid]
            const newRow = [...prevState.grid[y]]
            newRow[x] = this.handleNextState(state)
            newGrid[y] = newRow
            return { grid: newGrid }
        })
        this.forceUpdate()
    }

    componentDidUpdate(prevProps) {
        // if the length of the grid is 0, or is different than the last one we need a new board
        if (this.state.grid.length === 0 || this.props.length !== prevProps.length) {
            this.setState({
                grid: Array(this.props.length).fill(0).map(element => Array(this.props.length).fill("Available"))
            })
        }
    }

    validateState() {
        // a function to ensure there is only one start and one end position
        // for most users the text information would suffice, but Pokemon aren't the biggest readers.
        // this function could be used to set the disabled state, by mapping through the rows, and running "finds"
    }

    getCoordinates(startOrFinish) {
        let x;
        let y;
        this.state.grid.map((rows, rowIndex) => {
            const columnIndex = rows.findIndex(el => el === startOrFinish)
            if (columnIndex > -1) {
                x = rowIndex
                y = columnIndex
            }
        })
        return { x, y }
    }

    getImpassibles() {
        const coords = [];
        this.state.grid.map((rows, rowIndex) => {
            rows.map((state, index) => {
                if (state === "Obstructed") {
                    coords.push({ x: rowIndex, y: index })
                }
            })
        })
        return coords
    }



    handleSubmit() {
        const request = {
            sideLength: this.props.length,
            impassables: this.getImpassibles(),
            startingLoc: this.getCoordinates("Start"),
            endingLoc: this.getCoordinates("Finish")
        }
        getDirections(request)
    }



    render() {
        return (
            <div>
                <table className="board">
                    <tbody>
                        {this.state.grid.map((rows, rowIndex) => {
                            return (
                                <tr>
                                    {rows.map((tile, index) => {
                                        return (<Tile status={rows[index]} xCoord={index} yCoord={rowIndex} updateTileMethod={this.updateTile} />)
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={() => this.handleSubmit()}> Help me! </button>
            </div>

        )
    }
}

export default Board;