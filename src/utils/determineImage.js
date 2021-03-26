import { TILE_STATUS } from '../config/const'
import Start from '../images/bulbasaur.png'
import Finish from '../images/finishtile.png'
import Grass from '../images/grasstile.png'
import Rock from '../images/rocktile.png'
import GrassTileHorizontal from '../images/grasstileHorizontal.png'
import GrassTileVertical from '../images/grasstileVertical.png'
import DR from '../images/grasstileDR.png'
import DL from '../images/grasstileDL.png'
import RD from '../images/grasstileRD.png'
import UR from '../images/grasstileUR.png'

export function determineImage(status) {
    let imageSrc
    switch (status) {
        case TILE_STATUS.OBSTRUCTED:
            imageSrc = Rock
            break;
        case TILE_STATUS.START:
            imageSrc = Start
            break;
        case TILE_STATUS.FINISH:
            imageSrc = Finish
            break;
        case TILE_STATUS.AVAILABLE:
            imageSrc = Grass
            break;
        case TILE_STATUS.HORIZONTAL:
            imageSrc = GrassTileHorizontal
            break;
        case TILE_STATUS.VERTICAL:
            imageSrc = GrassTileVertical
            break;
        // visually there is no difference between the paired states below
        case TILE_STATUS.DR:
        case TILE_STATUS.LU:
            imageSrc = DR
            break;
        case TILE_STATUS.DL:
        case TILE_STATUS.RU:
            imageSrc = DL
            break;
        case TILE_STATUS.RD:
        case TILE_STATUS.UL:
            imageSrc = RD
            break;
        case TILE_STATUS.LD:
        case TILE_STATUS.UR:
            imageSrc = UR
            break;
        default:
            imageSrc = ""
            break;
    }

    return imageSrc

}