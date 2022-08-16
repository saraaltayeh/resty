import React, { useState, useEffect }  from 'react';
import './app.scss';
import axios from "axios";

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results/results';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

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
    if (requestParams.method === 'post'){
      // await axios.post(requestParams.url,requestParams.request).then((response)=>{
        
      //   setData([...data,response.request])
      // })

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
      setRequestParams(requestParams)
    }
  
    return (
      <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
      </>
    );
  }

export default App;
