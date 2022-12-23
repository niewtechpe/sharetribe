const sharetribeIntegrationSdk = require('sharetribe-flex-integration-sdk');
const sharetribeSdk = require('sharetribe-flex-sdk');
const { UUID } = require('sharetribe-flex-integration-sdk').types;

// const sdk = sharetribeSdk.createInstance({
// });

// sdk.currentUser.create({ 
//   email: "12th-tribe@example.com",
//   password: "secret-pass",
//   firstName: "12TH TRIBE",
//   lastName: "-",
//   displayName: "12TH TRIBE",
//   bio: "",  
// }, {
//   expand: true
// }).then(res => {
//   console.log(res.data)
// });

const integrationSdk = sharetribeIntegrationSdk.createInstance ({
  // production keys 
  clientId: '9e83d859-17f9-44cd-b709-ee94792d5874',
  clientSecret: '248b028c662c42000cbf471e84683d8570efca4d'
});

integrationSdk.users.updateProfile({
  id: new UUID("63a4777b-d2bc-46f8-8bbc-7c80c27ba19c"),
  firstName: "12th tribe",
  profileImageId: new UUID("63a47ade-e3bd-4340-b626-545f3b143214"),
}, {
  expand: true,
  include: ["profileImage"]
}).then(res => {
  res.data
});