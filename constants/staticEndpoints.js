const apiReqNames = require('./apiReqNames');

// const HOST = 'https://uat-api.synapsefi.com';

const VERSION = 'v3.1';

const USERS = 'users';

const USER_ID = ':user_id';

const fullEndpointForUserId = `/${VERSION}/${USERS}/${USER_ID}`;

module.exports = {
  //
  // USERS ------------------------------------------------------------------
  [apiReqNames.GET_USERS_DOCUMENT_TYPES]: `/${VERSION}/${USERS}/document-types`,
  [apiReqNames.GET_USERS_ENTITY_TYPES]: `/${VERSION}/${USERS}/entity-types`,
  [apiReqNames.GET_USERS_ENTITY_SCOPES]: `/${VERSION}/${USERS}/entity-scopes`,
  [apiReqNames.GET_USERS]: `/${VERSION}/${USERS}`,
  [apiReqNames.POST_CREATE_USER]: `/${VERSION}/${USERS}`,
  [apiReqNames.GET_USER]: fullEndpointForUserId,
  [apiReqNames.PATCH_ADD_DOCUMENTS]: fullEndpointForUserId,
  [apiReqNames.PATCH_UPDATE_EXISTING_DOCUMENT]: fullEndpointForUserId,
  [apiReqNames.PATCH_DELETE_EXSITING_BASE_DOC]: fullEndpointForUserId,
  [apiReqNames.PATCH_DELETE_EXSITING_SUB_DOCS]: fullEndpointForUserId,
  [apiReqNames.PATCH_UPDATE_USER]: fullEndpointForUserId,
  [apiReqNames.PATCH_HIDE_USER]: fullEndpointForUserId,
  [apiReqNames.PATCH_LOCK_USER]: fullEndpointForUserId,
  // ------------------------------------------------------------------------
  //
  // OAUTH  -----------------------------------------------------------------
  [apiReqNames.POST_OAUTH_USER]: `/${VERSION}/oauth/:user_id`,
  // ------------------------------------------------------------------------
  //
  // NODES  ////////////////////////////////////////////////////////////////////////
  //
  // ///////////////////////////////////////////////////////////////////////////////
  //
  // TRANSACTION  ------------------------------------------------------------------
  //
  // -------------------------------------------------------------------------------
  //
};
