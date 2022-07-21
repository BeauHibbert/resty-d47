import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {

  let [method, setMethod] = useState('');
  let [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(formData);
  }

  const onChange = (e) => {
    let {name, value} = e.target;
    if (name === 'url') setUrl(value);
    if (name === 'get' && checked) setMethod(value);
    if (name === 'post' && checked) setMethod(value);
    if (name === 'put' && checked) setMethod(value);
    if (name === 'delete' && checked) setMethod(value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={onChange}/>
        </label>
        <label className="methods">
          <input type="radio" name="get" id="get" onChange={onChange}>GET</input>
          <input type="radio" name="post" id="post" onChange={onChange}>POST</input>
          <input type="radio" name="put" id="put" onChange={onChange}>PUT</input>
          <input type="radio" name="delete" id="delete" onChange={onChange}>DELETE</input>
        </label>
        <button type="submit">GO!</button>
      </form>
    </>
  )
}

export default Form;
