import './App.css'
import axios from 'axios';
import {useState ,useEffect } from 'react';

function App() {

  const [message, setMessage] = useState([]);

  useEffect(() => {
      axios.get('/api/message')
      .then( (response) => {
        setMessage(response.data);
      })
      .catch( (error) => {
        console.log(error)
      })
  },[]);

  return (
    <>
      <h1>count : {message.length}</h1>
      {
        message.map((msg) => (
          <div key={msg.id}>
          <h4>{msg.job}</h4>
          </div>
        ))
      }
    </>
  )
}

export default App
