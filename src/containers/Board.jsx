import React from 'react';
import Tile from '../components/Tile'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: Array(this.props.height).fill(0).map(element => Array(this.props.width).fill("AVAILABLE"))
        }
    }

    renderGrid = () =>
        this.state.grid.map((rows, rowIndex) => {
            return (
                <tr>
                    {rows.map((tile, index) => <Tile status={rows[index]} />)}
                </tr>
            )
        })



    render() {
        return (
            <table className="board">
                <tbody>
                    {this.renderGrid()}
                </tbody>
            </table>
        )
    }
}

export default Board;