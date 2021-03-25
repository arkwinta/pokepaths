import api from './API';

export async function getDirections(request) {
    const response = await api.post("/find-path", request, {
        headers: {
            accept: "application/json",
            'content-type': "application/json; charset=utf-8"
        }
    })
    return response.data.moves
}