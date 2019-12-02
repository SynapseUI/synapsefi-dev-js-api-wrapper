const { expect } = require('chai');

const urlBuilders = require('../../src/helpers/urlBuilders');

describe('url builders', () => {
  it('replacePathParams', () => {
    const outputUrl = urlBuilders.replacePathParams({
      originalUrl: 'origianlUrl/:user_id/:node_id/:trans_id',
      user_id: 'USER_ID',
      node_id: 'NODE_ID',
      trans_id: 'TRANS_ID',
    });

    expect(outputUrl).to.equal('origianlUrl/USER_ID/NODE_ID/TRANS_ID');
  });

  it('replacePathParams with both full dehydrate and force refresh', () => {
    const outputUrl = urlBuilders.replacePathParams({
      originalUrl: 'origianlUrl/:user_id/:node_id/:trans_id',
      user_id: 'USER_ID',
      node_id: 'NODE_ID',
      trans_id: 'TRANS_ID',
      full_dehydrate: true,
      force_refresh: true
    });

    expect(outputUrl).to.equal('origianlUrl/USER_ID/NODE_ID/TRANS_ID?full_dehydrate=yes&force_refresh=yes');
  });

  it('replacePathParams with just full dehydrate', () => {
    const outputUrl = urlBuilders.replacePathParams({
      originalUrl: 'origianlUrl/:user_id/:node_id/:trans_id',
      user_id: 'USER_ID',
      node_id: 'NODE_ID',
      trans_id: 'TRANS_ID',
      full_dehydrate: true,
      force_refresh: false
    });

    expect(outputUrl).to.equal('origianlUrl/USER_ID/NODE_ID/TRANS_ID?full_dehydrate=yes');
  });
  
  it('replacePathParams with just force refresh', () => {
    const outputUrl = urlBuilders.replacePathParams({
      originalUrl: 'origianlUrl/:user_id/:node_id/:trans_id',
      user_id: 'USER_ID',
      node_id: 'NODE_ID',
      trans_id: 'TRANS_ID',
      force_refresh: true
    });

    expect(outputUrl).to.equal('origianlUrl/USER_ID/NODE_ID/TRANS_ID?force_refresh=yes');
  });

  it('addQueryParams', () => {
    const outputUrl = urlBuilders.addQueryParams({
      originalUrl: 'origianlUrl',
      query: 'sean@gmail.com',
      page: '2',
      per_page: '10',
      show_refresh_tokens: 'yes',
      full_dehydrate: 'yes',
      type: 'DEPOSIT-US',
    });

    expect(outputUrl).to.equal(
      'origianlUrl?query=sean@gmail.com&page=2&per_page=10&show_refresh_tokens=yes&full_dehydrate=yes&type=DEPOSIT-US'
    );
  });
});
