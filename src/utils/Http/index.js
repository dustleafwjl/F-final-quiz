import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
});
// axios.baseURL = "http://localhost:8080"

export default http;
