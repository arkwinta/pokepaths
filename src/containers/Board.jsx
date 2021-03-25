import React from 'react';
import Tile, { TILE_STATUS } from '../components/Tile'
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
            case TILE_STATUS.AVAILABLE:
                nextState = TILE_STATUS.OBSTRUCTED
                break;
            case TILE_STATUS.OBSTRUCTED:
                nextState = TILE_STATUS.START
                break;
            case TILE_STATUS.START:
                nextState = TILE_STATUS.FINISH
                break;
            case TILE_STATUS.FINISH:
            default:
                nextState = TILE_STATUS.AVAILABLE
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
                grid: Array(this.props.length).fill(0).map(element => Array(this.props.length).fill(TILE_STATUS.AVAILABLE))
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
            const index = rows.findIndex(el => el === startOrFinish)
            if (index > -1) {
                x = index
                y = rowIndex
            }
        })
        return { x, y }
    }

    getImpassibles() {
        const coords = [];
        this.state.grid.map((rows, rowIndex) => {
            rows.map((state, index) => {
                if (state === TILE_STATUS.OBSTRUCTED) {
                    coords.push({ x: index, y: rowIndex })
                }
            })
        })
        return coords
    }



    handleSubmit() {
        const request = {
            sideLength: this.props.length,
            impassables: this.getImpassibles(),
            startingLoc: this.getCoordinates(TILE_STATUS.START),
            endingLoc: this.getCoordinates(TILE_STATUS.FINISH)
        }
        const solutionPath = getDirections(request)
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
                                        return (
                                            <Tile
                                                status={rows[index]}
                                                updateTileMethod={() => this.updateTile(index, rowIndex, rows[index])}
                                            />
                                        )
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