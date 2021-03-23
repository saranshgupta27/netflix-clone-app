import request from "./request.js";
const url = "https://api.themoviedb.org/3";
let data_api = null;

function a(category) {
  fetch(`${url}${request[category]}`, { method: "GET" })
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => set_data(json));

  function set_data(json_data) {
    data_api = json_data;
    return json_data;
  }

  return data_api;
}

export default a;
