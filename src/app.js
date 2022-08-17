import React, { useState, useEffect ,useReducer }  from 'react';
import './app.scss';
import axios from "axios";

import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/acai.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results/results';
import reducer from './components/history/history';

import Button from 'react-bootstrap/Button';

const initialState = {
  history: [],
}

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [show,setShow]=useState(false)
  const [state,dispatch]=useReducer(reducer,initialState)

  useEffect(() => {
  console.log(` test for CHANGE:method : ${requestParams.method}`);
}, [requestParams.method])

  const callApi = async (requestParams) => {

    if (requestParams.method === 'get') {
    
    await axios.get(requestParams.url).then( (response )=>{
      console.log("****",response)
      const data = {
        headers: [response.headers], results: [response.data],
      };
      setData(data)
    })
    .catch((e) => {
      console.log(e);
      setData(["loading..."])
    });
    }
    else  if (requestParams.method === 'post'){

      const addRecord = await fetch(requestParams.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestParams.body,
      });
      const body = {
        body: requestParams.body,
      }
    }
    else  if (requestParams.method === 'delete'){
      await axios.delete(requestParams.url).then((response)=>{
        let send= {
          requestParams:requestParams,
          data:[null]
        }
        dispatch(addHistory(send))
        setData("deleted successfully")
    
    })
    .catch((e) => {
      console.log(e);
      setData(["loading..."])
      
    });
  }
      setRequestParams(requestParams)
    }
    function showHistory(){
      setShow(true)
    }
    function hideHistory(){
      setShow(false)
    }
    
    return (
      <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <ul>
        <Button variant="outline-primary" onClick={showHistory}>show History</Button>{' '}

        <Button variant="outline-secondary" onClick={hideHistory}>Hide History</Button>
        <Button variant="outline-warning" onClick={() => dispatch(emptyHistory())}>Clear History</Button>
        
        { show &&
        state.history.map((history, idx) => {
        console.log(history.data,"1212121211")
        return (
        <>
        <li  key={idx} >{history.requestParams.method}</li>
        <li  >{history.requestParams.url}</li>
        {history.data.map((e)=>{
        console.log(e,"*****")
        return ( 
        <li  >{e?JSON.stringify(e.results):"null"}</li>
        )
})}                    
      </>
      )
      })
      }
      </ul>      
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
      </>
    );
  }

export default App;


// import React, { useState, useEffect,useReducer } from "react";
// // import axios from "axios";

// import "./app.scss";

// // Let's talk about using index.js and some other name in the component folder
// // There's pros and cons for each way of doing this ...
// import Header from "./components/header/index";
// import Footer from "./components/footer/index";
// import Form from "./components/form/index";
// import Results from "./components/results/results";
// import History from "./components/history/history";
// import axios from "axios";
// import historyReducer,{add} from "./reducer"
// const first=[{
//   url:"",
//   method:"",
//   result:[]
// }]
// function App() {
//   const [history,dispatch]=useReducer(historyReducer,first)
//   const [data, setdata] = useState({
//     response: "  ",
//   });
//   const [divData, setdivData] = useState({
//     method: "",
//     // url: "",
//   });
//    const callHistory=(divData,data)=>{

//  }
//   useEffect(() => {
//     // console.log("hi");
//     // setdata(x(divData));
//     ///////////get////////////////////
//     if (divData.method == "get") {
//       axios
//         .get(divData.url)
//         .then((data) => {
//           const formData = {
//             header: data.headers,
//             count: data.data.length,
//             data: data.data,
//           };

//           setdata(formData);
//         })
//         .catch((e) => {
//           console.log(e);
//           setdata({stauts:"loading..."})
//         });
//     }
//     //////////////post//////////////////////
//      if (divData.method == "post") {
//       axios
//         .post(divData.url, divData.body)
//         .then(function (data) {
//           const formData = {
//             header: data.headers,
//             count: 1,
//             data: data.data,
//           };

//           setdata(formData);
//         })
//         .catch((e) => {
//           console.log(e);
//           setdata({stauts:"loading..."})
//         });
//     }
//      ///////////////////////delete///////////////////
   
//      if (divData.method == "delete") {
//       axios
//         .delete(divData.url)
//         .then((data) => {
//           // console.log("oooooooooo  ",data.data);
//           const formData = {
//             header: data.headers,
//             count: 1,
//             data: data.data,
//           };

//           setdata(formData);
//         })
//         .catch((e) => {
//           console.log(e);
//           setdata({stauts:"loading..."})
//         });
//     }
//     ///////////////////put//////////////////
//     if (divData.method == "put") {
//       axios
//         .put(divData.url, divData.body)
//         .then((data) => {
//           const formData = {
//             header: data.headers,
//             count: 1,
//             data: data.data,
//           };

//           setdata(formData);
//         })
//         .catch((e) => {
//           console.log(e);
//           setdata({stauts:"loading..."})
//         });
//     }
//     const last ={
//       divData:divData,
//       data:data
//     }
//     dispatch(add(last));
//     // return(setdata({body:""}))
//   }, [divData]);
//   useEffect(()=>{},[divData])
// // useEffect(()=>{
// //   return(setdata({}));
// // },{})
//   const callApi = (requestParams) => {
    
//     setdivData(requestParams);
    
//     // setdata({});
//   };

//   return (
//     <>
//       <React.Fragment>
//         <Header />
//         <div id="history">
//         <Form handleApiCall={callApi} />
        
        
//         <History history={history}></History>
//         </div>
//           <div>
//         <div data-testid="method">Request Method: {divData.method}</div>
//         <div data-testid="urlDiv">URL: {divData.url}</div>
//         </div>
        
//         {<Results data={data}></Results>}
//         <Footer />
//       </React.Fragment>
//     </>
//   );
// }

// export default App;