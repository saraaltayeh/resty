import React from 'react';
import './results.scss';
import 'react-json-pretty/themes/acai.css';
import './results.scss';

function Results(props) {
  console.log(props)
    return (
      <section data-testid='data'>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
  
}

export default Results;
