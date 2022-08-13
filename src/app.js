import React, { useState }  from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results/results';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
      let data = {
        header : [
          {"content-Type": 'application/json'},
        ],
        count: 2,
        results: [
          {name: 'sara', url: 'http://sara.com/'},
          {name: 'ihab', url: 'http://fakethings.com/'},
        ],
      };
      setData(data)
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
