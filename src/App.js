import React from 'react'
import './App.css';
import a from './fetch';
import request from './request'

function App() {
 

  async function fetch_data(value){
 const data = await a(String(value));

return data;
  }

 return (
<h1>{fetch_data('Trending').request[0].title}</h1>

   

  );
}

export default App;
