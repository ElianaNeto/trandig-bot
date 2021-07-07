const axios = require('axios');

const ENDPOINT_API = 'http://192.168.0.29:3001/balance/2637'; //balanco da conta
//const ENDPOINT_API = 'http://192.168.0.29:3001/exchange'; //balanco da exchange
//const ENDPOINT_TRAPI = 'http://192.168.0.29:3001/swap'; //Para o swap




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