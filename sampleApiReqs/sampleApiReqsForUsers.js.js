const { GET_USERS, POST_CREATE_USER, GET_USER } = require('../constants/apiReqNames');
const apiRequests = require('../apiReqs/apiRequests');

const host = 'https://uat-api.synapsefi.com';
// const user_id = '5b17070501db700049a19bdc';
const oauth_key = 'oauth_AQO0t1nlM4EmeBYVaCR09gxUhL6id7csfupjX5vo';
const client_id = 'client_id_QCtyDlz7TMfeB8PxjYkagi2FL5WJ6qOKE1uAHvc3';
const client_secret = 'client_secret_vj1OLWpHEDBcZxXaKqt0mVYd2J6egyhPkAQ9fnUT';
const fingerprint = '31ee56fb53272d20d1a24381a1825e3d';
const ip_address = '127.0.0.1';

module.exports[GET_USERS] = () => {
  return apiRequests.users[GET_USERS]({
    host,
    oauth_key,
    client_id,
    client_secret,
    fingerprint,
    ip_address,
  });
};

module.exports[POST_CREATE_USER] = reqBody => {
  return apiRequests.users[POST_CREATE_USER]({
    reqBody,
    host,
    client_id,
    client_secret,
    ip_address,
    fingerprint,
  });
};

module.exports[GET_USER] = userId => {
  return apiRequests.users[GET_USER]({
    user_id: userId,
    host,
    client_id,
    client_secret,
    ip_address,
    fingerprint,
  });
};
