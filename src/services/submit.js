import api from './API';

export function getDirections(request) {
    console.log(request)
    api.post("/find-path", request, {
        headers: {
            accept: "application/json",
            'content-type': "application/json; charset=utf-8"
        }
    }).then(response => {
        return response.data
    })
}