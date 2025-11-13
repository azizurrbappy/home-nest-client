import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://home-nest-eosin.vercel.app',
});

const useAxios = () => {
  return instance;
};

export default useAxios;
