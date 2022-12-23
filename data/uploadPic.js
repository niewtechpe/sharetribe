const sharetribeSdk = require('sharetribe-flex-integration-sdk');

const integrationSdk = sharetribeSdk.createInstance({
  // production keys 
  clientId: '9e83d859-17f9-44cd-b709-ee94792d5874',
  clientSecret: '248b028c662c42000cbf471e84683d8570efca4d'
});

integrationSdk.images.upload({
    image: "C:/reposJuntoz/imgTest/12th-tribe-logov2.png"
  }, {
    expand: true
  }).then(res => {
    console.log(res.data);
  });