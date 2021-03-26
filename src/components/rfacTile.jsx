import { determineImage } from '../utils/determineImage'

const Tile = ({
    status,
    updateTileMethod
}) => {
    return (
        <td className="image-container" onClick={() => updateTileMethod()}>
            <span />
            <img className="tile" src={determineImage(status)} alt={status.length === 2 ? "Path" : status} />
            <span />
        </td>
    )
}

export default Tile