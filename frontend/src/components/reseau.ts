import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


export const fetchData = async () => {
  try {
      const response: AxiosResponse = await axios.get('http://127.0.0.1:5000/world');
      console.log(response);
      // Vous pouvez maintenant utiliser les données de la réponse ici
  } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
  }
};

fetchData();