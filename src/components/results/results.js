import React from 'react';
import 'react-json-pretty/themes/acai.css';
import './results.scss';

function Results(props) {
  // let body = props.data.body;
  let headers = props.headers;
  const deleted = {
    "Response": "Record deleted successfully",
  }
  return (
    <section data-testid='results'>
      <div className='content'>
        <pre className="header">
          {props.method === 'GET' ? JSON.stringify(headers, null, 2) : null}
        </pre>
        <pre className="body">
          {
            props.method === 'GET' ? <JSONPretty id='json-pretty' data={props.Response} />
              : props.method === 'POST' ? <JSONPretty id='json-pretty' data={body} /> : props.method === 'PUT' ? <JSONPretty id='json-pretty' data={body} /> : props.method === 'DELETE' ? <JSONPretty id='json-pretty' data={deleted} /> : <div className='loader'>Loading...</div>
          }
        </pre>
      </div>
    </section>
  )
  
}

export default Results;
