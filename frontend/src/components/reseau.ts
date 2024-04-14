import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


export const fetchData = async () => {
  try {
      const response: AxiosResponse = await axios.get('http://127.0.0.1:5000/world');
      return response
  } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
  }
};

export const startSimulation = async (width:number, height:number) => {
  try {
      const response: AxiosResponse = await axios.post('http://127.0.0.1:5000/start', {width:width, height:height});
      return response
  } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
  }
};

// fetchData();