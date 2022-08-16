import React from 'react';
import './results.scss';
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';
import './results.scss';


function Results(props) {
  console.log(props)
    return (
      <section data-testid='data'>
        <pre>{props.data ? <JSONPretty data={props.data} />: "loading ..."}</pre>
      </section>
    );
  
}

export default Results;
