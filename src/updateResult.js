import axios from "axios";

function x(divData) {
    if (divData.method == "get") {
        axios
            .get(divData.url)
            .then((data) => {
                const formData = {
                    header: data.headers,
                    count: data.data.length,
                    data: data.data,
                };

                return (formData);
            })
            .catch((e) => {
                console.log(e);
                return ({
                    stauts: "loading..."
                })
            });
    }
}
export default x;