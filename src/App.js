import './App.css';
import Mapp from './Map';

const postMethod = () => {
  var axios = require('axios');
  var data = JSON.stringify({
    "image_info": {
      "lat": "46.283087592655484",
      "lon": "7.539040105745088",
      "image_url": "http://myimage.com"
    }
  });

  var config = {
    method: 'post',
    url: 'https://lxhdude.hevs.ch:1423/knime/rest/v4/repository/00_Users/Jerome/VineLineRecognition:execution',
    headers: {
      'accept': 'application/vnd.mason+json',
      'Authorization': 'Basic YXBpOmFwaQ==',
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const getMethod = () => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://lxhdude.hevs.ch:1423/knime/rest/v4/repository/00_Users/Jerome/VineLineRecognition:execution',
    headers: {
      'accept': 'application/vnd.mason+json',
      'Authorization': 'Basic YXBpOmFwaQ==',
      'Content-Type': 'application/json'
    }
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}


function App() {
  return (
    <div className='App'>
      <div id='leftbox'>
        <Mapp />
      </div>
      <div id='rightbox'>
        <h1>Prototype TB</h1>
        <br />
        <button onClick={postMethod}>Send to API</button>
        <button onClick={getMethod}>Receive from API</button>
      </div>
    </div>
  );
}

export default App;

