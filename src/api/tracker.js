import axios from 'axios';

export default axios.create({
  baseURL: 'https://tracksserver.herokuapp.com/',
});
