require('dotenv-safe').config();
const {MercadoBitcoin} = require('./api');

const infoApi = new MercadoBitcoin({currency: 'ETH' });

setInterval(async () => {
    const response = await infoApi.ticker();
    console.log(response);
    if(response.ticker.sell > 197000)
        return console.log('Ta caro, aguardar')
    else
        return console.log('Ta barato, comprar')
}, process.env.CRAWLER_INTERVAL)