require('dotenv-safe').config();
const {MercadoBitcoin} = require('./api1');

const infoApi = new MercadoBitcoin({currency: 'ETH' });

setInterval(async () => {
    const response = await infoApi.balances();
    console.log(response);
    /*if(response.balances.ucana > 197000)
        return console.log('Ta caro, aguardar')
    else
        return console.log('Ta barato, comprar')*/
}, process.env.CRAWLER_INTERVAL)