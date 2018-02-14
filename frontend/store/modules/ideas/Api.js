import axios from 'axios';

export default url => axios.create({
  baseURL: `http://localhost:8081${url}`,
});
