// const platformUserApiCannon = require('../testHelper/platformUserApiCannon');

// const deleteAllClientTransaction = async () => {
//   const { data } = await platformUserApiCannon.GET_ALL_CLIENT_TRANSACTIONS();

//   const transInfo = data.trans
//     .map(({ _id: trans_id, from, to, recent_status }) => {
//       const from_node_id = from.id;
//       const from_user_id = from.user._id;
//       const to_node_id = to.id;
//       const to_user_id = to.user._id;
      
//       return {
//         status: recent_status.status,
//         trans_id,
//         from_node_id,
//         from_user_id,
//         to_node_id,
//         to_user_id,
//       };
//     })
//     .filter(({ status, trans_id, from_node_id, from_user_id, to_node_id, to_user_id }) => {
//       return status !== 'CANCELED';
//     });


//   transInfo.forEach(async ({ trans_id, from_node_id, from_user_id, to_node_id, to_user_id }) => {
//     try {
//       platformUserApiCannon.user_id = from_user_id;
//       await platformUserApiCannon.GET_USER();
//       await platformUserApiCannon.POST_OAUTH_USER();

//       await platformUserApiCannon.DELETE_TRANSACTION({ node_id: from_node_id, trans_id });
//       console.log('deleted transaction:', trans_id);
//     } catch (error) {
//       console.log('error: ', error.response.data.error.en);
//     }
//   });
// };

// deleteAllClientTransaction();

// module.exports.deleteAllClientTransaction = deleteAllClientTransaction;