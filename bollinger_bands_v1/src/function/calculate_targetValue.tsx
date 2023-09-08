import axios from 'axios';
import 'dotenv';


const rawData = async ()=>{
    const params = {
        headers:{
            "content-type":"application/json",
            // BINANCE_API_KEY is on .env
            "apiKey":`${process.env.BINANCE_API_KEY}`
        }
    }
    //
    
    const result_api = await axios.get('https://fapi.binance.com/api/v3/ticker/price', params);
    const data='';
    return data
}

// Not using BollingerBand package
const calculate_RawData = async () => {


}
