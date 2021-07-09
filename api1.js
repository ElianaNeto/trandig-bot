const axios = require('axios');

//const ENDPOINT_API = 'http://192.168.1.11:3001/balance/17018';
const ENDPOINT_API = 'http://192.168.1.11:3001/exchange';


class MercadoBitcoin {

    constructor(config){
        this.config = {
            CURRENCY: config.currency
        }
    }

    balances() {
        return this.call('balances');
    }
 
    async call(method){

        const config = {
            headers: {
                'Accept': 'application/json'
            }
        }

        try {
            const response = await axios.get(ENDPOINT_API)
            return response.data;
        } 
        catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = {
    MercadoBitcoin
}