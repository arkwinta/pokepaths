import Start from '../images/bulbasaur.png'
import Finish from '../images/finishtile.png'
import Grass from '../images/grasstile.png'
import Rock from '../images/rocktile.png'

export const HelperText = () => (
    <div class="helper-text-container">
        <div>
            Click the tiles to make the map reflect your situation!
        </div>
        <div class="key-text">
            <img src={Grass} class="image-key" />
            Grass indicates a tile is available to be traversed
        </div>
        <br />
        <div class="key-text">
            <img src={Rock} class="image-key" />
            Stone indicates tiles that are impassable
        </div>
        <br />
        <div class="key-text">
            <img src={Start} class="image-key" />
            YOU ARE HERE
        </div>
        <br />
        <div class="key-text">
            <img src={Finish} class="image-key" />
            The checkered box is your destination
        </div>
    </div>
)