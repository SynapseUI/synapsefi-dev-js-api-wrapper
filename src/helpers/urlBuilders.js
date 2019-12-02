const _ = require('lodash');

module.exports.addQueryParams = ({
  originalUrl,
  mongoQuery,
  query,
  page,
  per_page,
  show_refresh_tokens,
  full_dehydrate,
  type,
}) => {
  const arr = [];

  if (mongoQuery !== undefined) {
    arr.push(`filter=${JSON.stringify(mongoQuery)}`);
  }

  if (query !== undefined) {
    arr.push(`query=${query}`);
  }

  if (page !== undefined) {
    arr.push(`page=${page}`);
  }

  if (per_page !== undefined) {
    arr.push(`per_page=${per_page}`);
  }

  if (show_refresh_tokens !== undefined) {
    arr.push(`show_refresh_tokens=${show_refresh_tokens}`);
  }

  if (full_dehydrate !== undefined) {
    arr.push(`full_dehydrate=${full_dehydrate}`);
  }

  if (type !== undefined) {
    arr.push(`type=${type}`);
  }

  if (arr.length === 0) return originalUrl;

  return originalUrl + '?' + arr.join('&');
};

module.exports.replacePathParams = ({ originalUrl, user_id, node_id, trans_id, subnet_id, full_dehydrate = false, force_refresh = false }) => {
  let copiedUrl = originalUrl;

  if (user_id !== undefined) {
    copiedUrl = _.replace(copiedUrl, ':user_id', user_id);
  }

  if (node_id !== undefined) {
    copiedUrl = _.replace(copiedUrl, ':node_id', node_id);
  }

  if (trans_id !== undefined) {
    copiedUrl = _.replace(copiedUrl, ':trans_id', trans_id);
  }

  if (subnet_id !== undefined) {
    copiedUrl = _.replace(copiedUrl, ':subnet_id', subnet_id);
  }

  if (full_dehydrate || force_refresh) {
    const bothActive = full_dehydrate && force_refresh;
    let paramString = `?${full_dehydrate ? 'full_dehydrate=yes' : ''}${bothActive ? '&' : ''}${force_refresh ? 'force_refresh=yes' : ''}`;
    copiedUrl += paramString;
  }

  return copiedUrl;
};
