
import axios from 'axios';
const API = "https://restcountries.eu/rest/v2/all";
export const  getData = async () =>{

  await  axios.get(API)
    .then(res => {
      const data = res.data;
      if(data){
      return data
      }
     return null
    })
}