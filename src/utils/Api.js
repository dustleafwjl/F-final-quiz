import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:8080'
});
// axios.baseURL = "http://localhost:8080"

export const getAllStudent = () => {
  return http.get("/students");
}