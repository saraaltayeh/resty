const first = []
export default function historyReducer(state = first, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case "ADD":
            const url = payload.divData.url;
            const method = payload.divData.method;
            
            return ([...state, [{
                url: url,
                method: method,
                result: payload.data
            }]]);
    }
}
export function add(last) {
    return {
        type: "ADD",
        payload: last,

    }
}