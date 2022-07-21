import React, { useState } from 'react';

import './app.scss';


import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const [data, setData] = useState(null);
const [requestParams, setRequestParams] = useState({});

class App extends React.Component {



callApi = (requestParams) => {

  const data = {
    count: 2,
    results: [
      {name: 'fake thing 1', url: 'http://fakethings.com/1'},
      {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    ],
  };
  setData(data);
  setRequestParams(requestParams);
}

render() {
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}
}

export default App;
