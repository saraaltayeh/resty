import React, { useState, useEffect, useReducer } from "react";
import "./app.scss";

import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Form from "./components/form/index";
import Results from "./components/results/results";
import History from "./components/history/history";
import axios from "axios";
import historyReducer, { add } from "./reducer";
const first = [
  {
    url: "",
    method: "",
    result: [],
  },
];
function App() {
  const [history, dispatch] = useReducer(historyReducer, first);
  const [data, setdata] = useState({
    response: "  ",
  });
  const [divData, setdivData] = useState({
    method: "get",
    // url: "",
  });
  const [isHistory, setIsHistory] = useState(false);

  useEffect(() => {
    if (divData.method == "get" && isHistory == false) {
      axios
        .get(divData.url)
        .then((data) => {
          // console.log("clicked");
          
          const formData = {
            header: data.headers,
            count: data.data.length,
            data: data.data,
          };

          setdata(formData);
          const last = {
            divData: divData,
            data: data,
          };
      console.log("dispatch",data);
          dispatch(add(last));
        })
        .catch((e) => {
          console.log(e);
          setdata({ stauts: "loading..." });
        });
    }

    if (divData.method == "post" && isHistory == false) {
      axios
        .post(divData.url, divData.body)
        .then(function (data) {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };

          setdata(formData);
          const last = {
            divData: divData,
            data: data,
          };
      console.log("dispatch",data);
          dispatch(add(last));
        
        })
        .catch((e) => {
          console.log(e);
          setdata({ stauts: "loading..." });
        });
    }

    if (divData.method == "delete" && isHistory == false) {
      axios
        .delete(divData.url)
        .then((data) => {
          // console.log("oooooooooo  ",data.data);
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };

          setdata(formData);
          const last = {
            divData: divData,
            data: data,
          };
      console.log("dispatch",data);
          dispatch(add(last));
        })
        .catch((e) => {
          console.log(e);
          setdata({ stauts: "loading..." });
        });
    }

    if (divData.method == "put" && isHistory == false) {
      axios
        .put(divData.url, divData.body)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };

          setdata(formData);
          const last = {
            divData: divData,
            data: data,
          };
      console.log("dispatch",data);
          dispatch(add(last));
        })
        .catch((e) => {
          console.log(e);
          setdata({ stauts: "loading..." });
        });
    }

   
    setdivData(divData);
    // console.log(data);
    setdata(data);
  }, [divData,isHistory]);

  const callApi = (requestParams) => {
    setdivData(requestParams);
  };
  const historyHandler = (historyData) => {
    let divData1 = {
      url: historyData.url,
      method: historyData.method,
    };
    // setIsHistory(true);
    setdivData(divData1);
    console.log("hhh",historyData);
    setdata(historyData.data);
    // setIsHistory(false);
  };
 const isClicked=(props)=>{
  setIsHistory(props);
 }
  return (
    <>
      <React.Fragment>
        <Header />
        <div id="history">
          <Form handleApiCall={callApi} isClicked={isClicked}/>

          <History history={history} historyHandler={historyHandler} isClicked={isClicked}></History>
        </div>
        <div>
          <div data-testid="method">Request Method: {divData.method}</div>
          <div data-testid="urlDiv">URL: {divData.url}</div>
        </div>

        <Results data={data}></Results>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;