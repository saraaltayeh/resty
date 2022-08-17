const first = {
    url: "",
    method: "",
    result: []
}
export default function historyReducer(state = first, action) {
    const {
        type,
        payload
    } = action;
    // console.log("rrrrrrrrrrrr",payload.data);
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
    // console.log("add");
    // console.log("div ",divData);
    // console.log("resulit  ",data);
    return {
        type: "ADD",
        payload: last,

    }
}