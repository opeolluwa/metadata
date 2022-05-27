const axios = require('axios');

axios({
    method: 'get',
    url: 'https://v1.nocodeapi.com/opeolluwa/screen/XTZmeQyHcecZCHPe/screenshot', 
    params: {url: '<url>'},
}).then(function (response) {
        // handle success
        console.log(response.data);
}).catch(function (error) {
        // handle error
        console.log(error);
})
