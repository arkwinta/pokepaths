// a reasonable limit to prevent crashing 
export const MAX_MAP_SIZE = "100"

export const GENERIC_ERROR_MESSAGE = "Path cannot be found, a rescue squad must be dispatched"

// all states the tiles can be in
// each are tied to an image

export const TILE_STATUS = {
    OBSTRUCTED: "OBSTRUCTED",
    START: "START",
    AVAILABLE: "AVAILABLE",
    FINISH: "FINISH",
    HORIZONTAL: "HORIZONTAL_PATH",
    VERTICAL: "VERTICAL_PATH",
    DR: "DR",
    DL: "DL",
    UR: "UR",
    UL: "UL",
    RD: "RD",
    RU: "RU",
    LU: "LU",
    LD: "LD"
}

